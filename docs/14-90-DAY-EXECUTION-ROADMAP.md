# 14. 90-Day Execution Roadmap & Phased Milestones

**Objective:** A concrete, week-by-week implementation blueprint outlining deliverables, milestones, and success metrics across three 30-day phases.

---

## 1. High-Level Roadmap Timeline

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              90-DAY EXECUTION TIMELINE                                 │
├──────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│    DAYS 1–30: PHASE 1    │     DAYS 31–60: PHASE 2     │      DAYS 61–90: PHASE 3      │
│  Foundation, P0 Tools &  │   Interactive Coffee Lab &  │   3D Studio, Equipment Hub &  │
│    Core Drink Taxonomy   │   Comparison Expansion      │      Monetization Engine      │
├──────────────────────────┼─────────────────────────────┼───────────────────────────────┤
│ • Astro + Tailwind setup │ • Interactive Coffee Lab    │ • Three.js 3D Studio (Desktop)│
│ • "Roaster's Craft" CSS  │ • 10 Additional Comparisons │ • Exploded ingredient layers  │
│ • 3 P0 Mass Calculators  │ • Dial-In Sensory Compass   │ • Contextual affiliate briefs │
│ • 12 Core Drink Dossiers │ • Grind Size Visual Chart   │ • Roaster drop partnerships   │
│ • Schema & SEO discovery │ • Dynamic Shareable URLs    │ • PageSpeed 100/100 audits    │
└──────────────────────────┴─────────────────────────────┴───────────────────────────────┘
```

---

## 2. Granular Sprint Breakdown

### Phase 1: Days 1–30 — Foundation, Core Calculators & Search Ingestion

#### Weeks 1 & 2: Architecture, Tokens & Design System
* **Deliverable 1.1:** Scaffold Astro 5.x project repository with strict TypeScript configuration and Tailwind CSS tokens.
* **Deliverable 1.2:** Implement the **"Roaster's Craft"** design token library (Espresso `#1A1412`, Crema Amber `#C86D32`, Oat Milk Canvas `#FBF8F4`, Steamed Microfoam `#FFFFFF`).
* **Deliverable 1.3:** Build the procedural 2D SVG/Canvas glassware harness (Espresso Demitasse, Gibraltar Glass, Ceramic Cup, Highball Tumbler) with dynamic liquid level binding.
* **Milestone 1:** Production build completes with zero errors; baseline CSS bundle < 15KB gzipped.

#### Weeks 3 & 4: P0 Calculators & Core Drink Ingestion
* **Deliverable 1.4:** Build and test the **Coffee-to-Water Ratio Calculator** (`/calculators/coffee-to-water-ratio/`) featuring mass-first reactive sliders and SCA presets (1:15, 1:16, 1:17).
* **Deliverable 1.5:** Build the **Espresso Ratio & Yield Calculator** (`/calculators/espresso-ratio/`) with dose-to-yield calculation and shot timing guidance.
* **Deliverable 1.6:** Author and publish the top 12 drink dossiers (`/drinks/espresso/`, `/drinks/latte/`, `/drinks/flat-white/`, `/drinks/cortado/`, etc.) with interactive cross-sections.
* **Deliverable 1.7:** Deploy initial top 5 comparison pages (`/compare/flat-white-vs-latte/`, `/compare/cortado-vs-flat-white/`).
* **Deliverable 1.8:** Deploy SEO structured data (`WebApplication`, `Article`, `FAQPage`, `BreadcrumbList`) and discovery files (`robots.txt`, `llms.txt`, `sitemap.xml`).
* **Milestone 2:** Public soft-launch; Google Search Console submitted; all P0 tools functional on mobile with LCP < 1.0s.

---

### Phase 2: Days 31–60 — The Interactive Coffee Lab & Dial-In Engine

#### Weeks 5 & 6: The Coffee Lab Sandbox Builder
* **Deliverable 2.1:** Develop the **Coffee Lab** (`/lab/`): dynamic ingredient palette (Espresso shots, Steamed milk, Microfoam, Water, Ice, Chocolate ganache).
* **Deliverable 2.2:** Implement real-time beverage analytics engine: calculates total beverage volume (ml/oz), estimated caffeine (mg), and calorie metrics.
* **Deliverable 2.3:** Implement URL serialization: users can click "Share Recipe" to generate a short, shareable state URL (`mycoffeelab.com/lab?d=18&m=140&f=15`).
* **Milestone 3:** Coffee Lab released on Reddit (r/Coffee, r/espresso) for community testing and qualitative feedback.

#### Weeks 7 & 8: Science Engine & Comparison Expansion
* **Deliverable 2.4:** Build the **Espresso Dial-In Compass** (`/science/espresso-dial-in/`): sensory sliders translating "Sour vs Bitter" feedback into exact yield adjustments.
* **Deliverable 2.5:** Publish the **Interactive Grind Size Chart** (`/science/grind-size-chart/`) with high-resolution visual particle scale.
* **Deliverable 2.6:** Expand the Comparison Engine with 10 additional pairs (`/compare/macchiato-vs-cortado/`, `/compare/cappuccino-vs-latte/`, `/compare/espresso-vs-ristretto/`, etc.).
* **Deliverable 2.7:** Ingest user's locked keyword metrics and optimize on-page title tags and semantic headings based on verified search volumes.
* **Milestone 4:** 30+ total indexed URLs; organic impressions begin registering in Google Search Console.

---

### Phase 3: Days 61–90 — 3D Coffee Studio & Monetization Integration

#### Weeks 9 & 10: 3D Coffee Studio (Three.js Island)
* **Deliverable 3.1:** Implement the lazy-loaded Three.js 3D Coffee Studio for desktop users (`/studio/`): procedural glass shader, liquid refraction, and crema surface texture.
* **Deliverable 3.2:** Build the "Explode Layers" interactive animation: separates drink components along the Y-axis with floating metric labels.
* **Deliverable 3.3:** Ensure robust fallback: mobile devices and unsupported browsers seamlessly receive high-resolution 2D vector cross-sections.
* **Milestone 5:** 3D studio live; average session duration on desktop exceeds 3.5 minutes.

#### Weeks 11 & 12: Contextual Monetization & Optimization
* **Deliverable 3.4:** Integrate discreet, high-trust contextual equipment recommendation chips on calculator pages (Prima Coffee, Fellow, 1Zpresso, Hario).
* **Deliverable 3.5:** Establish initial specialty roaster discovery links and curated "Bean of the Month" profile.
* **Deliverable 3.6:** Conduct full Core Web Vitals audit: enforce INP < 50ms, LCP < 1.2s, CLS = 0.00 across all 40+ production URLs.
* **Deliverable 3.7:** Implement local storage recipe notebook: users can save their favorite dialed-in recipes to their browser.
* **Milestone 6:** Platform reaches full production maturity; initial affiliate commissions earned; 90-day review against KPI benchmarks.

---

## 3. Key Performance Indicators (KPIs) & Target Metrics

| Metric | Target at Day 30 | Target at Day 60 | Target at Day 90 |
| :--- | :--- | :--- | :--- |
| **Indexed URLs** | 20 URLs | 45 URLs | 60+ URLs |
| **Mobile Core Web Vitals (LCP)** | < 1.0s | < 1.1s | < 1.1s |
| **Average Engagement Time** | > 1m 30s | > 2m 15s | > 3m 00s |
| **Weekly Active Repeat Users** | 50 (testing cohort) | 500 (organic + community) | 2,500+ organic weekly users |
| **Natural Backlink Domains** | 5 domains | 20 domains | 50+ domains (forums, blogs) |
| **Affiliate CTR** | N/A (unmonetized) | N/A | 3.5% CTR on gear chips |
