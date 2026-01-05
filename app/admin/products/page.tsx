"use client"

import { useState } from "react"
import { useProducts } from "@/hooks/use-products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductEditor } from "@/components/admin/product-editor"
import type { Product } from "@/types/products"
import { Edit2, RotateCcw, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BulkOperations } from "@/components/admin/bulk-operations"

export default function AdminProductsPage() {
  const { products, isLoaded, updateProduct, resetProducts } = useProducts()
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Loading products...</p>
      </div>
    )
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all products to default? This cannot be undone.")) {
      resetProducts()
      setEditingProduct(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Products Management</h1>
        <p className="text-muted-foreground">Edit product details, descriptions, and pricing.</p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Changes are saved to your browser's local storage and will persist across sessions. Clearing your browser data
          will reset products.
        </AlertDescription>
      </Alert>

      {editingProduct ? (
        <ProductEditor product={editingProduct} onSave={updateProduct} onClose={() => setEditingProduct(null)} />
      ) : (
        <>
          <div className="space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-2 md:flex-row md:gap-3 flex-1">
                <div className="flex-1">
                  <label className="text-sm font-medium">Search Products</label>
                  <Input
                    placeholder="Search by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="domains">Domains</SelectItem>
                      <SelectItem value="cloud">Cloud</SelectItem>
                      <SelectItem value="app_hosting">App Hosting</SelectItem>
                      <SelectItem value="webhosting">Web Hosting</SelectItem>
                      <SelectItem value="gameserver">Game Server</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button variant="destructive" onClick={handleReset} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset All
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {!editingProduct && (
              <>
                <BulkOperations />
              </>
            )}

            {filteredProducts.length === 0 ? (
              <Card>
                <CardContent className="flex items-center justify-center py-8">
                  <p className="text-muted-foreground">No products found.</p>
                </CardContent>
              </Card>
            ) : (
              filteredProducts.map((product) => (
                <Card key={product.id}>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {product.name}
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            product.status === "live"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : product.status === "beta"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                          }`}
                        >
                          {product.status}
                        </span>
                      </CardTitle>
                      <CardDescription>{product.tagline}</CardDescription>
                      {product.description && <p className="text-sm text-foreground pt-2">{product.description}</p>}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setEditingProduct(product)} className="gap-2">
                      <Edit2 className="h-4 w-4" />
                      Edit
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Category:</span> {product.category}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Features:</span>
                        <ul className="list-disc list-inside mt-1">
                          {product.bullets.map((bullet, i) => (
                            <li key={i} className="text-muted-foreground">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </>
      )}
    </div>
  )
}
