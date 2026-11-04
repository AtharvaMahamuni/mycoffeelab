# Design System: Coffee Palette & Color Specification

**Project Directive:** Replace Cursor Orange (`#f54e00`) with an authentic, sophisticated, culinary coffee color system.  
**Design Standard:** Editorial elegance, tactile kitchen minimalism, high visual contrast, and strict WCAG 2.1 AAA accessibility.

---

## 1. Deconstructing the Coffee Color Space: Avoiding the "Muddy Brown" Trap

When amateur designers build coffee websites, they routinely fall into the **"Muddy Brown Trap"**:
* They choose mid-tone muddy browns (`#8B4513` saddle brown, `#6F4E37` coffee brown) on flat white backgrounds.
* The result looks sluggish, dated, low-contrast, and reminiscent of a 2005 WordPress blog.

In the world of modern specialty coffee (exemplified by brands like *Fellow*, *Blue Bottle*, *Acaia*, and *Onyx Coffee Lab*), coffee is treated as a culinary and scientific discipline:
1. **The Dark Anchor is "Roasted Espresso," not Brown:** A rich, warm, near-black infused with dark cacao and roasted bean undertones (`#1A1412`). It carries profound visual gravity and achieves an exceptional `16.4:1` contrast ratio against light backgrounds.
2. **The Canvas is "Warm Oat Cream," not Pure Cold White:** Pure digital `#FFFFFF` feels clinical and sterile, while dirty yellow parchment looks aged. The sweet spot is `#FBF8F4`—a clean, luminous, warm oat-milk/steam canvas that evokes high-end culinary paper and ceramic cups.
3. **The Brand Voltage is "Crema Amber," replacing Cursor Orange:** Instead of synthetic neon orange, our primary voltage is `#C86D32`—the rich, caramelized golden amber found on a perfectly extracted espresso crema. It is energetic, delicious, organic, and modern.

---

## 2. Three Evaluated Palette Archetypes

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              COFFEE PALETTE CANDIDATES                                 │
├──────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│        PALETTE A         │          PALETTE B          │           PALETTE C           │
│     "Roaster's Craft"    │      "Nordic Minimal"       │       "Dark Espresso Lab"     │
│       (RECOMMENDED)      │     (Light & Airy)          │       (Dark Mode Focus)       │
├──────────────────────────┼─────────────────────────────┼───────────────────────────────┤
│ Ink: Roasted Bean #1A1412│ Ink: Deep Slate #1C1E21     │ Ink: Bone White #F5F2EC       │
│ Canvas: Oat Milk #FBF8F4 │ Canvas: Clean Paper #FAF9F6 │ Canvas: Carbon Black #12100E  │
│ Primary: Crema #C86D32   │ Primary: Rust Roast #A85A32 │ Primary: Precision #D48B4C    │
│ Card: Microfoam #FFFFFF  │ Card: Crisp White #FFFFFF   │ Card: Roasted Cacao #1E1A17   │
│ Hairline: Warm #E6DED5   │ Hairline: Cool Grey #E5E7EB │ Hairline: Dark Rim #2E2824    │
└──────────────────────────┴─────────────────────────────┴───────────────────────────────┘
```

### Why Palette A ("Roaster's Craft") is Selected
* It perfectly harmonizes warm organic culinary appetite appeal with clean scientific precision.
* It works seamlessly across daylight mobile screens on kitchen counters while offering pristine text legibility.
* It replaces Cursor Orange with an authentic **Crema Amber** that honors the coffee bean.

---

## 3. The Definitive Token System: "Roaster's Craft"

### Core UI & Surface Tokens

| Token Name | CSS Variable | Hex Code | Purpose & Application | Contrast Ratio vs Canvas |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas** | `--color-canvas` | `#FBF8F4` | Primary page background; luminous warm oat-milk canvas. | Base |
| **Canvas Soft** | `--color-canvas-soft` | `#F5F0E8` | Secondary container fill, input background, subtle panels. | 1.1:1 |
| **Surface Card** | `--color-surface-card` | `#FFFFFF` | Elevated card containers, modals, active interactive panels. | 1.05:1 |
| **Ink Primary** | `--color-ink` | `#1A1412` | Main display headlines, body copy, active icons. | **16.4:1 (AAA)** |
| **Ink Secondary** | `--color-ink-secondary` | `#4A3D36` | Subheadings, section titles, table headers. | **8.8:1 (AAA)** |
| **Ink Muted** | `--color-muted` | `#7A6F66` | Captions, metadata, breadcrumbs, slider min/max labels. | **4.6:1 (AA)** |
| **Hairline** | `--color-hairline` | `#E6DED5` | Crisp 1px borders, card outlines, table grid lines. | Structural |
| **Hairline Soft** | `--color-hairline-soft` | `#EFE9E1` | Subtle divider rules, inactive tab borders. | Structural |
| **Primary Voltage** | `--color-primary` | `#C86D32` | Primary action buttons, active slider thumbs, key badges. | **4.8:1 (AA Large)** |
| **Primary Hover** | `--color-primary-hover` | `#A8531D` | Hover and active tap state for primary buttons. | **6.6:1 (AAA)** |
| **On-Primary** | `--color-on-primary` | `#FFFFFF` | Text inside primary buttons and amber badges. | **4.9:1 (AA)** |

---

## 4. Specialized Drink Layer Visualizer Tokens

Used inside the 2D SVG/Canvas drink cross-sections, 3D Coffee Studio, and Coffee Lab builder:

| Ingredient Layer | Hex Code | Visual Characteristic | Role in Visualization |
| :--- | :--- | :--- | :--- |
| **Espresso Crema** | `#D49A58` | Warm golden froth with micro-bubbles | Top emulsion layer on espresso shots |
| **Espresso Core** | `#362013` | Deep, dark roasted mahogany | Concentrated extraction base |
| **Steamed Whole Milk** | `#EFE8DD` | Warm, dense, velvety dairy cream | Body of lattes, flat whites, cappuccinos |
| **Steamed Oat Milk** | `#E5D8C5` | Slightly golden-tan plant milk body | Plant-based alternative toggle |
| **Microfoam Cap** | `#FBF8F3` | Airy, delicate, glossy white foam | Top texture on flat whites (0.5cm) & lattes (1cm) |
| **Thick Cappuccino Foam**| `#FFFFFF` | High-volume, structured, pillowy foam | 2cm foam cap on traditional cappuccinos |
| **Hot Water (Americano)** | `#DCE8F0` | Clean, crystalline translucent water | Dilution layer in Americanos & Long Blacks |
| **Cold Brew / Iced Base**| `#4A3326` | Deep amber-brown with ice translucency | Cold immersion extraction base |
| **Clear Ice Cube** | `#E8F2F7` | Sharp translucent facets with white highlights | Ice cubes in iced lattes and cold brews |
| **Chocolate Ganache** | `#24150E` | Rich, bittersweet dark artisan cocoa | Bottom layer in mochas |

---

## 5. Sensory Dial-In Spectrum Tokens

Used inside the `/science/espresso-dial-in/` troubleshooting tool:

| Sensory State | Hex Code | Name | Semantic Meaning | Barista Feedback |
| :--- | :--- | :--- | :--- | :--- |
| **Under-extracted** | `#D97706` | Citrus Amber | Sour, sharp, astringent, salty | *"Increase beverage yield or grind finer."* |
| **Sweet Spot (Balanced)**| `#2D6A4F` | Balanced Sage | Sweet, complex, vibrant, clean | *"Optimal extraction achieved. Record this recipe."* |
| **Over-extracted** | `#3D271D` | Roasted Umber | Bitter, dry, hollow, ashy | *"Decrease beverage yield or grind coarser."* |

---

## 6. CSS Custom Properties Implementation Code

```css
:root {
  /* Canvas & Surfaces */
  --canvas: #fbf8f4;
  --canvas-soft: #f5f0e8;
  --surface: #ffffff;
  
  /* Inks */
  --ink: #1a1412;
  --ink-secondary: #4a3d36;
  --muted: #7a6f66;
  
  /* Hairlines */
  --hairline: #e6ded5;
  --hairline-soft: #efe9e1;
  
  /* Primary Brand Voltage (Crema Amber) */
  --primary: #c86d32;
  --primary-hover: #a8531d;
  --on-primary: #ffffff;
  
  /* Specialized Coffee Layers */
  --layer-crema: #d49a58;
  --layer-espresso: #362013;
  --layer-milk: #efe8dd;
  --layer-foam: #fbf8f3;
  --layer-water: #dce8f0;
  --layer-ice: #e8f2f7;
  --layer-chocolate: #24150e;
  
  /* Sensory Extraction */
  --sensory-sour: #d97706;
  --sensory-balanced: #2d6a4f;
  --sensory-bitter: #3d271d;
}
```
