"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useProducts } from "@/hooks/use-products"
import { useCart } from "@/hooks/use-cart"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Plus } from "lucide-react"
import type { Product } from "@/types/products"
import { products as defaultProducts } from "@/data/products"

export default function ProductDetailPageClient() {
  const params = useParams()
  const productId = params.id as string
  const { products, isLoaded } = useProducts()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === productId)
      if (foundProduct) {
        setProduct(foundProduct)
        return
      }
    }

    const defaultProduct = defaultProducts.find((p) => p.id === productId)
    if (defaultProduct) {
      setProduct(defaultProduct)
    }
  }, [productId, products])

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id, 1)
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    }
  }

  if (!product) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen flex items-center justify-center" suppressHydrationWarning>
          <p className="text-muted-foreground">Loading product...</p>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
        {/* Back Button */}
        <div className="border-b border-border/40">
          <div className="container py-4">
            <Link
              href="/products"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 border-b border-border/40">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                {product.badges.map((badge) => (
                  <Badge key={badge} className="bg-primary/20 text-primary border-primary/40">
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">{product.tagline}</p>
              {product.description && <p className="text-lg text-foreground/80 mb-8">{product.description}</p>}

              <div className="flex flex-col gap-4 mb-8">
                {product.price && (
                  <div className="text-3xl font-bold text-primary">€{product.price.toFixed(2)}/month</div>
                )}
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="gap-2"
                    variant={isAdded ? "default" : "default"}
                  >
                    <Plus className="w-5 h-5" />
                    {isAdded ? "Added to Cart!" : "Add to Cart"}
                  </Button>
                  <Button size="lg" variant="outline">
                    {product.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-b border-border/40">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {product.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-2">{bullet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        {product.plans && product.plans.length > 0 && (
          <section className="py-20 border-b border-border/40">
            <div className="container">
              <h2 className="text-3xl font-bold mb-12">Available Plans</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                    {plan.highlights && (
                      <ul className="space-y-3 mb-8">
                        {plan.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Get {plan.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {product.description || product.tagline}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={handleAddToCart} size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                {isAdded ? "Added to Cart!" : "Add to Cart"}
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
