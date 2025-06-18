<script lang="ts">
  import { filteredTransactions } from "$lib/stores/transactions";
  import { categoryFilters } from "$lib/stores/filters";

  const transactionCount = $derived($filteredTransactions.length);
  const totalAmount = $derived($filteredTransactions.reduce(
    (sum, transaction) => sum + transaction.amount, 
    0
  ));
  
</script>

<div>
  <div class="d-stats d-stats-vertical border-base-content/10 border">
    <div class="d-stat">
      <div class="d-stat-title">Category</div>
      <div class="d-stat-value">{$categoryFilters}</div>
    </div>
    <div class="d-stat">
      <div class="d-stat-title">Number of Transactions</div>
      <div class="d-stat-value">{transactionCount}</div>
    </div>
    <div class="d-stat">
      <div class="d-stat-title">Total Amount</div>
      <div class="d-stat-value">{totalAmount.toFixed(2)}</div>
    </div>
    <div class="d-stat">
      <div class="d-stat-title">Average Amount</div>
      <div class="d-stat-value">{(totalAmount / transactionCount).toFixed(2)}</div>
    </div>
  </div>
</div>
