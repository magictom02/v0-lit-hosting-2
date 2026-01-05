"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  CreditCard,
  HardDrive,
  LifeBuoy,
  Settings,
  Users,
  Server,
  Ticket,
  Home,
  Globe,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  isAdmin?: boolean
}

export function SidebarNav({ className, isAdmin = false, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  const customerItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Servers",
      href: "/dashboard/servers",
      icon: Server,
    },
    {
      title: "Domains",
      href: "/dashboard/domains",
      icon: Globe,
    },
    {
      title: "Storage",
      href: "/dashboard/storage",
      icon: HardDrive,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      title: "Support",
      href: "/dashboard/support",
      icon: LifeBuoy,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  const adminItems = [
    {
      title: "Overview",
      href: "/admin",
      icon: BarChart3,
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: Globe,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: TrendingUp,
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      href: "/admin/customers",
      icon: Users,
    },
    {
      title: "Servers",
      href: "/admin/servers",
      icon: Server,
    },
    {
      title: "Domains",
      href: "/admin/domains",
      icon: Globe,
    },
    {
      title: "Billing",
      href: "/admin/billing",
      icon: CreditCard,
    },
    {
      title: "Support Tickets",
      href: "/admin/tickets",
      icon: Ticket,
    },
    {
      title: "Security",
      href: "/admin/security",
      icon: ShieldCheck,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  const items = isAdmin ? adminItems : customerItems

  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
