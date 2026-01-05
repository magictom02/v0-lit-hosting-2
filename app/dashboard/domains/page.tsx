import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, ExternalLink, RefreshCw, Settings } from "lucide-react"

export default function DomainsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Domains</h1>
        <p className="text-muted-foreground">Manage your domain names and DNS settings.</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search domains..." className="w-full bg-background pl-8" />
        </div>
        <Button className="bg-[#3cdd4a] text-white hover:bg-[#2bb039]">
          <Plus className="mr-2 h-4 w-4" /> Register Domain
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Domains</CardTitle>
          <CardDescription>Manage and configure your registered domains.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 p-4 text-sm font-medium">
              <div>Domain</div>
              <div>Type</div>
              <div>Auto-Renew</div>
              <div>Expiry Date</div>
              <div>Status</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">example.com</div>
                <div className="text-sm">Primary</div>
                <div className="text-sm">Enabled</div>
                <div className="text-sm">Jan 15, 2026</div>
                <div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">yourdomain.com</div>
                <div className="text-sm">Redirect</div>
                <div className="text-sm">Enabled</div>
                <div className="text-sm">Jun 05, 2025</div>
                <div>
                  <Badge variant="warning">Expiring Soon</Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">anotherdomain.net</div>
                <div className="text-sm">Secondary</div>
                <div className="text-sm">Enabled</div>
                <div className="text-sm">Nov 22, 2025</div>
                <div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">mydomain.org</div>
                <div className="text-sm">Secondary</div>
                <div className="text-sm">Disabled</div>
                <div className="text-sm">Aug 17, 2025</div>
                <div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">testdomain.de</div>
                <div className="text-sm">Parked</div>
                <div className="text-sm">Enabled</div>
                <div className="text-sm">Dec 03, 2025</div>
                <div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Domain Transfer</CardTitle>
            <CardDescription>Transfer an existing domain to Lit-Hosting.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Domain Name
                </label>
                <Input placeholder="Enter domain name (e.g., example.com)" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Authorization Code
                </label>
                <Input placeholder="Enter authorization code" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">
              <RefreshCw className="mr-2 h-4 w-4" /> Start Transfer
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Domain Checker</CardTitle>
            <CardDescription>Check domain availability for registration.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Domain Name
                </label>
                <div className="flex space-x-2">
                  <Input placeholder="Enter domain name" />
                  <Button className="bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Check</Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Popular TLDs</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .com
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .net
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .org
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .de
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .io
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .co
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .app
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    .dev
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full text-center text-sm text-muted-foreground">
              Check multiple domains at once by separating them with commas.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
