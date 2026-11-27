import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly searchTextbox: Locator;
  readonly searchButton: Locator;
  readonly productNames: Locator;

  constructor(private readonly page: Page) {
    this.searchTextbox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.productNames = page.locator('[data-test="product-name"]');
  }

    async navigateToHomepage(): Promise<void> {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }

  async searchFor(term: string): Promise<void> {
    await this.searchTextbox.fill(term);
    await this.searchButton.click();
  }

  searchResultsHeading(term: string): Locator {
    return this.page.getByRole('heading', { name: `Searched for: ${term}` });
  }

  productsNotContaining(term: string): Locator {
    return this.page
      .locator('[data-test="product-name"]')
      .filter({ hasNotText: new RegExp(term, 'i') });
  }
}