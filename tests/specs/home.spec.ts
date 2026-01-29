import { test, expect } from "../fixtures/test";

test.describe("Home", () => {
  test.beforeEach(async ({ app }) => {
    await app.home.goto();
  });
  
  test("navigate to home page", async ({ app }) => {
    // Verify Home Page loaded successfully
    await app.home.verifyPageLogoIsVisible();
    await app.home.verifyNavigationBarIsVisible();
  });

  test("verify home page elements", async ({ app }) => {
    await app.home.verifyCarouselIsVisible();
    await app.home.verifyFeaturedItemsSectionIsVisible();
    await app.home.verifySideBarIsVisible();

    await app.home.verifyFeaturedSectionItems();
  });

  test("another test", async ({ app }) => {
    await app.home.goto();
  });
});
