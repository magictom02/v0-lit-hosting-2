"use client"

import { useCart } from "@/hooks/use-cart"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { products } from "@/data/products"

export function SiteHeader() {
  const { cart } = useCart()
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const productsByCategory = {
    cloud: products.filter((p) => p.category === "cloud"),
    app_hosting: products.filter((p) => p.category === "app_hosting"),
    webhosting: products.filter((p) => p.category === "webhosting"),
    domains: products.filter((p) => p.category === "domains"),
    gameserver: products.filter((p) => p.category === "gameserver"),
  }

  const getProductDescription = (product: (typeof products)[0]) => {
    return product.tagline || product.bullets?.[0] || "Explore our hosting solution"
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center md:justify-start md:w-1/4">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary"></div>
            <span className="inline-block font-bold">Lit-Hosting</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:flex-1 justify-center max-w-2xl">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Cloud</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-6 space-y-4">
                    {productsByCategory.cloud.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block group rounded-lg p-3 transition-colors hover:bg-primary/10"
                      >
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{getProductDescription(product)}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Web Hosting</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-6 space-y-4">
                    {productsByCategory.webhosting.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block group rounded-lg p-3 transition-colors hover:bg-primary/10"
                      >
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{getProductDescription(product)}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Gaming</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-6 space-y-4">
                    {productsByCategory.gameserver.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block group rounded-lg p-3 transition-colors hover:bg-primary/10"
                      >
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{getProductDescription(product)}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">App Hosting</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-6 space-y-4">
                    {productsByCategory.app_hosting.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block group rounded-lg p-3 transition-colors hover:bg-primary/10"
                      >
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{getProductDescription(product)}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Domains</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-6 space-y-4">
                    {productsByCategory.domains.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block group rounded-lg p-3 transition-colors hover:bg-primary/10"
                      >
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{getProductDescription(product)}</p>
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Link
                        href="/products"
                        className="block text-sm font-semibold text-primary hover:underline py-2 px-3 transition-all rounded-lg hover:bg-primary/10"
                      >
                        View all products →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex md:w-1/4 justify-end items-center space-x-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <ModeToggle />
          <Link href="/login" className="hidden md:inline-block">
            <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
