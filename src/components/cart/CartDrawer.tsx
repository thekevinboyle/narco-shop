"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    isLoading,
    isConfigured,
    closeCart,
    updateItem,
    removeItem,
  } = useCart();

  const lines = cart?.lines.edges.map((edge) => edge.node) || [];
  const subtotal = cart?.cost.subtotalAmount.amount || "0";
  const total = cart?.cost.totalAmount.amount || "0";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <h2 className="text-h3">YOUR CART</h2>
              <button
                onClick={closeCart}
                className="text-body-sm tracking-[0.1em] hover:opacity-60 transition-opacity"
              >
                CLOSE
              </button>
            </div>

            {/* Demo mode notice */}
            {!isConfigured && (
              <div className="p-4 bg-[var(--gray-light)] text-center">
                <p className="text-body-sm opacity-70">
                  Demo mode - Connect Shopify to enable checkout
                </p>
              </div>
            )}

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6">
              {lines.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-body opacity-60 mb-6">Your cart is empty</p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="text-body-sm tracking-[0.15em] underline hover:opacity-60 transition-opacity uppercase"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {lines.map((line) => {
                    const image =
                      line.merchandise.product.images.edges[0]?.node;
                    return (
                      <div
                        key={line.id}
                        className="flex gap-4 pb-6 border-b border-black/10"
                      >
                        {/* Product image */}
                        <div className="relative w-20 h-20 bg-[var(--gray-light)] flex-shrink-0">
                          {image && (
                            <Image
                              src={image.url}
                              alt={image.altText || line.merchandise.product.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>

                        {/* Product info */}
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/shop/${line.merchandise.product.handle}`}
                            onClick={closeCart}
                            className="text-body-sm font-medium hover:opacity-60 transition-opacity block truncate"
                          >
                            {line.merchandise.product.title}
                          </Link>
                          {line.merchandise.title !== "Default Title" && (
                            <p className="text-body-sm opacity-60 mt-1">
                              {line.merchandise.title}
                            </p>
                          )}
                          <p className="text-body-sm mt-1">
                            ${parseFloat(line.merchandise.price.amount).toFixed(2)}
                          </p>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() =>
                                updateItem(line.id, Math.max(0, line.quantity - 1))
                              }
                              disabled={isLoading}
                              className="w-8 h-8 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-50"
                            >
                              -
                            </button>
                            <span className="text-body-sm w-8 text-center">
                              {line.quantity}
                            </span>
                            <button
                              onClick={() => updateItem(line.id, line.quantity + 1)}
                              disabled={isLoading}
                              className="w-8 h-8 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-50"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(line.id)}
                              disabled={isLoading}
                              className="ml-auto text-body-sm opacity-60 hover:opacity-100 transition-opacity"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {lines.length > 0 && (
              <div className="p-6 border-t border-black/10">
                {/* Subtotal */}
                <div className="flex justify-between mb-2">
                  <span className="text-body-sm opacity-70">Subtotal</span>
                  <span className="text-body-sm">
                    ${parseFloat(subtotal).toFixed(2)}
                  </span>
                </div>

                {/* Total */}
                <div className="flex justify-between mb-6">
                  <span className="text-body-bold">Total</span>
                  <span className="text-body-bold">
                    ${parseFloat(total).toFixed(2)}
                  </span>
                </div>

                {/* Checkout button */}
                {isConfigured && cart?.checkoutUrl ? (
                  <a
                    href={cart.checkoutUrl}
                    className="block w-full py-3 bg-black text-white text-center text-body-sm tracking-[0.15em] hover:bg-black/80 transition-colors uppercase"
                  >
                    CHECKOUT
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full py-3 bg-black/50 text-white text-center text-body-sm tracking-[0.15em] uppercase cursor-not-allowed"
                  >
                    CHECKOUT
                  </button>
                )}

                <p className="text-center text-body-sm opacity-50 mt-3">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
