"use client"

import { useState } from "react"
import type { Product } from "@/types/products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Save } from "lucide-react"

interface ProductEditorProps {
  product: Product
  onSave: (id: string, updates: Partial<Product>) => void
  onClose: () => void
}

export function ProductEditor({ product, onSave, onClose }: ProductEditorProps) {
  const [formData, setFormData] = useState<Product>(product)

  const handleSave = () => {
    const updates: Partial<Product> = {}

    // Only include fields that changed
    if (formData.name !== product.name) updates.name = formData.name
    if (formData.tagline !== product.tagline) updates.tagline = formData.tagline
    if (formData.description !== product.description) updates.description = formData.description
    if (formData.category !== product.category) updates.category = formData.category
    if (formData.status !== product.status) updates.status = formData.status
    if (formData.price !== product.price) updates.price = formData.price
    if (formData.stock !== product.stock) updates.stock = formData.stock
    if (JSON.stringify(formData.bullets) !== JSON.stringify(product.bullets)) updates.bullets = formData.bullets

    onSave(product.id, updates)
    onClose()
  }

  const handleBulletChange = (index: number, value: string) => {
    const newBullets = [...formData.bullets]
    newBullets[index] = value
    setFormData({ ...formData, bullets: newBullets })
  }

  const addBullet = () => {
    setFormData({ ...formData, bullets: [...formData.bullets, ""] })
  }

  const removeBullet = (index: number) => {
    setFormData({ ...formData, bullets: formData.bullets.filter((_, i) => i !== index) })
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{formData.name}</CardTitle>
          <CardDescription>Edit product details</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="font-semibold">Basic Information</h3>
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Category & Status */}
        <div className="space-y-4">
          <h3 className="font-semibold">Category & Status</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value as Product["category"] })}
              >
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="domains">Domains</SelectItem>
                  <SelectItem value="cloud">Cloud</SelectItem>
                  <SelectItem value="app_hosting">App Hosting</SelectItem>
                  <SelectItem value="webhosting">Web Hosting</SelectItem>
                  <SelectItem value="gameserver">Game Server</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value as Product["status"] })}
              >
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="beta">Beta</SelectItem>
                  <SelectItem value="coming_soon">Coming Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Pricing & Inventory</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price || 0}
                onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) || 0 })}
              />
            </div>
            <div>
              <Label htmlFor="stock">Stock Quantity</Label>
              <Input
                id="stock"
                type="number"
                min="0"
                value={formData.stock || 0}
                onChange={(e) => setFormData({ ...formData, stock: Number.parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Analytics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="views">Product Views</Label>
              <Input
                id="views"
                type="number"
                min="0"
                value={formData.views || 0}
                onChange={(e) => setFormData({ ...formData, views: Number.parseInt(e.target.value) || 0 })}
                disabled
                className="text-muted-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">Read-only, updated automatically</p>
            </div>
            <div>
              <Label htmlFor="sales">Total Sales</Label>
              <Input
                id="sales"
                type="number"
                min="0"
                value={formData.sales || 0}
                onChange={(e) => setFormData({ ...formData, sales: Number.parseInt(e.target.value) || 0 })}
                disabled
                className="text-muted-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">Read-only, updated automatically</p>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Features</h3>
            <Button variant="outline" size="sm" onClick={addBullet}>
              Add Feature
            </Button>
          </div>
          <div className="space-y-2">
            {formData.bullets.map((bullet, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={bullet}
                  onChange={(e) => handleBulletChange(index, e.target.value)}
                  placeholder="Feature description"
                />
                <Button variant="destructive" size="icon" onClick={() => removeBullet(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4">
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
