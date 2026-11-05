import { grams, ratioLabel, round1 } from "./format";

export const SCA_CENTER = 1000 / 55;
export const SCA_STRONG_EDGE = 1000 / 60;
export const SCA_LIGHT_EDGE = 1000 / 50;

export interface RatioPreset {
  id: string;
  label: string;
  ratio: number;
  note: string;
  sca: boolean;
}

export const RATIO_PRESETS: RatioPreset[] = [
  { id: "strong", label: "Strong 1:15", ratio: 15, note: "Stronger than the SCA band.", sca: false },
  { id: "common", label: "Common pour-over 1:16", ratio: 16, note: "Just stronger than the 60 g/L edge. Not an SCA preset.", sca: false },
  { id: "sca-strong", label: "SCA strong edge 1:16.7", ratio: SCA_STRONG_EDGE, note: "60 g per litre, at the strong edge of the golden-cup band.", sca: true },
  { id: "sca", label: "SCA center 1:18.2", ratio: SCA_CENTER, note: "55 g per litre. This is the default.", sca: true },
  { id: "sca-light", label: "SCA light edge 1:20", ratio: SCA_LIGHT_EDGE, note: "50 g per litre, at the light edge of the golden-cup band.", sca: true },
];

export interface MethodNote {
  id: string;
  label: string;
  ratio: number;
  instruction: string;
}

export const METHOD_NOTES: MethodNote[] = [
  { id: "v60", label: "V60", ratio: 16, instruction: "Bloom is 2× the coffee dose for 45 seconds." },
  { id: "french-press", label: "French press", ratio: 15, instruction: "Coarse grind, about 4 minutes." },
  { id: "chemex", label: "Chemex", ratio: 17, instruction: "Bloom is 2× the coffee dose for 45 seconds." },
];

export interface RatioInput {
  mode: "water" | "coffee";
  waterG: number;
  coffeeG: number;
  ratio: number;
}

export interface RatioResult {
  coffeeG: number;
  waterG: number;
  bloomG: number;
  ratio: number;
  sentence: string;
}

export function computeRatio(input: RatioInput): RatioResult {
  const ratio = input.ratio;
  const coffeeG = input.mode === "coffee" ? input.coffeeG : input.waterG / ratio;
  const waterG = input.mode === "coffee" ? input.coffeeG * ratio : input.waterG;
  const bloomG = coffeeG * 2;
  const sentence = `${grams(coffeeG)} coffee, ${grams(waterG)} water, bloom ${grams(bloomG)} at ${ratioLabel(ratio)}. Bloom is part of the water.`;
  return { coffeeG: round1(coffeeG), waterG: round1(waterG), bloomG: round1(bloomG), ratio, sentence };
}

export function computeYield(doseG: number, ratio: number): number {
  return round1(doseG * ratio);
}

export interface ColdBrewInput {
  mode: "concentrate" | "rtd";
  coffeeG: number;
  ratio: number;
  retentionPerG: number;
}

export interface ColdBrewResult {
  waterG: number;
  brewedYieldG: number;
  heldG: number;
  dilutionWaterG: number;
  ok: boolean;
  sentence: string;
}

export function computeColdBrew(input: ColdBrewInput): ColdBrewResult {
  const waterG = round1(input.coffeeG * input.ratio);
  const heldG = round1(input.retentionPerG * input.coffeeG);
  const brewedYieldG = round1(waterG - heldG);
  const ok = brewedYieldG > 0;
  const dilutionWaterG = input.mode === "concentrate" && ok ? brewedYieldG : 0;
  const sentence = ok
    ? input.mode === "concentrate"
      ? `${grams(brewedYieldG)} comes off the grounds. A 1:1 serve adds ${grams(dilutionWaterG)} of water to that concentrate, not to the brew water.`
      : `${grams(brewedYieldG)} of ready-to-drink coffee comes off the grounds. No second dilution step.`
    : "The grounds would hold all of the water at this retention. Raise the water or lower the retention. No serve suggestion.";
  return { waterG, brewedYieldG, heldG, dilutionWaterG, ok, sentence };
}

function clamp(value: number, min: number, max: number, fallback: number): number {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

export function parseRatioQuery(params: URLSearchParams): RatioInput {
  const rawRatio = params.get("ratio");
  const ratio =
    rawRatio === null || rawRatio === "" ? SCA_CENTER : clamp(Number(rawRatio), 10, 22, SCA_CENTER);
  const coffee = params.get("coffee");
  if (coffee !== null && coffee !== "") {
    return { mode: "coffee", coffeeG: clamp(Number(coffee), 10, 80, 30), waterG: 0, ratio };
  }
  const water = params.get("water");
  return {
    mode: "water",
    waterG: clamp(water === null || water === "" ? 500 : Number(water), 100, 1500, 500),
    coffeeG: 0,
    ratio,
  };
}

export function parseEspressoQuery(params: URLSearchParams): { doseG: number; ratio: number } {
  return {
    doseG: clamp(Number(params.get("dose") ?? 18), 7, 22, 18),
    ratio: clamp(Number(params.get("ratio") ?? 2), 1, 3, 2),
  };
}

export function parseColdBrewQuery(params: URLSearchParams): ColdBrewInput {
  const mode = params.get("mode") === "rtd" ? "rtd" : "concentrate";
  const fallbackRatio = mode === "rtd" ? 12 : 5;
  return {
    mode,
    coffeeG: clamp(Number(params.get("coffee") ?? 100), 20, 200, 100),
    ratio: clamp(Number(params.get("ratio") ?? fallbackRatio), 3, 16, fallbackRatio),
    retentionPerG: clamp(Number(params.get("retention") ?? 2), 0, 4, 2),
  };
}

export const TIME_SENTENCE = "A common starting point for a 1:2 double is 25–35 seconds.";

export const SCA_SENTENCE =
  "The Specialty Coffee Association golden cup is 55 g of coffee per 1 L of water, plus or minus 10%.";
