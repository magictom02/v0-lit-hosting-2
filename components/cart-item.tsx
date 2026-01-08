"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  onUpdateQuantity: (quantity: number) => void
  onRemove: () => void
}

export function CartItem({ id, name, description, price, quantity, image, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-shrink-0 w-full sm:w-24 h-24 relative rounded-md overflow-hidden bg-muted">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="mt-2 sm:mt-0 text-right">
            <div className="font-medium">${price.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">per unit</div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-r-none bg-transparent"
              onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <div className="h-8 px-3 flex items-center justify-center border-y border-input">{quantity}</div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-l-none bg-transparent"
              onClick={() => onUpdateQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="text-destructive" onClick={onRemove}>
            <Trash2 className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
