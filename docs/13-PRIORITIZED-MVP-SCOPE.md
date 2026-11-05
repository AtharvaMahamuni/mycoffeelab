# 13. Prioritisation Framework & MVP Scope Definition

**Objective:** Strict sequencing of features and pages.  
**Launch lock:** The scored table below is a planning aid from before the build specification. Where a tier, a URL, or a "full WCAG AAA" line disagrees with [17-BUILD-SPECIFICATION.md](./17-BUILD-SPECIFICATION.md), document 17 wins. The formula was never the sort order: the Coffee Lab scores near the P0 comparisons and remains out of launch.

---

## 1. Prioritization Scoring Model

Each initiative is evaluated across 7 weighted dimensions on a 1–5 scale:
$$\text{Priority Score} = \frac{(\text{Demand} \times 2) + (\text{User Value} \times 2) + (\text{Diff} \times 1.5) + (\text{SEO} \times 1.5) + (\text{Retention} \times 1.5) - (\text{SERP Comp}) - (\text{Dev Effort})}{10}$$

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PRIORITIZATION TIERS                            │
├────┬─────────────────────────────┬────────────────────────────────────┤
│ P0 │ Essential for MVP Launch    │ Core foundation, launch in 30 days │
├────┼─────────────────────────────┼────────────────────────────────────┤
│ P1 │ High-Value Follow-Up        │ Immediate wedge, launch in 60 days │
├────┼─────────────────────────────┼────────────────────────────────────┤
│ P2 │ Differentiation & Expansion │ Advanced 3D & custom builders      │
├────┼─────────────────────────────┼────────────────────────────────────┤
│ P3 │ Experimental & Long-Term    │ Hardware/Bluetooth & niche physics │
└────┴─────────────────────────────┴────────────────────────────────────┘
```

---

## 2. Granular Opportunity Matrix

| Initiative / Feature | Tier | Search Demand | SERP Comp. | User Value | Differentiation | Dev Effort | SEO Pot. | Retention | Strategic Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Coffee-to-Water Ratio Calculator** | **P0** | 5/5 | 3/5 | 5/5 | 4/5 | 2/5 | 5/5 | 5/5 | **Highest utility-to-effort ratio.** Instant backlink magnet; daily habit builder for home brewers. |
| **Espresso Ratio & Yield Calculator** | **P0** | 4/5 | 3/5 | 5/5 | 4/5 | 2/5 | 5/5 | 5/5 | Essential tool for the passionate espresso demographic; solves dose-to-yield confusion. |
| **Top 12 Drink Dossiers (2D Canvas/SVG)**| **P0** | 5/5 | 4/5 | 5/5 | 4/5 | 3/5 | 5/5 | 3/5 | Primary organic search ingestion funnel (Espresso, Latte, Flat White, Cortado, Macchiato, etc.). |
| **Top 5 Side-by-Side Drink Comparisons** | **P0** | 4/5 | 3/5 | 5/5 | 5/5 | 2/5 | 5/5 | 3/5 | Captures high-CTR queries (`flat white vs latte`); instant visual answers win featured snippets. |
| **Pillar Guide: `/types-of-coffee/`** | **P0** | 5/5 | 5/5 | 4/5 | 4/5 | 2/5 | 5/5 | 2/5 | Semantic umbrella anchoring topical authority and internal linking structure. |
| **The 2D Coffee Lab Builder** | **P1** | 3/5 | 2/5 | 5/5 | 5/5 | 3/5 | 4/5 | 5/5 | Creative interactive playground; generates viral custom recipe URLs (`/lab?recipe=...`). |
| **Grind Size Visual Guide & Chart** | **P1** | 4/5 | 4/5 | 5/5 | 4/5 | 2/5 | 5/5 | 4/5 | Solves daily brewing questions with high-resolution visual particle scale. |
| **Espresso Dial-In Compass Tool** | **P1** | 3/5 | 2/5 | 5/5 | 5/5 | 3/5 | 4/5 | 4/5 | Translates complex extraction science into simple "Sour vs Bitter" troubleshooting sliders. |
| **15 Additional Drink Cluster Pages** | **P1** | 3/5 | 3/5 | 4/5 | 3/5 | 2/5 | 4/5 | 2/5 | Expands long-tail search coverage (Ristretto, Lungo, Affogato, Vienna, Red Eye, Freddo). |
| **3D Coffee Studio (Three.js WebGL)** | **P2** | 2/5 | 1/5 | 4/5 | 5/5 | 4/5 | 2/5 | 3/5 | Visual flagship for desktop users; exploded ingredient layers create brand prestige. |
| **Recipe Saving & Local Storage** | **P2** | 2/5 | 1/5 | 4/5 | 4/5 | 2/5 | 2/5 | 5/5 | Enables home brewers to save custom dial-in recipes directly in their browser. |
| **Curated Equipment Buying Briefs** | **P2** | 3/5 | 4/5 | 4/5 | 3/5 | 2/5 | 4/5 | 2/5 | Contextual commercial monetization (grinders, scales, kettles, espresso machines). |
| **Water Mineral Chemistry Calculator** | **P3** | 1/5 | 2/5 | 3/5 | 4/5 | 4/5 | 2/5 | 2/5 | Niche tool for advanced baristas mixing custom epsom/baking soda water recipes. |
| **Bluetooth Smart Scale Integration** | **P3** | 1/5 | 1/5 | 4/5 | 5/5 | 5/5 | 1/5 | 4/5 | High technical complexity; requires Web Bluetooth API for Acaia/Decent scales. |
| **User Accounts & Cloud Sync** | **P3** | 1/5 | 1/5 | 3/5 | 2/5 | 4/5 | 1/5 | 3/5 | Unnecessary friction for initial growth; local storage suffices for early traction. |

---

## 3. The Minimum Viable Product (MVP) Defined

The MVP represents the tightest scope capable of winning organic search rankings, earning initial backlink authority, and validating daily repeat user engagement:

### Scope Included in MVP

The page list, the recipes, and the pass checks are section 2 and section 8 of document 17. In short:

1. Astro static pages, TypeScript, CSS custom properties. A client island only where a slider changes the cup.
2. Roaster's Craft tokens as corrected in the palette: body text at AAA, buttons at AA. Crema amber is not the button fill.
3. Three calculators: coffee to water, espresso ratio, cold brew. The SCA default is 55 g/L (1:18.2), not a 1:15–1:17 set labeled as SCA.
4. Eleven drink pages. Doppio is an H2 on the espresso page. Recipes are the house defaults in document 17.
5. Five comparisons, ending in espresso vs americano. Reverse slugs redirect.
6. Sitemap, `robots.txt`, `llms.txt`, and the JSON-LD types listed in document 17. `FAQPage` only when the questions are visible. No nutrition field.

### Scope Excluded from MVP (Deferred to P1/P2)
* Heavy 3D Three.js WebGL rendering (P2).
* Complex fluid dynamics / particle animations (Rejected).
* User authentication / login systems (Rejected for MVP; local storage used instead).
* Intrusive programmatic display ad scripts (Rejected permanently).
