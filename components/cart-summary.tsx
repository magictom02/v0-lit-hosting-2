"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CartSummaryProps {
  subtotal: number
  tax: number
  total: number
}

export function CartSummary({ subtotal, tax, total }: CartSummaryProps) {
  const [promoCode, setPromoCode] = useState("")

  return (
    <div className="bg-card rounded-lg border p-6 sticky top-20">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>€{tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-border pt-3">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-primary">€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Promo Code</div>
        <div className="flex gap-2">
          <Input
            placeholder="Enter code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1"
          />
          <Button variant="secondary" size="sm">
            Apply
          </Button>
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base mb-3">Proceed to Checkout</Button>

      <div className="text-xs text-muted-foreground space-y-2">
        <p>Prices are shown in EUR (€) and include applicable taxes.</p>
        <p>By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  )
}
