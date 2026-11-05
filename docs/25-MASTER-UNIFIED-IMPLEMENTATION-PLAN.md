# 25. Master Unified Implementation Plan: MyCoffeeLab

**Project:** MyCoffeeLab (`mycoffeelab`)  
**Status:** Unified Master Engineering & Strategic Roadmap  
**Synthesis:** Combines all strategic dossiers, design specifications, motion architectures, and calculator plans (Docs 01 through 24) into a **single, unified, end-to-end execution blueprint**.  
**Brand Floor:** Old-School Luxury Coffee Guild & Private Atelier ("Roaster's Craft" palette: `#FAF7F2` vellum, `#171210` ink, `#C86D32` copper, `#A46830` antique brass).

---

## 1. Executive Vision & Architecture Overview

MyCoffeeLab is built as the digital world's premier **Specialty Coffee Guild & Precision Laboratory**, following the journey:  
$$\text{Discover} \longrightarrow \text{Understand} \longrightarrow \text{Experiment} \longrightarrow \text{Create}$$

The platform solves the three fatal flaws of existing coffee websites:
1. **No More Generic SEO Slop:** Replaces ad-cluttered, text-heavy blog posts with instantaneous, mass-first laboratory utilities.
2. **No More Rocket Science Math Friction:** Replaces intimidating algebra with a **Dual-Layer Interface**—welcoming beginners with everyday kitchen scoops and mugs, while preserving $0.1\,\text{g}$ precision for baristas.
3. **No More Broken Glassware Layouts:** Solves comparison height disparity through a unified **Architectural Specimen Vitrine** on a grounded brass plinth, paired with **60fps procedural fluid motion graphics** and a **Three.js 3D Coffee Studio**.

```
┌────────────────────────────────────────────────────────────────────────────┐
│ UNIFIED SYSTEM ARCHITECTURE                                                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  [ BRAND LAYER: OLD-SCHOOL LUXURY GUILD & PRIVATE ATELIER ]                │
│  • Editorial Roman Serifs (Cormorant Garamond / Newsreader)                │
│  • Warm Archival Vellum (#FAF7F2) + Roasted Cacao Ink (#171210)            │
│  • Burnished Antique Brass (#A46830) + Hand-Rubbed Copper (#C86D32)        │
│                                                                            │
│  [ INTERACTION LAYER: DUAL-TIER PROGRESSIVE DISCLOSURE ]                   │
│  • Tier A: Kitchen Practical Mode (Mugs, scoops, zero math, brew timer)   │
│  • Tier B: Precision Lab Mode (0.1g digital scale, ratios, TDS, yield)     │
│  • Guided Entry: 3-Question Drink Matchmaker & Comparison Decision Cards   │
│                                                                            │
│  [ VISUALIZATION LAYER: MULTI-TIER GRAPHICS ENGINE ]                       │
│  • Tier 1: Three.js 3D Coffee Studio (Lazy-loaded, exploded strata)        │
│  • Tier 2: 60fps Procedural SVG/Canvas Engine (Spring meniscus, waves)     │
│  • Tier 3: Reduced Motion Blueprint Mode (Instant, high-contrast, static) │
│                                                                            │
│  [ CONTENT & CALCULATOR ENGINE: HIGH-INTENT SEO ARCHITECTURE ]             │
│  • Caffeine Half-Life & Circadian Sleep Cutoff Calculator + 15 Q&As        │
│  • Core Mass-First Calculators (Brew Ratio, Espresso Dial-In, Cold Brew)   │
│  • Specimen Directory (11 drinks) & Comparative Vitrines (5 pairs)         │
│  • Full Schema.org JSON-LD (WebApplication, FAQPage, Article, Author)     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. The 8-Phase Master Execution Roadmap

```
PHASED TIMELINE OVERVIEW:

Phase 1: Foundation MVP & Live Deployment ─────────────── [ COMPLETED & LIVE ]
Phase 2: Luxury Brand Elevation & Comparison Vitrines ─── [ SPRINT 1 ]
Phase 3: The Barista Concierge & Guided Kitchen Mode ──── [ SPRINT 2 ]
Phase 4: Caffeine Half-Life Calculator & 15 Q&As ──────── [ SPRINT 3 ]
Phase 5: Dimensional Scrollytelling & Wave Motion ─────── [ SPRINT 4 ]
Phase 6: High-Intent Calculator Expansion Suite ───────── [ SPRINT 5 ]
Phase 7: Three.js 3D Coffee Studio & Teardown Island ──── [ SPRINT 6 ]
Phase 8: Performance Hardening & Production Auditing ──── [ SPRINT 7 ]
```

---

### Phase 1: Foundation MVP & Live Deployment (STATUS: COMPLETED ✅)
*Deliverables already built, verified, and running in production:*
- **25 Canonical URLs:** Full Astro static site generation with zero client framework bloat.
- **Physical Glassware Engine:** Mathematical SVG cup generator (`src/lib/cup.ts`, `src/lib/picture.ts`) adhering to SCA volumetric standards.
- **P0 Mass-First Calculators:** Ratio calculator with golden cup band, Espresso calculator with crema expansion, Cold brew jar tool.
- **Automated Validation:** 10 Vitest unit tests (`tests/model.test.ts`), budget verification script (`scripts/check-budget.mjs`), page crawler check (`scripts/check-pages.mjs`).
- **Production CI/CD:** GitHub Actions deployment live on GitHub Pages: `https://atharvamahamuni.github.io/mycoffeelab/`.

---

### Phase 2: Luxury Brand Elevation & Comparison Vitrines (SPRINT 1)
*Goal: Solve the comparison glassware height disparity and elevate the visual atmosphere to a prestigious private member's club.*

1. **Typographic Architecture Upgrade:**
   - Integrate high-contrast Roman editorial serifs (`Cormorant Garamond` / `Newsreader` via Google Fonts with system `Georgia`/`Baskerville` fallbacks).
   - Set tracked small-caps for metadata, categories, and tags: `font-feature-settings: "smcp"; letter-spacing: 0.14em; text-transform: uppercase;`.
   - Implement monospaced tabular numerals (`JetBrains Mono` / `SF Mono`) for all recipe metrics, grams, and ratios.
2. **The Architectural Specimen Vitrine Component (`src/components/ComparisonVitrine.astro`):**
   - **Shared Groundline Plinth:** Replaces the uneven `.pair` grid. Both vessels are anchored to the exact same baseline floor made of polished walnut with a burnished brass top edge (`#DF9749`).
   - **Central Metric Calibration Spine:** An etched vertical rule ($0\text{ to }300\,\text{mL}$) stands between the two glasses with millimeter ticks and Roman numerals.
   - **Height Disparity Resolved:** The demitasse ($60\,\text{mL}$) and tumbler ($300\,\text{mL}$) sit grounded side-by-side; difference in height becomes an **intentional, scientifically calibrated display of true scale**.
   - **Synchronized Recipe Ledger:** Re-aligns recipe lines below the plinth into an identical horizontal reading deck.
3. **Normalized Stratum Ratio Toggle:**
   - An interactive toggle allowing users to switch between **"Physical Scale"** (true glassware) and **"Stratum Ratio"** (two identical $220\,\text{px}$ columns showing $1:1$ vs $1:2$ vs $1:5$ ingredient proportions).
4. **Refactor Comparison Pages:**
   - Update `src/pages/compare/[pair].astro` to render all 5 canonical comparison pairs via `ComparisonVitrine.astro`.

---

### Phase 3: The Barista Concierge & Guided Kitchen Mode (SPRINT 2)
*Goal: Remove "rocket science" math friction for beginners and create an effortless, welcoming user journey.*

1. **Dual-Layer Interface for Calculators:**
   - Add a prominent mode toggle on `RatioTool.astro` and `EspressoTool.astro`:
     - **"Kitchen Practical" Mode (Default):** Select brewer (Mug, French Press, Drip Machine, V60, Aeropress) $\rightarrow$ Select cups (1 Mug, 2 Mugs, 4 Mugs) $\rightarrow$ Select strength (Light, Balanced, Bold) $\implies$ Instant kitchen answer: *"Add 2 rounded tablespoons (18.8g) and fill to the 1-mug line (300mL)"*.
     - **"Precision Lab" Mode (Toggle):** Full $0.1\,\text{g}$ scale inputs, continuous ratio sliders ($1:14\text{ to }1:18.2$), bloom water calculations, and TDS.
2. **The 3-Question "Drink Matchmaker" Quiz (`src/components/DrinkMatchmaker.astro`):**
   - Welcoming interactive wizard on homepage:
     - Q1: Milk preference? (Black / Steamed Milk / Iced / Sweet)
     - Q2: Espresso punch? (Bold & Intense / Smooth & Balanced / Subtle)
     - Q3: Foam texture? (Dense & Pillowy / Silky Microfoam / Zero Foam)
   - Matches user to their ideal drink (e.g. Cortado, Flat White, Americano) with a direct link to the recipe and ordering tips.
3. **Comparison Decision Cards (`src/components/ComparisonVerdict.astro`):**
   - Add a plain-English *"Which One Should You Choose?"* verdict box to the top of every comparison page.
4. **Interactive Glossary Tooltips (`src/components/GlossaryTooltip.astro`):**
   - Unobtrusive dotted underlines on jargon (`Dose`, `Yield`, `Ratio`, `Bloom`, `Crema`, `Microfoam`, `TDS`). Hovering or tapping reveals an instant, 1-sentence plain-English definition.
5. **Interactive Kitchen Brew Timer (`src/components/BrewTimer.astro`):**
   - Built-in visual countdown timer with subtle audio chime prompts for 45-second bloom and final drawdown.

---

### Phase 4: Flagship Caffeine Half-Life Calculator & Q&A Engine (SPRINT 3)
*Goal: Deploy the high-demand, easy-to-rank Caffeine Half-Life Calculator with structured Q&A for featured snippets.*

1. **Pharmacokinetic Math Engine (`src/lib/caffeine.ts`):**
   - 45-minute logistic absorption curve: $A(t) = \frac{C_{\text{dose}}}{1 + e^{-0.12(t - 20)}}$.
   - First-order exponential decay: $C(t) = C_{\text{peak}} \cdot (0.5)^{(t - 45)/t_{1/2}}$.
   - Multi-cup superposition stacking algorithm.
   - Drink presets: Double Espresso ($140\,\text{mg}$), Single Espresso ($65\,\text{mg}$), Drip Mug ($165\,\text{mg}$), Cold Brew ($210\,\text{mg}$), Pour Over ($150\,\text{mg}$), Decaf ($4\,\text{mg}$).
   - Metabolic profiles: Average Adult ($5.0\,\text{h}$), Fast ($3.5\,\text{h}$), Oral Contraceptives ($7.5\,\text{h}$), Pregnancy 3rd Tri ($11.0\,\text{h}$).
2. **Interactive Motion Calculator Component (`src/components/CaffeineCalculator.astro`):**
   - 24-hour horizontal circadian timeline on warm vellum.
   - Smooth cubic bezier waveform updating at 60fps.
   - Draggable brass **Bedtime Caliper Line** slicing the wave:
     - Live readout: `At 10:30 PM: 42.5 mg active caffeine`.
     - Glowing status badge: `<50 mg` (Deep REM Protected) vs `50–100 mg` (Fragmented Sleep Warning) vs `>100 mg` (High Disruption).
     - Recommended "Last Call for Coffee" cutoff calculation for tomorrow.
3. **Canonical Page Route (`src/pages/calculators/caffeine-half-life-calculator.astro`):**
   - Primary target keyword: `caffeine half life calculator`.
   - 15 high-intent Q&A clusters organized into 5 thematic accordions.
   - Complete Schema.org `WebApplication` and `FAQPage` JSON-LD structured data.

---

### Phase 5: Dimensional Scrollytelling & Wave Motion Graphics (SPRINT 4)
*Goal: Implement the "Premium Culinary Lab" motion design and dimensional scroll-craft.*

1. **4-Plane Dimensional Hero (`scroll-craft` Standard):**
   - *Plane 1 ($Z = -200\text{px}$, $0.2\times$ parallax):* Atmospheric warm lighting vignette with gentle procedural SVG steam plumes.
   - *Plane 2 ($Z = -80\text{px}$, $0.5\times$ parallax):* Precision millimeter calibration grid & SCA golden cup lines.
   - *Plane 3 ($Z = 0\text{px}$, $1.0\times$ anchor):* Realistic borosilicate glassware with specular rim highlights and contact shadow.
   - *Plane 4 ($Z = +100\text{px}$, $1.35\times$ parallax):* Floating tactile HUD badges (`18.0g Dose`, `36.0g Yield`, `1:2.0 Ratio`, `9.2% TDS`) reacting to pointer movement.
2. **Signature Move: "The Extraction & Pour Scrollytelling" (`src/components/ScrollyPour.astro`):**
   - The scroll wheel acts as an extraction scrubber across 5 acts:
     - *Act 1 (0–20%):* Tamp 18.0g dry grounds into $11.5\,\text{mm}$ puck.
     - *Act 2 (20–45%):* $2.5\,\text{bar}$ Pre-infusion & $\text{CO}_2$ bloom release.
     - *Act 3 (45–75%):* $9.0\,\text{bar}$ Golden stream extraction into demitasse with hazelnut crema convection swirl.
     - *Act 4 (75–90%):* Pitcher tilts down, velvety milk folds into body, silky microfoam cap forms.
     - *Act 5 (90–100%):* Payoff — liquid layers explode vertically along Y-axis with dimensional callout lines.
3. **Damped Harmonic Meniscus Spring Physics (`src/lib/spring.ts`):**
   - Mathematical spring oscillator ($\zeta = 0.70, \omega_n = 3.8\,\text{Hz}$) integrated into all SVG liquid cups. Changing volume sliders triggers natural liquid wave settling ($\approx 380\,\text{ms}$) with zero rigid cutoffs.

---

### Phase 6: High-Intent Calculator Expansion Suite (SPRINT 5)
*Goal: Deploy high-volume, high-utility tools identified in the opportunity catalog.*

1. **The Espresso "Dial-In" Diagnostic Compass (`/calculators/espresso-dial-in-calculator/`):**
   - 2D sensory radar compass (Sour/Fast $\longleftrightarrow$ Balanced $\longleftrightarrow$ Bitter/Choked) with an animated rotating brass grinder dial prescribing exact grind/dose adjustments.
2. **Universal Coffee Grind Size & Burr Micron Chart (`/calculators/coffee-grind-size-chart/`):**
   - Visual particle texture ruler with synchronized dials for Baratza Encore, Fellow Ode Gen 2, Comandante C40, 1Zpresso, Timemore, and Niche Zero.
3. **Iced Coffee & "Flash Brew" Ice Dilution Calculator (`/calculators/iced-coffee-calculator/`):**
   - Thermal mass equilibrium splitting water into $60\%$ hot brewing water and $40\%$ ice in the carafe, with melting ice cube animations.
4. **Coffee Calories & Macronutrient Builder (`/calculators/coffee-calorie-calculator/`):**
   - Layered glass cross-section dynamically calculating calories and macronutrients (protein, fats, carbs, sugars) across milk alternatives and syrups.
5. **Home Barista vs Café Financial ROI Break-Even Calculator (`/calculators/espresso-machine-roi-calculator/`):**
   - Interactive financial payback curve showing the exact calendar day home equipment pays for itself.

---

### Phase 7: Three.js 3D Coffee Studio Island (SPRINT 6)
*Goal: Build the interactive 3D glassware simulator and exploded cutaway teardown.*

1. **Three.js Island Architecture (`src/components/CoffeeStudio3D.astro`):**
   - Isolated, lazy-loaded chunk loaded on user click via dynamic `import("./studio3d")` (keeping core HTML payload under $15\,\text{KB}$).
   - Three.js tree-shaking (importing only `WebGLRenderer`, `Scene`, `PerspectiveCamera`, `MeshPhysicalMaterial`, `OrbitControls`).
2. **Parametric Glassware Meshes (`src/lib/studio3d/glassware.ts`):**
   - Lathe geometries for Espresso Demitasse ($60\,\text{mL}$), Gibraltar Cortado ($135\,\text{mL}$), Cappuccino Tulip ($180\,\text{mL}$), and Latte Picardie ($220\text{--}300\,\text{mL}$).
3. **PBR Glass & Volumetric Liquid Shaders:**
   - Borosilicate glass: `transmission: 0.96`, `ior: 1.50`, `thickness: 2.2mm`, specular highlights.
   - Espresso & milk: Subsurface absorption shaders with amber edge glow and noise-mapped microfoam tops.
4. **The Exploded Cutaway Mode ("The Coffee Teardown"):**
   - Tapping "Explode Layers" animates strata vertically (Microfoam $+85\,\text{mm}$, Milk $+40\,\text{mm}$, Espresso $0\,\text{mm}$).
   - 3D-to-2D projected leader lines dynamically track layers on screen, displaying live volume, temperature, and physical density.
5. **Multi-Tier Progressive Fallback:**
   - WebGL2 capable devices run full 3D studio.
   - Mobile battery-saver mode falls back seamlessly to the Tier 2 high-DPI 2D procedural SVG engine.

---

### Phase 8: Performance Hardening, Auditing & Ongoing SEO (SPRINT 7)
*Goal: Ensure uncompromising quality, zero layout shifts, and absolute accessibility.*

1. **Hard Performance Budgets:**
   - Initial HTML $\le 15\,\text{KB}$ gzipped.
   - Critical path CSS $\le 8\,\text{KB}$ gzipped.
   - Cumulative Layout Shift: $\text{CLS} = 0.00$.
   - Frame rate locked at $60\,\text{fps}$ on 4x CPU throttle.
2. **Strict Reduced Motion Compliance:**
   - Full `@media (prefers-reduced-motion: reduce)` overrides: instant state transitions, static architectural exploded blueprint views, and zero looping steam/waves.
3. **Automated Testing & Discovery:**
   - Expand `tests/model.test.ts` to cover pharmacokinetic decay math, dial-in vectors, and calorie computations.
   - Verify all 30+ URLs in `scripts/check-pages.mjs`.
   - Update `sitemap.xml`, `llms.txt`, and `ai.txt` with new calculator routes.

---

## 3. Immediate Sprint 1 Execution Checklist

To begin execution immediately, the first three tasks of **Sprint 1 & Sprint 2** are:

- [ ] **Task 1.1:** Upgrade `src/styles/global.css` with Google Fonts editorial serifs (`Cormorant Garamond` / `Newsreader` + `JetBrains Mono`), tracked small-caps, and warm vellum double-rules.
- [ ] **Task 1.2:** Build `src/components/ComparisonVitrine.astro` with the grounded brass plinth, central metric calibration spine ($0\text{--}300\,\text{mL}$), and normalized stratum ratio toggle.
- [ ] **Task 1.3:** Update `src/pages/compare/[pair].astro` to render comparisons inside the new vitrine, eliminating the glass height disparity.
- [ ] **Task 2.1:** Implement `src/lib/caffeine.ts` and `src/components/CaffeineCalculator.astro` with the 24-hour motion clearance wave.
- [ ] **Task 2.2:** Deploy `/calculators/caffeine-half-life-calculator/` with all 15 Q&A clusters and `FAQPage` schema.

---

## 4. Summary

This Master Plan bridges scientific precision, old-school luxury craft, and effortless usability. By uniting our strategic research, motion design, layer visualization, and high-intent calculator catalog into this single phased framework, MyCoffeeLab is poised to become the definitive specialty coffee destination on the web.
