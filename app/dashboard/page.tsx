import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Server, HardDrive, Globe, AlertTriangle, Activity } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John! Here's an overview of your services.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Servers</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 running, 1 stopped</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Domains</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">4 active, 1 expiring soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43%</div>
            <p className="text-xs text-muted-foreground">86 GB of 200 GB</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Billing</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€49.99</div>
            <p className="text-xs text-muted-foreground">Next payment: June 15</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Server Status</CardTitle>
            <CardDescription>Performance metrics for your servers over the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
              <Activity className="h-24 w-24 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Recent system notifications and alerts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Storage space running low</p>
                  <p className="text-sm text-muted-foreground">Your primary server is at 80% storage capacity.</p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      Upgrade Storage
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Domain expiring soon</p>
                  <p className="text-sm text-muted-foreground">yourdomain.com will expire in 15 days.</p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      Renew Domain
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="servers" className="w-full">
          <TabsList>
            <TabsTrigger value="servers">Servers</TabsTrigger>
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
          </TabsList>
          <TabsContent value="servers" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Web Server</CardTitle>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <CardDescription>web-01.lit-hosting.com</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">12%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="font-medium">2.4 GB / 8 GB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">43 GB / 80 GB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/servers/web-01">
                      Manage
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Database Server</CardTitle>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <CardDescription>db-01.lit-hosting.com</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">24%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="font-medium">3.2 GB / 4 GB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">28 GB / 40 GB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/servers/db-01">
                      Manage
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Test Server</CardTitle>
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                  <CardDescription>test-01.lit-hosting.com</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="font-medium">0 GB / 2 GB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">15 GB / 20 GB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">Stopped</span>
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/servers/test-01">
                      Manage
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/servers">View All Servers</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="domains" className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-5 p-4 text-sm font-medium">
                <div>Domain</div>
                <div>Type</div>
                <div>Status</div>
                <div>Expiry</div>
                <div className="text-right">Actions</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">example.com</div>
                  <div className="text-sm">Primary</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Active</span>
                  </div>
                  <div className="text-sm">Jan 15, 2026</div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">yourdomain.com</div>
                  <div className="text-sm">Redirect</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm">Expiring Soon</span>
                  </div>
                  <div className="text-sm">Jun 05, 2025</div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/domains">View All Domains</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="storage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Storage Usage</CardTitle>
                <CardDescription>Overview of your storage allocation and usage.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Web Server (web-01)</span>
                      <span className="font-medium">43 GB / 80 GB</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "54%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Database Server (db-01)</span>
                      <span className="font-medium">28 GB / 40 GB</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Test Server (test-01)</span>
                      <span className="font-medium">15 GB / 20 GB</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Cloud Storage</span>
                      <span className="font-medium">0 GB / 100 GB</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/storage">Manage Storage</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
