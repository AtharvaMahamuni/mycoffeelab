import { computeColdBrew, parseColdBrewQuery } from "../lib/calculators";
import { jarMarkup } from "../lib/cup";

export function mountColdBrew(root: HTMLElement): void {
  const concentrate = root.querySelector<HTMLInputElement>("[data-mode-concentrate]");
  const rtd = root.querySelector<HTMLInputElement>("[data-mode-rtd]");
  const coffee = root.querySelector<HTMLInputElement>("[data-coffee]");
  const coffeeRange = root.querySelector<HTMLInputElement>("[data-coffee-range]");
  const ratio = root.querySelector<HTMLInputElement>("[data-ratio]");
  const ratioRange = root.querySelector<HTMLInputElement>("[data-ratio-range]");
  const retention = root.querySelector<HTMLInputElement>("[data-retention]");
  const retentionRange = root.querySelector<HTMLInputElement>("[data-retention-range]");
  const live = root.querySelector<HTMLElement>("[data-live]");
  const error = root.querySelector<HTMLElement>("[data-error]");
  const visual = root.querySelector<HTMLElement>("[data-visual]");
  if (!concentrate || !rtd || !coffee || !coffeeRange || !ratio || !ratioRange || !retention || !retentionRange || !live || !error || !visual) {
    return;
  }

  const parsed = parseColdBrewQuery(new URLSearchParams(window.location.search));
  concentrate.checked = parsed.mode === "concentrate";
  rtd.checked = parsed.mode === "rtd";
  coffee.value = String(parsed.coffeeG);
  coffeeRange.value = String(parsed.coffeeG);
  ratio.value = String(parsed.ratio);
  ratioRange.value = String(parsed.ratio);
  retention.value = String(parsed.retentionPerG);
  retentionRange.value = String(parsed.retentionPerG);

  const render = () => {
    const result = computeColdBrew({
      mode: rtd.checked ? "rtd" : "concentrate",
      coffeeG: Number(coffee.value),
      ratio: Number(ratio.value),
      retentionPerG: Number(retention.value),
    });
    live.textContent = result.sentence;
    error.hidden = result.ok;
    visual.innerHTML = jarMarkup(result.waterG, Math.max(0, result.brewedYieldG), result.ok);
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("coffee", coffee.value);
    url.searchParams.set("ratio", ratio.value);
    url.searchParams.set("retention", retention.value);
    url.searchParams.set("mode", rtd.checked ? "rtd" : "concentrate");
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
  bind(coffee, coffeeRange);
  bind(ratio, ratioRange);
  bind(retention, retentionRange);
  concentrate.addEventListener("change", () => {
    if (concentrate.checked && Number(ratio.value) === 12) ratio.value = "5";
    ratioRange.value = ratio.value;
    render();
  });
  rtd.addEventListener("change", () => {
    if (rtd.checked && Number(ratio.value) === 5) ratio.value = "12";
    ratioRange.value = ratio.value;
    render();
  });
  render();
}
