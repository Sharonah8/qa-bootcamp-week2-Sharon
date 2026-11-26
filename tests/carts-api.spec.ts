import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test('creates a cart and adds a product successfully', async ({ request }) => {
  let cartId: string | undefined;

  try {
    // Create a cart
    const createCartResponse = await request.post(`${API_URL}/carts`);

    expect(createCartResponse.status()).toBe(201);

    const cartBody = await createCartResponse.json();
    expect(cartBody.id).toBeTruthy();

    cartId = cartBody.id;

    // Add a product to the cart
    const addProductResponse = await request.post(`${API_URL}/carts/${cartId}`, {
    data: {
        product_id: '01M8CCT624DQCTEYWEQPJ0KYHX',
        quantity: 2
    }
    });

    const addProductResponseBody = await addProductResponse.text();

    console.log('Add product status:', addProductResponse.status());
    console.log('Add product response:', addProductResponseBody);

    expect(addProductResponse.status()).toBe(200);

    const addProductBody = await addProductResponse.json();

    expect(addProductBody.result).toBe('item added or updated');

  } finally {
  if (cartId) {
    const deleteCartResponse = await request.delete(`${API_URL}/carts/${cartId}`);

    expect(deleteCartResponse.status()).toBe(204);
  }
}
});

test('returns 404 when requesting a cart that does not exist', async ({ request }) => {
  const invalidCartId = 'nonexistent-cart-123';

  const response = await request.get(`${API_URL}/carts/${invalidCartId}`);

  expect(response.status()).toBe(404);
});