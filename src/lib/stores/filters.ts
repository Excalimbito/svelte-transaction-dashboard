import { CategoryTypes } from "$lib/types/categories";
import { writable } from "svelte/store";

export const dateFilters = writable<{
  startDate: string;
  endDate: string;
}>({
  startDate: '',
  endDate: ''
});

export const categoryFilters = writable<CategoryTypes>(CategoryTypes.ALL);