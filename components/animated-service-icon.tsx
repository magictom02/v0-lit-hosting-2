"use client"

import { memo, useState } from "react"
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

  const getAnimationClass = () => {
    if (!isHovered) return ""

    switch (type) {
      case "server":
        return "animate-bounce"
      case "domain":
        return "animate-spin"
      case "storage":
        return "scale-110"
      case "gameserver":
        return "animate-pulse"
      case "database":
        return "animate-bounce"
      case "security":
        return "scale-110"
      case "performance":
        return "animate-pulse"
      case "cloud":
        return "animate-bounce"
      default:
        return "scale-110"
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex transition-transform duration-300 ${getAnimationClass()}`}
    >
      {getIcon()}
    </div>
  )
})

export const AnimatedServiceIcon = memo(AnimatedServiceIconContent)
