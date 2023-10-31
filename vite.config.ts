import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import wasm from "vite-plugin-wasm";
import { optimizeCss } from "carbon-preprocess-svelte";

export default defineConfig({
  plugins: [wasm(), sveltekit(), process.env.NODE_ENV === "production" && optimizeCss()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
});
