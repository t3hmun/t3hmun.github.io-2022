import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://t3hmun.github.io",
  integrations: [sitemap(), tailwind()],
  markdown: {
    syntaxHighlight: "prism",
  },
});
