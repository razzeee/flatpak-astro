// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import yaml from "@rollup/plugin-yaml";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml(), tailwindcss()],
  },

  integrations: [react()],
});