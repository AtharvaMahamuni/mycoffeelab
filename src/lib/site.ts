/** Keep this in sync with `site` and `base` in astro.config.ts. */
export const SITE_ORIGIN = "https://atharvamahamuni.github.io";
export const BASE_PATH = "/mycoffeelab";

export const SITE_NAME = "MyCoffeeLab";

export const PUBLISHER = "Atharva Mahamuni";

export const PICTURE_MODEL = "picture-model@1";

export const SAME_AS = [
  "https://x.com/athmatwt",
  "https://www.linkedin.com/in/atharvamahamuni",
  "https://github.com/AtharvaMahamuni",
] as const;

export function url(path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean.startsWith(`${BASE_PATH}/`) || clean === BASE_PATH) return clean;
  return `${BASE_PATH}${clean}`;
}

export function absolute(path: string): string {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${SITE_ORIGIN}${url(normalized)}`;
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
