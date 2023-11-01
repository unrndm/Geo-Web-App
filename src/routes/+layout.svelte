<script lang="ts">
  import "carbon-components-svelte/css/g80.css";
  // import "carbon-components-svelte/css/all.css";
  // import { Theme } from "carbon-components-svelte";
  // import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";
  // let theme: CarbonTheme;
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column
  } from "carbon-components-svelte";

  let isSideNavOpen = false;
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

<Header company="unrndm" platformName="geo-web-lib demo" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <!-- <HeaderNav>
    <HeaderNavItem href="/" text="Link 1" />
    <HeaderNavItem href="/" text="Link 2" />
    <HeaderNavItem href="/" text="Link 3" />
    <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/" text="Link 1" />
      <HeaderNavItem href="/" text="Link 2" />
      <HeaderNavItem href="/" text="Link 3" />
    </HeaderNavMenu>
  </HeaderNav> -->
</Header>

<Content>
  <Grid padding={true}>
    <slot />
  </Grid>
</Content>
