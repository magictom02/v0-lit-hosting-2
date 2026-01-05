export interface CTA {
  label: string
  href: string
  variant: "primary" | "secondary"
}

export interface Plan {
  id: string
  name: string
  highlights: string[]
  status?: "beta" | "coming_soon" | "live"
}

export interface Product {
  id: string
  category: "domains" | "cloud" | "app_hosting" | "webhosting" | "gameserver"
  name: string
  tagline: string
  description?: string
  bullets: string[]
  badges: string[]
  status: "beta" | "coming_soon" | "live"
  cta: CTA
  secondaryCta: CTA
  route: string
  orderIndex: number
  plans?: Plan[]
  price?: number
  stock?: number
  views?: number
  sales?: number
}

export interface CartItem {
  productId: string
  quantity: number
  addedAt: number
}

export interface Order {
  id: string
  items: Array<{
    productId: string
    productName: string
    quantity: number
    price: number
  }>
  total: number
  createdAt: number
  status: "pending" | "completed" | "cancelled"
}

export type ProductCategory = Product["category"]
export type ProductStatus = Product["status"]
