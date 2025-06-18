<!-- filepath: c:\Projects\svelte\transaction-dashboard\src\lib\components\statistics\bar-chart.svelte -->
<script lang="ts">
  import { categoryTotalAmounts } from "$lib/stores/transactions";
  import { scaleBand } from "d3-scale";
  import { Layer, Chart, Axis, Rule, Bars, Labels } from "layerchart";
  import { shared } from "./shared.svelte";
</script>

<Chart
    data={$categoryTotalAmounts}
    x="category"
    xScale={scaleBand().padding(0.4)}
    y="total"
    yBaseline={0}
    yNice={4}
    yPadding={[16, 16]}
    padding={{ left: 16, bottom: 24 }}
  >
    <Layer type={shared.renderContext}>
      <Axis placement="left" grid rule />
      <Axis placement="bottom" rule />
      <Rule y={0} />
      <Bars class="fill-primary" />
      <Labels format="integer" />
    </Layer>
  </Chart>