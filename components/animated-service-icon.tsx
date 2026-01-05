"use client"

import { memo, useState } from "react"
import { motion } from "framer-motion"
import { Server, Globe, HardDrive, Gamepad2, Database, Shield, Zap, Cloud } from "lucide-react"

type AnimatedServiceIconProps = {
  type: "server" | "domain" | "storage" | "gameserver" | "database" | "security" | "performance" | "cloud"
  size?: "sm" | "md" | "lg"
  className?: string
}

const AnimatedServiceIconContent = memo(function AnimatedServiceIconContent({
  type,
  size = "md",
  className = "",
}: AnimatedServiceIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClass = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const getIcon = () => {
    switch (type) {
      case "server":
        return <Server className={`${sizeClass[size]} ${className}`} />
      case "domain":
        return <Globe className={`${sizeClass[size]} ${className}`} />
      case "storage":
        return <HardDrive className={`${sizeClass[size]} ${className}`} />
      case "gameserver":
        return <Gamepad2 className={`${sizeClass[size]} ${className}`} />
      case "database":
        return <Database className={`${sizeClass[size]} ${className}`} />
      case "security":
        return <Shield className={`${sizeClass[size]} ${className}`} />
      case "performance":
        return <Zap className={`${sizeClass[size]} ${className}`} />
      case "cloud":
        return <Cloud className={`${sizeClass[size]} ${className}`} />
      default:
        return <Server className={`${sizeClass[size]} ${className}`} />
    }
  }

  const getAnimation = () => {
    switch (type) {
      case "server":
        return {
          animate: isHovered ? { y: [0, -5, 0], scale: [1, 1.1, 1] } : {},
          transition: { duration: 0.5 },
        }
      case "domain":
        return {
          animate: isHovered ? { rotate: [0, 15, -15, 0] } : {},
          transition: { duration: 0.5 },
        }
      case "storage":
        return {
          animate: isHovered ? { scale: [1, 1.2, 1] } : {},
          transition: { duration: 0.5 },
        }
      case "gameserver":
        return {
          animate: isHovered ? { rotate: [0, -10, 10, -10, 0] } : {},
          transition: { duration: 0.5 },
        }
      case "database":
        return {
          animate: isHovered ? { y: [0, -5, 0, -5, 0] } : {},
          transition: { duration: 0.7 },
        }
      case "security":
        return {
          animate: isHovered ? { scale: [1, 1.2, 1] } : {},
          transition: { duration: 0.5 },
        }
      case "performance":
        return {
          animate: isHovered ? { x: [0, 5, -5, 5, 0] } : {},
          transition: { duration: 0.3 },
        }
      case "cloud":
        return {
          animate: isHovered ? { y: [0, -5, 0] } : {},
          transition: { duration: 0.7 },
        }
      default:
        return {
          animate: isHovered ? { scale: [1, 1.1, 1] } : {},
          transition: { duration: 0.5 },
        }
    }
  }

  const animation = getAnimation()

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animation.animate}
      transition={animation.transition}
      className="inline-flex"
    >
      {getIcon()}
    </motion.div>
  )
})

export const AnimatedServiceIcon = memo(AnimatedServiceIconContent)
