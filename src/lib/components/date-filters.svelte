<script lang="ts">
  import { dateFilters } from "$lib/stores/filters";

  let startDate = $state("");
  let endDate = $state("");

  $effect(() => {
    handleFilterChange({
      startDate,
      endDate
    });
  });

  const handleFilterChange = (newFilters: {
    startDate: string;
    endDate: string;
  }) => {
    $dateFilters = newFilters;
  };
</script>

<label class="d-input d-join-item">
  <span class="d-label">Start Date</span>
  <input
    type="date" 
    bind:value={startDate} 
  />
</label>
<label class="d-input d-join-item">
  <span class="d-label">End Date</span>
  <input
    type="date" 
    bind:value={endDate}
  />
</label>
