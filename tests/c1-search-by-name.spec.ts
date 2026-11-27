import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('C1 Search by name', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchTerm = 'pliers';

  await homePage.navigateToHomepage();
  await homePage.searchFor(searchTerm);

  await expect(homePage.searchResultsHeading(searchTerm)).toBeVisible();
  await expect(homePage.productNames.first()).toBeVisible();
  await expect(homePage.productsNotContaining(searchTerm)).toHaveCount(0);
});