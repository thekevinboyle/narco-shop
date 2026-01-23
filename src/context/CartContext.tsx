"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  Cart,
  createCart,
  getCart,
  addToCart,
  updateCartLine,
  removeFromCart,
  getStoredCartId,
  isShopifyConfigured,
} from "@/lib/shopify";

interface CartContextType {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
  isConfigured: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured] = useState(isShopifyConfigured());

  // Initialize cart on mount
  useEffect(() => {
    if (!isConfigured) return;

    const initCart = async () => {
      const storedCartId = getStoredCartId();
      if (storedCartId) {
        const existingCart = await getCart(storedCartId);
        if (existingCart) {
          setCart(existingCart);
          return;
        }
      }
      // Create new cart if none exists
      const newCart = await createCart();
      setCart(newCart);
    };

    initCart();
  }, [isConfigured]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      if (!isConfigured) {
        // Demo mode - just open cart
        openCart();
        return;
      }

      setIsLoading(true);
      try {
        let currentCart = cart;

        // Create cart if it doesn't exist
        if (!currentCart) {
          currentCart = await createCart([{ merchandiseId: variantId, quantity }]);
        } else {
          currentCart = await addToCart(currentCart.id, [
            { merchandiseId: variantId, quantity },
          ]);
        }

        setCart(currentCart);
        openCart();
      } catch (error) {
        console.error("Error adding item:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart, isConfigured, openCart]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart || !isConfigured) return;

      setIsLoading(true);
      try {
        const updatedCart = await updateCartLine(cart.id, lineId, quantity);
        setCart(updatedCart);
      } catch (error) {
        console.error("Error updating item:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart, isConfigured]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart || !isConfigured) return;

      setIsLoading(true);
      try {
        const updatedCart = await removeFromCart(cart.id, [lineId]);
        setCart(updatedCart);
      } catch (error) {
        console.error("Error removing item:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart, isConfigured]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoading,
        isConfigured,
        openCart,
        closeCart,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
