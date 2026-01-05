import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Plus, Power, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ServersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Servers</h1>
        <p className="text-muted-foreground">Manage your virtual servers and resources.</p>
      </div>

      <div className="flex justify-between items-center">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All Servers</TabsTrigger>
            <TabsTrigger value="running">Running</TabsTrigger>
            <TabsTrigger value="stopped">Stopped</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button className="bg-[#3cdd4a] text-white hover:bg-[#2bb039]">
          <Plus className="mr-2 h-4 w-4" /> Create Server
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Web Server</CardTitle>
              <Badge variant="success">Running</Badge>
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
                <span className="font-medium">14d 7h 32m</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-col">
                <span className="text-muted-foreground">IP Address</span>
                <span className="font-medium">192.168.1.101</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Power className="mr-2 h-4 w-4" /> Restart
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/servers/web-01">
                Manage
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Database Server</CardTitle>
              <Badge variant="success">Running</Badge>
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
                <span className="font-medium">7d 12h 45m</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-col">
                <span className="text-muted-foreground">IP Address</span>
                <span className="font-medium">192.168.1.102</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Power className="mr-2 h-4 w-4" /> Restart
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/servers/db-01">
                Manage
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Test Server</CardTitle>
              <Badge variant="destructive">Stopped</Badge>
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
                <span className="font-medium">Offline</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-col">
                <span className="text-muted-foreground">IP Address</span>
                <span className="font-medium">192.168.1.103</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Power className="mr-2 h-4 w-4" /> Start
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/servers/test-01">
                Manage
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Server Backups</h2>
        <Card>
          <CardHeader>
            <CardTitle>Recent Backups</CardTitle>
            <CardDescription>Your server backups from the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 p-4 text-sm font-medium">
                <div>Server</div>
                <div>Date</div>
                <div>Size</div>
                <div>Status</div>
                <div className="text-right">Actions</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">web-01</div>
                  <div className="text-sm">May 19, 2025 - 02:00</div>
                  <div className="text-sm">12.4 GB</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Complete</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      Restore
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">db-01</div>
                  <div className="text-sm">May 19, 2025 - 02:15</div>
                  <div className="text-sm">8.7 GB</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Complete</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      Restore
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">test-01</div>
                  <div className="text-sm">May 18, 2025 - 02:00</div>
                  <div className="text-sm">4.2 GB</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Complete</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      Restore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
