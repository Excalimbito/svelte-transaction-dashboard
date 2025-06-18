import type { Transaction } from "./transaction";

export type SortDirection = 'asc' | 'desc';
export type SortableField = keyof Transaction;