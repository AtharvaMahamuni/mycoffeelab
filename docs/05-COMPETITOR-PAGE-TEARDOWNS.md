# 05. Detailed Competitor Page Teardowns

**Methodology:** Direct inspection of live URLs across Content, UX/Design, Interactivity, and Technical SEO.  
**Standard:** Observable facts are strictly separated from strategic estimates and hypotheses.

---

## Teardown 1: WebstaurantStore — Types of Coffee Drinks Explained

* **URL:** `https://www.webstaurantstore.com/article/397/types-of-coffee-drinks.html`
* **Target Query:** "types of coffee drinks", "types of coffee"

### 1. Content Architecture & Quality
* **[Observable Fact] Heading Hierarchy:** Uses clean semantic structure: `H1` (Types of Coffee Drinks Explained), followed by `H2` sections for each beverage class (Espresso Drinks, Brewed Coffee, Specialty), with `H3` for individual beverages (Espresso, Latte, Cappuccino, etc.).
* **[Observable Fact] Topic Coverage:** Covers 16 distinct espresso beverages, 4 brewing styles, and bean types (Arabica vs Robusta).
* **[Observable Fact] Accuracy:** High commercial accuracy, though definitions lean toward commercial American restaurant standards (e.g., standardizing on 2 oz espresso shots without distinguishing ristretto/lungo subtleties).
* **[Observable Fact] Visual Assets:** Features a single high-resolution custom graphic poster displaying cross-sections of coffee cups with labeled layers. Static JPEG/PNG.
* **[Observable Fact] Structured Data:** Uses `Article` schema and breadcrumb schema.

### 2. UX and Design
* **[Observable Fact] Layout & Typography:** Traditional e-commerce blog layout with right-hand sidebar promoting restaurant supplies. Clean sans-serif typography (16px base font).
* **[Observable Fact] Mobile Responsiveness:** Fully responsive, but the primary visual graphic is a wide poster that becomes illegible on mobile screens unless zoomed manually.
* **[Observable Fact] Perceived Performance:** Moderate speed. Significant overhead from e-commerce tracking scripts, chat widgets, and cart telemetry.

### 3. Interactive Experience
* **[Observable Fact] Interactivity:** **Zero.** No calculators, no clickable layers, no dynamic sliders, no recipe modifiers.

### 4. SEO Signals
* **[Observable Fact] Title Tag:** *"Types of Coffee Drinks Explained | WebstaurantStore"* (Optimized for keyword + brand).
* **[Observable Fact] Internal Linking:** Heavy commercial internal links pointing to category pages (Commercial Espresso Machines, Coffee Mugs, Milk Pitchers).
* **[Strategic Estimate] Ranking Strength:** Ranks primarily on domain-level commercial authority (DR 88+) and historical backlink equity accumulated over 8+ years.

---

## Teardown 2: Honest Coffee Guide — Coffee to Water Ratio Calculator

* **URL:** `https://honestcoffeeguide.com/coffee-to-water-ratio-calculator/`
* **Target Query:** "coffee to water ratio calculator", "coffee ratio calculator"

### 1. Content Architecture & Quality
* **[Observable Fact] Information Architecture:** Utility-first layout. The calculator form is placed immediately below the primary `H1` with minimal preamble. Explanatory text, formula breakdowns, and SCA standards are placed beneath the tool.
* **[Observable Fact] Accuracy:** Barista-grade accuracy. Uses mass (grams) as the default unit. Accounts for 18 specific brewing methods (V60, Chemex, French Press, Aeropress, Moka Pot, Siphon, Cold Brew, etc.).

### 2. UX and Design
* **[Observable Fact] Visual Hierarchy:** Utilitarian, engineering-centric design. White background, simple input form boxes, standard select dropdowns.
* **[Observable Fact] Typography:** Clean sans-serif, high contrast, high legibility.
* **[Observable Fact] Mobile Responsiveness:** Completely mobile-friendly. Inputs are large enough for mobile taps.
* **[Observable Fact] Performance:** Very fast. Minimal JavaScript bundle, no heavy third-party ad networks.

### 3. Interactive Experience
* **[Observable Fact] Calculator Functionality:** 
  - Dynamic input binding: Changing coffee weight immediately updates water weight based on chosen brew ratio.
  - Custom ratio override allows manual ratio input.
  - Brew method selector auto-fills recommended starting ratios (e.g., 1:16 for Chemex, 1:15 for Aeropress).
* **[Observable Fact] Visual Feedback:** **Missing.** The tool calculates raw numbers into an input field, but provides no visual animation of the coffee vessel filling, no brew phase breakdown (bloom water vs main pour), and no sensory flavor slider.

### 4. SEO Signals
* **[Observable Fact] Title Tag:** *"Coffee to Water Ratio Calculator - Honest Coffee Guide"*
* **[Observable Fact] Schema:** Basic WebPage schema; lacks `SoftwareApplication` or `WebApplication` rich snippet markup.
* **[Strategic Estimate] Opportunity:** We can match their 18 brew presets while dramatically outclassing them with an interactive liquid level visualizer, pulse pour breakdown, and tactile sensory flavor compass.

---

## Teardown 3: Omni Calculator — Coffee to Water Ratio Calculator

* **URL:** `https://www.omnicalculator.com/food/coffee-to-water-ratio`
* **Target Query:** "coffee to water ratio calculator"

### 1. Content Architecture & Quality
* **[Observable Fact] Information Architecture:** Calculator sits in the left column on desktop (or top on mobile), surrounded by programmatic ad placeholders. 
* **[Observable Fact] Explanation Quality:** Formulas are accurate algebraically ($Water = Coffee \times Ratio$), but the surrounding content is generic boilerplate written for SEO rather than coffee passion.

### 2. UX and Design
* **[Observable Fact] Ad Intrusion:** Severe ad density. Top leaderboards, sticky bottom banners, and mid-content display units generate high visual clutter.
* **[Observable Fact] Layout Shift (CLS):** Dynamic ad loading creates noticeable layout jumps on mobile.
* **[Observable Fact] Perceived Performance:** Dragged down by programmatic header-bidding ad scripts (Prebid, Google Publisher Tag).

### 3. Interactive Experience
* **[Observable Fact] Interactivity:** Functional multi-variable form fields. Calculates forward (from coffee) and backward (from target cup size).
* **[Observable Fact] Coffee Specificity:** Zero. No pulse-pour instructions, no bloom ratios, no grind size correlation, no brewing tips.

### 4. SEO Signals
* **[Observable Fact] Ranking Driver:** Omni Calculator relies on massive cross-domain topical authority from thousands of math calculators.
* **[Strategic Hypothesis]:** Google's Helpful Content updates and E-E-A-T guidelines increasingly favor dedicated, domain-specific utilities over generic multi-vertical calculation farms. A dedicated coffee lab can outrank Omni by demonstrating deep domain expertise.

---

## Teardown 4: Barista Hustle — The Espresso Compass

* **URL:** `https://www.baristahustle.com/app-archive-page/the-espresso-compass/`
* **Target Query:** "espresso compass", "how to dial in espresso"

### 1. Content Architecture & Quality
* **[Observable Fact] Subject Matter Depth:** Exceptional. Pioneered the two-axis extraction vs. strength sensory troubleshooting framework.
* **[Observable Fact] Terminology:** Academic / Professional. Focuses on Total Dissolved Solids (TDS %), Extraction Yield (EY %), channeling, and beverage mass.

### 2. UX and Design
* **[Observable Fact] Visual Hierarchy:** Minimal, scientific, restrained editorial typography.
* **[Observable Fact] Compass Interface:** Interactive 2D Cartesian chart. Clicking a quadrant (e.g., "Sour & Watery" or "Bitter & Heavy") outputs actionable barista adjustments.
* **[Observable Fact] Mobile Usability:** Moderate. The graphic canvas can feel small on narrow mobile viewports.

### 3. Interactive Experience
* **[Observable Fact] Interaction Model:** Click-to-troubleshoot matrix. Very useful for baristas dialing in on a commercial machine.
* **[Observable Fact] Accessibility:** Lacks clear keyboard navigation and ARIA descriptions for non-visual screen readers.

### 4. SEO Signals
* **[Observable Fact] Organic Reach:** The tool is often hidden deep in the Barista Hustle navigation or behind member portals, limiting its full SERP potential.
* **[Strategic Opportunity]:** Barista Hustle leaves mass consumer search volume on the table because their tools are tuned for professionals. By translating their extraction principles into beginner-friendly, visual sliders ("Sour / Bitter Dial-In Slider"), MyCoffeeLab captures the massive home-barista search audience.
