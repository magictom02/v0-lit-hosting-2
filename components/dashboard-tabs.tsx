"use client"

import { memo } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const DashboardTabs = memo(function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="p-4">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="servers">Servers</TabsTrigger>
        <TabsTrigger value="domains">Domains</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-0">
        <div className="relative w-full bg-muted rounded-lg border overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src="/dashboard-overview.png"
            alt="Dashboard Overview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/70 text-white px-4 py-2 rounded-md">Dashboard Overview Preview</div>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          The overview dashboard gives you a quick glance at all your services, recent invoices, and system status in
          one place.
        </p>
      </TabsContent>

      <TabsContent value="servers" className="mt-0">
        <div className="relative w-full bg-muted rounded-lg border overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src="/dashboard-servers.png"
            alt="Servers Management"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
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
        <div className="relative w-full bg-muted rounded-lg border overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src="/dashboard-domains.png"
            alt="Domain Management"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
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
        <div className="relative w-full bg-muted rounded-lg border overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src="/dashboard-billing.png"
            alt="Billing Management"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
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
  )
})
