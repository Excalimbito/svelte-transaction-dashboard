export enum CategoryTypes {
  ALL = 'ALL',
  COFFEE = 'COFFEE',
  ENTERTAINMENT = 'ENTERTAINMENT',
  FOOD = 'FOOD',
  GROCERY = 'GROCERY',
  HEALTHCARE = 'HEALTHCARE',
  INCOME = 'INCOME',
  SHOPPING = 'SHOPPING',
  SUBSCRIPTION = 'SUBSCRIPTION',
  TRANSPORTATION = 'TRANSPORTATION',
  UTILITIES = 'UTILITIES',
  OTHER = 'OTHER',
  UNCATEGORIZED = 'UNCATEGORIZED'
}

export const categoryKeywords = {
  [CategoryTypes.FOOD]: ['restaurant', 'cafe', 'groceries', 'food', 'meal'],
  [CategoryTypes.SHOPPING]: ['amazon', 'store', 'market', 'shop', 'retail'],
  [CategoryTypes.TRANSPORTATION]: ['uber', 'lyft', 'taxi', 'gas', 'parking', 'transit', 'bus', 'train', 'metro'],
  [CategoryTypes.UTILITIES]: ['electricity', 'water', 'internet', 'phone', 'utility', 'gas bill', 'energy'],
  [CategoryTypes.ENTERTAINMENT]: ['movie', 'theatre', 'netflix', 'spotify', 'game', 'concert', 'show'],
  [CategoryTypes.COFFEE]: ['coffee', 'starbucks', 'cafe', 'espresso', 'latte'],
  [CategoryTypes.GROCERY]: ['grocery', 'supermarket', 'groceries', 'walmart', 'aldi', 'costco'],
  [CategoryTypes.HEALTHCARE]: ['pharmacy', 'doctor', 'hospital', 'clinic', 'medicine', 'health', 'dentist'],
  [CategoryTypes.INCOME]: ['salary', 'paycheck', 'deposit', 'income' ],
  [CategoryTypes.SUBSCRIPTION]: ['subscription', 'membership', 'monthly', 'recurring', 'service', 'plan'],
  [CategoryTypes.OTHER]: ['misc', 'other', 'various', 'general', 'refund', 'bonus'],
  [CategoryTypes.UNCATEGORIZED]: ['uncategorized', 'unknown'],
};