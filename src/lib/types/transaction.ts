import type { CategoryTypes } from "./categories";

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category?: string;
}

export type CategoryBarChartData = {
  category: CategoryTypes;
  total: number;
}