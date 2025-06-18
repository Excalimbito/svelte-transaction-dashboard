<script lang="ts">
  import { CategoryTypes } from "$lib/types/categories";
  import { categoryFilters } from "$lib/stores/filters";

  const categories = Object.values(CategoryTypes);
</script>

<label class="d-select d-join-item">
  <span class="d-label">Type</span>
  <select bind:value={$categoryFilters}>
    {#each categories as category}
      <option value={category}>
        {category}
      </option>
    {/each}
  </select>
</label>