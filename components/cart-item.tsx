"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  onUpdateQuantity: (quantity: number) => void
  onRemove: () => void
}

export function CartItem({ id, name, description, price, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  const itemTotal = price * quantity

  return (
    <div className="flex flex-col sm:flex-row gap-4" suppressHydrationWarning>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="text-right">
            <div className="font-semibold text-lg">€{price.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">/month</div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <div className="px-4 py-2 border rounded">{quantity}</div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => onUpdateQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <div className="text-right mr-4">
            <div className="font-semibold">€{itemTotal.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">subtotal</div>
          </div>

          <Button variant="ghost" size="sm" className="text-destructive" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
