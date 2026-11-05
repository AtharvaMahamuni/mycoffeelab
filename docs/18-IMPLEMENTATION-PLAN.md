# 18. Implementation Plan

**Builds:** the P0 in [17-BUILD-SPECIFICATION.md](./17-BUILD-SPECIFICATION.md).  
**Does not build:** the Lab, dial-in, grind chart, Three.js, affiliates, caffeine, or calories.

The visual system for this project is Roaster's Craft in the palette file and document 17. Workspace Cursor Orange is not used here. That exception is already recorded. Body type is 16 px. Controls are at least 44 px tall. Motion is a short ease on press and a 1.5 px liquid sway, both removed under `prefers-reduced-motion`. No third-party font or script.

## Stack

Astro static HTML, TypeScript, one CSS file, no UI framework. The cup SVG is a pure function shared by the server render and the slider script. Vitest locks the calculator vectors and the cup-fit rule. The production build checks that all 25 URLs exist, that reverse comparisons redirect, and that the CSS, home HTML, and calculator script stay inside the budgets in document 17.

The site origin is `https://mycoffeelab.example` until a real domain is chosen. Change `site` in `astro.config.ts` and `SITE_ORIGIN` in `src/lib/site.ts` together.

## File map

| Path | Role |
| :--- | :--- |
| `src/lib/picture.ts` | `picture-model@1` constants, draw, fit rule |
| `src/lib/calculators.ts` | Ratio, espresso, and cold-brew math |
| `src/lib/drinks.ts` | The 11 house defaults |
| `src/lib/comparisons.ts` | Five comparisons and reverse slugs |
| `src/lib/cup.ts` | SVG markup for cups, the brew server, and the cold-brew jar |
| `src/components/*Tool.astro` | Server HTML for the default, plus a script that updates `aria-live` |
| `src/pages/**` | The 25 URLs |
| `tests/*.test.ts` | Locked vectors and foam captions |
| `scripts/check-pages.mjs` | Built HTML, redirects, forbidden claims |
| `scripts/check-budget.mjs` | Gzip budgets |
| `public/` | `robots.txt`, `llms.txt`, `identity.json`, and the other discovery files |

## Page order in the build

1. Shared layout, tokens, and cup.
2. Three calculators, with the ratio tool also mounted on `/`.
3. Drink route and comparison route from the data files.
4. Directory, about, and corrections pages.
5. Sitemap, schema, and redirects.

A drink or comparison page does not get its own hand-written recipe. It reads `drinks.ts`.

## Checks that must pass

- Section 5 vectors, including 500 g at the SCA center → 27.5 g coffee and a 55.0 g bloom.
- Every house default draws at or under its cup capacity.
- Foam captions round to the centimetres in document 17.
- Each built page has the H1 from document 17, one H1 only.
- Built HTML does not contain caffeine or calorie claims.
- Reverse comparison URLs redirect to the canonical slug.
- JavaScript off still shows the default worked example and the cup.

## Deploy later

Paste the keyword export into document 02 before changing titles. Point the origin at the real host. Put the issue-tracker URL on `/corrections/`.
