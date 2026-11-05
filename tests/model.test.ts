import { describe, expect, it } from "vitest";
import {
  SCA_CENTER,
  computeColdBrew,
  computeRatio,
  computeYield,
  parseRatioQuery,
} from "../src/lib/calculators";
import { drinks, presentDrink } from "../src/lib/drinks";
import { round1 } from "../src/lib/format";
import { draw, vessels } from "../src/lib/picture";

describe("coffee to water", () => {
  it("uses the SCA center for 500 g of water", () => {
    const result = computeRatio({ mode: "water", waterG: 500, coffeeG: 0, ratio: SCA_CENTER });
    expect(result.coffeeG).toBe(27.5);
    expect(result.bloomG).toBe(55);
    expect(result.waterG).toBe(500);
  });

  it("keeps 1:16 as a shop preset with a true double bloom", () => {
    const result = computeRatio({ mode: "water", waterG: 500, coffeeG: 0, ratio: 16 });
    expect(result.coffeeG).toBe(31.3);
    expect(result.bloomG).toBe(62.5);
  });

  it("computes water from coffee", () => {
    const result = computeRatio({ mode: "coffee", coffeeG: 30, waterG: 0, ratio: 16 });
    expect(result.waterG).toBe(480);
    expect(result.bloomG).toBe(60);
  });

  it("turns 55 g at the SCA center into 1000 g of water", () => {
    const result = computeRatio({ mode: "coffee", coffeeG: 55, waterG: 0, ratio: SCA_CENTER });
    expect(result.waterG).toBe(1000);
  });

  it("lets coffee win when both query masses are present", () => {
    const parsed = parseRatioQuery(new URLSearchParams("coffee=30&water=500&ratio=16"));
    expect(parsed.mode).toBe("coffee");
    expect(computeRatio(parsed).waterG).toBe(480);
  });
});

describe("espresso yield", () => {
  it("locks the four yield vectors", () => {
    expect(computeYield(18, 2)).toBe(36);
    expect(computeYield(18, 1.5)).toBe(27);
    expect(computeYield(18, 3)).toBe(54);
    expect(computeYield(7, 2)).toBe(14);
  });
});

describe("cold brew", () => {
  it("subtracts water held by the grounds", () => {
    const result = computeColdBrew({ mode: "concentrate", coffeeG: 100, ratio: 5, retentionPerG: 2 });
    expect(result.waterG).toBe(500);
    expect(result.brewedYieldG).toBe(300);
    expect(result.dilutionWaterG).toBe(300);
    expect(result.ok).toBe(true);
  });

  it("refuses a serve when retention drinks the pot", () => {
    const result = computeColdBrew({ mode: "concentrate", coffeeG: 100, ratio: 5, retentionPerG: 6 });
    expect(result.ok).toBe(false);
  });
});

describe("picture model", () => {
  it("fits every house default and matches the published foam captions", () => {
    const expected: Record<string, { drawn: number; foam?: number }> = {
      espresso: { drawn: 36 },
      ristretto: { drawn: 27 },
      lungo: { drawn: 54 },
      americano: { drawn: 186 },
      cortado: { drawn: 121.4, foam: 0.3 },
      "flat-white": { drawn: 175.6, foam: 0.6 },
      cappuccino: { drawn: 176.8, foam: 1.4 },
      latte: { drawn: 237, foam: 0.7 },
      macchiato: { drawn: 56.4, foam: 0.3 },
      mocha: { drawn: 236.9, foam: 0.6 },
      "cold-brew": { drawn: 300 },
    };
    for (const drink of drinks) {
      const { result } = presentDrink(drink);
      const want = expected[drink.slug];
      expect(result.fits, drink.slug).toBe(true);
      expect(round1(result.drawnMl), drink.slug).toBe(want?.drawn);
      if (want?.foam !== undefined) expect(round1(result.foamCm), drink.slug).toBe(want.foam);
    }
  });

  it("fails the build rule when a recipe overflows the cup", () => {
    const result = draw(
      {
        doseG: 18,
        yieldG: 36,
        waterG: 0,
        milkG: 200,
        expansion: 1.5,
        sauceG: 0,
        concentrateG: 0,
        cremaMm: 0,
        mixed: false,
      },
      vessels.demitasse,
    );
    expect(result.fits).toBe(false);
  });
});

describe("caffeine pharmacokinetics", () => {
  it("computes peak and exponential half-life decay", async () => {
    const { singleIntakeAtTime, evaluateSleepQuality, generateCaffeineSvgPath } = await import(
      "../src/lib/caffeine"
    );

    // Peak at 45 mins (0.75 hrs) after 8.0 -> hour 8.75
    const peak = singleIntakeAtTime(140, 8.0, 8.75, 5.0);
    expect(Math.round(peak)).toBe(140);

    // 5 hours after peak -> hour 13.75
    const half = singleIntakeAtTime(140, 8.0, 13.75, 5.0);
    expect(Math.round(half)).toBe(70);

    // 10 hours after peak -> hour 18.75
    const quarter = singleIntakeAtTime(140, 8.0, 18.75, 5.0);
    expect(Math.round(quarter)).toBe(35);

    // Sleep quality thresholds
    expect(evaluateSleepQuality(30).level).toBe("protected");
    expect(evaluateSleepQuality(75).level).toBe("warning");
    expect(evaluateSleepQuality(120).level).toBe("alert");

    // SVG wave path
    const path = generateCaffeineSvgPath([{ doseMg: 140, intakeHour: 8.0 }], 5.0, 600, 200);
    expect(path.startsWith("M")).toBe(true);
    expect(path.endsWith("Z")).toBe(true);
  });
});
