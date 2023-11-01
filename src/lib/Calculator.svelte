<script lang="ts">
  import { Calculator } from "geo-web-lib";
  import { Row, Column, TextArea, Button, SkipToContent } from "carbon-components-svelte";

  // let canvasElement: HTMLCanvasElement;

  let calculator = new Calculator();
  let wkt: string;
  let HandleInput = (e: Event) => {
    wkt = (e.target as HTMLTextAreaElement)?.value || "";
  };

  let rasterization_result: string | undefined = undefined;
  let HandleCalculate = async (e: Event) => {
    let data = calculator.rasterize(wkt);
    rasterization_result = JSON.stringify(data);
    // let w = data.at(-2)!;
    // let new_data = data.slice(0, -2);
    // rasterization_result = JSON.stringify({
    //   width: w,
    //   pixels: new_data
    // });
    // let h = Math.round(new_data.length / w);
    // for (let index = 0; index < w; index++) {
    // const element = array[index];
    // }
    // console.log(h, w, new_data);
  };
</script>

<Row>
  <Column>
    <TextArea
      hideLabel
      labelText="A variable WKT definition"
      placeholder="Enter WKT definition..."
      on:click={HandleInput}
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
  <Column>
    <!-- <canvas bind:this={canvasElement} /> -->
    <TextArea disabled labelText="Rasterization result:" value={rasterization_result} />
  </Column>
</Row>
