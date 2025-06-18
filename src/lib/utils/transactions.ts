import { CategoryTypes, categoryKeywords } from "$lib/types/categories";

/** Check for keywords in data description and categorizes it */
export function autoCategorizeTransaction(description: string): CategoryTypes {
  const lowerDesc = description.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerDesc.includes(keyword))) {
      return category as CategoryTypes;
    }
  }

  return CategoryTypes.UNCATEGORIZED;
}