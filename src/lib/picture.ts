import { expansionLabel, flOz, round1 } from "./format";

export const MILK_G_PER_ML = 1.03;
export const SAUCE_G_PER_ML = 1.2;
export const PX_PER_ML = 0.72;

export interface Vessel {
  id: string;
  label: string;
  capacityMl: number;
  rimAreaCm2: number;
}

export type VesselId = "demitasse" | "lungo-cup" | "gibraltar" | "ceramic-6" | "ceramic-8" | "tumbler";

export const vessels: Record<VesselId, Vessel> = {
  demitasse: { id: "demitasse", label: "demitasse", capacityMl: 60, rimAreaCm2: 18 },
  "lungo-cup": { id: "lungo-cup", label: "lungo cup", capacityMl: 90, rimAreaCm2: 22 },
  gibraltar: { id: "gibraltar", label: "Gibraltar glass", capacityMl: 133, rimAreaCm2: 28 },
  "ceramic-6": { id: "ceramic-6", label: "cup", capacityMl: 180, rimAreaCm2: 32 },
  "ceramic-8": { id: "ceramic-8", label: "cup", capacityMl: 240, rimAreaCm2: 38 },
  tumbler: { id: "tumbler", label: "tumbler", capacityMl: 300, rimAreaCm2: 45 },
};

export interface Recipe {
  doseG: number;
  yieldG: number;
  waterG: number;
  milkG: number;
  expansion: number;
  sauceG: number;
  concentrateG: number;
  cremaMm: number;
  /** Cold brew is served mixed, so the glass is one body. */
  mixed: boolean;
}

export type LayerKind = "sauce" | "espresso" | "water" | "milk" | "foam" | "crema" | "coldbrew";

export interface DrawResult {
  fits: boolean;
  drawnMl: number;
  foamMl: number;
  foamCm: number;
  espressoMl: number;
  waterMl: number;
  sauceMl: number;
  concentrateMl: number;
  steamedMilkMl: number;
  liquidMilkMl: number;
  layers: { kind: LayerKind; ml: number }[];
  cremaMm: number;
  capacityMl: number;
  flOz: string;
}

export function draw(recipe: Recipe, vessel: Vessel): DrawResult {
  const espressoMl = recipe.yieldG;
  const waterMl = recipe.waterG;
  const sauceMl = recipe.sauceG / SAUCE_G_PER_ML;
  const concentrateMl = recipe.concentrateG;
  const liquidMilkMl = recipe.milkG / MILK_G_PER_ML;
  const steamedMilkMl = recipe.milkG > 0 ? liquidMilkMl * recipe.expansion : 0;
  const foamMl = recipe.milkG > 0 ? steamedMilkMl - liquidMilkMl : 0;
  const milkMl = recipe.milkG > 0 ? liquidMilkMl : 0;
  const drawnMl = espressoMl + waterMl + sauceMl + concentrateMl + steamedMilkMl;
  const showCrema = recipe.cremaMm > 0 && recipe.milkG === 0 && recipe.waterG === 0 && recipe.sauceG === 0 && recipe.concentrateG === 0;

  const layers: { kind: LayerKind; ml: number }[] = [];
  if (recipe.mixed) {
    const mixedMl = concentrateMl + waterMl + espressoMl;
    if (mixedMl > 0) layers.push({ kind: "coldbrew", ml: mixedMl });
  } else {
    if (sauceMl > 0) layers.push({ kind: "sauce", ml: sauceMl });
    if (espressoMl > 0) layers.push({ kind: "espresso", ml: espressoMl });
    if (concentrateMl > 0) layers.push({ kind: "espresso", ml: concentrateMl });
    if (waterMl > 0) layers.push({ kind: "water", ml: waterMl });
    if (milkMl > 0) layers.push({ kind: "milk", ml: milkMl });
    if (foamMl > 0.05) layers.push({ kind: "foam", ml: foamMl });
  }
  if (showCrema) layers.push({ kind: "crema", ml: 0 });

  return {
    fits: drawnMl <= vessel.capacityMl + 1e-6,
    drawnMl,
    foamMl,
    foamCm: vessel.rimAreaCm2 === 0 ? 0 : foamMl / vessel.rimAreaCm2,
    espressoMl,
    waterMl,
    sauceMl,
    concentrateMl,
    steamedMilkMl,
    liquidMilkMl,
    layers,
    cremaMm: showCrema ? recipe.cremaMm : 0,
    capacityMl: vessel.capacityMl,
    flOz: flOz(vessel.capacityMl),
  };
}

export interface RecipeLine {
  term: string;
  detail: string;
}

export function recipeLines(recipe: Recipe, vessel: Vessel, result: DrawResult): RecipeLine[] {
  const lines: RecipeLine[] = [];
  if (recipe.doseG > 0) lines.push({ term: "Dose", detail: `${round1(recipe.doseG).toFixed(1)} g coffee in` });
  if (recipe.yieldG > 0) lines.push({ term: "Espresso yield", detail: `${round1(recipe.yieldG).toFixed(1)} g` });
  if (recipe.concentrateG > 0) lines.push({ term: "Concentrate", detail: `${round1(recipe.concentrateG).toFixed(1)} g` });
  if (recipe.waterG > 0) lines.push({ term: "Water", detail: `${round1(recipe.waterG).toFixed(1)} g` });
  if (recipe.sauceG > 0) lines.push({ term: "Chocolate sauce", detail: `${round1(recipe.sauceG).toFixed(1)} g, sugar included` });
  if (recipe.milkG > 0) {
    lines.push({ term: "Milk weighed", detail: `${round1(recipe.milkG).toFixed(1)} g whole milk` });
    lines.push({
      term: "Aeration",
      detail: `Steamed milk volume is ${expansionLabel(recipe.expansion)}× the milk you weighed.`,
    });
    lines.push({ term: "Foam", detail: `About ${round1(result.foamCm).toFixed(1)} cm` });
  }
  lines.push({
    term: "Cup",
    detail: `${vessel.capacityMl} ml (${result.flOz} fl oz) ${vessel.label}`,
  });
  return lines;
}

export function cupLabel(name: string, recipe: Recipe, vessel: Vessel, result: DrawResult): string {
  const parts = [`${name} in a ${vessel.capacityMl} ml ${vessel.label}`];
  if (recipe.yieldG > 0) parts.push(`${round1(recipe.yieldG).toFixed(1)} g espresso`);
  if (recipe.concentrateG > 0) parts.push(`${round1(recipe.concentrateG).toFixed(1)} g concentrate`);
  if (recipe.waterG > 0) parts.push(`${round1(recipe.waterG).toFixed(1)} g water`);
  if (recipe.milkG > 0) parts.push(`${round1(recipe.milkG).toFixed(1)} g milk`);
  if (recipe.sauceG > 0) parts.push(`${round1(recipe.sauceG).toFixed(1)} g chocolate sauce`);
  if (result.cremaMm > 0) parts.push(`${result.cremaMm} mm crema`);
  if (recipe.mixed) parts.push("mixed");
  return `${parts.join(", ")}.`;
}
