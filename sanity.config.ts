import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./cms/schemaTypes";

export default defineConfig({
  name: "default",
  title: "LuganoConecta",

  projectId: "njzflssl",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
