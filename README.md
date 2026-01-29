# Playwright Automation – Professional Practice Repository

This repository is a professional Playwright practice project designed as a portfolio and reference for end-to-end (E2E) test automation best practices.

**Goal:** Clone, install, run tests, and generate detailed HTML reports—locally and in CI—with zero additional setup.

## Tech Stack

- **Playwright** – Modern E2E testing framework
- **TypeScript** – Type-safe test code
- **Node.js** – Runtime environment
- **GitHub Actions** – CI/CD automation

## Project Structure

```
.
├── tests/                    # Test specifications
├── playwright.config.ts      # Playwright configuration
├── package.json
├── .gitignore
└── .github/
    └── workflows/
        └── ci.yml            # GitHub Actions workflow
```

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies

```bash
npm install
npx playwright install --with-deps
```

### 3. Run tests

```bash
npm test                    # Run all tests
npm run test:ui            # UI mode
npm run test:debug         # Debug mode
npm run report             # View HTML report
```

## Test Reports

Playwright generates an HTML report after each execution with:
- ✅ Passed/failed test results
- 📸 Screenshots on failure
- 🎬 Traces and videos (when enabled)
- ⏱️ Execution timing

**View locally:**
```bash
npx playwright show-report
```

## Continuous Integration

Tests run automatically on every push to `main` via GitHub Actions.

**To view CI reports:**
1. Go to **Actions** tab in GitHub
2. Open a workflow run
3. Download the `playwright-report` artifact
4. Open `index.html` locally

## Testing Philosophy

✓ Reliable locators (roles, text, test IDs)  
✓ Avoid flaky tests  
✓ Test user behavior, not implementation  
✓ Clean, maintainable structure  
✓ CI-optimized execution  

## Roadmap

- [ ] Pull Request checks
- [ ] Multi-browser execution
- [ ] Test tagging & filtering
- [ ] Parallel jobs/sharding
- [ ] GitHub Pages report publishing

---

Built as a professional Playwright practice and portfolio project.
