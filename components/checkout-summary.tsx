import { ShieldCheck } from "lucide-react"

export function CheckoutSummary() {
  return (
    <div className="bg-card rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-16 h-16 rounded-md bg-muted flex-shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-muted-foreground"
            >
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
              <line x1="6" x2="6" y1="6" y2="6" />
              <line x1="6" x2="6" y1="18" y2="18" />
            </svg>
          </div>
          <div>
            <div className="font-medium">Premium VPS Hosting</div>
            <div className="text-sm text-muted-foreground">4 vCPU, 8GB RAM, 100GB SSD</div>
            <div className="text-sm mt-1">$29.99</div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-16 h-16 rounded-md bg-muted flex-shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-muted-foreground"
            >
              <path d="M4 18v-9.4a2 2 0 0 1 .59-1.42L10 2l5.41 5.18A2 2 0 0 1 16 8.6V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
              <path d="m10 10 4 4" />
              <path d="m10 14 4-4" />
            </svg>
          </div>
          <div>
            <div className="font-medium">Domain Registration</div>
            <div className="text-sm text-muted-foreground">example.com - 1 year</div>
            <div className="text-sm mt-1">$12.99</div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-16 h-16 rounded-md bg-muted flex-shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-muted-foreground"
            >
              <path d="M12 2H2v10h10V2Z" />
              <path d="M12 12H2v10h10V12Z" />
              <path d="M22 2h-10v20h10V2Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium">Managed WordPress Hosting</div>
            <div className="text-sm text-muted-foreground">Basic plan - 1 year</div>
            <div className="text-sm mt-1">$8.99</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border my-6 pt-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>$51.97</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>$4.16</span>
        </div>

        <div className="flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>$56.13</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
        <ShieldCheck className="h-5 w-5 text-[#3cdd4a]" />
        <span>Your payment information is secure and encrypted</span>
      </div>
    </div>
  )
}
