import { test, expect } from "../fixtures/test";

test.describe("Home", () => {
  test.beforeEach(async ({ app }) => {
    await app.home.goto();
  });
  
  test("navigate to home page", async ({ app }) => {
    await app.home.goto();
    await app.home.verifyPageLogoIsVisible();
  });

  test("verify navigation bar", async ({ app }) => {
    await app.home.goto();
    // TODO: assertions navbar
  });

  test("another test", async ({ app }) => {
    await app.home.goto();
  });
});
