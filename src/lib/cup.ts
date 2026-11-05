import { PX_PER_ML, vessels, type DrawResult, type LayerKind, type Vessel } from "./picture";

const FILL: Record<LayerKind, string> = {
  sauce: "#24150e",
  espresso: "#362013",
  water: "#dce8f0",
  milk: "#efe8dd",
  foam: "#ffffff",
  crema: "#d49a58",
  coldbrew: "#4a3326",
};

function esc(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function widthAt(yFromBottom: number, innerH: number, bottomW: number, topW: number): number {
  if (innerH <= 0) return bottomW;
  const t = Math.min(1, Math.max(0, yFromBottom / innerH));
  return bottomW + (topW - bottomW) * t;
}

function trap(
  y0: number,
  y1: number,
  yBottom: number,
  innerH: number,
  bottomW: number,
  topW: number,
  cx: number,
): string {
  const w0 = widthAt(y0, innerH, bottomW, topW);
  const w1 = widthAt(y1, innerH, bottomW, topW);
  const yb = yBottom - y0;
  const yt = yBottom - y1;
  return `M ${cx - w0 / 2} ${yb} L ${cx + w0 / 2} ${yb} L ${cx + w1 / 2} ${yt} L ${cx - w1 / 2} ${yt} Z`;
}

export function cupMarkup(vessel: Vessel, result: DrawResult, label: string): string {
  const pad = 10;
  const topW = 16 * Math.sqrt(vessel.rimAreaCm2);
  const bottomW = topW * 0.82;
  const innerH = vessel.capacityMl * PX_PER_ML;
  const width = topW + pad * 2;
  const height = innerH + pad * 2;
  const cx = width / 2;
  const yBottom = pad + innerH;
  const glass = trap(0, innerH, yBottom, innerH, bottomW + 6, topW + 6, cx);
  let cursor = 0;
  const shapes: string[] = [];
  shapes.push(`<path d="${glass}" fill="#ffffff" stroke="#e6ded5" stroke-width="1.5"/>`);
  for (const layer of result.layers) {
    if (layer.kind === "crema") {
      const cremaPx = (result.cremaMm / 10) * PX_PER_ML * vessel.rimAreaCm2;
      const y0 = cursor;
      const y1 = Math.min(innerH, cursor + cremaPx);
      shapes.push(
        `<path class="wave" d="${trap(y0, y1, yBottom, innerH, bottomW, topW, cx)}" fill="${FILL.crema}" stroke="#c4b6aa" stroke-width="1"/>`,
      );
      continue;
    }
    const y0 = cursor;
    const y1 = cursor + layer.ml * PX_PER_ML;
    cursor = y1;
    const stroke = layer.kind === "foam" || layer.kind === "milk" || layer.kind === "water" ? "#b7a89c" : "none";
    const wave = layer === result.layers[result.layers.length - 1] ? " wave" : "";
    shapes.push(
      `<path class="liquid${wave}" d="${trap(y0, y1, yBottom, innerH, bottomW, topW, cx)}" fill="${FILL[layer.kind]}" stroke="${stroke}" stroke-width="1"/>`,
    );
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)}" viewBox="0 0 ${width.toFixed(2)} ${height.toFixed(2)}" width="${width.toFixed(0)}" height="${height.toFixed(0)}"><title>${esc(label)}</title>${shapes.join("")}</svg>`;
}

export function carafeMarkup(coffeeG: number, waterG: number): string {
  const capacity = 1000;
  const px = 0.22;
  const innerH = capacity * px;
  const topW = 92;
  const bottomW = 78;
  const pad = 12;
  const width = topW + pad * 2;
  const height = innerH + pad * 2;
  const cx = width / 2;
  const yBottom = pad + innerH;
  const fillMl = Math.min(waterG, capacity);
  const glass = trap(0, innerH, yBottom, innerH, bottomW + 8, topW + 8, cx);
  const liquid = trap(0, fillMl * px, yBottom, innerH, bottomW, topW, cx);
  const label = `Brew server with ${coffeeG.toFixed(1)} g coffee and ${waterG.toFixed(1)} g water. The drawing holds up to 1000 g of water.`;
  const note = waterG > capacity ? `<text x="${cx}" y="24" text-anchor="middle" fill="#1a1412" font-size="14">Above the drawn 1000 g</text>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)}" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}"><title>${esc(label)}</title><path d="${glass}" fill="#ffffff" stroke="#e6ded5" stroke-width="1.5"/><path class="liquid wave" d="${liquid}" fill="#362013"/>${note}</svg>`;
}

export function jarMarkup(waterG: number, yieldG: number, ok: boolean): string {
  const capacity = Math.max(waterG, 1);
  const px = 0.28;
  const innerH = 180;
  const topW = 88;
  const bottomW = 80;
  const pad = 12;
  const width = topW + pad * 2;
  const height = innerH + pad * 2;
  const cx = width / 2;
  const yBottom = pad + innerH;
  const fraction = ok ? Math.max(0, Math.min(1, yieldG / capacity)) : 0;
  const glass = trap(0, innerH, yBottom, innerH, bottomW + 8, topW + 8, cx);
  const liquid = trap(0, innerH * fraction, yBottom, innerH, bottomW, topW, cx);
  const label = ok
    ? `Jar of brew water ${waterG.toFixed(1)} g. ${yieldG.toFixed(1)} g comes off the grounds.`
    : "Jar shown empty because the grounds would hold all of the water.";
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)}" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}"><title>${esc(label)}</title><path d="${glass}" fill="#ffffff" stroke="#e6ded5" stroke-width="1.5"/>${ok ? `<path class="liquid wave" d="${liquid}" fill="#4a3326"/>` : ""}</svg>`;
}

export function drinkCup(vesselId: keyof typeof vessels, result: DrawResult, label: string): string {
  return cupMarkup(vessels[vesselId], result, label);
}
