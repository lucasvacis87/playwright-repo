# 🎭 Playwright Automation – Professional Practice

> A modern, production-ready **E2E test automation** repository built with **Playwright** & **TypeScript**. Portfolio-grade with zero friction.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-Latest-blue)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-orange)](https://github.com/features/actions)

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **Playwright** | Modern E2E testing framework |
| **TypeScript** | Type-safe test automation |
| **Node.js** | Runtime environment |
| **GitHub Actions** | Automated CI/CD |
| **GitHub Pages** | Public report hosting |

---

## 📁 Project Structure

```
.
├── tests/                    # Test specifications, specs, pages, fixtures, helpers, types
├── playwright.config.ts      # Configuration
├── package.json
├── .gitignore
└── .github/workflows/
    └── playwright.yml               # GitHub Actions pipeline
```

---

## ⚡ Quick Start

### 1️⃣ Clone & Install
```bash
git clone https://github.com/lucasvacis87/playwright-repo.git
cd <repo-name>
npm install
npx playwright install --with-deps
```

### 2️⃣ Run Tests
```bash
npm test              # All tests
npm run test:ui       # Interactive mode
npm run test:debug    # Debug mode
npm run report        # View HTML report
```

### 3️⃣ View Reports
```bash
npx playwright show-report
```

---

## 📊 Test Reports

✅ **Passed/Failed Results** | 📸 **Screenshots** | 🎬 **Videos & Traces** | ⏱️ **Timing Analytics**

### 🌍 Live Public Report
```
https://lucasvacis87.github.io/playwright-repo/
```
*Auto-published from CI on every successful run*

---

## 🏗️ Testing Philosophy

- ✓ Reliable locators (roles, text, test IDs)
- ✓ Flake-free automation
- ✓ Test behavior, not implementation
- ✓ Readable, maintainable code
- ✓ CI-first with parallel execution

---

## 📋 Roadmap

- [ ] Multi-browser execution
- [ ] Advanced sharding
- [ ] Latest reports

---

**Built for professionals. Made for portfolios.** ✨
