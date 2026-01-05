"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Close the menu when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent scrolling when menu is open and add class to body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("menu-open")
    } else {
      document.body.style.overflow = "auto"
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.style.overflow = "auto"
      document.body.classList.remove("menu-open")
    }
  }, [isOpen])

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop overlay - separate from the menu content */}
          <div
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm mobile-menu-backdrop"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu content - higher z-index than the backdrop */}
          <div
            className="fixed inset-y-0 left-0 z-[101] w-[300px] bg-background p-6 shadow-lg animate-in slide-in-from-left mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-[#3cdd4a] mr-2"></div>
                <span className="font-bold text-lg">Lit-Hosting</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/domain"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                Domain
              </Link>
              <Link
                href="/webspace"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                Webspace
              </Link>
              <Link
                href="/v-server"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                V-Server
              </Link>
              <Link
                href="/gameserver"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                Gameserver
              </Link>
              <Link
                href="/storage"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                Storage
              </Link>
              <Link
                href="/infrastructure"
                className="text-lg font-medium transition-colors hover:text-[#3cdd4a]"
                onClick={() => setIsOpen(false)}
              >
                Infrastructure
              </Link>
            </nav>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium">Cart</span>
                <Link href="/cart" onClick={() => setIsOpen(false)} className="relative">
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
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3cdd4a] text-[10px] font-bold text-white">
                      3
                    </span>
                  </Button>
                </Link>
              </div>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">
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
        </>
      )}
    </>
  )
}
