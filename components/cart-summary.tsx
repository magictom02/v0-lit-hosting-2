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
    <div className="bg-card rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-border my-3 pt-3">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium mb-2">Promo Code</div>
        <div className="flex gap-2">
          <Input
            placeholder="Enter code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1"
          />
          <Button variant="secondary">Apply</Button>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>Prices are shown in USD and do not include applicable taxes.</p>
        <p className="mt-2">By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  )
}
