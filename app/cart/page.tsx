"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/hooks/use-cart"
import { useProducts } from "@/hooks/use-products"
import { useEffect, useState } from "react"

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
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="text-muted-foreground">Loading cart...</p>
      </div>
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
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {isEmpty ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Cart Items ({cart.length})</h2>
                  <Button variant="outline" size="sm" onClick={clearCart}>
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
                        image="/placeholder.svg"
                        onUpdateQuantity={(quantity) => updateQuantity(item.productId, quantity)}
                        onRemove={() => removeFromCart(item.productId)}
                      />
                      {index < cartItems.length - 1 && <div className="border-t border-border mt-6"></div>}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/products">
                    <Button variant="outline">Continue Shopping</Button>
                  </Link>
                  <Button variant="secondary">Update Cart</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary subtotal={subtotal} tax={tax} total={total} />

            <div className="mt-6">
              <Link href="/checkout">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
