"use client"

import { useOrders } from "@/hooks/use-orders"
import { useProducts } from "@/hooks/use-products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, XCircle } from "lucide-react"

export default function OrdersPage() {
  const { orders, isLoaded, updateOrderStatus } = useOrders()
  const { products, isLoaded: productsLoaded } = useProducts()

  if (!isLoaded || !productsLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Loading orders...</p>
      </div>
    )
  }

  const handleStatusChange = (orderId: string, newStatus: "pending" | "completed" | "cancelled") => {
    updateOrderStatus(orderId, newStatus)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Orders Management</h1>
        <p className="text-muted-foreground">View and manage all customer orders.</p>
      </div>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <p className="text-muted-foreground">
                No orders yet. Orders will appear here once customers make purchases.
              </p>
            </CardContent>
          </Card>
        ) : (
          orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription>
                    {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString()}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${order.total.toFixed(2)}</p>
                  <Badge
                    className="mt-2"
                    variant={
                      order.status === "completed"
                        ? "default"
                        : order.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>
                        {item.productName} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    variant={order.status === "pending" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusChange(order.id, "pending")}
                  >
                    <Clock className="h-4 w-4 mr-1" />
                    Pending
                  </Button>
                  <Button
                    variant={order.status === "completed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusChange(order.id, "completed")}
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Complete
                  </Button>
                  <Button
                    variant={order.status === "cancelled" ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => handleStatusChange(order.id, "cancelled")}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
