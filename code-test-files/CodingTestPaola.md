# Transaction Manager - Take Home Assignment

## Overview
Build a transaction management interface using Svelte 5 where users can view, categorize, and analyze personal expenses. Focus on clean component architecture and effective use of Svelte's reactivity system.

---

## Core Requirements (2-3 hours)

### 1. Transaction Display & Management
✅- Display provided transaction data in a sortable table (by date, amount, category)
✅- Implement filtering by date range and category
✅- Add manual category assignment using dropdown selectors
✅- Show transaction count and total amounts

### 2. Smart Categorization
✅- Implement basic auto-categorization
    - Example: "STARBUCKS" → "Coffee", "WHOLE FOODS" → "Groceries"
✅- Allow users to accept/reject suggested categories
- Provide bulk categorization options for similar transactions

### 3. Category Analytics
✅- Display category breakdown showing spending by category
✅- Show simple summary statistics (total spent, average transaction, etc.)
- Basic responsive design that works on mobile and desktop

### Transaction Data Model:
```javascript
{
  id: string,
  date: string,
  description: string,
  amount: number,
  category?: string
}
```

---

## Stretch Goals (if time allows)
- CSV upload functionality for importing new transactions
- More sophisticated categorization logic (fuzzy matching, learning from user corrections)
✅- Simple chart visualization (bar chart, pie chart, or trend line)
- Transaction search functionality
- Export filtered results

---

## Technical Requirements

**Technology Stack:**
- **Frontend**: Svelte 5 (use runes or stores as appropriate)
- **Styling**: Your choice (Tailwind, vanilla CSS, etc.)
- **Data**: We'll provide a JSON file with sample transactions
- **TypeScript**: Preferred but not required

**Code Quality:**
- Clean, readable code with logical component structure
- Appropriate use of Svelte's reactivity features
- Basic error handling for user interactions
- Simple README with setup and run instructions

---

## Provided Data
You'll receive a JSON file with 50+ sample transactions in this format:
```json
[
  {
    "id": "1",
    "date": "2024-01-02",
    "description": "STARBUCKS STORE #1234",
    "amount": -4.85
  },
  {
    "id": "2", 
    "date": "2024-01-03",
    "description": "WHOLE FOODS MARKET 456",
    "amount": -67.23
  }
]
```

---

## Submission Guidelines

**What to submit:**
- Complete source code in a Git repository
- README with setup and run instructions
- Brief explanation of your categorization approach
- Any assumptions or design decisions you made

**Time Expectation:** 
Please limit yourself to **4 hours maximum**. We're evaluating code quality, problem-solving approach, and Svelte skills rather than feature completeness.

**Evaluation Criteria:**
- **Svelte Implementation**: Effective use of Svelte 5 features and patterns
- **Component Architecture**: Well-structured, reusable components
- **Code Quality**: Clean, maintainable code
- **User Experience**: Intuitive interface and smooth interactions
- **Problem Solving**: Approach to categorization logic and data handling

---

## Getting Started
1. Create a new SvelteKit project
2. Load the provided transaction data
3. Focus on the core requirements first
4. Add stretch goals only if time permits

**Questions?** Feel free to reach out if you need clarification on any requirements.

Focus on demonstrating your Svelte skills and architectural thinking rather than building every possible feature. We're excited to see your approach!
