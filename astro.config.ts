import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mycoffeelab.example",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  redirects: {
    "/compare/latte-vs-flat-white": "/compare/flat-white-vs-latte/",
    "/compare/flat-white-vs-cortado": "/compare/cortado-vs-flat-white/",
    "/compare/cortado-vs-macchiato": "/compare/macchiato-vs-cortado/",
    "/compare/latte-vs-cappuccino": "/compare/cappuccino-vs-latte/",
    "/compare/americano-vs-espresso": "/compare/espresso-vs-americano/",
  },
});
