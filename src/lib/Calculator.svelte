<script lang="ts">
  import { Calculator } from "geo-web-lib";
  import {
    Row,
    Column,
    TextArea,
    Button,
    SkipToContent,
    ExpandableTile,
    UnorderedList,
    ListItem
  } from "carbon-components-svelte";

  let canvasElement: HTMLCanvasElement;

  let calculator = new Calculator();

  let wkt: string = "LINESTRING (-1 -1, 4 4)";

  let rasterization_result: string | undefined = undefined;
  let HandleCalculate = async (e: Event) => {
    let ctx = canvasElement.getContext("2d")!;
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    let raw_data = calculator.rasterize(wkt);
    let [w, h, ...clipped_data] = raw_data;

    let data = new Uint8ClampedArray(clipped_data);

    let id = new ImageData(data, w, h);
    createImageBitmap(id).then((sprite) => {
      ctx?.drawImage(sprite, 0, 0);
    });
  };
</script>

<Row>
  <Column>
    <ExpandableTile>
      <div slot="above">
        <div>Current limitation</div>
      </div>
      <div slot="below">
        <UnorderedList>
          <ListItem
            >X coordinate is reversed and negative coordinates work strangely (caused by need to
            transfer between wasm & js)</ListItem
          >
          <ListItem>Only works with LINESTRING</ListItem>
          <ListItem>Strange when it comes vertical strings</ListItem>
        </UnorderedList>
      </div>
    </ExpandableTile>
  </Column>
</Row>
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
    <SkipToContent />
    <Button on:click={HandleCalculate}>Rasterize</Button>
  </Column>
</Row>
<Row>
  <canvas bind:this={canvasElement} style="flex-grow: 1;" />
</Row>
