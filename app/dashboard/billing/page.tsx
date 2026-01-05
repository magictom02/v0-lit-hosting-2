import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, CreditCard, CheckCircle } from "lucide-react"

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Manage your billing information and view payment history.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€0.00</div>
            <p className="text-xs text-muted-foreground">No outstanding balance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
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
            <p className="text-xs text-muted-foreground">Due on June 15, 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
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
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-md font-medium">Visa ending in 4242</div>
            <p className="text-xs text-muted-foreground">Expires 09/2026</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Update Payment Method
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>View and download your past invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 p-4 text-sm font-medium">
              <div>Invoice #</div>
              <div>Date</div>
              <div>Amount</div>
              <div>Services</div>
              <div>Status</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">INV-2025-0042</div>
                <div className="text-sm">May 15, 2025</div>
                <div className="text-sm">€49.99</div>
                <div className="text-sm">VPS Hosting, Domains</div>
                <div>
                  <Badge variant="success">Paid</Badge>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">INV-2025-0031</div>
                <div className="text-sm">Apr 15, 2025</div>
                <div className="text-sm">€49.99</div>
                <div className="text-sm">VPS Hosting, Domains</div>
                <div>
                  <Badge variant="success">Paid</Badge>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">INV-2025-0018</div>
                <div className="text-sm">Mar 15, 2025</div>
                <div className="text-sm">€49.99</div>
                <div className="text-sm">VPS Hosting, Domains</div>
                <div>
                  <Badge variant="success">Paid</Badge>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">INV-2025-0005</div>
                <div className="text-sm">Feb 15, 2025</div>
                <div className="text-sm">€49.99</div>
                <div className="text-sm">VPS Hosting, Domains</div>
                <div>
                  <Badge variant="success">Paid</Badge>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="font-medium">INV-2025-0001</div>
                <div className="text-sm">Jan 15, 2025</div>
                <div className="text-sm">€49.99</div>
                <div className="text-sm">VPS Hosting, Domains</div>
                <div>
                  <Badge variant="success">Paid</Badge>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
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
            <CardTitle>Billing Address</CardTitle>
            <CardDescription>Your billing address for invoices and receipts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="font-medium">John Doe</p>
              <p className="text-sm">Example Company GmbH</p>
              <p className="text-sm">Musterstraße 123</p>
              <p className="text-sm">10115 Berlin</p>
              <p className="text-sm">Germany</p>
              <p className="text-sm">VAT ID: DE123456789</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Update Billing Address
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Your current subscription plan and details.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Business Plan</p>
                  <p className="text-sm text-muted-foreground">Monthly billing</p>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#3cdd4a] mr-2" />
                  <span className="text-sm">3 Virtual Servers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#3cdd4a] mr-2" />
                  <span className="text-sm">5 Domain Names</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#3cdd4a] mr-2" />
                  <span className="text-sm">200 GB Storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#3cdd4a] mr-2" />
                  <span className="text-sm">Priority Support</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Change Plan</Button>
            <Button variant="outline" className="text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950">
              Cancel Subscription
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
