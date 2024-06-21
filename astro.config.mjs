import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import qwik from "@qwikdev/astro";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solid({
      include: ["**/*.solid.ts*"],
    }), 
    qwik({
      include: ["**/*.qwik.ts*"],
    }),
    react({
      include: ["**/*.react.ts*"],
    }),
  ], 
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});