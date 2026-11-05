import {
  computeRatio,
  METHOD_NOTES,
  parseRatioQuery,
  RATIO_PRESETS,
  type RatioInput,
} from "../lib/calculators";
import { carafeMarkup } from "../lib/cup";
import { ratioLabel } from "../lib/format";

function nearestPreset(ratio: number) {
  return RATIO_PRESETS.find((preset) => Math.abs(preset.ratio - ratio) < 1e-9);
}

export function mountRatio(root: HTMLElement): void {
  const modeWater = root.querySelector<HTMLInputElement>("[data-mode-water]");
  const modeCoffee = root.querySelector<HTMLInputElement>("[data-mode-coffee]");
  const water = root.querySelector<HTMLInputElement>("[data-water]");
  const waterRange = root.querySelector<HTMLInputElement>("[data-water-range]");
  const coffee = root.querySelector<HTMLInputElement>("[data-coffee]");
  const coffeeRange = root.querySelector<HTMLInputElement>("[data-coffee-range]");
  const live = root.querySelector<HTMLElement>("[data-live]");
  const visual = root.querySelector<HTMLElement>("[data-visual]");
  const band = root.querySelector<HTMLElement>("[data-band-note]");
  const methodNote = root.querySelector<HTMLElement>("[data-method-note]");
  if (!modeWater || !modeCoffee || !water || !waterRange || !coffee || !coffeeRange || !live || !visual || !band || !methodNote) {
    return;
  }

  const parsed = parseRatioQuery(new URLSearchParams(window.location.search));
  let state: RatioInput = parsed.mode === "coffee"
    ? { ...parsed, waterG: computeRatio(parsed).waterG }
    : { ...parsed, coffeeG: computeRatio(parsed).coffeeG };

  const render = () => {
    const result = computeRatio(state);
    if (state.mode === "water") state = { ...state, coffeeG: result.coffeeG };
    else state = { ...state, waterG: result.waterG };
    water.value = String(result.waterG);
    coffee.value = String(result.coffeeG);
    waterRange.value = String(Math.min(1000, Math.max(100, result.waterG)));
    coffeeRange.value = String(result.coffeeG);
    const waterDrives = state.mode === "water";
    water.readOnly = !waterDrives;
    coffee.readOnly = waterDrives;
    waterRange.disabled = !waterDrives;
    coffeeRange.disabled = waterDrives;
    modeWater.checked = waterDrives;
    modeCoffee.checked = !waterDrives;
    live.textContent = result.sentence;
    visual.innerHTML = carafeMarkup(result.coffeeG, result.waterG);
    const preset = nearestPreset(state.ratio);
    band.textContent = preset ? preset.note : `Custom ratio ${ratioLabel(state.ratio)}.`;
    root.querySelectorAll<HTMLButtonElement>("[data-preset-id]").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.presetId === preset?.id ? "true" : "false");
    });
    const url = new URL(window.location.href);
    url.search = "";
    if (state.mode === "coffee") url.searchParams.set("coffee", String(result.coffeeG));
    else url.searchParams.set("water", String(result.waterG));
    url.searchParams.set("ratio", String(state.ratio));
    window.history.replaceState(null, "", url);
  };

  modeWater.addEventListener("change", () => {
    state = { ...state, mode: "water" };
    render();
  });
  modeCoffee.addEventListener("change", () => {
    state = { ...state, mode: "coffee" };
    render();
  });
  const bindMass = (input: HTMLInputElement, range: HTMLInputElement, mode: "water" | "coffee") => {
    const apply = () => {
      const value = Number(input.value);
      if (!Number.isFinite(value)) return;
      state = mode === "water" ? { ...state, mode, waterG: value } : { ...state, mode, coffeeG: value };
      render();
    };
    input.addEventListener("input", apply);
    range.addEventListener("input", () => {
      input.value = range.value;
      apply();
    });
  };
  bindMass(water, waterRange, "water");
  bindMass(coffee, coffeeRange, "coffee");

  root.querySelectorAll<HTMLButtonElement>("[data-preset-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = RATIO_PRESETS.find((item) => item.id === button.dataset.presetId);
      if (!preset) return;
      state = { ...state, ratio: preset.ratio };
      methodNote.textContent = "";
      root.querySelectorAll<HTMLButtonElement>("[data-method-id]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      render();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-method-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const method = METHOD_NOTES.find((item) => item.id === button.dataset.methodId);
      if (!method) return;
      state = { ...state, ratio: method.ratio };
      methodNote.textContent = method.instruction;
      root.querySelectorAll<HTMLButtonElement>("[data-method-id]").forEach((item) => {
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      render();
    });
  });

  render();
}
