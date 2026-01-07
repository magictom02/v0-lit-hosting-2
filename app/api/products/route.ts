import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import type { Product } from "@/types/products"

const productsFilePath = path.join(process.cwd(), "data", "products.json")

export async function GET() {
  try {
    const fileContent = await fs.readFile(productsFilePath, "utf-8")
    const products = JSON.parse(fileContent)
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error reading products file:", error)
    // Return empty array if file doesn't exist yet
    return NextResponse.json([])
  }
}

export async function POST(request: NextRequest) {
  try {
    const products: Product[] = await request.json()

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), "data")
    try {
      await fs.mkdir(dataDir, { recursive: true })
    } catch (error) {
      // Directory might already exist
    }

    // Write products to file
    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), "utf-8")

    return NextResponse.json({ success: true, message: "Products saved successfully" })
  } catch (error) {
    console.error("Error saving products file:", error)
    return NextResponse.json({ success: false, error: "Failed to save products" }, { status: 500 })
  }
}
