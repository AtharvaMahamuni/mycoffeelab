export function round1(value: number): number {
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

export function grams(value: number): string {
  return `${round1(value).toFixed(1)} g`;
}

export function ratioLabel(ratio: number): string {
  const sca = 1000 / 55;
  const edge = 1000 / 60;
  if (Math.abs(ratio - sca) < 1e-9) return "1:18.2";
  if (Math.abs(ratio - edge) < 1e-9) return "1:16.7";
  const rounded = round1(ratio);
  return `1:${rounded.toFixed(1)}`;
}

export function flOz(ml: number): string {
  return (ml / 29.5735295625).toFixed(1);
}

export function expansionLabel(expansion: number): string {
  return expansion.toFixed(2);
}
