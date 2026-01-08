"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface VideoBackgroundProps {
  src: string
  poster?: string
  overlay?: boolean
  overlayOpacity?: number
  overlayColor?: string
  children?: React.ReactNode
  className?: string
}

export function VideoBackground({
  src,
  poster,
  overlay = true,
  overlayOpacity = 0.5,
  overlayColor = "#000000",
  children,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.autoplay = true
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            controls.start("visible")
          })
          .catch((error) => {
            console.warn("[v0] Video autoplay blocked by browser:", error.message)
            setHasError(true)
          })
      }
    } else if (videoRef.current) {
      videoRef.current.pause()
      controls.start("hidden")
    }
  }, [isInView, controls])

  const handleVideoLoaded = () => {
    setIsLoaded(true)
  }

  const handleVideoError = () => {
    console.warn("[v0] Video failed to load from source")
    setHasError(true)
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.video
        ref={videoRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded && !hasError ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      <motion.div
        className="relative z-20 h-full w-full"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
