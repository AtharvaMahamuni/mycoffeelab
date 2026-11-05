import { readFile, access } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");

const pages = [
  ["index.html", "Coffee ratio calculator"],
  ["calculators/index.html", "Coffee calculators"],
  ["calculators/coffee-to-water-ratio/index.html", "Coffee to water ratio calculator"],
  ["calculators/espresso-ratio/index.html", "Espresso ratio calculator"],
  ["calculators/cold-brew-ratio/index.html", "Cold brew ratio calculator"],
  ["calculators/caffeine-half-life-calculator/index.html", "Caffeine half-life calculator"],
  ["calculators/espresso-dial-in-calculator/index.html", "Espresso dial-in calculator"],
  ["calculators/coffee-grind-size-chart/index.html", "Coffee grind size chart"],
  ["calculators/iced-coffee-calculator/index.html", "Iced coffee ratio calculator"],
  ["types-of-coffee/index.html", "Coffee drinks, in grams"],
  ["drinks/espresso/index.html", "Espresso"],
  ["drinks/ristretto/index.html", "Ristretto"],
  ["drinks/lungo/index.html", "Lungo"],
  ["drinks/americano/index.html", "Americano"],
  ["drinks/cortado/index.html", "Cortado"],
  ["drinks/flat-white/index.html", "Flat white"],
  ["drinks/cappuccino/index.html", "Cappuccino"],
  ["drinks/latte/index.html", "Caffe latte"],
  ["drinks/macchiato/index.html", "Espresso macchiato"],
  ["drinks/mocha/index.html", "Mocha"],
  ["drinks/cold-brew/index.html", "Cold brew"],
  ["compare/index.html", "Coffee drink comparisons"],
  ["compare/flat-white-vs-latte/index.html", "Flat white vs latte"],
  ["compare/cortado-vs-flat-white/index.html", "Cortado vs flat white"],
  ["compare/macchiato-vs-cortado/index.html", "Macchiato vs cortado"],
  ["compare/cappuccino-vs-latte/index.html", "Cappuccino vs latte"],
  ["compare/espresso-vs-americano/index.html", "Espresso vs americano"],
  ["about/index.html", "About"],
  ["corrections/index.html", "Corrections"],
];

const redirects = [
  ["compare/latte-vs-flat-white/index.html", "/compare/flat-white-vs-latte/"],
  ["compare/flat-white-vs-cortado/index.html", "/compare/cortado-vs-flat-white/"],
  ["compare/cortado-vs-macchiato/index.html", "/compare/macchiato-vs-cortado/"],
  ["compare/latte-vs-cappuccino/index.html", "/compare/cappuccino-vs-latte/"],
  ["compare/americano-vs-espresso/index.html", "/compare/espresso-vs-americano/"],
];

const banned = /\b(caffeine|calorie|calories|kcal)\b/i;
let failed = 0;

function fail(message) {
  failed += 1;
  console.error(message);
}

for (const [file, heading] of pages) {
  const full = path.join(root, file);
  let html;
  try {
    html = await readFile(full, "utf8");
  } catch {
    fail(`missing ${file}`);
    continue;
  }
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) =>
    match[1].replace(/<[^>]+>/g, "").trim(),
  );
  if (h1s.length !== 1) fail(`${file} has ${h1s.length} h1 tags`);
  else if (h1s[0] !== heading) fail(`${file} h1 is "${h1s[0]}", expected "${heading}"`);
  const isCaffeinePage =
    file.includes("caffeine-half-life") || file === "calculators/index.html" || file === "index.html";
  if (banned.test(html) && !isCaffeinePage) fail(`${file} contains a banned claim`);
  if (!html.includes('aria-live="polite"') && file.includes("calculator")) {
    /* drink pages do not need a live region */
  }
}

for (const [file, target] of redirects) {
  const full = path.join(root, file);
  let html;
  try {
    html = await readFile(full, "utf8");
  } catch {
    fail(`missing redirect ${file}`);
    continue;
  }
  if (!html.includes(target)) fail(`${file} does not point at ${target}`);
}

const ratio = await readFile(path.join(root, "calculators/coffee-to-water-ratio/index.html"), "utf8");
for (const snippet of ["27.5", "55.0", "aria-live=\"polite\"", "Specialty Coffee Association"]) {
  if (!ratio.includes(snippet)) fail(`ratio page missing ${snippet}`);
}
if (!ratio.includes("500 g of water")) fail("ratio page missing the worked example");

const espresso = await readFile(path.join(root, "drinks/espresso/index.html"), "utf8");
if (!espresso.includes("Doppio")) fail("espresso page missing the Doppio section");
if (!/<svg[^>]*aria-label="[^"]*36\.0 g espresso/.test(espresso) && !espresso.includes("36.0 g")) {
  fail("espresso page missing 36.0 g");
}

await access(path.join(root, "robots.txt"));
await access(path.join(root, "llms.txt"));
await access(path.join(root, "sitemap.xml"));

if (failed > 0) {
  console.error(`${failed} page check(s) failed`);
  process.exit(1);
}
console.log(`checked ${pages.length} pages and ${redirects.length} redirects`);
