import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "njzflssl",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
