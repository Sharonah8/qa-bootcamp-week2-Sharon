import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('search for pliers and show only matching products', async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  const searchTerm = 'pliers';

  await homePage.navigateToHomepage();
  await homePage.searchFor(searchTerm);


  await expect(homePage.searchResultsHeading(searchTerm)).toBeVisible();
  await expect(homePage.productNames.first()).toBeVisible();
  await expect(homePage.productsNotContaining(searchTerm)).toHaveCount(0);

  await page.screenshot({
    path: testInfo.outputPath('product-search-passing.png'),
    fullPage: true,
  });
});