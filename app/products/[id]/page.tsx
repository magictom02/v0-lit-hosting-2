import { products as defaultProducts } from "@/data/products"
import ProductDetailPageClient from "./client"

export function generateStaticParams() {
  return defaultProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage() {
  return <ProductDetailPageClient />
}
