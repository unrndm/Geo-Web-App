import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import wasm from "vite-plugin-wasm";
import { optimizeCss } from "carbon-preprocess-svelte";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    sveltekit(),
    process.env.NODE_ENV === "production" && optimizeCss()
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
});
