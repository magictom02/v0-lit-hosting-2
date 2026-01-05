"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // This function will be called when the switch is toggled
  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  // Use resolvedTheme instead of theme to get the actual applied theme
  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" />
      <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
    </div>
  )
}
