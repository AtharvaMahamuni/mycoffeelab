# 17. Build Specification

**Status:** Source of truth for scope, recipe numbers, picture math, page checks, and measurement.  
**Supersedes:** Where documents 01, 08, 09, 10, 13, 14, and 16 disagree with this file, this file wins.  
**Does not invent:** Search volume, keyword difficulty, domain rating, affiliate commission rates, or a claim that anyone has certified these recipes.

The earlier dossiers explain why the product should exist. This file is what a build is allowed to implement.

---

## 1. Product in one sentence

MyCoffeeLab publishes a small set of coffee tools and drink pages where the first screen shows a cup, the recipe is in grams, and every number is either a named public standard or a labeled house default.

---

## 2. Locked P0

P0 is the launch. Nothing in section 3 ships in the same release.

### 2.1 Pages

| URL | Job | Primary heading |
| :--- | :--- | :--- |
| `/` | Open on the coffee-to-water calculator, then link to the drink directory and the five comparisons. | Coffee ratio calculator |
| `/calculators/` | Index of the three tools. No extra guide. | Coffee calculators |
| `/calculators/coffee-to-water-ratio/` | Filter brew math. | Coffee to water ratio calculator |
| `/calculators/espresso-ratio/` | Dose, ratio, and yield. | Espresso ratio calculator |
| `/calculators/cold-brew-ratio/` | Concentrate or ready-to-drink, with grounds retention. | Cold brew ratio calculator |
| `/types-of-coffee/` | Directory of the 11 drink pages. A navigation page, not a campaign against "types of coffee." | Coffee drinks, in grams |
| `/drinks/espresso/` | Espresso, including what "doppio" means. | Espresso |
| `/drinks/ristretto/` | Short espresso yield. | Ristretto |
| `/drinks/lungo/` | Long espresso yield. | Lungo |
| `/drinks/americano/` | Espresso plus water, with a long-black pour-order note. | Americano |
| `/drinks/cortado/` | Gibraltar house default, Spain variant in text. | Cortado |
| `/drinks/flat-white/` | 180 ml house default, larger US cup in text. | Flat white |
| `/drinks/cappuccino/` | Foamier milk drink in the same 180 ml cup as the flat white. | Cappuccino |
| `/drinks/latte/` | Larger milk drink. | Caffe latte |
| `/drinks/macchiato/` | Traditional mark of milk on espresso. | Espresso macchiato |
| `/drinks/mocha/` | Espresso, chocolate, milk. | Mocha |
| `/drinks/cold-brew/` | One serve of the house concentrate. | Cold brew |
| `/compare/flat-white-vs-latte/` | Same scale, two cups. | Flat white vs latte |
| `/compare/cortado-vs-flat-white/` | Same scale, two cups. | Cortado vs flat white |
| `/compare/macchiato-vs-cortado/` | Same scale, two cups. | Macchiato vs cortado |
| `/compare/cappuccino-vs-latte/` | Same scale, two cups. | Cappuccino vs latte |
| `/compare/espresso-vs-americano/` | Same scale, two cups. | Espresso vs americano |
| `/compare/` | Index of those five comparisons. No generator. | Coffee drink comparisons |
| `/about/` | Who publishes the site and what "house default" means. | About |
| `/corrections/` | How to report a wrong recipe, and the assumption log. | Corrections |

That is 25 URLs. Doppio does not get its own URL. A specialty "espresso" is already the double. A separate doppio page would compete with `/drinks/espresso/`. The espresso page carries an H2, "Doppio," that states this.

### 2.2 Comparison slug rule

One order is canonical. The reverse path is a permanent redirect.

| Request | Redirects to |
| :--- | :--- |
| `/compare/latte-vs-flat-white/` | `/compare/flat-white-vs-latte/` |
| `/compare/flat-white-vs-cortado/` | `/compare/cortado-vs-flat-white/` |
| `/compare/cortado-vs-macchiato/` | `/compare/macchiato-vs-cortado/` |
| `/compare/latte-vs-cappuccino/` | `/compare/cappuccino-vs-latte/` |
| `/compare/americano-vs-espresso/` | `/compare/espresso-vs-americano/` |

### 2.3 Why this set

Document 02 still has no search volumes. P0 is chosen from intent and from the SERP notes in document 04, not from an invented volume.

- Ratio, espresso yield, and cold brew are tool queries. The answer is a number the person needs while brewing.
- The five comparisons are the drink pairs the dossiers already treat as the confusion set.
- The drink pages exist so a comparison has something honest to link to.
- `/types-of-coffee/` exists so the drink pages have a parent. Document 15 is right that this head term belongs to entrenched sites. The directory does not pretend otherwise.

Titles stay editable until a keyword export is pasted into document 02. The H1s above are the launch copy if that export is still empty.

### 2.4 Stack

Astro static HTML, TypeScript, and CSS custom properties. The cup is inline SVG. Sliders are `<input type="range">`. A client island mounts only where a control changes the cup. No Three.js, no canvas physics, no account, no payment, no third-party script.

---

## 3. Explicitly not in P0

| Item | When it can return | Why it waits |
| :--- | :--- | :--- |
| Standalone V60 page | After the keyword export shows a distinct query | The ratio calculator already covers V60 as a preset. A second URL splits that query. |
| Standalone French press page | Same rule | Same risk. |
| `/science/grind-size-chart/` | P1 | Useful, and it is not required to make the ratios true. |
| `/science/espresso-dial-in/` | P1 | Barista Hustle already teaches this model. Shipping a simplified compass before the yield calculator is accurate adds a false-precision tool. |
| `/lab/` | P1 | Shareable custom drinks are a second product. |
| Ten extra comparisons, including cortado vs cappuccino | P1, and only for rows the keyword export supports | Document 02 lists cortado vs cappuccino. It has no volume. The cortado page links to the cappuccino page in prose. |
| Fifteen extra drink pages | P1, same gate | Thin drink pages are how this becomes a content farm. |
| Three.js studio | P2, desktop only, after P0 budgets are measured | Document 06 already marks heavy 3D as a vanity trap for launch. |
| Caffeine milligrams and calorie totals | After a sourced range exists per drink | A single mg or kcal figure will be wrong often enough to break trust. |
| Affiliate chips, roaster drops, sponsorships | After P0 has real visits worth sending away | Document 12 remains the business sketch. It is not a launch task. |
| Local-storage recipe notebook | P2 | The shareable URL is the later save mechanism. |
| Accounts, Bluetooth scales, water-mineral calculator | Not scheduled | Unchanged from document 13. |
| Reddit launch as a milestone | Not scheduled | Those communities remove promotional posts. A reply is allowed only when someone asked for a tool, with the publisher named in the first line. |

V60 and French press still appear inside the ratio calculator as named presets. They do not get URLs in P0.

---

## 4. Picture model `picture-model@1`

The cup is a volume drawing. The recipe is a mass list. Both are shown. One is not silently converted into the other.

### 4.1 Constants

| Constant | Value | Status |
| :--- | :--- | :--- |
| Water in the UI | 1.00 g/ml | The scale is the instrument. Brew-temperature density is not applied. |
| Espresso liquid | 1.00 g/ml | Yield grams draw as liquid millilitres. |
| Whole milk | 1.03 g/ml | Drawing constant for dairy whole milk. |
| Chocolate sauce | 1.20 g/ml | Drawing constant. Labeled on the mocha page. |
| Crema | a fixed millimetre cap | Not derived from yield. Crema is air and oils on top of an unmixed shot. |

P0 milk is dairy whole milk. Oat, almond, and other drinks wait until the model has a density and an expansion for that drink. The oat color token stays unused.

### 4.2 Formulas

```
liquidMilkMl = milkMassG / 1.03
steamedMilkMl = liquidMilkMl * expansion
foamMl        = steamedMilkMl - liquidMilkMl
espressoMl    = yieldG / 1.00
waterMl       = waterMassG / 1.00
sauceMl       = sauceMassG / 1.20
concentrateMl = concentrateG / 1.00
drawnMl       = espressoMl + waterMl + steamedMilkMl + sauceMl + concentrateMl
foamCm        = foamMl / rimAreaCm2
```

`expansion` is steamed volume divided by liquid milk volume. It is an input to the drawing, stored on the drink, and shown as "milk aeration" rather than as a measured lab result.

Crema is drawn only when milk, water, sauce, and concentrate are absent. On milk drinks the shot is under the milk. Drawing a crema cap on a latte claims a layer the drink does not have.

Cold brew concentrate is counted in `drawnMl`. The tumbler serve is mixed, so the SVG is one body while the gram list still shows concentrate and water separately.

### 4.3 Vessels

Comparisons use one scale for every glass. A demitasse must look smaller than an 8 oz cup because its capacity is smaller.

| Vessel | Used for | capacityMl | rimAreaCm2 |
| :--- | :--- | ---: | ---: |
| `demitasse` | Espresso, ristretto, macchiato | 60 | 18 |
| `lungo-cup` | Lungo | 90 | 22 |
| `gibraltar` | Cortado | 133 | 28 |
| `ceramic-6` | Flat white, cappuccino | 180 | 32 |
| `ceramic-8` | Latte, mocha, americano | 240 | 38 |
| `tumbler` | Cold brew serve | 300 | 45 |

`rimAreaCm2` exists so the foam caption is computed. It is a house geometry, not a measured scan of a brand's cup.

### 4.4 Fit rule

If `drawnMl` is greater than `capacityMl`, the page fails the build. The SVG does not clip the overflow and call the recipe valid.

Headspace is allowed. An americano that fills 186 ml of a 240 ml cup shows the empty room. The drawing does not add water just to make the picture look full.

### 4.5 What the person sees

Beside the cup, as HTML text, not only inside the SVG:

- Coffee or espresso in grams.
- Water, milk, and sauce in grams when they exist.
- Expansion, worded as "steamed milk volume is 1.15× the milk you weighed."
- Foam caption in centimetres, computed, prefixed with "about."
- Cup capacity in millilitres, with US fl oz in parentheses because that is how the empty vessel is sold. Fl oz is never the recipe unit.

Worked foam captions for the house defaults:

| Drink | foamMl | rimAreaCm2 | about |
| :--- | ---: | ---: | :--- |
| Cortado | 7.8 | 28 | 0.3 cm |
| Flat white | 18.2 | 32 | 0.6 cm |
| Cappuccino | 43.7 | 32 | 1.4 cm |
| Latte | 26.2 | 38 | 0.7 cm |
| Mocha | 24.0 | 38 | 0.6 cm |
| Macchiato | 5.8 | 18 | 0.3 cm |

---

## 5. Calculator math

Rounding for display is one decimal place in grams. Tests compare to one decimal. Bloom water is part of the total water, not extra water.

### 5.1 Coffee to water

```
waterG  = coffeeG * ratio
coffeeG = waterG / ratio
bloomG  = coffeeG * 2
```

The default ratio is the SCA golden-cup center, not 1:16.

The Specialty Coffee Association golden cup is 55 g of coffee per 1 L of water, plus or minus 10%. That center is 1:18.2. The band is 50–60 g per litre, which is about 1:20 to 1:16.7. Source to print on the page: Specialty Coffee Association, Golden Cup standard, 55 g/L ± 10%.

| Preset label | Ratio | Inside the SCA band? |
| :--- | :--- | :--- |
| Strong pour-over | 1:15 | No. Stronger than the band. Say so on the button. |
| Common pour-over | 1:16 | No. Just stronger than the 60 g/L edge. |
| SCA strong edge | 1:16.7 (60 g/L) | Yes, at the edge. |
| SCA center | 1:18.2 (55 g/L) | Yes. This is the default. |
| SCA light edge | 1:20 (50 g/L) | Yes, at the edge. |

Named method notes, still on this URL:

| Note | Ratio | Extra instruction |
| :--- | :--- | :--- |
| V60 | 1:16 | Bloom is 2× the coffee dose for 45 seconds. |
| French press | 1:15 | Coarse grind, about 4 minutes. |
| Chemex | 1:17 | Bloom is 2× the coffee dose for 45 seconds. |

These notes must not be titled as SCA presets.

Locked tests:

| Input | Result |
| :--- | :--- |
| 500 g water, SCA center | 27.5 g coffee. Bloom 55.0 g. |
| 500 g water, common pour-over 1:16 | 31.3 g coffee. Bloom 62.5 g. |
| 30 g coffee, 1:16 | 480.0 g water. Bloom 60.0 g. |
| 55 g coffee, SCA center | 1000.0 g water. |

The old story "500 ml, 31.3 g coffee, 60 g bloom" is withdrawn. It mixed a volume input with a bloom that is not 2× the dose.

### 5.2 Espresso ratio

```
yieldG = doseG * ratio
```

Default dose 18 g. Default ratio 1:2. The control allows dose from 7 g to 22 g so a traditional single still fits.

The time sentence is copy, not a formula: "A common starting point for a 1:2 double is 25–35 seconds." It must not say that 27 seconds is required, and it must not say the SCA defines 18 g in and 36 g out.

| Dose | Ratio | Yield |
| ---: | :--- | ---: |
| 18 | 1:2 | 36.0 g |
| 18 | 1:1.5 | 27.0 g |
| 18 | 1:3 | 54.0 g |
| 7 | 1:2 | 14.0 g |

### 5.3 Cold brew

Grounds hold water. The water poured on is not the liquid that comes off.

```
brewedYieldG = waterG - (retentionPerG * coffeeG)
```

Default `retentionPerG` is 2.0. The page calls it an assumption and lets the person change it. If `brewedYieldG` is 0 or negative, the page shows an error and no serve suggestion.

| Mode | Default ratio | Meaning |
| :--- | :--- | :--- |
| Concentrate | 1:5 | Five grams of water for each gram of coffee. |
| Ready to drink | 1:12 | Twelve grams of water for each gram of coffee. No second dilution step. |

Concentrate dilution default is 1:1 by the mass of finished concentrate, not by the brew water.

Locked test: 100 g coffee, 500 g water, retention 2.0.

- Finished concentrate is 300 g.
- A 1:1 serve adds 300 g of water.
- The drink page's one glass uses 150 g of that concentrate plus 150 g of water.

---

## 6. Drink record

Each row is the house default for `picture-model@1`. "Range" is what the page is allowed to say in prose. The SVG first paint uses the default only.

Status labels used below:

- **Standard** — a published body states it. Named on the page.
- **House** — a common specialty-cafe starting point. The page says "house default."
- **Variant** — shown as text, not as the first drawing.

| Drink | Status of the drawing | Vessel | Recipe on first paint | drawnMl | Range the copy may state | Variant that must be written, not drawn as the default |
| :--- | :--- | :--- | :--- | :--- | ---: | :--- |
| Espresso | House | demitasse | 18 g dose, 36 g yield, crema cap 4 mm | 36 | Dose 14–20 g. Ratio 1:1.5–1:2.5. Time 25–35 s as a start. | A traditional single near 7 g in and about 14 g out at 1:2. Doppio means a double; this page's default is already that double. |
| Ristretto | House | demitasse | 18 g dose, 27 g yield (1:1.5), crema cap 3 mm | 27 | Ratio 1:1–1:1.5. | Shorter is more concentrated. The page must not say it is automatically sweeter. |
| Lungo | House | lungo-cup | 18 g dose, 54 g yield (1:3) | 54 | Ratio 1:2.5–1:3. | A lungo is a long shot, not an americano. Water is not a separate ingredient. |
| Americano | House | ceramic-8 | 36 g espresso yield, 150 g hot water | 186 | Water 90–200 g. | Long black: same masses, hot water in the cup first, espresso poured on top. Pour order is a toggle's worth of copy, not a new URL. |
| Cortado | House, US Gibraltar | gibraltar | 36 g yield, 80 g milk, expansion 1.10 | 121.4 | Milk 60–90 g in this glass. | Spain: the name means coffee cut with a little milk. Copy gives 20–30 g milk and does not call that the same drink as the Gibraltar glass. |
| Flat white | House, AU/NZ size | ceramic-6 | 36 g yield, 125 g milk, expansion 1.15 | 175.6 | Milk 110–140 g in a 160–180 ml cup. | A ristretto-based flat white uses 27 g yield and the same 125 g milk. A US cafe often uses a larger cup. Neither replaces the first drawing. |
| Cappuccino | House | ceramic-6 | 36 g yield, 100 g milk, expansion 1.45 | 176.8 | Expansion about 1.3–1.6. | Many current cafes serve less foam than the textbook thirds. The page says that. It does not claim an Italian legal definition. |
| Caffe latte | House | ceramic-8 | 36 g yield, 180 g milk, expansion 1.15 | 237.0 | Cup 240–360 ml in US cafes. This drawing stops at 240 ml. | An Italian breakfast latte is a different, milkier drink. The H1 is "Caffe latte" so the page does not pretend to be that breakfast drink. |
| Espresso macchiato | House | demitasse | 36 g yield, 15 g milk, expansion 1.40 | 56.4 | Milk 10–20 g. | Starbucks caramel macchiato is espresso, vanilla, steamed milk, and caramel drizzle in a large cup. The page names it as a different drink and does not draw it. |
| Mocha | House | ceramic-8 | 36 g yield, 20 g chocolate sauce, 165 g milk, expansion 1.15 | 236.9 | Sauce 15–30 g. | Sauce mass includes sugar. The page does not show a calorie total. |
| Cold brew | House | tumbler | 150 g concentrate from the 1:5 calculator test, plus 150 g water | 300 | Steep 12–16 hours in the fridge. Ratio 1:4–1:8 for concentrate. | This page does not invent an espresso shot. It links to the cold-brew calculator for any other ratio. |

Authors change a default by editing this table and the tests in section 5. They do not tune one page by hand.

---

## 7. Comparison record

Both cups use `picture-model@1` and the same millilitres-per-pixel scale. The HTML table repeats the grams.

| Page | Left | Right | Sentence the page is willing to defend |
| :--- | :--- | :--- | :--- |
| Flat white vs latte | Flat white house default | Latte house default | The flat white is the smaller cup and the smaller milk mass. Foam thickness is a result of that recipe, not a separate mystery. |
| Cortado vs flat white | Cortado house default | Flat white house default | The Gibraltar cortado is the smaller drink. The Spanish cortado is explained in one sentence and is not the left-hand drawing. |
| Macchiato vs cortado | Macchiato house default | Cortado house default | A macchiato is an espresso marked with a little milk. A Gibraltar cortado is a full small milk drink. |
| Cappuccino vs latte | Cappuccino house default | Latte house default | These house recipes use the same espresso yield. The cappuccino is smaller and aired more. |
| Espresso vs americano | Espresso house default | Americano house default | An americano is the shot plus hot water. The water mass is on the page. |

---

## 8. Page acceptance

A page is done when every row in its table is true in the built HTML, with JavaScript off and with JavaScript on.

### 8.1 Every page

- The H1 matches section 2.1.
- Body text uses `--color-ink` or `--color-ink-secondary` on `--color-canvas` or white. Muted color is for captions of 16 px or larger, never for a control's only label.
- Buttons use `--color-primary` with white text.
- `@media (prefers-reduced-motion: reduce)` disables wave and pour motion.
- The SVG has a text alternative that includes the grams. The same grams are in HTML next to the picture.
- No third-party script, font request, or analytics pixel.
- No affiliate link.
- No caffeine number and no calorie number.

### 8.2 Calculator page

- The controls are the first thing after the H1.
- The worked example for the default preset is in the server HTML.
- With JavaScript off, the formula and the worked example remain readable.
- With JavaScript on, changing a slider updates an `aria-live="polite"` region.
- The range input has a visible label and a unit.
- Every locked test in section 5 passes.

### 8.3 Drink page

- The cup, the gram list, a one-sentence definition, and the status line ("House default" or "Standard") are in the first screen at 390 px wide.
- No history paragraph sits above the cup.
- Regional copy from section 6 is present when that row has a variant.
- A link to the relevant calculator is in the recipe. Espresso drinks link to `/calculators/espresso-ratio/` with the dose and ratio in the query: `?dose=18&ratio=2`.
- Cold brew links to `/calculators/cold-brew-ratio/`.
- Drawn millilitres are less than or equal to the vessel capacity.

### 8.4 Comparison page

- Both drawings share one millilitres-per-pixel value.
- The gram table is in HTML.
- The reverse URL redirects.
- The page links to both drink pages.

### 8.5 Performance budgets

Measured on a production build of `/`, one calculator, one drink page, and one comparison. Lab test, mobile, slow 4G profile.

| Check | Pass |
| :--- | :--- |
| Largest Contentful Paint | Under 2.5 s. Review the build if it is over 1.5 s. |
| Cumulative Layout Shift | Under 0.1. |
| Interaction to Next Paint on a slider tick | Under 200 ms. |
| Calculator island | Under 20 KB gzip. |
| Site CSS | Under 15 KB gzip. |
| Document HTML for `/` | Under 30 KB gzip. |

These replace every "under 600 ms," "LCP under 1.0 s," and "CLS of 0.00" line in the older documents.

### 8.6 Structured data

| Page | JSON-LD |
| :--- | :--- |
| `/` and `/about/` | `WebSite` and `Person` for the publisher in section 9. |
| Calculator | `WebApplication` with a price of 0. |
| Drink and comparison | `Article` and `BreadcrumbList`. |
| Drink | `Recipe` is allowed only when the ingredients and steps match section 6 exactly and the object has no nutrition field. |

`FAQPage` is allowed only for questions that are visible on that page. Do not add a question block to win a rich result.

### 8.7 Query parameters

Calculators read these and ignore anything else.

| URL | Parameters |
| :--- | :--- |
| `/calculators/coffee-to-water-ratio/` | `coffee` grams, `water` grams, `ratio` as water per 1 coffee. If both masses are present, `coffee` wins and water is computed. |
| `/calculators/espresso-ratio/` | `dose` grams, `ratio` as yield per 1 dose. |
| `/calculators/cold-brew-ratio/` | `coffee` grams, `ratio`, `retention` grams of water held per gram of coffee, `mode` of `concentrate` or `rtd`. |

The future Lab, if it is built, uses one shape and no abbreviations: `/lab/?yield=36&milk=125&expansion=1.15&glass=ceramic-6`. Unknown keys are ignored.

---

## 9. Trust, measurement, and the 90 days

### 9.1 Publisher

The publisher is Atharva Mahamuni. The about page says he publishes the site and maintains the house defaults. It does not call him a barista and it does not say the recipes are barista-verified.

Each recipe line that is a standard names the body, as section 5.1 names the SCA. Each house default links to `/corrections/` and says it is a starting point.

### 9.2 Corrections

`/corrections/` lists:

- The picture-model version.
- The constants in section 4.1.
- The retention assumption.
- A log row for every later change to a house default: date, old number, new number, reason.

Until a public issue tracker exists, the page tells the reader to keep that log honest and names the tracker as "not set." Do not invent an email address.

### 9.3 Privacy and analytics

P0 sends no analytics event to a third party. Recipe grams stay on the device.

The day-90 review uses Google Search Console impressions and clicks for the site the publisher verifies. That is search data about pages, not a session recording of people.

Document 15's three experiments need traffic this launch does not have. Their replacements are:

| Old experiment | P0 replacement | Pass |
| :--- | :--- | :--- |
| A/B test of the cup | Five recorded uses of a calculator or a drink page by the publisher, notes kept with the date. | The person can read the gram recipe and run the default without scrolling past a story. |
| Reddit dial-in post | No scheduled post. | A post happens only as an answer to a request. |
| Share-link rate on `/lab/` | Not run. | The Lab is out of P0. |

### 9.4 Ninety days

| Window | Done means |
| :--- | :--- |
| Days 1–30 | Section 2 pages built. Section 5 tests pass. Section 4 fit rule passes. One mobile lab run recorded against section 8.5. Search Console property submitted if a domain is live. |
| Days 31–60 | Keyword export pasted into document 02, or a written note that it is still missing. Titles updated only from that export. Defects in recipe math or contrast fixed before any P1 page. |
| Days 61–90 | A written review of Search Console for the three calculators and five comparisons. P1 starts only if those pages are indexed and the review names a query the export supports. |

There is no target for weekly users, referring domains, or affiliate click rate. Document 12 can be reread after the day-90 review.

### 9.5 Affiliates, later

When a gear link is added, the sentence "We may earn a commission if you buy through this link" sits in the same block as the link. A footer disclosure is not enough. P0 has no such link.

### 9.6 Design exception

Workspace `DESIGN.md` uses Cursor Orange `#f54e00`. This project does not. The MyCoffeeLab UI uses `DESIGN-SYSTEM-PALETTE.md` as corrected in section 10. The exception is this coffee project only.

---

## 10. Tokens that pass

Measured against WCAG 2.1 relative luminance. Body text aims at AAA. Buttons aim at AA. The old contrast column claimed passes it did not earn.

Canvas `#FBF8F4`. Card `#FFFFFF`.

| Token | Hex | Use | Contrast | Pass |
| :--- | :--- | :--- | ---: | :--- |
| Ink | `#1A1412` | Body and headings on canvas | 17.2:1 | AAA |
| Ink on card | `#1A1412` | Body on white | 18.2:1 | AAA |
| Secondary | `#4A3D36` | Subheads on canvas | 9.9:1 | AAA |
| Muted | `#6A564C` | Captions, 16 px and up, on canvas | 6.5:1 | AA. Not AAA. |
| Primary button | `#9A4316` | Button fill | 6.6:1 with white text | AA |
| Primary hover | `#7A3210` | Button hover fill | 9.2:1 with white text | AAA for that text |
| Crema mark | `#C86D32` | Large brand mark and the crema layer only | 3.5:1 on canvas, 3.7:1 with white | Fails normal text and fails button labels. |

Do not set `--color-primary` to `#C86D32`. Do not use `#2D6A4F` or any other green as "balanced." Sour, balanced, and bitter are words. If a dial-in control is built in P1, the position and the word carry the meaning.

The corrected custom properties:

```css
:root {
  --canvas: #fbf8f4;
  --canvas-soft: #f5f0e8;
  --surface: #ffffff;
  --ink: #1a1412;
  --ink-secondary: #4a3d36;
  --muted: #6a564c;
  --hairline: #e6ded5;
  --hairline-soft: #efe9e1;
  --primary: #9a4316;
  --primary-hover: #7a3210;
  --on-primary: #ffffff;
  --crema-mark: #c86d32;
  --layer-crema: #d49a58;
  --layer-espresso: #362013;
  --layer-milk: #efe8dd;
  --layer-foam: #fbf8f3;
  --layer-water: #dce8f0;
  --layer-ice: #e8f2f7;
  --layer-chocolate: #24150e;
}
```

Foam `#FBF8F3` on oat canvas is about 1:1. Every foam and milk shape has a 1 px `#E6DED5` or darker outline so the layer survives on the page background.

---

## 11. Still open on purpose

| Input | Who closes it | Until then |
| :--- | :--- | :--- |
| Keyword CSV | Publisher, into document 02 | H1s in section 2.1 stay. No new URL is added. |
| Production domain | Publisher | Paths in this file are the spec. Do not treat `mycoffeelab.com` as a claimed host. |
| Issue tracker URL | Publisher, printed on `/corrections/` | The assumption log lives on that page. |
| Public SCA citation link | Whoever builds the ratio page | The standard's name and the 55 g/L ± 10% figure are already fixed. |
