<script lang="ts">
  import "carbon-components-svelte/css/g80.css";
  // import "carbon-components-svelte/css/all.css";
  // import { Theme } from "carbon-components-svelte";
  // import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";
  // let theme: CarbonTheme;

  export const prerender = true;
</script>

<!-- <div style="display: inline-block">
  <Theme
    bind:theme
    render="toggle"
    toggle={{
      themes: ["white", "g80"],
      labelText: "Toggle theme"
      // hideLabel: true
    }}
    persist
    persistKey="__carbon-theme"
  >
    <div slot="labelA">sun</div>
    <div slot="labelB">moon</div>
  </Theme>
</div> -->

<slot />
