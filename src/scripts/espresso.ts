import { computeYield, parseEspressoQuery, TIME_SENTENCE } from "../lib/calculators";
import { cupMarkup } from "../lib/cup";
import { ratioLabel } from "../lib/format";
import { draw, vessels, type Vessel } from "../lib/picture";

function shotVessel(yieldG: number): Vessel {
  return {
    ...vessels.demitasse,
    capacityMl: Math.max(60, Math.ceil(yieldG + 8)),
    label: yieldG <= 52 ? "demitasse" : "shot glass",
  };
}

export function mountEspresso(root: HTMLElement): void {
  const dose = root.querySelector<HTMLInputElement>("[data-dose]");
  const doseRange = root.querySelector<HTMLInputElement>("[data-dose-range]");
  const ratio = root.querySelector<HTMLInputElement>("[data-ratio]");
  const ratioRange = root.querySelector<HTMLInputElement>("[data-ratio-range]");
  const live = root.querySelector<HTMLElement>("[data-live]");
  const visual = root.querySelector<HTMLElement>("[data-visual]");
  if (!dose || !doseRange || !ratio || !ratioRange || !live || !visual) return;

  const parsed = parseEspressoQuery(new URLSearchParams(window.location.search));
  dose.value = String(parsed.doseG);
  doseRange.value = String(parsed.doseG);
  ratio.value = String(parsed.ratio);
  ratioRange.value = String(parsed.ratio);

  const render = () => {
    const doseG = Number(dose.value);
    const ratioValue = Number(ratio.value);
    if (!Number.isFinite(doseG) || !Number.isFinite(ratioValue) || ratioValue <= 0) return;
    const yieldG = computeYield(doseG, ratioValue);
    const vessel = shotVessel(yieldG);
    const drawn = draw(
      { doseG, yieldG, waterG: 0, milkG: 0, expansion: 1, sauceG: 0, concentrateG: 0, cremaMm: 4, mixed: false },
      vessel,
    );
    const sentence = `${yieldG.toFixed(1)} g yield from ${doseG.toFixed(1)} g at ${ratioLabel(ratioValue)}. ${TIME_SENTENCE}`;
    live.textContent = sentence;
    visual.innerHTML = cupMarkup(vessel, drawn, sentence);
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("dose", String(doseG));
    url.searchParams.set("ratio", String(ratioValue));
    window.history.replaceState(null, "", url);
  };

  const bind = (input: HTMLInputElement, range: HTMLInputElement) => {
    input.addEventListener("input", () => {
      range.value = input.value;
      render();
    });
    range.addEventListener("input", () => {
      input.value = range.value;
      render();
    });
  };
  bind(dose, doseRange);
  bind(ratio, ratioRange);
  render();
}
