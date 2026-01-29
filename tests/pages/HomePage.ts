import { Page, expect } from '@playwright/test';

export default class HomePage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }   

    ////// Elements


    private get pageLogo() {
        return this.page.getByAltText('Website for automation practice');
    }

    private get navigationBar() {
        return this.page.locator('.shop-menu');
    }

    private get carousel() {
        return this.page.locator('#slider-carousel');
    }

    private get featuredItemsSection() {
        return this.page.locator('.features_items');
    }

    private get sideBar() {
        return this.page.locator('.left-sidebar');
    }

    ////// Methods

    async goto() {
        await this.page.goto('/');
    }

    async verifyPageLogoIsVisible() {
        await expect(this.pageLogo).toBeVisible();
    }
    
    async verifyNavigationBarIsVisible() {
        await expect(this.navigationBar).toBeVisible();
    }

    async verifyCarouselIsVisible() {
        await expect(this.carousel).toBeVisible();
    }

    async verifyFeaturedItemsSectionIsVisible() {
        await expect(this.featuredItemsSection).toBeVisible();
    }   

    async verifyFeaturedSectionItems() {
        const items = this.featuredItemsSection.locator('.single-products');
        const itemCount = await items.count();
        expect(itemCount).toBeGreaterThan(10);
    }

    async verifySideBarIsVisible() {
        await expect(this.sideBar).toBeVisible();
    }


}