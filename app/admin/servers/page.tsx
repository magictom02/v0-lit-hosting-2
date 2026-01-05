import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, MoreHorizontal, ServerCrash, Server, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminServersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Server Management</h1>
        <p className="text-muted-foreground">Monitor and manage all servers across the platform.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search servers..." className="w-full bg-background pl-8" />
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button className="bg-[#3cdd4a] text-white hover:bg-[#2bb039] w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Provision Server
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 max-w-[600px]">
          <TabsTrigger value="all">All Servers</TabsTrigger>
          <TabsTrigger value="running">Running</TabsTrigger>
          <TabsTrigger value="warning">Warning</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="offline">Offline</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Servers</CardTitle>
              <CardDescription>View and manage all servers across the platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-8 p-4 text-sm font-medium">
                  <div>Server ID</div>
                  <div>Hostname</div>
                  <div>Customer</div>
                  <div>IP Address</div>
                  <div>Status</div>
                  <div>CPU</div>
                  <div>Memory</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-8 items-center p-4">
                    <div className="font-medium">SRV-2025-0042</div>
                    <div className="text-sm">web-01.lit-hosting.com</div>
                    <div className="text-sm">John Smith</div>
                    <div className="text-sm">192.168.1.101</div>
                    <div>
                      <Badge variant="success">Running</Badge>
                    </div>
                    <div className="text-sm">12%</div>
                    <div className="text-sm">2.4 GB / 8 GB</div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Remote Console</DropdownMenuItem>
                          <DropdownMenuItem>Restart Server</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Shut Down</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="grid grid-cols-8 items-center p-4">
                    <div className="font-medium">SRV-2025-0041</div>
                    <div className="text-sm">db-01.lit-hosting.com</div>
                    <div className="text-sm">John Smith</div>
                    <div className="text-sm">192.168.1.102</div>
                    <div>
                      <Badge variant="success">Running</Badge>
                    </div>
                    <div className="text-sm">24%</div>
                    <div className="text-sm">3.2 GB / 4 GB</div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Remote Console</DropdownMenuItem>
                          <DropdownMenuItem>Restart Server</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Shut Down</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="grid grid-cols-8 items-center p-4">
                    <div className="font-medium">SRV-2025-0040</div>
                    <div className="text-sm">web-01.example.org</div>
                    <div className="text-sm">Sarah Johnson</div>
                    <div className="text-sm">192.168.1.103</div>
                    <div>
                      <Badge variant="warning">Warning</Badge>
                    </div>
                    <div className="text-sm">87%</div>
                    <div className="text-sm">3.8 GB / 4 GB</div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Remote Console</DropdownMenuItem>
                          <DropdownMenuItem>Restart Server</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Shut Down</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="grid grid-cols-8 items-center p-4">
                    <div className="font-medium">SRV-2025-0039</div>
                    <div className="text-sm">mail-01.example.com</div>
                    <div className="text-sm">Emma Wilson</div>
                    <div className="text-sm">192.168.1.104</div>
                    <div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="text-sm">98%</div>
                    <div className="text-sm">1.9 GB / 2 GB</div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Remote Console</DropdownMenuItem>
                          <DropdownMenuItem>Restart Server</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Shut Down</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="grid grid-cols-8 items-center p-4">
                    <div className="font-medium">SRV-2025-0038</div>
                    <div className="text-sm">test-01.lit-hosting.com</div>
                    <div className="text-sm">John Smith</div>
                    <div className="text-sm">192.168.1.105</div>
                    <div>
                      <Badge variant="secondary">Offline</Badge>
                    </div>
                    <div className="text-sm">0%</div>
                    <div className="text-sm">0 GB / 2 GB</div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Start Server</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Delete Server</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 3,842 servers</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="running">
          <Card>
            <CardHeader>
              <CardTitle>Running Servers</CardTitle>
              <CardDescription>View and manage all running servers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Content for running servers would appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="warning">
          <Card>
            <CardHeader>
              <CardTitle>Warning Servers</CardTitle>
              <CardDescription>View and manage servers with warning status.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Content for warning servers would appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="critical">
          <Card>
            <CardHeader>
              <CardTitle>Critical Servers</CardTitle>
              <CardDescription>View and manage servers with critical status.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Content for critical servers would appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="offline">
          <Card>
            <CardHeader>
              <CardTitle>Offline Servers</CardTitle>
              <CardDescription>View and manage offline servers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Content for offline servers would appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Servers</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,842</div>
            <p className="text-xs text-muted-foreground">+24 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <ServerCrash className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+2 in the last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Uptime</CardTitle>
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
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-muted-foreground">+0.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
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
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Data Center Status</CardTitle>
            <CardDescription>Overview of server clusters across all data centers.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Frankfurt Data Center</span>
                  <span className="font-medium">98.9% Uptime</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "98.9%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Berlin Data Center</span>
                  <span className="font-medium">97.2% Uptime</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "97.2%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Munich Data Center</span>
                  <span className="font-medium">99.8% Uptime</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "99.8%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Hamburg Data Center</span>
                  <span className="font-medium">99.5% Uptime</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-[#3cdd4a]" style={{ width: "99.5%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
            <CardDescription>Latest server incidents requiring attention.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <ServerCrash className="mt-0.5 h-5 w-5 text-red-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Database Server Overload</p>
                  <p className="text-sm text-muted-foreground">DB-Cluster-03 is experiencing high load (92% CPU).</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ServerCrash className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Storage Capacity Warning</p>
                  <p className="text-sm text-muted-foreground">Storage cluster in Frankfurt at 85% capacity.</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ServerCrash className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Network Latency</p>
                  <p className="text-sm text-muted-foreground">Increased latency detected in Berlin data center.</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
