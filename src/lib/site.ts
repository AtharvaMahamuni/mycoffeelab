/** Keep this identical to `site` in astro.config.ts. The production host is not chosen yet. */
export const SITE_ORIGIN = "https://mycoffeelab.example";

export const SITE_NAME = "MyCoffeeLab";

export const PUBLISHER = "Atharva Mahamuni";

export const PICTURE_MODEL = "picture-model@1";

export const SAME_AS = [
  "https://x.com/athmatwt",
  "https://www.linkedin.com/in/atharvamahamuni",
  "https://github.com/AtharvaMahamuni",
] as const;

export function absolute(path: string): string {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return new URL(normalized, SITE_ORIGIN).toString();
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
