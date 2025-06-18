import { writable, derived } from 'svelte/store';
import sampleTransactions from '../data/sample-data.json';
import { dateFilters, categoryFilters } from './filters';
import { CategoryTypes } from '$lib/types/categories';
import type { Transaction } from '$lib/types/transaction';
import type { CategoryBarChartData } from '$lib/types/transaction';
import { autoCategorizeTransaction } from '$lib/utils/transactions';

const initialTransactions: Transaction[] = sampleTransactions;

export const transactions = writable<Transaction[]>(
  initialTransactions.map(transaction => ({
    ...transaction,
    category: autoCategorizeTransaction(transaction.description),
  }))
);

export const filteredTransactions = derived(
  [transactions, dateFilters, categoryFilters],
  ([$transactions, $dateFilters, $categoryFilter]) => {
    let filteredData = $transactions;

    /** If there is date filter, apply them */
    if($dateFilters.startDate || $dateFilters.endDate) {
      filteredData = filteredData.filter(transaction => {
        const matchesDateRange = (!$dateFilters.startDate || transaction.date >= $dateFilters.startDate) &&
                                (!$dateFilters.endDate || transaction.date <= $dateFilters.endDate);
        return matchesDateRange;
      });
    }

    /** Apply category filter */
    filteredData = filteredData.filter(transaction => {
      const matchesCategory = $categoryFilter === CategoryTypes.ALL || transaction.category === $categoryFilter;
      return matchesCategory;
    })

    return filteredData;
  }
);

export const categoryTotalAmounts = derived([transactions], ([$transactions]) => {
  let categoryTotals: CategoryBarChartData[] = Object.values(CategoryTypes)
    .filter(category => category !== CategoryTypes.ALL)
    .map(category => ({
      category,
      total: 0
    }));

  /** Find and update category total */
  $transactions.forEach(transaction => {
    if (transaction.category && transaction.category !== CategoryTypes.ALL) {
      const categoryData = categoryTotals.find(data => data.category === transaction.category);
      if (categoryData) {
        categoryData.total += transaction.amount;
      }
    } else {
      const uncategorized = categoryTotals.find(data => data.category === "UNCATEGORIZED");
      if (uncategorized) {
        uncategorized.total += transaction.amount;
      } else {
        categoryTotals.push({
          category: CategoryTypes.UNCATEGORIZED,
          total: transaction.amount
        });
      }
    }
  });

  return categoryTotals;
});