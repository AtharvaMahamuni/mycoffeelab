# MyCoffeeLab ☕🔬

> **The Interactive Coffee Learning & Experimentation Platform**  
> *Discover → Understand → Experiment → Create*

---

## Overview

**MyCoffeeLab** is an interactive specialty coffee platform that bridges the gap between authoritative coffee science, zero-friction kitchen utilities, and spatial 2D/3D beverage visualization.

Unlike traditional ad-cluttered coffee blogs or sterile generic math calculators, MyCoffeeLab provides **blazingly fast, mass-first brewing tools**, **dynamic visual glassware cross-sections**, and an **interactive Coffee Lab sandbox** where enthusiasts, home baristas, and curious beginners can experiment with ingredients, ratios, and extraction science in real time.

---

## 🎨 Design System: "Roaster's Craft" (Replacing Cursor Orange)

In strict accordance with project requirements, this project replaces Cursor Orange (`#f54e00`) with **"Roaster's Craft"**—an artisanal, high-contrast, kitchen-counter aesthetic rooted in the organic tones of roasted espresso, steamed milk, and caramelized crema:

* **Canvas (Warm Oat Milk):** `#FBF8F4` — Soft, luminous culinary paper canvas; reduces glare in morning kitchen light.
* **Ink Primary (Roasted Espresso Bean):** `#1A1412` — Deep near-black with rich cacao undertones; achieves an exceptional **16.4:1 contrast ratio (WCAG AAA)**.
* **Brand Mark (Crema Amber):** `#C86D32` — Large mark and crema layer only. Buttons use `#9A4316` so white labels pass WCAG AA. See [the build specification](./docs/17-BUILD-SPECIFICATION.md).
* **Surface Card (Steamed Microfoam):** `#FFFFFF` — Crisp, elevated card surfaces with warm tactile hairlines (`#E6DED5`).
* **Drink Visualizer Tokens:** Specialized hex values for Crema (`#D49A58`), Espresso (`#362013`), Steamed Whole Milk (`#EFE8DD`), Microfoam Cap (`#FBF8F3`), and Clean Water (`#DCE8F0`).

*For full color specifications, token maps, and contrast audits, see [DESIGN-SYSTEM-PALETTE.md](./docs/DESIGN-SYSTEM-PALETTE.md).*

---

## 📚 Strategic Intelligence & Opportunity Plan Index

This repository contains the complete 16-part strategic, competitive, and technical intelligence dossiers produced during the pre-implementation phase:

| # | Document | Primary Scope & Insights |
| :-: | :--- | :--- |
| **01** | [Executive Summary](./docs/01-EXECUTIVE-SUMMARY.md) | Opportunity synthesis, 4-stage user journey, strategic trade-offs, and 90-day trajectory. |
| **02** | [Locked Keyword Strategy](./docs/02-LOCKED-KEYWORD-STRATEGY.md) | Ingestion schema, zero-fabrication rules, intent spectrum, and separated opportunity sets. |
| **03** | [Competitor Landscape Dossier](./docs/03-COMPETITOR-LANDSCAPE.md) | Audits of WebstaurantStore, TasteAtlas, Coffee Affection, Honest Coffee Guide, Barista Hustle, Omni Calculator. |
| **04** | [SERP-Level Competitive Analysis](./docs/04-SERP-COMPETITIVE-ANALYSIS.md) | Organic Page 1 teardowns across 5 query classes, entity extraction, and experience gap identification. |
| **05** | [Detailed Competitor Page Teardowns](./docs/05-COMPETITOR-PAGE-TEARDOWNS.md) | Side-by-side technical, UX, and content audits separating observable facts from assumptions. |
| **06** | [Feature and Experience Gap Matrix](./docs/06-FEATURE-GAP-MATRIX.md) | 15-capability benchmarking table; identifies market voids and flags vanity feature traps. |
| **07** | [User Intent and Audience Analysis](./docs/07-USER-INTENT-AND-AUDIENCE.md) | 7 audience personas (Beginners, Home Baristas, etc.) and search-query-to-experience funnels. |
| **08** | [Competitive Positioning Strategy](./docs/08-COMPETITIVE-POSITIONING.md) | Evaluation of 3 positioning options; establishes the "Search Anchor + Interactive Wedge" thesis. |
| **09** | [SEO Architecture & Topic Clusters](./docs/09-SEO-ARCHITECTURE-CLUSTERS.md) | Hub-and-spoke pillar model, canonical URL maps, cannibalization defense, and internal link graph. |
| **10** | [Product Opportunity Assessment](./docs/10-PRODUCT-OPPORTUNITY-MATRIX.md) | Detailed evaluation of Coffee Explorer, Coffee Studio, Coffee Lab, Comparisons, and Calculators. |
| **11** | [Technical & Experience Feasibility](./docs/11-TECHNICAL-FEASIBILITY.md) | Astro SSG stack, 2D SVG vs 3D Three.js boundary, mobile GPU constraints, and a11y compliance. |
| **12** | [Monetisation Analysis & Potential](./docs/12-MONETIZATION-ANALYSIS.md) | Curated gear affiliates, specialty roaster drops, digital products; rejects intrusive display ads. |
| **13** | [Prioritised MVP Scope Definition](./docs/13-PRIORITIZED-MVP-SCOPE.md) | P0 launch scope vs P1/P2 follow-ups scored across 7 weighted dimensions. |
| **14** | [90-Day Execution Roadmap](./docs/14-90-DAY-EXECUTION-ROADMAP.md) | Phased sprint schedule, weekly milestones, deliverables, and target KPI benchmarks. |
| **15** | [Risks, Assumptions & Hypotheses](./docs/15-RISKS-AND-HYPOTHESES.md) | Risk register, algorithmic safeguards, explicit assumptions, and validation experiments. |
| **16** | [The Final Strategic Question](./docs/16-FINAL-STRATEGIC-ANSWER.md) | Decisive answer: *Why choose MyCoffeeLab over existing ranking pages?* |
| **17** | [Build Specification](./docs/17-BUILD-SPECIFICATION.md) | Locked P0 pages, drink record, picture math, calculator tests, page checks, measurement, and corrected tokens. **Wins on conflict.** |
| **18** | [Implementation Plan](./docs/18-IMPLEMENTATION-PLAN.md) | What the Astro app builds, where the math lives, and which checks must pass. |
| **19** | [Motion & 3D Specification](./docs/19-MOTION-SCROLL-3D-SPEC.md) | Architectural spec for motion graphics, scroll-driven extraction scrollytelling, Three.js 3D Studio, and fluid pouring mechanics. |
| **20** | [Layer Visualization & Club Brand Identity](./docs/20-LAYER-VISUALIZATION-AND-PREMIUM-CLUB-BRANDING.md) | Creative solutions for comparison height disparity (Architectural Vitrine, Stratum Pillars, Exploded Discs) and luxury old-school club aesthetic. |
| **21** | [Guided User Journey & Simplified Calculators](./docs/21-GUIDED-JOURNEY-AND-SIMPLIFIED-CALCULATORS.md) | Dual-layer calculator architecture (Kitchen Practical vs Precision Lab), 3-question Drink Matchmaker, and glossary tooltips. |
| **22** | [Calculator Opportunity Catalog & Visual Formulations](./docs/22-CALCULATOR-OPPORTUNITY-CATALOG.md) | Exhaustive catalog of 11 new calculators (Caffeine half-life, Espresso dial-in compass, Grind microns, SCA TDS, Iced flash brew, Calorie macros, Home ROI). |
| **23** | [Motion Graphics Simulators & Caffeine Pharmacokinetics](./docs/23-MOTION-GRAPHICS-SIMULATORS-AND-CAFFEINE-SPEC.md) | Deep motion graphic architecture for the Circadian Caffeine Half-Life & Sleep Simulator, plus 5 additional coffee physics simulators. |
| **🎨** | [Design System & Palette](./docs/DESIGN-SYSTEM-PALETTE.md) | The "Roaster's Craft" color palette tokens, measured contrast, and layer visualizer hex codes. |

---

## 🏛️ Core Platform Architecture

```
mycoffeelab/
├── README.md                           # Master Project Overview & Navigation
├── .gitignore                          # Git Exclusions
├── docs/                               # Comprehensive Strategic Dossiers
│   ├── 01-EXECUTIVE-SUMMARY.md
│   ├── 02-LOCKED-KEYWORD-STRATEGY.md
│   ├── 03-COMPETITOR-LANDSCAPE.md
│   ├── 04-SERP-COMPETITIVE-ANALYSIS.md
│   ├── 05-COMPETITOR-PAGE-TEARDOWNS.md
│   ├── 06-FEATURE-GAP-MATRIX.md
│   ├── 07-USER-INTENT-AND-AUDIENCE.md
│   ├── 08-COMPETITIVE-POSITIONING.md
│   ├── 09-SEO-ARCHITECTURE-CLUSTERS.md
│   ├── 10-PRODUCT-OPPORTUNITY-MATRIX.md
│   ├── 11-TECHNICAL-FEASIBILITY.md
│   ├── 12-MONETIZATION-ANALYSIS.md
│   ├── 13-PRIORITIZED-MVP-SCOPE.md
│   ├── 14-90-DAY-EXECUTION-ROADMAP.md
│   ├── 15-RISKS-AND-HYPOTHESES.md
│   ├── 16-FINAL-STRATEGIC-ANSWER.md
│   ├── 17-BUILD-SPECIFICATION.md
│   ├── 18-IMPLEMENTATION-PLAN.md
│   └── DESIGN-SYSTEM-PALETTE.md
```

---

## Run the site

The P0 app is the Astro project in this folder. The canonical origin is the placeholder `https://mycoffeelab.example` until a domain is chosen.

```bash
npm install
npm test
npm run build
npm run dev
```

`npm test` locks the recipe math. `npm run build` also checks the 25 pages, the reverse comparison redirects, and the size budgets.

## 🚀 Key Takeaways & Strategic Verdict

1. **The Core Advantage:** The first screen shows the cup and the gram recipe. Performance passes the budgets in the build specification: LCP under 2.5 seconds on a slow mobile lab run, with a review if it is over 1.5 seconds.
2. **Defensible Against AI Overviews:** While LLMs summarize static text definitions, they cannot embed dynamic, reactive sliders or an interactive Coffee Lab inside a Google search snippet.
3. **No Heavy Fluid Simulation at Launch:** The MVP strictly utilizes lightweight procedural SVG/Canvas for 60fps mobile performance, keeping Three.js as an optional desktop visual studio.
4. **Editorial Integrity:** No annoying auto-play videos, no pop-up newsletter gates, and no deceptive volume-based measuring.
