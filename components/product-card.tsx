"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/products"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product.id, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <>
      <Link href={`/products/${product.id}`}>
        <div className="group h-full rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm p-6 hover:bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="flex gap-2 flex-wrap justify-end">
              {product.badges.slice(0, 2).map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.tagline}</p>

          <ul className="space-y-2 mb-6">
            {product.bullets.slice(0, 3).map((bullet, i) => (
              <li key={i} className="text-sm flex items-start gap-2 text-foreground/70">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {product.plans && product.plans.length > 0 && (
            <div className="mb-6 p-3 bg-muted/30 rounded border border-border/40">
              <p className="text-xs font-semibold mb-2">Plans Available:</p>
              <div className="flex flex-wrap gap-2">
                {product.plans.map((plan) => (
                  <span key={plan.id} className="text-xs px-2 py-1 rounded bg-background/60 border border-border/40">
                    {plan.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.price && (
            <div className="mb-4 text-lg font-bold text-primary">€{product.price.toFixed(2)}/month</div>
          )}

          <div className="flex gap-2 pt-4 border-t border-border/40">
            <Button variant="ghost" className="w-full text-primary group-hover:bg-primary/10 justify-between">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Link>
      <Button onClick={handleAddToCart} className="w-full mt-3 gap-2" variant={isAdded ? "default" : "outline"}>
        <Plus className="w-4 h-4" />
        {isAdded ? "Added to Cart!" : "Add to Cart"}
      </Button>
    </>
  )
}
