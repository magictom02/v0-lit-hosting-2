"use client"

import { memo, useState, lazy, Suspense } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const DashboardTabs = lazy(() => import("./dashboard-tabs").then((mod) => ({ default: mod.DashboardTabs })))

const DashboardPreviewContent = memo(function DashboardPreviewContent({
  isExpanded,
  onToggleExpand,
}: {
  isExpanded: boolean
  onToggleExpand: () => void
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-md">
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="font-medium">Preview Our Customer Dashboard</h3>
        <Button variant="ghost" size="sm" onClick={onToggleExpand} className="hover:scale-105 transition-transform">
          {isExpanded ? "Close Preview" : "Expand Preview"}
        </Button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Suspense fallback={<div className="p-4 text-center text-muted-foreground">Loading dashboard...</div>}>
          <DashboardTabs />
        </Suspense>

        <div className="p-4 bg-muted/50 border-t">
          <p className="text-sm text-center">
            Sign up today to access our intuitive dashboard and manage all your hosting services in one place.
          </p>
        </div>
      </div>

      {/* Collapsed preview thumbnail */}
      {!isExpanded && (
        <div className="relative overflow-hidden h-[120px]">
          <Image
            src="/dashboard-preview-thumbnail.png"
            alt="Dashboard Preview"
            fill
            className="object-cover blur-sm"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={onToggleExpand}
              className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white z-10 hover:scale-105 transition-transform"
            >
              Click to Preview Dashboard
            </Button>
          </div>
        </div>
      )}
    </div>
  )
})

export function DashboardPreview() {
  const [isExpanded, setIsExpanded] = useState(false)

  return <DashboardPreviewContent isExpanded={isExpanded} onToggleExpand={() => setIsExpanded(!isExpanded)} />
}
