"use client"

import { useState, useEffect, useCallback } from "react"
import type { Order } from "@/types/products"

const ORDERS_STORAGE_KEY = "lit-hosting-orders"

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load orders from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY)
    if (stored) {
      try {
        setOrders(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to parse stored orders:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save orders to localStorage
  const saveOrders = useCallback((updatedOrders: Order[]) => {
    setOrders(updatedOrders)
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders))
  }, [])

  // Create order
  const createOrder = useCallback(
    (items: Order["items"], total: number) => {
      const newOrder: Order = {
        id: `ORD-${Date.now()}`,
        items,
        total,
        createdAt: Date.now(),
        status: "pending",
      }
      saveOrders([...orders, newOrder])
      return newOrder
    },
    [orders, saveOrders],
  )

  // Update order status
  const updateOrderStatus = useCallback(
    (orderId: string, status: Order["status"]) => {
      saveOrders(orders.map((order) => (order.id === orderId ? { ...order, status } : order)))
    },
    [orders, saveOrders],
  )

  // Get analytics
  const getAnalytics = useCallback(() => {
    const totalOrders = orders.length
    const totalRevenue = orders
      .filter((order) => order.status === "completed")
      .reduce((sum, order) => sum + order.total, 0)
    const completedOrders = orders.filter((order) => order.status === "completed").length
    const pendingOrders = orders.filter((order) => order.status === "pending").length

    return {
      totalOrders,
      totalRevenue,
      completedOrders,
      pendingOrders,
    }
  }, [orders])

  return {
    orders,
    isLoaded,
    createOrder,
    updateOrderStatus,
    getAnalytics,
  }
}
