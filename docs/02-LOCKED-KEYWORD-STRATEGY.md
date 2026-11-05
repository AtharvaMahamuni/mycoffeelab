# 02. Locked Keyword Strategy & Ingestion Framework

**Status:** Framework Defined — Metrics still empty  
**Rule Compliance:** Zero Fabricated Data. Strict separation between Locked Keywords and Discovered Opportunities.  
**Build gate:** [17-BUILD-SPECIFICATION.md](./17-BUILD-SPECIFICATION.md) chooses P0 without these volumes. No title is final, and no URL beyond that P0 list is added, until a row below has real volume and difficulty.

---

## 1. Locked Keyword Policy & Protocol

In strict adherence to project directives:
1. **Source of Truth Integrity:** The locked keyword list provided by the project stakeholder represents the immutable core. No search volume, keyword difficulty (KD), or paid metrics are invented, estimated, or fabricated.
2. **Metric Ingestion Template:** When the stakeholder supplies the final keyword CSV / dataset, it is mapped into the standardized matrix below without modifying original strings or numbers.
3. **Multi-Dimensional Evaluation:** Every keyword is assessed beyond raw volume:
   - **Search Intent:** Informational, Interactive/Tool, Commercial Investigation, or Navigational.
   - **SERP Composition:** Featured snippets, video carousels, People Also Ask (PAA), calculator widgets, or image packs.
   - **Content Requirements:** Interactive component required, tabular data, educational deep-dive, or step-by-step recipe.
   - **Product Fit:** Alignment with Coffee Explorer, Coffee Studio, Coffee Lab, Coffee Comparison, or Coffee Calculators.

---

## 2. Locked Keyword Ingestion Table (Schema & Placeholder)

*Note: As designated by the project lead, the final verified keyword metrics will be ingested into this locked schema. Columns are preserved exactly.*

| Keyword | Search Volume | Keyword Difficulty (KD) | Search Intent | Related Keyword Group | Additional Metrics (CPC / SERP Features) | Evaluation & Product Fit |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *types of coffee* | *[Pending User Input]* | *[Pending User Input]* | Informational / Directory | Core Drink Taxonomy | *[Pending]* | Hub Pillar page (`/types-of-coffee/`) with visual drink selector. |
| *coffee drinks explained* | *[Pending User Input]* | *[Pending User Input]* | Informational / Educational | Core Drink Taxonomy | *[Pending]* | Educational companion to taxonomy with ingredient breakdowns. |
| *coffee to water ratio calculator* | *[Pending User Input]* | *[Pending User Input]* | Interactive / Tool | Brewing Utilities | *[Pending]* | Dedicated interactive calculator (`/calculators/coffee-to-water-ratio/`). |
| *espresso ratio calculator* | *[Pending User Input]* | *[Pending User Input]* | Interactive / Tool | Espresso Science | *[Pending]* | Dose-to-yield dial-in calculator (`/calculators/espresso-ratio/`). |
| *flat white vs latte* | *[Pending User Input]* | *[Pending User Input]* | Informational / Comparison | Drink Comparisons | *[Pending]* | Side-by-side dimensional comparison (`/compare/flat-white-vs-latte/`). |
| *cortado vs cappuccino* | *[Pending User Input]* | *[Pending User Input]* | Informational / Comparison | Drink Comparisons | *[Pending]* | Not a P0 URL. The cortado page links to cappuccino in prose. Add `/compare/cortado-vs-cappuccino/` only after this row has metrics. |
| *coffee grind size chart* | *[Pending User Input]* | *[Pending User Input]* | Visual / Informational / Tool | Brewing Science | *[Pending]* | Interactive particle/micron visualizer (`/science/grind-size/`). |
| *cold brew ratio* | *[Pending User Input]* | *[Pending User Input]* | Informational / Tool | Immersion Brewing | *[Pending]* | Concentrate vs ready-to-drink calculator (`/calculators/cold-brew-ratio/`). |
| *espresso drinks guide* | *[Pending User Input]* | *[Pending User Input]* | Informational / Directory | Espresso Ecosystem | *[Pending]* | Filterable espresso menu page (`/drinks/espresso/`). |
| *french press ratio* | *[Pending User Input]* | *[Pending User Input]* | Informational / Tool | Immersion Brewing | *[Pending]* | P0 covers this as a preset on `/calculators/coffee-to-water-ratio/`. A standalone URL waits for this row to be filled. |

---

## 3. Search Intent Categorization Model

To prevent ranking failure caused by intent mismatch, all incoming queries are classified under four discrete operational intents:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SEARCH INTENT SPECTRUM                          │
├──────────────────┬──────────────────┬─────────────────┬────────────────┤
│  INFORMATIONAL   │ INTERACTIVE/TOOL │   COMMERCIAL    │  TRANSACTIONAL │
│  "What is X?"    │  "Calculate X"   │  "Best gear X"  │   "Buy bean X" │
├──────────────────┼──────────────────┼─────────────────┼────────────────┤
│ User wants clear │ User wants input │ User evaluating │ User ready to  │
│ taxonomy, answer,│ fields, sliders, │ products, grind-│ purchase beans,│
│ or visual fact.  │ instant answers. │ ers, or drippers│ scales, gear.  │
├──────────────────┼──────────────────┼─────────────────┼────────────────┤
│ Content: Guides, │ Content: Web app,│ Content: Curated│ Content: Roast-│
│ visual diagrams, │ sliders, reactive│ buying briefs,  │ er links, shop │
│ glossaries.      │ mass output.     │ gear matrices.  │ integration.   │
└──────────────────┴──────────────────┴─────────────────┴────────────────┘
```

1. **Informational Intent:** User is seeking conceptual clarity (e.g., *"what is a cortado"*). Requires immediate definitions, recipe ratios, and ingredient breakdown above the fold.
2. **Interactive / Tool Intent:** User has coffee beans in hand or is standing in front of an espresso machine with a scale (e.g., *"coffee to water ratio calculator"*). **Crucial finding:** These users will bounce immediately if presented with a 2,000-word historical essay. They demand a focused, interactive tool with zero friction.
3. **Commercial Investigation Intent:** User is evaluating coffee brewing hardware or beans (e.g., *"best pour over dripper"* or *"conical vs flat burr grinder"*). Served via contextual equipment briefs connected to the calculators.
4. **Transactional Intent:** User is actively purchasing beans or subscriptions. Served via roaster discovery links and specialty partner drops.

---

## 4. Discovered Keyword Opportunities (Separate Opportunity Set)

*Note: In accordance with Rule 5, these high-potential opportunities are tracked independently and are NEVER mixed into the user's locked keyword set.*

### A. High-Intent Tool Opportunities
- `pourover ratio calculator` (High tool intent; needs preset for V60, Chemex, Kalita Wave)
- `espresso yield calculator` (Espresso hobbyist intent; dose-to-yield ratio math)
- `aeropress coffee ratio` (Tinkerer intent; inverted vs standard brew methods)
- `water hardness coffee calculator` (Advanced espresso enthusiast; mineral chemistry)
- `caffeine calculator by coffee drink` (Health & lifestyle intent; mg calculation by beverage)

### B. High-Intent Comparison Queries
- `macchiato vs cortado vs flat white` (High confusion query; 3-way visual breakdown needed)
- `ristretto vs espresso vs lungo` (Extraction yield comparison; perfect for interactive slider)
- `iced latte vs iced americano vs cold brew` (Summer seasonal spike; cold beverage differentiation)
- `dark roast vs light roast extraction temp` (Brewing physics intent; temperature recommendation)

### C. Ingredient & Composition Questions
- `how much milk in a flat white` (Direct answer target for Google Featured Snippets)
- `flat white microfoam thickness` (Technical barista intent)
- `ratio of steamed milk to espresso in latte` (Zero-click query requiring immediate visual table)
- `what makes crema on espresso` (Coffee science informational query)
