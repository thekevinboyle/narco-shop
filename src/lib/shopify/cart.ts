import { shopifyFetch, isShopifyConfigured } from "./client";
import {
  CREATE_CART_MUTATION,
  GET_CART_QUERY,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
} from "./queries";
import type { Cart } from "./types";

const CART_ID_KEY = "narcotic_cart_id";

// Get cart ID from localStorage
export function getStoredCartId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CART_ID_KEY);
}

// Store cart ID in localStorage
export function storeCartId(cartId: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_ID_KEY, cartId);
}

// Clear cart ID from localStorage
export function clearStoredCartId(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_ID_KEY);
}

// Create a new cart
export async function createCart(
  lines: { merchandiseId: string; quantity: number }[] = []
): Promise<Cart | null> {
  if (!isShopifyConfigured()) return null;

  try {
    const data = await shopifyFetch<{
      cartCreate: { cart: Cart; userErrors: { message: string }[] };
    }>({
      query: CREATE_CART_MUTATION,
      variables: { lines },
    });

    if (data.cartCreate.userErrors.length > 0) {
      console.error("Cart creation errors:", data.cartCreate.userErrors);
      return null;
    }

    const cart = data.cartCreate.cart;
    storeCartId(cart.id);
    return cart;
  } catch (error) {
    console.error("Error creating cart:", error);
    return null;
  }
}

// Get existing cart
export async function getCart(cartId: string): Promise<Cart | null> {
  if (!isShopifyConfigured()) return null;

  try {
    const data = await shopifyFetch<{ cart: Cart | null }>({
      query: GET_CART_QUERY,
      variables: { cartId },
    });
    return data.cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
}

// Add item to cart
export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart | null> {
  if (!isShopifyConfigured()) return null;

  try {
    const data = await shopifyFetch<{
      cartLinesAdd: { cart: Cart; userErrors: { message: string }[] };
    }>({
      query: ADD_TO_CART_MUTATION,
      variables: { cartId, lines },
    });

    if (data.cartLinesAdd.userErrors.length > 0) {
      console.error("Add to cart errors:", data.cartLinesAdd.userErrors);
      return null;
    }

    return data.cartLinesAdd.cart;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
}

// Update cart line quantity
export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart | null> {
  if (!isShopifyConfigured()) return null;

  try {
    const data = await shopifyFetch<{
      cartLinesUpdate: { cart: Cart; userErrors: { message: string }[] };
    }>({
      query: UPDATE_CART_MUTATION,
      variables: {
        cartId,
        lines: [{ id: lineId, quantity }],
      },
    });

    if (data.cartLinesUpdate.userErrors.length > 0) {
      console.error("Update cart errors:", data.cartLinesUpdate.userErrors);
      return null;
    }

    return data.cartLinesUpdate.cart;
  } catch (error) {
    console.error("Error updating cart:", error);
    return null;
  }
}

// Remove item from cart
export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<Cart | null> {
  if (!isShopifyConfigured()) return null;

  try {
    const data = await shopifyFetch<{
      cartLinesRemove: { cart: Cart; userErrors: { message: string }[] };
    }>({
      query: REMOVE_FROM_CART_MUTATION,
      variables: { cartId, lineIds },
    });

    if (data.cartLinesRemove.userErrors.length > 0) {
      console.error("Remove from cart errors:", data.cartLinesRemove.userErrors);
      return null;
    }

    return data.cartLinesRemove.cart;
  } catch (error) {
    console.error("Error removing from cart:", error);
    return null;
  }
}
