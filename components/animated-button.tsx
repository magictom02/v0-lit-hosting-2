"use client"

import { type ButtonHTMLAttributes, forwardRef, memo } from "react"
import { motion } from "framer-motion"
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

      const animations = {
        scale: {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          transition: { type: "spring", stiffness: 400, damping: 17 },
        },
        bounce: {
          whileHover: { y: -5 },
          whileTap: { y: 0 },
          transition: { type: "spring", stiffness: 400, damping: 10 },
        },
        pulse: {
          whileHover: { scale: [1, 1.05, 1] },
          whileTap: { scale: 0.95 },
          transition: { duration: 0.6 },
        },
        shine: {
          whileHover: {},
          whileTap: { scale: 0.95 },
          transition: { duration: 0.3 },
          className:
            "overflow-hidden relative after:absolute after:inset-0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-all after:duration-500",
        },
      }

      const animation = animations[animationType]

      return (
        <motion.div {...animation} className={cn(animation.className)}>
          <Button
            ref={ref}
            className={cn(buttonClass, className)}
            variant={buttonVariant as any}
            size={size}
            {...props}
          >
            {children}
          </Button>
        </motion.div>
      )
    },
  ),
)

AnimatedButtonComponent.displayName = "AnimatedButton"
export const AnimatedButton = AnimatedButtonComponent
