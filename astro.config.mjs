import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mshardey.com",
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    domains: ["unsplash.com"],
  },
});
