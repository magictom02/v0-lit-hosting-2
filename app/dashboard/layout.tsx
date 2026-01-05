import type React from "react"
import { SidebarNav } from "@/components/sidebar-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-[#3cdd4a]"></div>
              <span className="hidden font-bold sm:inline-block">Lit-Hosting</span>
            </Link>
            <div className="hidden md:flex">
              <Button variant="ghost" size="icon" className="mr-2" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-[#3cdd4a]"></span>
            </Button>
            <UserNav user={user} />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="py-6 pr-6">
            <SidebarNav />
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden pt-6">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
