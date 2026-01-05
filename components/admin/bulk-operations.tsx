"use client"

import { useState } from "react"
import { useProducts } from "@/hooks/use-products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Product } from "@/types/products"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function BulkOperations() {
  const { products, updateProduct } = useProducts()
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [operation, setOperation] = useState<"price" | "stock" | "status" | "">("")
  const [value, setValue] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(products.map((p) => p.id))
    }
  }

  const handleToggleProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleApplyOperation = () => {
    if (!operation || !value || selectedProducts.length === 0) {
      setFeedback("Please select products, operation, and value.")
      return
    }

    selectedProducts.forEach((productId) => {
      const updates: Partial<Product> = {}
      if (operation === "price") {
        updates.price = Number.parseFloat(value)
      } else if (operation === "stock") {
        updates.stock = Number.parseInt(value)
      } else if (operation === "status") {
        updates.status = value as Product["status"]
      }
      updateProduct(productId, updates)
    })

    setFeedback(`Updated ${selectedProducts.length} products successfully.`)
    setSelectedProducts([])
    setOperation("")
    setValue("")
    setTimeout(() => setFeedback(""), 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Operations</CardTitle>
        <CardDescription>Update multiple products at once</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {feedback && (
          <Alert className={feedback.includes("error") ? "bg-destructive/10" : "bg-green-50"}>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{feedback}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedProducts.length === products.length}
              onChange={handleSelectAll}
              className="w-4 h-4 rounded border-gray-300"
            />
            <label className="text-sm font-medium">Select All ({selectedProducts.length} selected)</label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {products.map((product) => (
              <div key={product.id} className="flex items-center gap-2 p-2 border rounded">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleToggleProduct(product.id)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <label className="text-sm flex-1 cursor-pointer">{product.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Select value={operation} onValueChange={(val: any) => setOperation(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select operation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Update Price</SelectItem>
              <SelectItem value="stock">Update Stock</SelectItem>
              <SelectItem value="status">Change Status</SelectItem>
            </SelectContent>
          </Select>

          {operation === "status" ? (
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="beta">Beta</SelectItem>
                <SelectItem value="coming_soon">Coming Soon</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Input
              placeholder={operation === "price" ? "Enter price (e.g., 9.99)" : "Enter quantity"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="number"
            />
          )}

          <Button onClick={handleApplyOperation} className="bg-primary">
            Apply to {selectedProducts.length} Products
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
