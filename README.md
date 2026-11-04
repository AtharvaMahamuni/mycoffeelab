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
* **Brand Voltage (Crema Amber):** `#C86D32` — Warm, caramelized golden amber of a freshly pulled espresso shot.
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
| **🎨** | [Design System & Palette](./docs/DESIGN-SYSTEM-PALETTE.md) | The "Roaster's Craft" color palette tokens, contrast ratings, and layer visualizer hex codes. |

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
│   └── DESIGN-SYSTEM-PALETTE.md
```

---

## 🚀 Key Takeaways & Strategic Verdict

1. **The Core Advantage:** We win by removing the 3,000-word ad-cluttered fluff and delivering **instant visual answers** (interactive 2D glass cross-sections) and **precision mass calculators (grams)** that load in under 1 second on mobile.
2. **Defensible Against AI Overviews:** While LLMs summarize static text definitions, they cannot embed dynamic, reactive sliders or an interactive Coffee Lab inside a Google search snippet.
3. **No Heavy Fluid Simulation at Launch:** The MVP strictly utilizes lightweight procedural SVG/Canvas for 60fps mobile performance, keeping Three.js as an optional desktop visual studio.
4. **Editorial Integrity:** No annoying auto-play videos, no pop-up newsletter gates, and no deceptive volume-based measuring.
