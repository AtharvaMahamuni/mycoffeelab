# 23. Motion Graphics Simulators: Caffeine Pharmacokinetics & Coffee Physics

**Project:** MyCoffeeLab (`mycoffeelab`)  
**Status:** Interactive Motion Graphics & Physics Simulation Specification  
**Authority:** Follows `DESIGN.md` (Roaster's Craft palette), `motion-design` (60fps, 3-layer motion), and `teardown` skill standards.  
**Objective:** Detail the graphical architecture, mathematical models, and motion choreography for the **Caffeine Half-Life & Circadian Sleep Simulator**, plus five additional motion-rich coffee simulators.

---

## 1. The Caffeine Half-Life & Sleep Quality Motion Simulator

### 1.1 The User Need & Scientific Foundation
Millions of people love coffee but struggle with insomnia, 3 PM energy crashes, or sleep latency. They want to answer:
- *"I had a double espresso at 8:30 AM and an iced latte at 2:00 PM. How many milligrams of caffeine are in my blood right now?"*
- *"If I go to bed at 10:30 PM, will there still be enough caffeine in my brain to ruin my deep REM sleep?"*
- *"What is my exact 'Last Call for Coffee' today?"*

#### The Pharmacokinetic Model
1. **Bioavailability & Absorption Curve (0 to 45 minutes):**
   Caffeine absorption follows an S-curve (logistic/sigmoid curve) reaching peak plasma concentration ($C_{\max}$) between $30\text{--}60\,\text{minutes}$:
   $$A(t) = \frac{C_{\text{dose}}}{1 + e^{-k_a (t - t_{\text{mid}})}}$$
   Where $k_a \approx 0.12\,\text{min}^{-1}$ and $t_{\text{mid}} \approx 20\,\text{min}$.
2. **First-Order Elimination Kinetics (Decay Curve):**
   Once peak is reached ($t \ge 45\,\text{min}$), elimination follows an exponential half-life decay:
   $$C(t) = C_{\text{peak}} \cdot \left(\frac{1}{2}\right)^{\frac{t - t_{\text{peak}}}{t_{1/2}}}$$
   Where $t_{1/2}$ is the biological half-life:
   - *Fast Metabolizers (CYP1A2 1A/1A allele):* $t_{1/2} \approx 3.5\,\text{hours}$.
   - *Average Adult:* $t_{1/2} \approx 5.0\,\text{hours}$.
   - *Slow Metabolizers (CYP1A2 1F allele, oral contraceptives, pregnancy):* $t_{1/2} \approx 7.0\text{--}9.5\,\text{hours}$.
3. **The Multi-Dose Superposition Wave:**
   When multiple drinks are consumed throughout the day, the curves linearly stack:
   $$C_{\text{total}}(t) = \sum_{i=1}^{N} C_i(t - T_i) \cdot \mathcal{H}(t - T_i)$$
   Where $T_i$ is the consumption timestamp and $\mathcal{H}$ is the Heaviside step function.

---

### 1.2 The Motion Graphic & Visual Architecture

```
THE CIRCADIAN CAFFEINE TIMELINE (Roaster's Craft Vellum & Burnished Brass)
┌────────────────────────────────────────────────────────────────────────────┐
│  ✦ CIRCADIAN CAFFEINE SPECTRUM ✦                     MY BEDTIME: 10:30 PM  │
│  Current Active Level: 74 mg                         At Pillow: 42 mg (OK) │
├────────────────────────────────────────────────────────────────────────────┤
│ 200mg ─┐                                                                   │
│        │        Peak: 172 mg                                               │
│ 150mg ─┤       ╭───╮  [Drink 2 Plunge +85mg]                               │
│        │      ╭╯   ╰╮       ╭──╮                                           │
│ 100mg ─┤     ╭╯     ╰───────╯  ╰╮                                          │
│        │    ╭╯                  ╰╮       [ BEDTIME CALIPER LINE: 10:30 PM ]│
│  50mg ─┼───╭╯────────────────────╰───────┼───────────── [Safe Sleep Line]─ │
│        │  ╭╯                             │   ▲ 42 mg remaining             │
│   0mg ─┴──┴────────┴────────┴────────────┴───┼─────────┴───────────────────│
│       6 AM        9 AM     12 PM        3 PM │ 6 PM    9 PM     12 AM      │
│       [+ 8:00 AM Espresso]  [+ 1:30 PM Cold Brew]                          │
├────────────────────────────────────────────────────────────────────────────┤
│  STATUS: ✦ DEEP REM SLEEP UNLOCKED ✦ (Under 50 mg threshold at bedtime)    │
└────────────────────────────────────────────────────────────────────────────┘
```

#### Layer 1: The Circadian Liquid Wave Ribbon
- Rendered on warm archival vellum (`#FAF7F2`) with a graduated golden-amber fluid ribbon (`#C86D32` to `#E29547`).
- The timeline runs horizontally across 24 hours, transitioning through morning daylight, warm golden hour, twilight, and deep espresso night (`#171210`).
- The wave is drawn as a smooth cubic bezier spline that dynamically updates at 60fps.

#### Layer 2: The "Cup Injection" Plunge Motion
- When the user taps a drink badge (e.g. `[ + Double Espresso at 8:00 AM ]` or `[ + Cold Brew at 1:30 PM ]`):
  1. **Drop Plunge:** A luminous amber droplet drops vertically with gravitational acceleration ($v = \sqrt{2gh}$) and plunges into the timeline at the selected hour.
  2. **Fluid Wave Surge:** A concentric fluid ripple expands from the impact point, and the caffeine curve surges upward in an organic, animated wave over $400\,\text{ms}$ (`cubic-bezier(0.2, 0.8, 0.2, 1)`).
  3. **Multi-Wave Folding:** If a second cup is added, the new absorption wave seamlessly rises and combines with the residual caffeine curve without visual jank.

#### Layer 3: The Interactive Bedtime Laser Caliper
- A vertical brass caliper rule with an engraved knob can be dragged freely across the evening hours.
- As the caliper sweeps across the timeline, a real-time laser crosshair tracks the caffeine wave:
  - It reads out the exact milligrams remaining at head-on-pillow time: `At 10:30 PM: 42 mg`.
  - A glowing status seal reacts dynamically:
    - **Amber Seal (`<50 mg`):** *"✦ Deep Sleep Protected ✦ Minimal sleep latency impact"*.
    - **Copper Warning (`50–100 mg`):** *"✦ Fragmented REM Warning ✦ Estimated 25-minute delay to deep sleep"*.
    - **Pulsing Roast Alarm (`>100 mg`):** *"✦ Severe Sleep Disruption ✦ High nocturnal awakening risk"*.

#### Layer 4: The Adenosine Receptor Micro-Animation ("Why We Crash")
- An expandable microscopic view beneath the graph reveals an animated synaptic cleft:
  - **Rest State:** Blue hexagonal Adenosine molecules (sleep pressure) float toward receptor locks.
  - **Caffeinated State:** Amber caffeine molecules physically dock into the receptors, acting as competitive antagonists. The adenosine molecules bounce off harmlessly—explaining why fatigue vanishes.
  - **The 3 PM Crash:** As the half-life decays, the caffeine molecules dissolve, and all the accumulated backlog of adenosine rushes into the receptors simultaneously—visually showing why afternoon crashes occur!

---

## 2. Five Other Captivating Coffee Motion Simulators

Beyond caffeine pharmacokinetics, five core coffee extraction and preparation mechanisms can be turned into visually stunning motion graphics.

```
┌────────────────────────────────────────────────────────────────────────────┐
│ MOTION GRAPHIC SIMULATORS CATALOG                                          │
├──────────────────────────┬─────────────────────────┬───────────────────────┤
│ 1. THE 9-BAR PUCK FLOW   │ 2. THE VOLATILE RAINBOW │ 3. FLASH BREW MELT    │
│ Fluid micro-flow through │ Temperature-dependent   │ Thermal equilibrium   │
│ grounds: Channeling vs   │ aroma compound release  │ ice melting kinetics  │
│ Laminar Saturation       │ during extraction       │ in Chemex carafe      │
├──────────────────────────┼─────────────────────────┼───────────────────────┤
│ 4. MAILLARD BEAN ENGINE  │ 5. MICROFOAM VORTEX     │ 6. COLD BREW DIFFUSION│
│ Thermodynamics of green  │ Hydrodynamics of milk   │ 24-hour osmotic plume │
│ bean swelling & First    │ folding & latte art     │ leaching time-lapse   │
│ Crack steam pop          │ surface tension spread  │ in glass jar          │
└──────────────────────────┴─────────────────────────┴───────────────────────┘
```

---

### Concept 2: The 9-Bar Espresso Puck Micro-Flow Simulator ("Inside the Portafilter")
*Visualizes what happens inside the compressed coffee grounds under 9 bars of pressure.*

* **The Physics:**
  - Darcy's Law for fluid flow through porous media:
    $$Q = -\frac{k \cdot A}{\mu} \frac{\Delta P}{L}$$
    Where $k$ is bed permeability, $\mu$ is water viscosity, $\Delta P = 9\,\text{bar}$, and $L = 11.5\,\text{mm}$ puck depth.
* **The Motion Graphic:**
  - Cross-section of a bottomless portafilter basket filled with microscopic coffee particles.
  - User toggles between two states:
    1. **Even Extraction (WDT & Precision Tamp):** Pressurized water ($93^\circ\text{C}$) enters the bed. Water creeps uniformly downward in laminar golden sheets. All grounds darken evenly, and twin viscous honey streams converge at the center of the basket.
    2. **Channeling & Fissures (Uneven Tamp / Clumping):** Water finds micro-cracks of low resistance. High-velocity turbulent jet streams fracture through the puck, blasting pale, sour underextracted water through the channel while leaving adjacent dense pockets dry and bitter.
  - **Sensory Meter:** Live dials for *Astringency*, *Sweetness*, and *Crema Thickness* fluctuate based on puck prep sliders.

---

### Concept 3: The Chemical Extraction Volatile Spectrum ("The Flavor Rainbow at 93°C")
*Visualizes the chemical race that takes place over the 30 seconds of an espresso shot.*

* **The Chemistry:**
  - Coffee compounds extract at radically different dissolution rates:
    1. **Phase 1 (0–8s — Bright & Sour):** Rapid dissolution of polar organic fruit acids (Citric, Malic, Quinic acids) and volatile floral aldehydes.
    2. **Phase 2 (8–22s — Sweet & Balanced):** Lipids, melanoidins, trigonelline, and caramelized sucrose extract, providing syrupy body and honey sweetness.
    3. **Phase 3 (22–35s+ — Dry & Bitter):** Heavy chlorogenic acid lactones, phenylindanes, and pyrazines leach out, yielding dry ash and bitter woody tones.
* **The Motion Graphic:**
  - A vertical fluid extraction column with a scrubbable timeline slider ($0\text{ to }40\,\text{seconds}$).
  - As the user scrubs through time:
    - The streaming liquid changes color dynamically: from pale chartreuse/gold ($0\text{--}8\,\text{s}$) $\rightarrow$ rich viscous hazelnut amber ($8\text{--}22\,\text{s}$) $\rightarrow$ watery yellow-grey ($25\text{--}35\,\text{s}$).
    - Floating animated molecular badges pop out with sensory descriptions: *[Citric Brightness]* $\rightarrow$ *[Toffee & Cocoa Core]* $\rightarrow$ *[Astringent Tannins]*.
  - Demonstrates why stopping the shot at 27 seconds produces sweetness, while letting it run to 45 seconds ruins the cup.

---

### Concept 4: The Roasting "First Crack & Maillard" Thermodynamic Engine
*Visualizes the thermodynamic transformation of a single green coffee bean inside a roaster drum.*

* **The Chemistry:**
  - Endothermic drying $\rightarrow$ Exothermic Maillard caramelization $\rightarrow$ Steam vaporization pressure causing cellular burst ("First Crack").
* **The Motion Graphic:**
  - A photorealistic 3D / vector bean hovering over a hot drum hearth.
  - As user scrubs temperature from $20^\circ\text{C}$ to $225^\circ\text{C}$:
    - **$100^\circ\text{C}$ (Drying):** Bean changes from jade green to pale straw; translucent steam plumes evaporate.
    - **$150^\circ\text{C}$ (Maillard Reaction):** Bean turns golden yellow to cinnamon tan; aromatic volatile rings radiate outward.
    - **$200^\circ\text{C}$ (First Crack!):** The bean physically swells by $60\%$ in volume, micro-fractures in the center furrow violently open, and an audible pop with a steam shockwave releases!
    - **$215^\circ\text{C}$ (Development):** The bean deepens into dark chocolate with glistening surface lipid drops.

---

### Concept 5: The "Flash Brew" Ice-Melting Thermal Diffusion Chamber
*Visualizes the thermodynamic beauty of brewing hot Japanese-style iced coffee directly onto ice.*

* **The Physics:**
  - Latent heat of ice fusion ($L_f = 334\,\text{J/g}$) rapidly quenches hot brew ($93^\circ\text{C}$) to $4^\circ\text{C}$ in seconds, trapping delicate floral volatiles that otherwise evaporate.
* **The Motion Graphic:**
  - A clear glass Chemex carafe filled with floating, faceted 3D ice cubes.
  - Streaming hot golden pour-over coffee trickles through the cone onto the ice.
  - Ice cubes realistically melt, bob upward with Archimedes buoyant forces, and dilute the concentrated hot brew into chilled, crisp nectar with zero oxidation.

---

### Concept 6: The Milk Hydrodynamics & Microfoam Folding Sandbox
*Visualizes the fluid dynamics of latte art: why milk sometimes dives and sometimes floats.*

* **The Fluid Dynamics:**
  - **Kinetic Momentum vs Surface Tension:**
    - High-velocity stream from $10\,\text{cm}$ height $\implies$ momentum pierces the surface crema, diving to the bottom and lifting the drink body.
    - Low-velocity pour from $5\,\text{mm}$ height $\implies$ surface tension dominates; dense microfoam ($0.35\,\text{g/cm}^3$) floats on top of espresso ($1.02\,\text{g/cm}^3$).
* **The Motion Graphic:**
  - An interactive pouring sandbox where user tilts a milk pitcher:
    - Pitcher height slider ($10\,\text{cm}$ high pour vs $1\,\text{cm}$ low pour).
    - Pouring high: white plumes fold beneath the brown surface.
    - Pouring low: crisp white microfoam spreads radially across the crema.
    - User drags a "Cut" swipe to draw a Heart or Rosetta with real fluid wave wake trails!

---

## 3. Implementation Phasing & Integration

| Tool | Technical Stack | Primary Benefit |
| :--- | :--- | :--- |
| **Caffeine Circadian Simulator** | SVG Cubic Bezier + Vanilla TS ($<4\,\text{KB}$) | Mass consumer health hook, viral sharing, high SEO value. |
| **Espresso Puck Channeling** | HTML5 Canvas 2D Particle Engine | The holy grail visualizer for Reddit r/espresso troubleshooters. |
| **Chemical Volatiles Spectrum** | CSS Gradients + Morphing SVG Paths | Demonstrates extraction science with zero math friction. |
| **Flash Brew Ice Chamber** | SVG Spline + Thermal Physics Math | Engaging summer seasonal brewing tool. |

---

## 4. Summary

Turning coffee science into **living motion graphics** elevates MyCoffeeLab into an unmatched digital atelier.  
The **Caffeine Circadian Simulator** is the clear flagship candidate: it is universally relevant, scientifically backed, visually gorgeous on the Roaster's Craft palette, and provides an immediate answer to everyday sleep and energy health questions.
