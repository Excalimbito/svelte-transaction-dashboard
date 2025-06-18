<script lang="ts">
  import type {
    SortDirection,
    SortableField
  } from '../types/transaction-table';
  import { filteredTransactions, transactions } from '$lib/stores/transactions';
  import { CategoryTypes } from '$lib/types/categories';
  
  let sortField = $state<SortableField>('date');
  let sortDirection = $state<SortDirection>('asc');
  
  /** Categories for the select dropdown */
  const categories = Object.values(CategoryTypes);

  /** Sort data based on filteredTransactions, sortField and sortDirection*/
  const sortedTransactions = $derived([...$filteredTransactions].sort((a, b) => {
    const aVal = sortField === 'amount' ? a[sortField] : String(a[sortField]).toLowerCase();
    const bVal = sortField === 'amount' ? b[sortField] : String(b[sortField]).toLowerCase();
    
    if (sortDirection === 'asc') {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return bVal < aVal ? -1 : bVal > aVal ? 1 : 0;
    }
  }));

  /** Handle Sort direction change */
  function handleSort(field: SortableField): void {
    if (sortField === field) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortField = field;
      sortDirection = 'asc';
    }
  }

  /** Handle category change for a transaction */
  function handleCategoryChange(transactionId: string, newCategory: CategoryTypes): void {
    $transactions = $transactions.map(t => 
      t.id === transactionId 
        ? { ...t, category: newCategory } 
        : t
    );
  }
</script>

<div class="overflow-x-auto rounded-box border border-base-content/5">
  <table class="d-table w-full">
    <thead>
      <tr>
        <th class="cursor-pointer" onclick={() => handleSort('date')}>
          Date {sortField === 'date' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
        </th>
        <th>Description</th>
        <th class="cursor-pointer" onclick={() => handleSort('amount')}>
          Amount {sortField === 'amount' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
        </th>
        <th class="cursor-pointer" onclick={() => handleSort('category')}>
          Category {sortField === 'category' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
        </th>
      </tr>
    </thead>
    <tbody>
      {#each sortedTransactions as transaction}
        <tr>
          <td>{new Date(transaction.date).toLocaleDateString()}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount.toFixed(2)}</td>
          <td>
            <select 
              class="select select-bordered w-full max-w-xs"
              bind:value={transaction.category}
              onchange={() => handleCategoryChange(transaction.id, transaction.category as CategoryTypes)}
            >
              <option value={CategoryTypes.UNCATEGORIZED}>Select Category</option>
                {#each categories as category (category)}
                  {#if category !== CategoryTypes.UNCATEGORIZED}
                    <option value={category}>
                    {category}
                    </option>
                  {/if}
                {/each}
            </select>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
