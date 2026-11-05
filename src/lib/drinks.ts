import { draw, recipeLines, vessels, type DrawResult, type Recipe, type RecipeLine, type VesselId } from "./picture";

export interface DrinkSection {
  heading: string;
  body: string;
}

export interface DrinkLink {
  href: string;
  label: string;
}

export interface Drink {
  slug: string;
  name: string;
  h1: string;
  definition: string;
  status: "House default";
  vesselId: VesselId;
  recipe: Recipe;
  range: string;
  variant: string;
  sections: DrinkSection[];
  calculatorHref: string;
  links: DrinkLink[];
  drawingNote: string;
}

function recipe(partial: Partial<Recipe> & Pick<Recipe, "yieldG">): Recipe {
  return {
    doseG: partial.doseG ?? 0,
    yieldG: partial.yieldG,
    waterG: partial.waterG ?? 0,
    milkG: partial.milkG ?? 0,
    expansion: partial.expansion ?? 1,
    sauceG: partial.sauceG ?? 0,
    concentrateG: partial.concentrateG ?? 0,
    cremaMm: partial.cremaMm ?? 0,
    mixed: partial.mixed ?? false,
  };
}

const espressoCalc = "/calculators/espresso-ratio/?dose=18&ratio=2";

export const drinks: Drink[] = [
  {
    slug: "espresso",
    name: "Espresso",
    h1: "Espresso",
    definition: "A short, concentrated shot brewed under pressure, weighed as dose in and yield out.",
    status: "House default",
    vesselId: "demitasse",
    recipe: recipe({ doseG: 18, yieldG: 36, cremaMm: 4 }),
    range: "Dose often sits between 14 and 20 g. A common ratio band is 1:1.5 to 1:2.5. Many cafes start a 1:2 double somewhere in 25–35 seconds.",
    variant:
      "A traditional single is nearer 7 g in and about 14 g out at 1:2. This drawing is the larger specialty double.",
    sections: [
      {
        heading: "Doppio",
        body: "Doppio means a double. On a specialty menu the default espresso is already that double, so this page does not use a second URL.",
      },
    ],
    calculatorHref: espressoCalc,
    links: [{ href: "/compare/espresso-vs-americano/", label: "Espresso vs americano" }],
    drawingNote: "Crema is a fixed 4 mm cap. It is not part of the 36 g yield.",
  },
  {
    slug: "ristretto",
    name: "Ristretto",
    h1: "Ristretto",
    definition: "An espresso stopped at a shorter yield, so the same dose lands in less liquid.",
    status: "House default",
    vesselId: "demitasse",
    recipe: recipe({ doseG: 18, yieldG: 27, cremaMm: 3 }),
    range: "A common ristretto band is 1:1 to 1:1.5.",
    variant: "Shorter is more concentrated. It is not automatically sweeter.",
    sections: [],
    calculatorHref: "/calculators/espresso-ratio/?dose=18&ratio=1.5",
    links: [{ href: "/drinks/espresso/", label: "Espresso" }],
    drawingNote: "Crema is a fixed 3 mm cap on the unmixed shot.",
  },
  {
    slug: "lungo",
    name: "Lungo",
    h1: "Lungo",
    definition: "An espresso pulled to a longer yield, with no hot water added.",
    status: "House default",
    vesselId: "lungo-cup",
    recipe: recipe({ doseG: 18, yieldG: 54 }),
    range: "A common lungo band is 1:2.5 to 1:3.",
    variant: "A lungo is a long shot, not an americano. Water is not a separate ingredient.",
    sections: [],
    calculatorHref: "/calculators/espresso-ratio/?dose=18&ratio=3",
    links: [{ href: "/drinks/americano/", label: "Americano" }],
    drawingNote: "No crema cap is drawn on this longer yield.",
  },
  {
    slug: "americano",
    name: "Americano",
    h1: "Americano",
    definition: "A shot of espresso lengthened with hot water.",
    status: "House default",
    vesselId: "ceramic-8",
    recipe: recipe({ yieldG: 36, waterG: 150 }),
    range: "Water for this drink often sits between 90 and 200 g. This drawing uses 150 g, so the 240 ml cup is not full.",
    variant:
      "A long black uses the same masses with the hot water in the cup first and the espresso poured on top. That pour order is not a separate URL.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [{ href: "/compare/espresso-vs-americano/", label: "Espresso vs americano" }],
    drawingNote: "The drawing stacks the shot under the water so both masses stay visible. In the cup they mix.",
  },
  {
    slug: "cortado",
    name: "Cortado",
    h1: "Cortado",
    definition: "A small Gibraltar-glass drink of espresso and lightly steamed milk.",
    status: "House default",
    vesselId: "gibraltar",
    recipe: recipe({ yieldG: 36, milkG: 80, expansion: 1.1 }),
    range: "In this glass the milk often sits between 60 and 90 g.",
    variant:
      "In Spain the name means coffee cut with a little milk, often 20–30 g. That is not the same drink as this Gibraltar glass, and it is not the drawing.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [
      { href: "/compare/cortado-vs-flat-white/", label: "Cortado vs flat white" },
      { href: "/compare/macchiato-vs-cortado/", label: "Macchiato vs cortado" },
      { href: "/drinks/cappuccino/", label: "Cappuccino" },
    ],
    drawingNote: "Whole milk at 1.03 g/ml. Aeration 1.10 is a house drawing constant.",
  },
  {
    slug: "flat-white",
    name: "Flat white",
    h1: "Flat white",
    definition: "Espresso and lightly steamed milk in a 180 ml cup.",
    status: "House default",
    vesselId: "ceramic-6",
    recipe: recipe({ yieldG: 36, milkG: 125, expansion: 1.15 }),
    range: "In a 160–180 ml cup the milk often sits between 110 and 140 g.",
    variant:
      "A ristretto-based flat white uses a 27 g yield and the same 125 g of milk. A US cafe often uses a larger cup. Neither replaces this drawing.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [
      { href: "/compare/flat-white-vs-latte/", label: "Flat white vs latte" },
      { href: "/compare/cortado-vs-flat-white/", label: "Cortado vs flat white" },
    ],
    drawingNote: "Foam height is computed from the milk mass and aeration. It is not typed in as a second recipe.",
  },
  {
    slug: "cappuccino",
    name: "Cappuccino",
    h1: "Cappuccino",
    definition: "Espresso and milk steamed with more air, in the same 180 ml cup as the flat white.",
    status: "House default",
    vesselId: "ceramic-6",
    recipe: recipe({ yieldG: 36, milkG: 100, expansion: 1.45 }),
    range: "Aeration for this house recipe sits around 1.30 to 1.60.",
    variant:
      "Many current cafes serve less foam than the textbook thirds. This page does not claim an Italian legal definition.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [{ href: "/compare/cappuccino-vs-latte/", label: "Cappuccino vs latte" }],
    drawingNote: "The extra foam comes from aeration 1.45 on 100 g of milk, not from a heavier milk pour.",
  },
  {
    slug: "latte",
    name: "Caffe latte",
    h1: "Caffe latte",
    definition: "Espresso with more steamed milk than a flat white, in a 240 ml cup.",
    status: "House default",
    vesselId: "ceramic-8",
    recipe: recipe({ yieldG: 36, milkG: 180, expansion: 1.15 }),
    range: "US cafes often serve this drink in a 240–360 ml cup. This drawing stops at 240 ml.",
    variant: "An Italian breakfast latte is a different, milkier drink. This page is the cafe latte.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [
      { href: "/compare/flat-white-vs-latte/", label: "Flat white vs latte" },
      { href: "/compare/cappuccino-vs-latte/", label: "Cappuccino vs latte" },
    ],
    drawingNote: "Same aeration as the flat white. The cup is larger and the milk mass is higher.",
  },
  {
    slug: "macchiato",
    name: "Espresso macchiato",
    h1: "Espresso macchiato",
    definition: "An espresso marked with a small amount of steamed milk and foam.",
    status: "House default",
    vesselId: "demitasse",
    recipe: recipe({ yieldG: 36, milkG: 15, expansion: 1.4 }),
    range: "The milk mark is often 10–20 g.",
    variant:
      "A caramel macchiato from a large chain is espresso, vanilla, steamed milk, and caramel drizzle in a large cup. That is a different drink, and it is not drawn here.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [{ href: "/compare/macchiato-vs-cortado/", label: "Macchiato vs cortado" }],
    drawingNote: "The milk sits on the shot as a mark, not as a full milk drink.",
  },
  {
    slug: "mocha",
    name: "Mocha",
    h1: "Mocha",
    definition: "Espresso, chocolate sauce, and steamed milk in a 240 ml cup.",
    status: "House default",
    vesselId: "ceramic-8",
    recipe: recipe({ yieldG: 36, sauceG: 20, milkG: 165, expansion: 1.15 }),
    range: "Sauce often sits between 15 and 30 g.",
    variant: "The sauce mass includes sugar. This page stops at the grams.",
    sections: [],
    calculatorHref: espressoCalc,
    links: [{ href: "/drinks/latte/", label: "Caffe latte" }],
    drawingNote: "Sauce is drawn at 1.20 g/ml, a house constant, under the espresso.",
  },
  {
    slug: "cold-brew",
    name: "Cold brew",
    h1: "Cold brew",
    definition: "Coffee grounds steeped in cold water, then diluted for this glass.",
    status: "House default",
    vesselId: "tumbler",
    recipe: recipe({ yieldG: 0, concentrateG: 150, waterG: 150, mixed: true }),
    range: "Concentrate ratios often sit between 1:4 and 1:8. A fridge steep of 12–16 hours is a common start.",
    variant: "This page does not invent an espresso shot. Other ratios belong on the cold-brew calculator.",
    sections: [],
    calculatorHref: "/calculators/cold-brew-ratio/?coffee=100&ratio=5&retention=2&mode=concentrate",
    links: [],
    drawingNote:
      "The glass is one mixed body: 150 g of concentrate from the 1:5 calculator test, plus 150 g of water. The two masses are listed beside the picture.",
  },
];

export function getDrink(slug: string): Drink | undefined {
  return drinks.find((drink) => drink.slug === slug);
}

export function presentDrink(drink: Drink): { result: DrawResult; lines: RecipeLine[] } {
  const vessel = vessels[drink.vesselId];
  const result = draw(drink.recipe, vessel);
  if (!result.fits) {
    throw new Error(`${drink.slug} draws ${result.drawnMl.toFixed(2)} ml into a ${vessel.capacityMl} ml cup`);
  }
  return { result, lines: recipeLines(drink.recipe, vessel, result) };
}

for (const drink of drinks) presentDrink(drink);
