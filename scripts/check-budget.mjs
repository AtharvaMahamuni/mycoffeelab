import { readdir, readFile, stat } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";

const root = path.resolve("dist");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const files = await walk(root);
const css = files.filter((file) => file.endsWith(".css"));
const js = files.filter((file) => file.endsWith(".js"));
const home = path.join(root, "index.html");

function gzipBytes(buffer) {
  return gzipSync(buffer).length;
}

let failed = 0;
function fail(message) {
  failed += 1;
  console.error(message);
}

let cssTotal = 0;
for (const file of css) {
  cssTotal += gzipBytes(await readFile(file));
}
if (cssTotal > 15 * 1024) fail(`CSS gzip ${cssTotal} B exceeds 15 KB`);

for (const file of js) {
  const size = gzipBytes(await readFile(file));
  if (size > 20 * 1024) fail(`${path.relative(root, file)} gzip ${size} B exceeds 20 KB`);
}

const homeGzip = gzipBytes(await readFile(home));
if (homeGzip > 30 * 1024) fail(`home HTML gzip ${homeGzip} B exceeds 30 KB`);

const homeStat = await stat(home);
console.log(
  `budget css ${cssTotal} B gzip, home ${homeGzip} B gzip (${homeStat.size} B raw), js files ${js.length}`,
);

if (failed > 0) process.exit(1);
