"use client"

import { useState, useEffect, useCallback } from "react"
import type { CartItem } from "@/types/products"

const CART_STORAGE_KEY = "lit-hosting-cart"

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      try {
        setCart(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to parse stored cart:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage
  const saveCart = useCallback((items: CartItem[]) => {
    setCart(items)
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [])

  // Add to cart
  const addToCart = useCallback(
    (productId: string, quantity = 1) => {
      const existing = cart.find((item) => item.productId === productId)
      if (existing) {
        saveCart(
          cart.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item)),
        )
      } else {
        saveCart([...cart, { productId, quantity, addedAt: Date.now() }])
      }
    },
    [cart, saveCart],
  )

  // Remove from cart
  const removeFromCart = useCallback(
    (productId: string) => {
      saveCart(cart.filter((item) => item.productId !== productId))
    },
    [cart, saveCart],
  )

  // Update quantity
  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        saveCart(cart.map((item) => (item.productId === productId ? { ...item, quantity } : item)))
      }
    },
    [cart, saveCart, removeFromCart],
  )

  // Clear cart
  const clearCart = useCallback(() => {
    saveCart([])
  }, [saveCart])

  return {
    cart,
    isLoaded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
}
