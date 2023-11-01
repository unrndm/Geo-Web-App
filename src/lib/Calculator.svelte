<script lang="ts">
  import { Calculator } from "geo-web-lib";
  import { Row, Column, TextArea, Button, SkipToContent } from "carbon-components-svelte";

  let calculator = new Calculator();
  let A: undefined | string,
    B: undefined | string = undefined;

  let HandleInput = (var_name: string) => (e: Event) => {
    calculator.add_variable_from_wkt(var_name, (e.target as HTMLTextAreaElement)?.value || "");
  };
  let calculation_result: string | undefined = undefined;
  let HandleCalculate = (e: Event) => (calculation_result = calculator.calculate("geomdiff"));
</script>

<Row>
  <Column>
    <TextArea
      hideLabel
      labelText="A variable WKT definition"
      placeholder="Enter A WKT definition..."
      on:change={HandleInput("A")}
    />
  </Column>
  <Column>
    <TextArea
      hideLabel
      labelText="B variable WKT definition"
      placeholder="Enter B WKT definition..."
      on:change={HandleInput("B")}
    />
  </Column>
</Row>
<Row>
  <Column>
    <SkipToContent />
    <Button on:click={HandleCalculate}>Compute GeomDiff</Button>
  </Column>
</Row>
{#if calculation_result}
  <Row>
    <Column>
      <TextArea disabled labelText="Computation result:" value={calculation_result} />
    </Column>
  </Row>
{/if}
