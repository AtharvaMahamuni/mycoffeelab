# 06. Feature and Experience Gap Matrix

**Methodology:** Direct comparative benchmarking of proposed MyCoffeeLab capabilities against the competitive landscape.  
**Validation Standard:** Features are validated against concrete user problems rather than novelty alone.

---

## 1. Capability Benchmarking Table

| Capability | Competitor Coverage | Opportunity for Us | User Value Assessment |
| :--- | :--- | :--- | :--- |
| **Coffee type discovery** | High (TasteAtlas, WebstaurantStore, Wikipedia). Competitors offer text lists and basic category tags. | Build a visual, filterable taxonomic grid with instant sensory filters (e.g., "High Caffeine", "Milk-Forward", "Iced", "Zero Bitter"). | **High:** Reduces cognitive fatigue when choosing or exploring new drinks. |
| **Coffee drink encyclopedia** | Very High. Saturated with repetitive 2,000-word SEO articles. | Provide concise, scannable, barista-verified dossiers with interactive cross-sections instead of walls of text. | **High:** Instant access to exact drink parameters without ad clutter. |
| **Ingredient breakdown** | Moderate. Articles list generic percentages (e.g., "1/3 espresso, 1/3 milk, 1/3 foam"). | Display precision mass (grams) and volumetric ratios with liquid density breakdown. | **High:** Essential for home replication. |
| **Visual composition** | Low to Moderate. Limited to flat 2D graphic posters (static JPEGs) or stock photos. | Dynamic SVG/Canvas animated liquid layers that visually adjust when parameters change. | **Very High:** Immediate spatial comprehension of beverage ratios. |
| **3D visualisation** | Near Zero. No mainstream coffee educational website offers real-time 3D drink exploration. | Interactive Three.js/WebGL glassware visualizer allowing 360-degree rotation and inspection of crema, emulsion, and layers. | **High (Desktop/Tablet):** Exceptional engagement and shareability. |
| **Exploded ingredient view** | Zero in digital web apps; occasionally found in static Pinterest infographics. | An interactive "Dissect Drink" button that pulls layers apart vertically with animated dimension markers showing exact gram weights. | **High:** Demystifies confusing drinks like flat whites and macchiatos instantly. |
| **Preparation animations** | Low. Limited to embedded YouTube video clips. | Lightweight, procedural CSS/Canvas step-by-step animations (e.g., espresso pouring, milk steaming, microfoam folding). | **Moderate:** High visual appeal; must be skippable so it doesn't slow down power users. |
| **Interactive coffee builder** | Near Zero. A few novelty iOS toys exist, but no major web-based interactive builder with SEO indexation. | The **Coffee Lab**: Drag-and-drop or slider-based builder where users assemble drinks, calculate total caffeine, liquid volume, and calorie profile in real time. | **Very High:** Drives repeat visits, experimentation, and social sharing. |
| **Live recipe adjustments** | Zero on web media; rudimentary in native apps like Beanconqueror. | Real-time reactive sliders: Adjust dose from 16g to 20g and watch water, yield, and microfoam requirements recalculate instantaneously. | **Very High:** Solves daily kitchen-counter dialing-in friction. |
| **Coffee comparisons** | Moderate in text; low in visual presentation. Many "X vs Y" articles exist with static tables. | Interactive side-by-side comparison engine: Compare any two drinks (e.g., Cortado vs Flat White) with synchronized dimensional cross-sections and sensory profiles. | **Very High:** Directly captures high-intent comparison search queries. |
| **Coffee calculators** | Moderate (Honest Coffee Guide, Omni Calculator). Highly functional but visually bare or ad-infested. | Fast, mass-based (grams) calculators with visual water volume, bloom timers, and pulse-pour breakdowns. | **Critical:** Core utility driving organic backlinks and daily repeat retention. |
| **Brewing education** | High in text and YouTube videos; fragmented across platforms. | Structured, bite-sized visual brewing cards connecting grind size, water temp, dose, and pour technique. | **High:** Builds topical authority and search trust. |
| **Espresso science** | Niche (Barista Hustle, James Hoffmann). Highly technical or locked in paywalls. | Visual dial-in simulator: "Tasting too sour? Slide your yield to the right and watch the extraction balance normalize." | **Very High:** Translates elite barista physics into approachable home advice. |
| **Mobile-first interaction** | Poor across ad-cluttered media blogs; good on dedicated native apps. | Clean, touch-optimized web interface designed for one-handed thumb use on kitchen counters next to an espresso machine. | **Critical:** Over 70% of brewing searches occur on mobile devices. |
| **Save and share creations** | Zero on web informational sites. | LocalStorage recipe saving and one-click URL sharing (e.g., `mycoffeelab.com/lab?dose=18&yield=38&milk=120`). | **High:** Sparks viral community sharing on Reddit and social platforms. |

---

## 2. Granular Gap Synthesis

### A. What Competitors Execute Exceptionally Well
* **Encyclopedic Keyword Breadth:** Competitors like *WebstaurantStore* and *TasteAtlas* cover virtually every beverage name in existence, earning vast long-tail search footprints.
* **Calculation Math Precision:** *Honest Coffee Guide* executes mathematically sound ratio formulas for 18 specific brewing appliances without volumetric ambiguity.
* **Scientific Authority:** *Barista Hustle* sets the gold standard for extraction physics (TDS, EY %, water chemistry).

### B. What Competitors Implement Poorly
* **Mobile Kitchen Ergonomics:** Most top-ranking pages are disastrous to use with flour or coffee grounds on your hands. Dense text, accidental clicks on banner ads, and tiny input fields frustrate users.
* **Volume vs. Mass Confusion:** Hundreds of ranking pages still recommend "2 tablespoons per cup" or "2 fluid ounces of espresso," ignoring bean density and crema displacement.
* **Generic Ad Intrusion:** Heavy programmatic display advertising ruins time-to-value for simple utility queries.

### C. What Is Missing Across the Entire Market
* **Unified Spatial Learning:** Nowhere can a user see a drink's physical layers, adjust the recipe, see the sensory impact, and get the brewing recipe in a single seamless interface.
* **Instant Visual "X vs Y" Comparison Engine:** No platform allows users to dynamically slide two drinks side-by-side to visually inspect the difference in glass size, espresso concentration, and microfoam texture.

### D. Features That Users Genuinely Value vs. Vanity Traps

```
┌────────────────────────────────────────────────────────────────────────┐
│                      FEATURE VALUE MATRIX                              │
├──────────────────────────────────┬─────────────────────────────────────┤
│   GENUINELY VALUED BY USERS      │    VANITY TRAPS (AVOID AT MVP)      │
├──────────────────────────────────┼─────────────────────────────────────┤
│ • Zero-ad, instant mass (grams)  │ • Complex WebGL fluid dynamics and  │
│   calculators.                   │   Eulerian smoke/steam simulations  │
│ • Side-by-side visual drink      │   (burns mobile GPU and battery).   │
│   cross-sections.                │ • AI chatbot generating rambling    │
│ • "Sour vs Bitter" dial-in       │   generic recipe text.              │
│   troubleshooter with sliders.   │ • Mandatory user account creation   │
│ • One-click recipe URL sharing.  │   before accessing calculators.     │
│ • Visual grind size comparison   │ • 3D graphics that block content    │
│   with real-world scale (salt).  │   rendering on slow 4G connections. │
└──────────────────────────────────┴─────────────────────────────────────┘
```
