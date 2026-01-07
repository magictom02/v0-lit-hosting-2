"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/hooks/use-cart"
import { useProducts } from "@/hooks/use-products"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"

export default function CartPage() {
  const { cart, isLoaded, removeFromCart, updateQuantity, clearCart } = useCart()
  const { products, isLoaded: productsLoaded } = useProducts()
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    if (!productsLoaded || !isLoaded) return

    let total = 0
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.productId)
      if (product && product.price) {
        total += product.price * item.quantity
      }
    })
    setSubtotal(total)
  }, [cart, products, productsLoaded, isLoaded])

  if (!isLoaded || !productsLoaded) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen">
          <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <p className="text-muted-foreground">Loading cart...</p>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId)
    return { ...item, ...product }
  })

  const tax = Number((subtotal * 0.08).toFixed(2))
  const total = Number((subtotal + tax).toFixed(2))
  const isEmpty = cart.length === 0

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
        <div className="container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {isEmpty ? "Your cart is empty" : `${cart.length} item${cart.length !== 1 ? "s" : ""} in your cart`}
            </p>
          </div>

          {isEmpty ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-muted-foreground mb-6">Start shopping to add items to your cart</p>
              <Link href="/products">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border p-6 space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <h2 className="text-xl font-semibold">Items</h2>
                    <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive">
                      Clear Cart
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div key={item.productId}>
                        <CartItem
                          id={item.productId}
                          name={item.name}
                          description={item.tagline}
                          price={item.price || 0}
                          quantity={item.quantity}
                          onUpdateQuantity={(quantity) => updateQuantity(item.productId, quantity)}
                          onRemove={() => removeFromCart(item.productId)}
                        />
                        {index < cartItems.length - 1 && <div className="border-t border-border mt-6"></div>}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t">
                    <Link href="/products">
                      <Button variant="outline" className="w-full bg-transparent">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <CartSummary subtotal={subtotal} tax={tax} total={total} />
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
