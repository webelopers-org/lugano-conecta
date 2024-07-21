import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind(),
    sanity({
      projectId: "njzflssl",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
});
