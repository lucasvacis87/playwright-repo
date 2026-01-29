import { Page } from '@playwright/test';

export default class HomePage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }   

    ////// Elements


    private get pageLogo() {
        return this.page.getByAltText('Website for automation practice');
    }
    ////// Methods

    async goto() {
        await this.page.goto('/');
    }

    async verifyPageLogoIsVisible() {
        await this.pageLogo.waitFor({ state: 'visible' });
    }

}