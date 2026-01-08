"use client"

import { useState, useMemo } from "react"
import { useProducts } from "@/hooks/use-products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { filterProducts, getAllCategories, getCategoryLabel } from "@/lib/product-utils"
import type { ProductCategory, ProductStatus } from "@/types/products"

export default function ProductsPage() {
  const { products, isLoaded } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all")
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus | "all">("all")

  const filteredProducts = useMemo(
    () => filterProducts(products, selectedCategory, selectedStatus),
    [products, selectedCategory, selectedStatus],
  )

  const categories = getAllCategories()

  if (!isLoaded) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading products...</p>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
        {/* Hero Section */}
        <section className="border-b border-border/40 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Complete Hosting Solutions</h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                From domain registration to cloud infrastructure. Choose the perfect hosting solution for your needs.
              </p>
              <div className="flex gap-3">
                <Button className="bg-primary hover:bg-primary/90" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border/40 py-12 sticky top-16 bg-background/95 backdrop-blur-sm z-40">
          <div className="container">
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-foreground/70 mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("all")}
                    size="sm"
                  >
                    All Products
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {getCategoryLabel(category)}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="text-sm font-semibold text-foreground/70 mb-4">Filter by Status</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedStatus === "all" ? "default" : "outline"}
                    onClick={() => setSelectedStatus("all")}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={selectedStatus === "live" ? "default" : "outline"}
                    onClick={() => setSelectedStatus("live")}
                    size="sm"
                  >
                    Live
                  </Button>
                  <Button
                    variant={selectedStatus === "beta" ? "default" : "outline"}
                    onClick={() => setSelectedStatus("beta")}
                    size="sm"
                  >
                    Beta
                  </Button>
                  <Button
                    variant={selectedStatus === "coming_soon" ? "default" : "outline"}
                    onClick={() => setSelectedStatus("coming_soon")}
                    size="sm"
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container">
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground py-8 border-t border-border/40">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
              </>
            ) : (
              <div className="rounded-lg border border-dashed border-border/40 p-16 text-center">
                <p className="text-lg font-semibold mb-2">No products found</p>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedStatus("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
