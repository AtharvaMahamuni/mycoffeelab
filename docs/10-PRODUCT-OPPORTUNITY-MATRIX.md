# 10. Product Opportunity Assessment & Evaluation Matrix

**Objective:** Rigorous evaluation of the 6 proposed core platform experiences to establish product-market fit, development complexity, and sequencing.

---

## 1. Comprehensive Experience Evaluation Table

| Proposed Experience | User Demand | Competitive Differentiation | SEO Potential | Repeat-Use Potential | Dev Complexity | Mobile Feasibility | Content Maintenance | Overall Strategic Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Coffee Explorer** *(Searchable directory of drinks & brew methods)* | **Very High:** Millions of monthly searches for coffee drinks and brewing styles. | **Moderate:** High-quality visual cards and filtering elevate it above static text listicles. | **Massive:** Direct anchor for broad informational queries (`types of coffee`, `coffee drinks`). | **Low to Moderate:** Users browse during onboarding or menu confusion. | **Low:** Clean Astro static content collections with lightweight search/filtering. | **Very High:** Fast responsive grid with touch filtering. | **Low:** Coffee drinks change very slowly over time. | **P0 (Launch Essential)** |
| **2. Coffee Studio** *(3D WebGL environment for drink composition & preparation)* | **Moderate:** Users love visual demonstrations, but rarely search for "3D coffee". | **Extreme:** No competitor has a real-time 3D coffee glassware inspection tool. | **Low to Moderate:** WebGL canvas itself is unindexed; value comes from viral social sharing and dwell time. | **Moderate:** Great interactive showcase, but slower for daily kitchen utility. | **High:** Three.js models, lighting, shader development, asset optimization. | **Moderate:** Requires WebGL fallbacks, touch orbit controls, and mobile GPU throttling. | **Low:** Assets are built once and reused across beverages. | **P2 (Desktop Hero / Expansion)** |
| **3. Coffee Lab** *(Interactive custom drink builder with live ingredient layers)* | **High:** Highly engaging for hobbyists, baristas, and students wanting to customize drinks. | **Extreme:** Virtually zero web competition with full recipe calculation and visual layering. | **High:** Generates dynamic, shareable URLs (`/lab?recipe=...`) that earn organic community backlinks. | **High:** Used repeatedly to design custom recipes, calculate caffeine/calories, and share drinks. | **Moderate:** Reactive state engine (TypeScript) driving dynamic 2D SVG/Canvas layer heights. | **Very High:** Lightweight 2D vector rendering runs at 60fps on any mobile phone. | **Low:** Mathematical model of liquid densities and volumes is static. | **P1 (Core Differentiator)** |
| **4. Coffee Comparison** *(Side-by-side drink, ratio, taste, & prep comparison)* | **Very High:** Constant high-intent search volume (*"flat white vs latte"*, *"cortado vs macchiato"*). | **Very High:** Synchronized visual glass cross-sections replace boring static comparison tables. | **Massive:** Captures high-CTR comparison queries with high featured snippet win-rate. | **Moderate:** Solves specific ordering and brewing dilemmas. | **Low to Moderate:** Reuses Coffee Explorer components in a dual-column comparison harness. | **High:** Requires clean vertical stacking on mobile screens with toggle slider. | **Low:** Beverage specifications are standardized. | **P0 (Launch Essential)** |
| **5. Coffee Calculators** *(Mass-based coffee-to-water, espresso ratio, cold brew)* | **Extreme:** Universal daily search demand from home coffee brewers and baristas worldwide. | **High:** Beats sterile competitors (Omni Calculator) by pairing precision mass with visual brew guides. | **Very High:** Directly targets high-converting utility queries; high backlink magnet for coffee forums. | **Extreme (Daily Habit):** Kept open on kitchen counters during daily morning coffee preparation. | **Low to Moderate:** Clean algebraic calculation functions with reactive UI sliders. | **Exceptional:** Designed specifically for one-handed kitchen smartphone operation. | **Very Low:** SCA extraction formulas are permanent industry standards. | **P0 (Launch Essential)** |
| **6. Coffee Science** *(Extraction, grind size, dose, yield, & temp simulations)* | **High:** Enthusiasts and baristas struggle with sour vs bitter troubleshooting and grind adjustments. | **Extreme:** Translates complex barista science into intuitive, interactive visual diagnostics. | **High:** Captures high-intent problem-solving searches (*"why is espresso sour"*, *"grind size chart"*). | **High:** Used whenever dialing in a new bag of beans or troubleshooting bad brews. | **Moderate:** Requires accurate sensory-to-physics mapping based on extraction principles. | **High:** Interactive 2D Cartesian chart and responsive sliders. | **Moderate:** Periodic updates to include new grinder models. | **P1 (Follow-up Wedge)** |

---

## 2. Granular Experience Deconstruction

### Experience 1: Coffee Explorer (P0)
* **What It Solves:** Eliminates the frustration of reading through 3,000 words of SEO filler just to find out what ingredients go into a Cortado.
* **Core Mechanics:** Instant search bar + categorical chips (Espresso Base, Filter Brew, Cold & Refreshing, Milk-Heavy, High Caffeine). Clicking any card opens a clean, visual dossier with an interactive 2D cross-section and exact mass recipe.

### Experience 2: Coffee Calculators (P0)
* **What It Solves:** Eradicates confusing volumetric measurements (tablespoons, fluid ounces) and ad-bloated math tools.
* **Core Mechanics:**
  - **Coffee-to-Water Calculator:** Slide coffee grams (12g to 60g) or target water yield (200ml to 1000ml) with instant SCA ratio presets (1:15 Strong, 1:16 Golden, 1:17 Light).
  - **Espresso Ratio Calculator:** Input dose (18g) and ratio (1:2), receive target yield (36g) and extraction time benchmark (27s).
  - **Visual Carafe Fill:** As the slider moves, an animated SVG carafe fills with brewed coffee, visually confirming volume.

### Experience 3: Coffee Comparison Engine (P0)
* **What It Solves:** Settles the eternal, confusing debates across specialty menus (*"Is a flat white just a small latte?"*, *"What makes a cortado different from a cappuccino?"*).
* **Core Mechanics:** Side-by-side synchronized rendering of two cups. Direct metric callouts: Cup Capacity (oz/ml), Espresso Concentration (% of cup), Microfoam Depth (cm), Caffeine (mg), and Texture Rating.

### Experience 4: Coffee Lab (P1)
* **What It Solves:** Provides an open, creative sandbox where users can design, test, and balance custom drinks digitally before brewing in real life.
* **Core Mechanics:** Glassware selector (Espresso Demitasse, Gibraltar Glass, Ceramic Cup, Highball Tumbler). Draggable ingredients: Single/Double Espresso, Steamed Milk, Microfoam, Hot Water, Cold Brew, Ice Cubes, Chocolate Ganache, Vanilla Syrup. Dynamic metrics calculate total liquid volume, estimated caffeine (mg), and calorie count.

### Experience 5: Coffee Science & Dial-In Compass (P1)
* **What It Solves:** Helps home espresso owners eliminate sour or bitter shots without needing an expensive refractometer.
* **Core Mechanics:** Sensory slider: "Too Sour / Sharp" (Underextracted) ↔ "Balanced & Sweet" ↔ "Too Bitter / Dry" (Overextracted). The tool provides precise, actionable mechanical advice: *"Increase your beverage yield from 36g to 40g, or grind one click finer."*

### Experience 6: 3D Coffee Studio (P2)
* **What It Solves:** Provides a stunning visual showcase for spatial composition, showing microfoam texture, crema luster, and glass refractivity.
* **Core Mechanics:** Three.js orbit view. "Explode Layers" button animates espresso, milk, and foam separating along the Y-axis with floating dimensional weight tags.
