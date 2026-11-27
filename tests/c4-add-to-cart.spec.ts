import { test, expect } from '@playwright/test';

const API_URL =
  process.env.TOOLSHOP_API_URL ?? 'https://api.practicesoftwaretesting.com';

test('C4 Add a product to a cart', async ({ request }) => {
  let cartId: string | undefined;

  try {
    // Create a cart
    const createCartResponse = await request.post(`${API_URL}/carts`);

    expect(createCartResponse.status()).toBe(201);

    const createCartBody = await createCartResponse.json();
    expect(createCartBody.id).toBeTruthy();

    cartId = createCartBody.id;

    // Add a product
    const addProductResponse = await request.post(
      `${API_URL}/carts/${cartId}`,
      {
        data: {
          product_id: '01M8DWWAV5X3E83E1020XMADYR',
          quantity: 2,
        },
      },
    );

    expect(addProductResponse.status()).toBe(200);

    // Retrieve the cart
    const getCartResponse = await request.get(`${API_URL}/carts/${cartId}`);

    expect(getCartResponse.status()).toBe(200);

    const cartBody = await getCartResponse.json();

    expect(cartBody.cart_items).toHaveLength(1);
    expect(cartBody.cart_items[0].product_id).toBe(
        '01M8DWWAV5X3E83E1020XMADYR',
    );
    expect(cartBody.cart_items[0].quantity).toBe(2);

  } finally {
    // Clean up the cart
    if (cartId) {
      const deleteCartResponse = await request.delete(
        `${API_URL}/carts/${cartId}`,
      );

      expect(deleteCartResponse.status()).toBe(204);
    }
  }
});