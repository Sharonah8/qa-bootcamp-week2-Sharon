import { test, expect } from '@playwright/test';

test('homepage displays the correct title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Add the title assertion here.
  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
});

test('search finds all products with pliers in the name', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Searched for: pliers' })).toBeVisible();

  await expect(
    page.locator('[data-test="product-name"]').filter({ hasNotText: /pliers/i })
  ).toHaveCount(0);
});

test('invalid login is rejected', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByLabel('Email').fill('invalid@example.com');
  await page.locator('[data-test="password"]').fill('wrongpassword');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid email or password')).toBeVisible();
});