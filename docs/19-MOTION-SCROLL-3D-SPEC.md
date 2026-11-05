# 19. Motion Graphics, Dimensional Scroll & 3D Explorer Specification

**Project:** MyCoffeeLab (`mycoffeelab`)  
**Status:** Architecture & Motion Specification  
**Authority:** Follows `DESIGN.md` (Roaster's Craft palette), `motion-design` skill, `scroll-craft` skill, and `teardown` skill.  
**Audience:** Frontend Engineers, 3D WebGL Developers, Motion Designers, and Technical SEO Evaluators.

---

## 1. Executive Motion & Experience Vision

MyCoffeeLab is not an informational blog with static clipart; it is a **precision culinary lab for coffee science and craft**. The user experience follows the progression:  
$$\text{Discover} \longrightarrow \text{Understand} \longrightarrow \text{Experiment} \longrightarrow \text{Create}$$

To elevate the platform from functional calculators into a memorable, world-class digital flagship, this specification designs three interconnected experiential layers:
1. **Motion Graphics & Micro-interactions:** Tactile, dignified physics that make sliders, dials, and liquid levels feel like physical laboratory apparatus.
2. **Dimensional Scrollytelling (Scroll-Craft):** Multi-plane depth with scroll-scrubbed extraction and pour storytelling, replacing generic diorama animations with tactile, photographic realism.
3. **Interactive 3D Coffee Explorer / Studio:** A WebGL/Three.js physical glassware simulator with realistic liquid refraction, volumetric illumination, and an **exploded cutaway mode** that separates liquid strata along the vertical axis with live laboratory readouts.
4. **Liquid Pouring Motion Physics:** Viscous espresso extraction streams, microfoam turbulence, and damped harmonic meniscus oscillation.

### 1.1 Brand Motion Archetype: "Premium Culinary Lab"

Following the `motion-design` skill framework, MyCoffeeLab adopts the **Premium** motion archetype, blended with physical fluid mechanics:

| Parameter | Specification | Rationale |
| :--- | :--- | :--- |
| **Motion Archetype** | **Premium** (High dignity, fluid deceleration, zero cartoon bounce) | Coffee extraction is a deliberate, artisanal, thermodynamic process. |
| **Signature Easing** | `cubic-bezier(0.4, 0.0, 0.2, 1.0)` | Smooth deceleration curve that feels authoritative and natural. |
| **Spring Damping** | Damping ratio $\zeta = 0.70$, Frequency $\omega_n = 4.0\,\text{Hz}$ | Critical liquid damping: prevents jarring oscillation while giving liquid surface tension life. |
| **Fluid Scale** | $1.5\times$ base UI duration | Viscous liquids (dense espresso, textured whole milk) move slower than rigid UI panels. |
| **Max Overshoot** | $3\text{--}5\%$ on liquid meniscus, $0\%$ on layout cards | Liquids have slight meniscus tension bounce; layout elements have zero overshoot. |

### 1.2 Duration Palette

Every animation across the site adheres to a three-tier duration palette:

```
┌────────────────────────────────────────────────────────────────────────┐
│ DURATION PALETTE                                                       │
├────────────────────────────────┬───────────────────────────────────────┤
│ Quick (120ms - 180ms)          │ Button presses, toggles, tooltips,    │
│                                │ magnetic slider tick snaps             │
├────────────────────────────────┼───────────────────────────────────────┤
│ Standard (320ms - 400ms)       │ Card expansion, drawer slide, drink   │
│                                │ switch cross-fade, exploded layer     │
├────────────────────────────────┼───────────────────────────────────────┤
│ Fluid / Pour (600ms - 1200ms)  │ Espresso stream flow, milk pouring,   │
│                                │ meniscus leveling, scrollytelling scrub│
└────────────────────────────────┴───────────────────────────────────────┘
```

### 1.3 The Three Motion Layers

Flat animation occurs when an interface animates only one property. MyCoffeeLab mandates three simultaneous motion layers:
1. **Primary Layer:** The focal liquid volume change, stream pour, or exploded mesh translation.
2. **Secondary Layer:** Meniscus surface curvature, creeping rim reflection, floating ratio label leader lines, and drop-shadow deformation.
3. **Ambient Layer:** Gentle convective steam wisps rising from hot espresso, subtle warm lighting shift across glassware, and micro-vibration on high-yield extraction.

---

## 2. Visual Palette & Craft Guardrails

Per workspace rules and `docs/DESIGN-SYSTEM-PALETTE.md`, MyCoffeeLab strictly operates within the **Roaster's Craft** color system. The generic Cursor Orange (`#f54e00`) is **strictly forbidden**.

```css
:root {
  /* Canvas & Ground */
  --color-canvas: #FBF8F4;        /* Warm oat milk background */
  --color-canvas-subtle: #F4EFEA; /* Slightly deeper cream for inset trays */
  --color-card-bg: #FFFFFF;       /* Crisp white surface for contrast */
  
  /* Ink & Typography */
  --color-ink: #1A1412;           /* Deep dark roast ink */
  --color-ink-muted: #64564E;     /* Medium roast body text */
  --color-ink-faint: #96867D;     /* Micro labels and scale units */
  
  /* Roaster Accents */
  --color-accent-copper: #9A4316; /* Primary call-to-action & portafilter brass */
  --color-accent-hover: #7C3410;  /* Pressed state */
  --color-crema: #C86D32;         /* Rich golden hazelnut crema */
  --color-crema-light: #E29547;   /* Crema highlight / tiger striping */
  
  /* Liquids & Ingredients */
  --liquid-espresso: #28160C;     /* Deep double shot extraction */
  --liquid-coldbrew: #3D2214;     /* Cold brew concentrate */
  --liquid-milk: #F3ECE1;         /* Steamed whole milk (65°C) */
  --liquid-foam: #FDFBF7;         /* Velvety microfoam cap */
  --liquid-water: #E1ECF4;        /* Hot brewing water (93°C) */
  --liquid-chocolate: #1E0F07;    /* Mocha ganache sauce */
  
  /* Borders & Hairlines */
  --hairline-warm: #E6DED6;       /* 1px precision dividers */
  --hairline-focus: #9A4316;      /* 2px accessible focus ring */
}
```

---

## 3. Dimensional Hero Experience (`scroll-craft` Standard)

Following the `scroll-craft` skill, the homepage hero is engineered as a **four-plane dimensional stage** rather than a flat banner. It creates genuine spatial depth through physical parallax, occlusion, and lighting contrast.

```
VIEWPORT TOP
┌────────────────────────────────────────────────────────────────────────┐
│ LAYER 1: ATMOSPHERE                                                    │
│ [Soft radial lighting vignette + 2D particle convective steam]        │
│                                                                        │
│ LAYER 2: MEASUREMENT CALIBRATION GRID                                  │
│ [Volumetric tick marks (0 to 300 mL), ratio grid 1:1 to 1:18]          │
│                                                                        │
│ LAYER 3: SUBJECT VESSEL (Glassware & Apparatus)                        │
│ ┌───────────────────────────┐                                          │
│ │   Borosilicate Carafe     │ <-- Realistic glass refraction, caustic  │
│ │   or Espresso Demitasse   │     specular highlights, liquid column   │
│ └───────────────────────────┘                                          │
│                                                                        │
│ LAYER 4: PRECISION FOREGROUND HUD & LAB BADGES                         │
│ [Dose: 18.0g]    [Yield: 36.0g]    [Ratio: 1:2.0]    [TDS: 9.2%]       │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 The 4 Depth Planes

1. **Plane 1 — Atmosphere & Canvas ($Z = -200\text{px}$, Scroll Factor $0.2\times$):**  
   A textured warm cream canvas with a soft radial lighting gradient simulating morning light in an artisanal roastery. Two subtle procedural SVG steam plumes drift upward at $12\text{px/s}$, fading with distance.
2. **Plane 2 — Precision Calibration Grid ($Z = -80\text{px}$, Scroll Factor $0.5\times$):**  
   Precision millimeter ticks etched into the background canvas along with volumetric lines ($50\,\text{mL}, 100\,\text{mL}, 150\,\text{mL}, 200\,\text{mL}, 250\,\text{mL}$). As liquid fills the cup, the active height marker glows in Crema Amber (`#C86D32`).
3. **Plane 3 — Subject Glassware ($Z = 0\text{px}$, Anchor Plane, Scroll Factor $1.0\times$):**  
   The glassware sits on an invisible contact shelf with a calibrated drop shadow (`box-shadow: 0 20px 40px -10px rgba(26, 20, 18, 0.12)`). Glass rim highlights reflect the overhead light.
4. **Plane 4 — Foreground HUD Tags ($Z = +100\text{px}$, Scroll Factor $1.35\times$):**  
   Floating tactile badges anchored to the liquid strata with hairline leader lines:
   - Floating Tag A: `Dose: 18.0 g (Specialty Arabica)`
   - Floating Tag B: `Yield: 36.0 g @ 28 sec`
   - Floating Tag C: `Brew Temp: 93.5 °C`
   Pointer movement tilts these badges with a subtle 3D gyroscope/mouse parallax effect ($\pm 4^\circ$ tilt, $\pm 8\text{px}$ displacement).

---

## 4. The Signature Move: "The Extraction & Pour Scrollytelling"

In specialty coffee, the transformation from dry roasted bean to silky beverage is a chemical sequence of pressure, temperature, and emulsification.  
Our signature scroll interaction treats the scroll wheel as a **scrubber for this physical process**.

### 4.1 The 5-Act Scroll Journey

```
SCROLL PROGRESS:
0% ──────────── 20% ──────────── 45% ──────────── 75% ──────────── 100%
[Act 1: Dose]   [Act 2: Bloom]  [Act 3: Stream]  [Act 4: Milk]    [Act 5: Explode]
Dry grounds      Pre-infusion    Golden 9-bar     Velvety fold     Physical strata
tamped flat      CO₂ degassing   crema stream     & microfoam cap  cutaway & lab HUD
```

#### Act 1: The Dry Coffee Bed & Tamping ($0\% \le \text{Scroll} \le 20\%$)
- **Visual:** Precision portafilter basket in cross-section. 18.0 grams of freshly ground coffee ($250\,\mu\text{m}$ particle size).
- **Action:** As user scrolls, the stainless steel tamper descends with a firm mechanical press ($15\,\text{kg}$ tamping force), compressing the dry bed to exactly $11.5\,\text{mm}$ depth.
- **HUD Readout:** `Dose: 18.0 g` | `Grind: Fine (Baratza #9)` | `Basket: 58mm IMS`.

#### Act 2: Pre-infusion & The First Drops ($20\% \le \text{Scroll} \le 45\%$)
- **Visual:** Water at $93.5^\circ\text{C}$ penetrates under $2.5\,\text{bar}$ pre-infusion pressure.
- **Action:** The coffee bed darkens as it saturates. Minute carbon dioxide bubbles release. At the base of the bottomless portafilter, rich dark amber droplets coalesce and stretch into viscous beads.
- **HUD Readout:** `Pre-infusion: 6 sec @ 2.5 bar` | `Bed Saturation: 100%`.

#### Act 3: The Golden Stream Extraction ($45\% \le \text{Scroll} \le 75\%$)
- **Visual:** Full pump pressure engages ($9.0\,\text{bar}$). A narrowing golden-tiger stream streams into the glassware.
- **Action:**
  - Stream geometry narrows under gravity according to Torricelli's Law.
  - Inside the cup, the liquid rises from $0\,\text{mL}$ to $36\,\text{mL}$.
  - A dense layer of hazelnut-colored crema forms at the surface, showing realistic convection swirl motion.
- **HUD Readout:** `Extraction: 27 sec` | `Yield: 36.2 g` | `TDS: 9.4%` | `Extraction Yield: 19.8%`.

#### Act 4: The Velvety Milk Pour & Folding ($75\% \le \text{Scroll} \le 90\%$)
- **Visual:** A matte black stainless steel milk pitcher tilts over the rim.
- **Action:**
  - A pencil-thin stream of microfoam whole milk ($65^\circ\text{C}$, $140^\circ\text{F}$) pierces through the crema.
  - White plumes circulate beneath the amber surface, lifting the overall liquid column.
  - As the pour finishes, the pitcher drops close to the surface; dense white microfoam folds outward to form a clean circular macchiato dot / latte art crown.
- **HUD Readout:** `Milk: 140 ml Whole Milk` | `Microfoam Texture: Silky (Wet Paint)`.

#### Act 5: The Exploded Anatomy Cutaway ($90\% \le \text{Scroll} \le 100\%$)
- **Visual:** The signature payoff. The cup locks into place, and the drink **explodes vertically along the Y-axis**.
- **Action:**
  - Microfoam cap elevates $+45\text{px}$ with a leader line: `Microfoam: 1.5 cm (0.35 g/cm³)`.
  - Steamed milk body floats $+20\text{px}$ with a leader line: `Textured Milk: 130 mL @ 65°C`.
  - Double espresso shot anchors the base with a leader line: `Espresso: 36 g (9.2% TDS)`.
- **User Control:** An interactive badge appears: `[ 360° Orbit Studio ]`, allowing the user to rotate the exploded drink in 3D space.

---

## 5. Liquid Pouring Motion Mechanics & Physics

Simulating liquid pouring believably requires combining fluid dynamics rules with lightweight web performance.

```
STREAM GEOMETRY MODEL:
           Spout Origin (X₀, Y₀)
                 \
                  \  Width W₀ (5px)
                   \
                    \   Narrowing laminar parabolic path:
                     \  v(y) = √(v₀² + 2g·y)
                      \ Width W(y) = W₀ · √(v₀ / v(y))
                       \
                        \ Width W_impact (2.5px)
                         ▼
             ~~~~~~~~~~~~~~~~~~~~~ Liquid Surface Meniscus
             ( Damped Harmonic Wave Ripple )
```

### 5.1 Parabolic Stream Kinematics

The pouring stream is rendered as a dynamic bezier spline that narrows as it accelerates toward the cup:
1. **Initial Velocity:** Stream exits pitcher spout at $v_0 = 1.2\,\text{m/s}$ at an angle $\theta$ dictated by pitcher tilt.
2. **Gravitational Acceleration:** Velocity at vertical drop $y$ is:
   $$v(y) = \sqrt{v_0^2 + 2gy}$$
3. **Cross-Sectional Thinning:** By mass conservation ($\rho A v = \text{constant}$), stream width $W(y)$ shrinks proportionally to $\frac{1}{\sqrt{v(y)}}$.
4. **Stream Noise:** Micro-jitter is applied to the stream control points using a 1D Perlin noise loop to simulate natural fluid surface ripples without costly physics simulations.

### 5.2 Surface Meniscus Spring Dynamics

When liquid enters the cup or when a user adjusts a volume slider, the liquid meniscus does not snap rigidly. It exhibits **damped harmonic oscillation**:

$$y(t) = Y_{\text{target}} - A \cdot e^{-\zeta \omega_n t} \cos(\omega_d t)$$

Where:
- $Y_{\text{target}}$: Final liquid level (in pixels).
- $A$: Initial displacement delta.
- $\zeta = 0.70$: Damping ratio (chosen so the wave settles gracefully in approximately $380\,\text{ms}$ with only 1 subtle rebound).
- $\omega_n = 2\pi \times 3.8\,\text{rad/s}$: Natural frequency ($3.8\,\text{Hz}$ produces the authentic viscosity of espresso/milk).
- $\omega_d = \omega_n \sqrt{1 - \zeta^2}$: Damped natural frequency.

```ts
/**
 * Damped harmonic meniscus spring simulator
 * Runs at 60fps via requestAnimationFrame during slider drag or pour
 */
export class MeniscusSpring {
  private currentY: number;
  private targetY: number;
  private velocity: number = 0;
  private readonly tension: number = 180;
  private readonly damping: number = 14;
  private readonly mass: number = 1.0;

  constructor(initialY: number) {
    this.currentY = initialY;
    this.targetY = initialY;
  }

  public setTarget(newTarget: number): void {
    this.targetY = newTarget;
  }

  public update(dtSeconds: number): number {
    const displacement = this.currentY - this.targetY;
    const springForce = -this.tension * displacement;
    const dampingForce = -this.damping * this.velocity;
    const acceleration = (springForce + dampingForce) / this.mass;

    this.velocity += acceleration * dtSeconds;
    this.currentY += this.velocity * dtSeconds;

    return this.currentY;
  }

  public isSettled(): boolean {
    return Math.abs(this.velocity) < 0.05 && Math.abs(this.currentY - this.targetY) < 0.1;
  }
}
```

### 5.3 Radial Wave Ripples on Impact

At the point of stream impact on the liquid surface:
- An elliptical wave pulse expands outward radially: $r(t) = v_{\text{wave}} \cdot t$.
- Wave amplitude decays exponentially: $h(r) = h_0 \cdot e^{-0.08 r} \cdot \sin(k r - \omega t)$.
- Rendered in procedural SVG as an animated `<path>` with 5 cubic bezier control points that displace the top edge of the liquid layer.

---

## 6. Interactive 3D Coffee Explorer / Studio (Three.js WebGL)

Following the `teardown` skill ("One machine, one page; the part doing the work opens up"), we design the **MyCoffeeLab 3D Studio**.

```
3D STUDIO ARCHITECTURE
┌────────────────────────────────────────────────────────────────────────┐
│ THREE.JS SCENE GRAPH                                                   │
│                                                                        │
│ Scene                                                                  │
│  ├── Environment & Studio Lighting (Key, Fill, Rim HDR)                │
│  ├── Contact Ground Plane (Shadow catcher with soft ambient occlusion) │
│  └── DrinkAssembly (Pivot at base)                                     │
│       ├── VesselGroup (Glassware / Demitasse outer shell)              │
│       │    └── MeshPhysicalMaterial (Transmission 0.96, IOR 1.50)      │
│       ├── LiquidGroup                                                  │
│       │    ├── EspressoMesh (Y-Offset: 0.0 mm, Vol: 36 mL)            │
│       │    ├── SteamedMilkMesh (Y-Offset: animate, Vol: 140 mL)        │
│       │    └── MicrofoamMesh (Y-Offset: animate, Vol: 20 mL)           │
│       └── AnnotationsGroup (CSS2D/CSS3D HTML Leader Lines & Badges)    │
│            ├── LeaderLine -> Crema Cap                                 │
│            ├── LeaderLine -> Milk Core                                 │
│            └── LeaderLine -> Espresso Extraction Base                  │
└────────────────────────────────────────────────────────────────────────┘
```

### 6.1 Accurate Parametric Vessel Geometries

Vessels are built with real physical dimensions in millimetres:

| Vessel | Capacity | Top $\varnothing$ | Bottom $\varnothing$ | Height | Material Finish |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Espresso Demitasse** | $60\,\text{mL}$ | $58\,\text{mm}$ | $42\,\text{mm}$ | $52\,\text{mm}$ | Matte white ceramic or thick glass ($3.5\,\text{mm}$ wall) |
| **Cortado Gibraltar** | $135\,\text{mL}$ | $72\,\text{mm}$ | $52\,\text{mm}$ | $82\,\text{mm}$ | 8-faceted octagonal pressed soda-lime glass |
| **Cappuccino Cup** | $180\,\text{mL}$ | $88\,\text{mm}$ | $48\,\text{mm}$ | $64\,\text{mm}$ | Flared bowl tulip ceramic, glazed interior |
| **Latte Tumbler** | $300\,\text{mL}$ | $82\,\text{mm}$ | $56\,\text{mm}$ | $124\,\text{mm}$ | Clear borosilicate tempered glass |
| **Brewing Carafe** | $600\,\text{mL}$ | $90\,\text{mm}$ | $110\,\text{mm}$ | $145\,\text{mm}$ | Conical laboratory flask glass with pouring spout |

### 6.2 Photorealistic Glass & Liquid Shader Pipeline

To ensure the glassware looks authentic rather than like a cheap plastic toy:
- **Glass Material (`MeshPhysicalMaterial`):**
  ```ts
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xffffff),
    metalness: 0.0,
    roughness: 0.04,
    transmission: 0.96,        // High optical transmission
    transparent: true,
    opacity: 1.0,
    ior: 1.50,                 // Index of Refraction for borosilicate glass
    thickness: 2.2,            // Wall thickness in mm for volumetric absorption
    specularIntensity: 1.0,
    specularColor: new THREE.Color(0xffffff),
    envMapIntensity: 1.2,
  });
  ```
- **Espresso Liquid Material:**
  ```ts
  const espressoMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x28160c), // Deep roast brown
    roughness: 0.12,
    transmission: 0.35,        // Semi-opaque, light penetrates thin edges
    thickness: 15.0,
    attenuationColor: new THREE.Color(0x783410), // Rich amber edge glow
    attenuationDistance: 0.4,
  });
  ```
- **Velvety Microfoam Material:**
  ```ts
  const microfoamMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xfdfbf7), // Warm microfoam white
    roughness: 0.75,                  // Diffuse matte surface
    metalness: 0.0,
    bumpMap: generateFoamNoiseTexture(), // Micro-bubble noise (0.1mm cell scale)
    bumpScale: 0.08,
  });
  ```

### 6.3 The "Explode Layers" Mechanism (Teardown Mode)

When the user taps the **"Explode Layers"** button or drags the cutaway slider:
1. **Vertical Translation:**
   - The glassware stays anchored or lowers slightly: $Y_{\text{glass}} = -10\,\text{mm}$.
   - The Espresso layer anchors at $Y = 0\,\text{mm}$.
   - The Steamed Milk layer translates up along the Y-axis to $+40\,\text{mm}$.
   - The Microfoam cap translates further to $+85\,\text{mm}$.
2. **Dimension Lines & Leader Callouts:**
   - SVG or HTML/CSS 2D leader lines dynamically track the 3D layer anchor points using `vector.project(camera)`.
   - Dimension pills display:
     - Layer Name (e.g. `Velvety Microfoam`)
     - Volume & Height (e.g. `20 mL · 1.4 cm`)
     - Temperature & Density (e.g. `65°C · 0.35 g/cm³`)
3. **Three Cutaway Inspection Views:**
   - **Mode A: Whole Beverage (Solid)** — Standard drinking perspective.
   - **Mode B: $180^\circ$ Longitudinal Cross-Section** — A clipping plane cuts the vessel in half, revealing internal milk integration gradients.
   - **Mode C: Exploded Floating Strata** — All ingredients hover in calibrated space with laboratory metric readouts.

---

## 7. Tactile Micro-Interactions & Calculator Polish

To make the interactive calculators feel like physical laboratory apparatus:

### 7.1 Magnetic Slider Snaps
- In `RatioTool` and `EspressoTool`, sliders possess magnetic detents at SCA industry standards:
  - Ratio Slider: Strong magnetic snap at `1:15` (Bold/Moka), `1:16` (Balanced Golden Cup), `1:17` (Delicate Floral).
  - Espresso Slider: Snap at `1:2.0` (Standard Normale), `1:1.5` (Ristretto), `1:2.5` (Lungo).
- **Feedback:** As the thumb snaps into a detent:
  - Haptic tick (`navigator.vibrate?.(8)` on mobile devices).
  - Scale badge scales slightly (`transform: scale(1.15)` for $120\,\text{ms}$, then settles to `1.0`).
  - Tactile audio click (optional synthesized $800\,\text{Hz}$ micro-click using Web Audio API at $\le 10\text{ms}$ duration, muted by default).

### 7.2 Rolling Odometer Numbers
- When the calculated yield, water weight, or bloom water changes, numbers do not cut abruptly.
- Individual digits scroll vertically via CSS transforms:
  ```html
  <span class="odometer-digit">
    <span class="odometer-ribbon" style="transform: translateY(-600%);">
      <span>0</span><span>1</span><span>2</span><span>3</span>
      <span>4</span><span>5</span><span>6</span><span>7</span>
      <span>8</span><span>9</span>
    </span>
  </span>
  ```
- Duration: $250\,\text{ms}$, easing `cubic-bezier(0.2, 0, 0, 1)`.

### 7.3 Drink Morphing Transitions
When switching drinks in the directory or comparison viewer:
- The cup geometry interpolates smoothly: height and rim width transition over $350\,\text{ms}$.
- Existing liquid layers don't vanish; their SVG `<path>` coordinates interpolate to new volume heights with a gentle fluid ripple.

---

## 8. Progressive Loading & Multi-Tier Architecture

To protect initial page speed and ensure zero regression on low-powered mobile devices or battery savers:

```
DEVICE CAPABILITY DETECTION:
           ┌────────────────────────────────────────┐
           │ Device Check (WebGL2, Memory, Network) │
           └───────────────────┬────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
   [Tier 1: High Capability]             [Tier 2: Mobile / Low Power]
   - Three.js WebGL2 Studio              - Procedural 2D SVG/Canvas Engine
   - Physical Glass Transmission         - High-DPI Retina Rendering
   - Dynamic 3D Orbit & Explode          - Spring Meniscus & Stream Splines
   - Volumetric Caustic Highlights       - Zero 3D Bundle Overhead (<3KB JS)
            │                                     │
            └──────────────────┬──────────────────┘
                               ▼
                 [Tier 3: Reduced Motion Override]
                 - prefers-reduced-motion: reduce
                 - Instant state transitions
                 - Static exploded layout diagram
                 - No auto-play or stream loops
```

### 8.1 Performance Budgets & Bundle Isolation

| Metric | Budget Target | Architecture Enforcement |
| :--- | :--- | :--- |
| **Initial HTML Payload** | $\le 15\,\text{KB}$ gzipped | Core Astro SSR; zero Three.js in initial HTML. |
| **Critical Path CSS** | $\le 8\,\text{KB}$ gzipped | Single unified CSS file with hardware-accelerated transforms. |
| **Initial Client JS** | $\le 4\,\text{KB}$ gzipped | Micro-interaction scripts; calculators are lightweight vanilla TS. |
| **3D Studio Chunk** | $\le 140\,\text{KB}$ gzipped | Lazy-loaded dynamically via `import("./studio3d")` only on user click. |
| **Frame Rate** | Locked $60\,\text{fps}$ | GPU composited transforms (`transform`, `opacity`); no layout thrashing. |
| **Cumulative Layout Shift** | $\text{CLS} = 0.00$ | Strict container aspect ratios (`aspect-ratio: 1 / 1.1`). |

### 8.2 Strict Reduced Motion Compliance

For users with vestibular disorders or `prefers-reduced-motion: reduce`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .wave, .liquid-stream, .steam-plume {
    display: none !important;
  }
  
  .vessel-stage {
    transform: none !important;
  }
}
```
In reduced-motion mode, the 3D explorer defaults to a clean, static, exploded architectural blueprint view with clear dimension lines.

---

## 9. Phased Implementation Roadmap

```
PHASE IMPLEMENTATION TIMELINE:

Phase 2A (Immediate / Zero New NPM Dependencies)
├─ 1. Procedural SVG Pour Animation & Meniscus Spring Physics
├─ 2. Dimensional Hero 4-Plane Parallax (CSS / Lightweight Vanilla TS)
├─ 3. Calculator Tactile Magnetic Slider Snaps & Odometer Digits
└─ 4. Drink Figure Smooth Volume Transition & Meniscus Waves

Phase 2B (Scrollytelling & Drink Comparison Morphing)
├─ 1. Scroll-Scrubbed Extraction Timeline Component (`ScrollyPour.astro`)
├─ 2. Cross-Fader Drink Morphing in Comparison Tool
└─ 3. Full Mobile Touch Gesture Tuning (Swipe to pour, scrub to dial)

Phase 3 (Three.js 3D Coffee Studio Island)
├─ 1. Install & tree-shake Three.js (`three` + `@types/three`)
├─ 2. Parametric Glassware Mesh Generators (Demitasse, Gibraltar, Picardie, Carafe)
├─ 3. Photorealistic Physical Glass & Liquid Shaders
├─ 4. Exploded Strata Mode with 3D-to-2D Projected Dimension Callouts
└─ 5. Lazy-Load Island wrapper (`CoffeeStudio3D.astro`) with Tier 2 Canvas fallback

Phase 4 (Profiling, Benchmarking & Visual QA)
├─ 1. Chrome DevTools 60fps frame audit on 4x CPU throttle
├─ 2. Lighthouse 100/100 performance & accessibility verification
└─ 3. Cross-device touch & screen testing (iOS Safari, Android Chrome, Desktop)
```

### 9.1 File Architecture

```
mycoffeelab/
├── src/
│   ├── components/
│   │   ├── DrinkFigure.astro       # Enhanced with dynamic SVG waves & meniscus
│   │   ├── ScrollyPour.astro       # Dimensional scroll extraction scrubber (Phase 2B)
│   │   ├── CoffeeStudio3D.astro    # Lazy-loaded Three.js studio island (Phase 3)
│   │   ├── OdometerNumber.astro    # Rolling tactile odometer digits
│   │   └── RatioTool.astro         # Updated with magnetic snaps & live wave feedback
│   ├── lib/
│   │   ├── cup.ts                  # Enhanced with procedural wave spline generators
│   │   ├── spring.ts               # Damped harmonic oscillation math
│   │   ├── stream.ts               # Fluid pouring stream spline calculator
│   │   └── studio3d/               # Three.js 3D subsystem (Phase 3)
│   │       ├── scene.ts            # Studio environment, lights, shadow ground
│   │       ├── glassware.ts        # Parametric lathe geometry for vessels
│   │       ├── materials.ts        # Physical glass, espresso, milk shaders
│   │       └── explode.ts          # Y-axis layer separation choreography
│   └── styles/
│       └── global.css              # Roaster's Craft motion variables & keyframes
└── docs/
    └── 19-MOTION-SCROLL-3D-SPEC.md # This master specification
```

---

## 10. Summary & Next Steps

This specification establishes an uncompromising blueprint for:
1. **Premium Motion Identity:** High dignity, $60\,\text{fps}$ GPU execution, calibrated fluid viscosity, zero cartoon bounce.
2. **Dimensional Scrollytelling:** A multi-plane hero where scrolling scrubs the actual extraction and pour from dry grind to silky microfoam.
3. **The 3D Coffee Studio:** A true culinary teardown with exploded strata along the Y-axis and physical laboratory readouts.
4. **Resilient Performance:** Zero regression on initial load, progressive enhancement from 2D SVG to full Three.js WebGL2, and strict `prefers-reduced-motion` compliance.
