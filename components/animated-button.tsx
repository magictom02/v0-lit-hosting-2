"use client"

import { type ButtonHTMLAttributes, forwardRef, memo } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary"
  size?: "default" | "sm" | "lg" | "icon"
  animationType?: "scale" | "bounce" | "pulse" | "shine"
}

const AnimatedButtonComponent = memo(
  forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ className, variant = "default", size = "default", animationType = "scale", children, ...props }, ref) => {
      const buttonVariant = variant === "primary" ? "default" : variant
      const buttonClass = variant === "primary" ? "bg-[#3cdd4a] hover:bg-[#2bb039] text-white" : ""

      const animationClass = {
        scale: "hover:scale-105 active:scale-95 transition-transform",
        bounce: "hover:-translate-y-1 transition-transform",
        pulse: "hover:scale-105 active:scale-95 transition-transform",
        shine:
          "overflow-hidden relative after:absolute after:inset-0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-all after:duration-500",
      }[animationType]

      return (
        <div className={animationClass}>
          <Button
            ref={ref}
            className={cn(buttonClass, className)}
            variant={buttonVariant as any}
            size={size}
            {...props}
          >
            {children}
          </Button>
        </div>
      )
    },
  ),
)

AnimatedButtonComponent.displayName = "AnimatedButton"
export const AnimatedButton = AnimatedButtonComponent
