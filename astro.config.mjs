import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});