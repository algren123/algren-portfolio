import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://algrenpauna.com",
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["gtag"],
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
});
