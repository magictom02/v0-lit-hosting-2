"use client"

import { useState, useEffect, useCallback } from "react"
import type { Product } from "@/types/products"
import { products as defaultProducts } from "@/data/products"

const PRODUCTS_STORAGE_KEY = "lit-hosting-products"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(defaultProducts)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load products from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY)
    if (stored) {
      try {
        setProducts(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to parse stored products:", error)
        setProducts(defaultProducts)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save products to localStorage
  const saveProducts = useCallback((updatedProducts: Product[]) => {
    setProducts(updatedProducts)
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(updatedProducts))
  }, [])

  // Update a single product
  const updateProduct = useCallback(
    (id: string, updates: Partial<Product>) => {
      const updated = products.map((p) => (p.id === id ? { ...p, ...updates } : p))
      saveProducts(updated)
    },
    [products, saveProducts],
  )

  // Reset to default products
  const resetProducts = useCallback(() => {
    saveProducts(defaultProducts)
  }, [saveProducts])

  return {
    products,
    isLoaded,
    updateProduct,
    saveProducts,
    resetProducts,
  }
}
