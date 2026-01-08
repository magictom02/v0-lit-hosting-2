"use client"

import { memo, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

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
        <Button variant="ghost" size="sm" onClick={onToggleExpand} className="transition-transform hover:scale-105">
          {isExpanded ? "Close Preview" : "Expand Preview"}
        </Button>
      </div>

      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Tabs defaultValue="overview" className="p-4">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="servers">Servers</TabsTrigger>
                <TabsTrigger value="domains">Domains</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div
                  className="relative w-full bg-muted rounded-lg border overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src="/dashboard-overview.png"
                    alt="Dashboard Overview"
                    fill
                    priority={false}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white px-4 py-2 rounded-md">Dashboard Overview Preview</div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The overview dashboard gives you a quick glance at all your services, recent invoices, and system
                  status in one place.
                </p>
              </TabsContent>

              <TabsContent value="servers" className="mt-0">
                <div
                  className="relative w-full bg-muted rounded-lg border overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src="/dashboard-servers.png"
                    alt="Servers Management"
                    fill
                    priority={false}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white px-4 py-2 rounded-md">Server Management Preview</div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Manage all your servers with real-time monitoring, performance graphs, and one-click actions.
                </p>
              </TabsContent>

              <TabsContent value="domains" className="mt-0">
                <div
                  className="relative w-full bg-muted rounded-lg border overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src="/dashboard-domains.png"
                    alt="Domain Management"
                    fill
                    priority={false}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white px-4 py-2 rounded-md">Domain Management Preview</div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Easily manage your domains, DNS records, and domain transfers all in one place.
                </p>
              </TabsContent>

              <TabsContent value="billing" className="mt-0">
                <div
                  className="relative w-full bg-muted rounded-lg border overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src="/dashboard-billing.png"
                    alt="Billing Management"
                    fill
                    priority={false}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white px-4 py-2 rounded-md">Billing Management Preview</div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  View your invoices, manage payment methods, and track your spending with detailed reports.
                </p>
              </TabsContent>
            </Tabs>

            <div className="p-4 bg-muted/50 border-t">
              <p className="text-sm text-center">
                Sign up today to access our intuitive dashboard and manage all your hosting services in one place.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ height: "120px" }} animate={{ height: "120px" }} className="relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/dashboard-preview-thumbnail.png"
                alt="Dashboard Preview"
                fill
                priority={false}
                className="object-cover blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
              <Button
                onClick={onToggleExpand}
                className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white z-10 transition-transform hover:scale-105"
              >
                Click to Preview Dashboard
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export function DashboardPreview() {
  const [isExpanded, setIsExpanded] = useState(false)

  return <DashboardPreviewContent isExpanded={isExpanded} onToggleExpand={() => setIsExpanded(!isExpanded)} />
}
