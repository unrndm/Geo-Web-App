<script lang="ts">
  import { Rasterizer } from "geo-web-lib";
  import {
    Row,
    Column,
    TextArea,
    Slider,
    NumberInput,
    Button,
    SkipToContent
  } from "carbon-components-svelte";

  let canvasElement: HTMLCanvasElement;

  let wkt: string = "POLYGON ((1 1, 3 1, 3 3, 1 3, 1 1))";
  let width: number = 5,
    height: number = 5,
    scale: number = 1;

  $: rasterizer = new Rasterizer(width, height);

  let HandleCalculate = async (e: Event) => {
    rasterizer.rasterize(wkt);
    let result = rasterizer.pixels();
    console.log(result);

    canvasElement.width = width * scale;
    canvasElement.height = height * scale;
    let ctx = canvasElement.getContext("2d")!;
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.fillStyle = "black";

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (result[x * width + y]) {
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      }
    }
  };
</script>

<Row>
  <Column>
    <TextArea
      hideLabel
      labelText="A variable WKT definition"
      placeholder="Enter WKT definition..."
      bind:value={wkt}
    />
  </Column>
</Row>
<Row>
  <Column>
    <NumberInput label="Height" placeholder="Enter rasterization width" bind:value={width} />
  </Column>
  <Column>
    <NumberInput label="Width" placeholder="Enter rasterization height" bind:value={height} />
  </Column>
</Row>
<Row>
  <Column>
    <Slider
      labelText="Scale"
      placeholder="Enter rasterization visualization scale"
      min={0.1}
      step={0.1}
      max={10}
      bind:value={scale}
    />
  </Column>
</Row>
<Row>
  <Column>
    <SkipToContent />
    <Button on:click={HandleCalculate}>Rasterize</Button>
  </Column>
</Row>
<Row>
  <canvas bind:this={canvasElement} style="flex-grow: 1;" />
</Row>
