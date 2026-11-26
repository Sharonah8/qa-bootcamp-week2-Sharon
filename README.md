# QA Bootcamp Week 2 – Playwright Test Suite

This repository contains UI and API automated tests written using TypeScript and Playwright for the Practice Software Testing Toolshop application.

## Prerequisites

- [Node.js](https://nodejs.org/) (current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup and Run Tests

Follow these three steps from your terminal.

### 1. Install dependencies and Playwright Chromium

```bash
npm install
npx playwright install chromium
```

### 2. Configure environment variables

Copy `.env.example` to `.env`.

**Windows PowerShell:**
```powershell
Copy-Item .env.example .env
```

**macOS/Linux:**
```bash
cp .env.example .env
```

The `.env` file contains the Toolshop website URL (`TOOLSHOP_URL`) and API URL (`TOOLSHOP_API_URL`). Only change them if your trainer provides different URLs.

### 3. Run the test suite

```bash
npm test
```

This runs all Playwright tests in the `tests/` directory using Chromium.

## Test Coverage

The suite contains six automated tests:

| Test file | Coverage |
|---|---|
| `homepage.spec.ts` | Homepage title, product search, invalid login |
| `product-search.spec.ts` | Product search using the Page Object Model |
| `carts-api.spec.ts` | Cart creation, adding a product, cleanup, and handling a nonexistent cart |

## Project Structure

| Folder/File | Purpose |
|---|---|
| `tests/` | Playwright UI and API tests |
| `pages/` | Page Object Model classes |
| `scripts/` | Helper scripts, including the environment/API setup check |
| `playwright.config.ts` | Playwright configuration |
| `.env.example` | Example environment variables |

## Available Scripts

- `npm test` – runs the complete Playwright test suite.
- `npm run check` – checks environment configuration and API connectivity.

## Environment and Security

Never commit `.env`. It contains local configuration and may contain secrets such as API keys, tokens, or passwords. It is listed in `.gitignore` and should remain excluded from version control.
