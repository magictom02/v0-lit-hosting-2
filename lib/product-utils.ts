import type { Product, ProductCategory, ProductStatus } from "@/types/products"
import { products } from "@/data/products"

export function getAllCategories(): ProductCategory[] {
  const categories = new Set(products.map((p) => p.category))
  return Array.from(categories) as ProductCategory[]
}

export function getCategoryLabel(category: ProductCategory): string {
  const labels: Record<ProductCategory, string> = {
    domains: "Domains",
    cloud: "Cloud Services",
    app_hosting: "App Hosting",
    webhosting: "Web Hosting",
    gameserver: "Game Servers",
  }
  return labels[category]
}

export function getStatusColor(status: ProductStatus): string {
  const colors: Record<ProductStatus, string> = {
    live: "bg-green-500/10 text-green-700 border-green-200 dark:text-green-400 dark:border-green-800",
    beta: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-400 dark:border-blue-800",
    coming_soon: "bg-amber-500/10 text-amber-700 border-amber-200 dark:text-amber-400 dark:border-amber-800",
  }
  return colors[status]
}

export function filterProducts(
  items: Product[] = products,
  category?: ProductCategory | "all",
  status?: ProductStatus | "all",
): Product[] {
  return items
    .filter((p) => !category || category === "all" || p.category === category)
    .filter((p) => !status || status === "all" || p.status === status)
    .sort((a, b) => a.orderIndex - b.orderIndex)
}
