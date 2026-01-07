"use client"

import { useState, useEffect, useCallback } from "react"
import type { Product } from "@/types/products"
import { products as defaultProducts } from "@/data/products"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(defaultProducts)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (response.ok) {
          const data = await response.json()
          if (data && data.length > 0) {
            setProducts(data)
          }
        }
      } catch (error) {
        console.error("Failed to load products from server:", error)
        // Fall back to default products
        setProducts(defaultProducts)
      } finally {
        setIsLoaded(true)
      }
    }

    loadProducts()
  }, [])

  const saveProducts = useCallback(async (updatedProducts: Product[]) => {
    setProducts(updatedProducts)
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProducts),
      })
      if (!response.ok) {
        console.error("Failed to save products to server")
      }
    } catch (error) {
      console.error("Error saving products:", error)
    }
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
