import { test, expect } from '@playwright/test';

test('products API responds successfully', async ({ request }) => {
	const response = await request.get('https://practicesoftwaretesting.com/');

	expect(response.status()).toBe(200);

	const body = await response.json();
    expect(body.current_page).toBe(1);
});