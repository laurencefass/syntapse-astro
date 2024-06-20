import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import qwikdev from "@qwikdev/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), react(), solidJs()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});