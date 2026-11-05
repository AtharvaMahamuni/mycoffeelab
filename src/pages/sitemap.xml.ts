import type { APIRoute } from "astro";
import { comparisons } from "../lib/comparisons";
import { drinks } from "../lib/drinks";
import { SITE_ORIGIN } from "../lib/site";

export const GET: APIRoute = () => {
  const paths = [
    "/",
    "/calculators/",
    "/calculators/coffee-to-water-ratio/",
    "/calculators/espresso-ratio/",
    "/calculators/cold-brew-ratio/",
    "/types-of-coffee/",
    ...drinks.map((drink) => `/drinks/${drink.slug}/`),
    "/compare/",
    ...comparisons.map((comparison) => `/compare/${comparison.slug}/`),
    "/about/",
    "/corrections/",
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${SITE_ORIGIN}${path}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
