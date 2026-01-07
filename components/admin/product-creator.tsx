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

interface ProductCreatorProps {
  onSave: (product: Omit<Product, "id">) => void
  onClose: () => void
}

export function ProductCreator({ onSave, onClose }: ProductCreatorProps) {
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: "",
    tagline: "",
    description: "",
    category: "webhosting",
    status: "coming_soon",
    bullets: ["", "", ""],
    badges: ["New"],
    cta: { label: "Learn More", href: "#", variant: "primary" },
    secondaryCta: { label: "Contact Us", href: "/contact", variant: "secondary" },
    route: "/products",
    orderIndex: 999,
    price: 9.99,
    stock: 50,
    views: 0,
    sales: 0,
  })

  const handleSave = () => {
    if (!formData.name.trim() || !formData.tagline.trim()) {
      alert("Please fill in product name and tagline")
      return
    }

    onSave(formData)
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
          <CardTitle>Create New Product</CardTitle>
          <CardDescription>Add a new product to your catalog</CardDescription>
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
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. VPS Hosting"
              />
            </div>
            <div>
              <Label htmlFor="tagline">Tagline *</Label>
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                placeholder="e.g. Fast & Reliable Virtual Servers"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Optional product description"
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

        {/* Pricing & Inventory */}
        <div className="space-y-4">
          <h3 className="font-semibold">Pricing & Inventory</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Price (€)</Label>
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

        {/* Features */}
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
            Create Product
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
