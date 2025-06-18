# Svelte Transaction Dashboard

A transaction management interface built with SvelteKit, TypeScript and DaisyUI that alows users to analyze personal expenses.

## Features

- Transaction Statistics
- Transaction display with sortable columns
- Filtering transaction by date and cathegories
- Auto-categorization based on keywords

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Web application framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [DaisyUI](https://daisyui.com/) - UI components
- [LayerChart](https://layerchart.com/) - Data visualization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Excalimbito/svelte-transaction-dashboard.git
cd svelte-transaction-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev -- --open
```

4. Navigate to the local host from your terminal.

## Project Structure

```
src/
├── lib/
│   ├── components/    # Reusable UI components
│   ├── data/          # Sample transaction data
│   ├── stores/        # Svelte stores for state management
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Helper functions
└── routes/            # SvelteKit pages and layouts
```
