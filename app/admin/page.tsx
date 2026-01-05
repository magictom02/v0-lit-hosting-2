import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Server, AlertTriangle, Activity, Ticket } from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin! Here's an overview of the system.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Servers</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,842</div>
            <p className="text-xs text-muted-foreground">98.7% uptime</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">8 high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
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
            <div className="text-2xl font-bold">€58,432</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Server load and resource utilization across all data centers.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
              <Activity className="h-24 w-24 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Critical system notifications requiring attention.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-red-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Database Server Overload</p>
                  <p className="text-sm text-muted-foreground">DB-Cluster-03 is experiencing high load (92% CPU).</p>
                  <div className="pt-2">
                    <Button variant="destructive" size="sm">
                      Investigate
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Storage Capacity Warning</p>
                  <p className="text-sm text-muted-foreground">Storage cluster in Frankfurt at 85% capacity.</p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Network Latency</p>
                  <p className="text-sm text-muted-foreground">Increased latency detected in Berlin data center.</p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="customers" className="w-full">
          <TabsList>
            <TabsTrigger value="customers">Recent Customers</TabsTrigger>
            <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
            <TabsTrigger value="servers">Server Status</TabsTrigger>
          </TabsList>
          <TabsContent value="customers" className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-5 p-4 text-sm font-medium">
                <div>Customer</div>
                <div>Email</div>
                <div>Status</div>
                <div>Joined</div>
                <div className="text-right">Actions</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm">john.smith@example.com</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Active</span>
                  </div>
                  <div className="text-sm">May 15, 2025</div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm">sarah.j@example.com</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Active</span>
                  </div>
                  <div className="text-sm">May 14, 2025</div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">Michael Brown</div>
                  <div className="text-sm">m.brown@example.com</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm">Pending</span>
                  </div>
                  <div className="text-sm">May 13, 2025</div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/admin/customers">View All Customers</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="tickets" className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-5 p-4 text-sm font-medium">
                <div>Ticket ID</div>
                <div>Subject</div>
                <div>Customer</div>
                <div>Status</div>
                <div className="text-right">Actions</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">#8294</div>
                  <div className="text-sm">Server not responding</div>
                  <div className="text-sm">John Smith</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm">High Priority</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">#8293</div>
                  <div className="text-sm">Billing question</div>
                  <div className="text-sm">Sarah Johnson</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm">Medium Priority</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4">
                  <div className="font-medium">#8292</div>
                  <div className="text-sm">Domain transfer issue</div>
                  <div className="text-sm">Michael Brown</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Low Priority</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/admin/tickets">View All Tickets</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="servers" className="space-y-4">
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
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/admin/servers">View Server Management</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
