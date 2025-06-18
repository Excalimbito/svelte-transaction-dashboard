<script>
  import Stats from '$lib/components/statistics/stats.svelte';
  import TransactionTable from '$lib/components/transaction-table.svelte';
  import DateFilters from '$lib/components/date-filters.svelte';
  import CategoryFilter from '$lib/components/category-filter.svelte';
  import BarChart from '$lib/components/statistics/bar-chart.svelte';
</script>

<main class="p-4 grid grid-cols-5 grid-rows-5 gap-4">
  <h1 class="text-2xl font-bold mb-4">Transaction Dashboard</h1>
  <div class="col-span-4">
    <div class="flex items-center">
      Filters
      <div class="d-divider d-divider-horizontal"></div>
      <div class="d-join">
        <DateFilters/>
        <CategoryFilter/>
      </div>
    </div>
  </div>
  <div class="col-span-1 row-span-5">
    <h3 class="text-xl font-semibold mb-2">Transaction Statistics</h3>
    <Stats/>
  </div>
  <div class="col-span-4 row-span-5">
    <h3 class="text-xl font-semibold mb-2">Transaction Categories Breakdown</h3>
    <BarChart />
  </div>
  <div class="col-span-5 row-span-3">
    <TransactionTable/>
  </div>
</main>
