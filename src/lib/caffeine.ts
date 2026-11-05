export interface CaffeinePreset {
  id: string;
  name: string;
  doseMg: number;
  serving: string;
}

export const CAFFEINE_PRESETS: CaffeinePreset[] = [
  { id: "double-espresso", name: "Double Espresso", doseMg: 140, serving: "40 mL (1.5 oz)" },
  { id: "single-espresso", name: "Single Espresso", doseMg: 65, serving: "25 mL (1 oz)" },
  { id: "drip-mug", name: "Drip Coffee Mug", doseMg: 165, serving: "350 mL (12 oz)" },
  { id: "pour-over", name: "Pour Over (V60/Chemex)", doseMg: 150, serving: "300 mL (10 oz)" },
  { id: "cold-brew", name: "Cold Brew", doseMg: 210, serving: "450 mL (16 oz)" },
  { id: "decaf", name: "Decaf Coffee", doseMg: 4, serving: "250 mL (8 oz)" },
];

export interface MetabolismProfile {
  id: string;
  label: string;
  halfLifeHours: number;
  description: string;
}

export const METABOLISM_PROFILES: MetabolismProfile[] = [
  {
    id: "average",
    label: "Average Adult (5.0 hrs)",
    halfLifeHours: 5.0,
    description: "Standard biological clearance rate for most healthy adults.",
  },
  {
    id: "fast",
    label: "Fast Metabolizer (3.5 hrs)",
    halfLifeHours: 3.5,
    description: "Smokers or individuals with the rapid CYP1A2 1A/1A gene phenotype.",
  },
  {
    id: "contraceptive",
    label: "Oral Contraceptives (7.5 hrs)",
    halfLifeHours: 7.5,
    description: "Estrogen-containing birth control pills prolong enzyme clearance.",
  },
  {
    id: "pregnancy",
    label: "Pregnancy 3rd Tri (11.0 hrs)",
    halfLifeHours: 11.0,
    description: "Maternal liver prioritizes fetal development, substantially extending half-life.",
  },
];

export interface IntakeEvent {
  doseMg: number;
  intakeHour: number; // 0.0 to 24.0 (e.g. 8.5 for 8:30 AM)
}

/**
 * Calculates active caffeine in bloodstream at any target hour t given an intake at intakeHour
 */
export function singleIntakeAtTime(
  doseMg: number,
  intakeHour: number,
  targetHour: number,
  halfLifeHours: number,
): number {
  if (targetHour < intakeHour) return 0;
  const elapsed = targetHour - intakeHour;

  // 45-minute (0.75 hour) absorption S-curve phase
  if (elapsed <= 0.75) {
    const progress = elapsed / 0.75;
    // Logistic-like ease out to peak
    return doseMg * Math.sin((progress * Math.PI) / 2);
  }

  // First-order elimination phase
  const eliminationElapsed = elapsed - 0.75;
  return doseMg * Math.pow(0.5, eliminationElapsed / halfLifeHours);
}

export function totalCaffeineAtTime(
  intakes: IntakeEvent[],
  targetHour: number,
  halfLifeHours: number,
): number {
  return intakes.reduce(
    (sum, event) => sum + singleIntakeAtTime(event.doseMg, event.intakeHour, targetHour, halfLifeHours),
    0,
  );
}

export interface SleepVerdict {
  level: "protected" | "warning" | "alert";
  title: string;
  description: string;
}

export function evaluateSleepQuality(residualMg: number): SleepVerdict {
  if (residualMg < 50) {
    return {
      level: "protected",
      title: "✦ DEEP REM SLEEP PROTECTED ✦",
      description: "Under the 50 mg clinical sleep threshold. Negligible sleep latency and healthy restorative deep slow-wave sleep.",
    };
  }
  if (residualMg <= 100) {
    return {
      level: "warning",
      title: "✦ FRAGMENTED SLEEP WARNING ✦",
      description: "Between 50 mg and 100 mg. You may fall asleep, but REM sleep latency is delayed by ~25 minutes with potential micro-awakenings.",
    };
  }
  return {
    level: "alert",
    title: "✦ SEVERE SLEEP DISRUPTION ALERT ✦",
    description: "Above 100 mg. High cardiovascular arousal; delayed sleep onset by 40+ minutes and suppression of restorative delta sleep.",
  };
}

export function formatClockTime(decimalHour: number): string {
  const norm = ((decimalHour % 24) + 24) % 24;
  const hours = Math.floor(norm);
  const minutes = Math.round((norm - hours) * 60);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  const displayMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${displayHour}:${displayMin} ${period}`;
}

/**
 * Generates an SVG path string for a 24-hour caffeine clearance wave
 */
export function generateCaffeineSvgPath(
  intakes: IntakeEvent[],
  halfLifeHours: number,
  width: number,
  height: number,
  maxScaleMg: number = 250,
): string {
  const startHour = 6.0; // 6:00 AM
  const totalHours = 24.0;
  const points: { x: number; y: number }[] = [];

  const steps = 48; // every 30 minutes
  for (let i = 0; i <= steps; i++) {
    const t = startHour + (i / steps) * totalHours;
    const mg = totalCaffeineAtTime(intakes, t, halfLifeHours);
    const x = (i / steps) * width;
    const clampedMg = Math.min(maxScaleMg, Math.max(0, mg));
    const y = height - (clampedMg / maxScaleMg) * (height - 20) - 10;
    points.push({ x, y });
  }

  if (points.length === 0) return `M 0 ${height} L ${width} ${height}`;

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`;
  }

  // Close path along the bottom
  const fillPath = `${d} L ${width} ${height} L 0 ${height} Z`;
  return fillPath;
}
