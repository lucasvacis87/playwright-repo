import { test as base, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";

class AppPages {
  readonly home: HomePage;

  constructor(page: any) {
    this.home = new HomePage(page);
  }
}

type Fixtures = {
  app: AppPages;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    await use(new AppPages(page));
  },
});

export { expect };
