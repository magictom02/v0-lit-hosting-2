"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Building, BanknoteIcon } from "lucide-react"

interface CheckoutFormProps {
  step: "personal" | "billing" | "payment"
}

export function CheckoutForm({ step }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  if (step === "personal") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="John" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <label
            htmlFor="marketing"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I want to receive news and special offers
          </label>
        </div>

        <div className="flex justify-between pt-4">
          <Link href="/cart">
            <Button variant="outline">Back to Cart</Button>
          </Link>
          <Button className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white">Continue to Billing</Button>
        </div>
      </div>
    )
  }

  if (step === "billing") {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input id="address" placeholder="123 Main St" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
          <Input id="address2" placeholder="Apt 4B" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="New York" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State / Province</Label>
            <Input id="state" placeholder="NY" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="postal-code">Postal Code</Label>
            <Input id="postal-code" placeholder="10001" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" placeholder="United States" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="same-address" />
          <label
            htmlFor="same-address"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Billing address same as shipping address
          </label>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline">Back</Button>
          <Button className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white">Continue to Payment</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Payment Method</Label>
        <RadioGroup
          defaultValue="credit-card"
          onValueChange={setPaymentMethod}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div>
            <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
            <Label
              htmlFor="credit-card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#3cdd4a] [&:has([data-state=checked])]:border-[#3cdd4a]"
            >
              <CreditCard className="mb-3 h-6 w-6" />
              <span className="text-sm font-medium">Credit Card</span>
            </Label>
          </div>

          <div>
            <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#3cdd4a] [&:has([data-state=checked])]:border-[#3cdd4a]"
            >
              <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.5 8.5H18.0417C17.5361 8.5 17.0528 8.69792 16.6944 9.05556L13.9444 11.8056C13.5861 12.1632 13.1028 12.3611 12.5972 12.3611H10.5M6.5 12.3611H8.5M6.5 9.5H10.5M12.5 18.5H7.5C5.01472 18.5 3 16.4853 3 14V6.5C3 5.94772 3.44772 5.5 4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V14C16 16.4853 13.9853 18.5 11.5 18.5H10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.2 10H18.0417C17.5361 10 17.0528 10.1979 16.6944 10.5556L13.9444 13.3056C13.5861 13.6632 13.1028 13.8611 12.5972 13.8611H10.5M6.5 13.8611H8.5M6.5 11H10.5M12.5 20H7.5C5.01472 20 3 17.9853 3 15.5V8C3 7.44772 3.44772 7 4 7H15C15.5523 7 16 7.44772 16 8V15.5C16 17.9853 13.9853 20 11.5 20H10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium">PayPal</span>
            </Label>
          </div>

          <div>
            <RadioGroupItem value="bank-transfer" id="bank-transfer" className="peer sr-only" />
            <Label
              htmlFor="bank-transfer"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#3cdd4a] [&:has([data-state=checked])]:border-[#3cdd4a]"
            >
              <Building className="mb-3 h-6 w-6" />
              <span className="text-sm font-medium">Bank Transfer</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {paymentMethod === "credit-card" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="1234 5678 9012 3456" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name-on-card">Name on Card</Label>
            <Input id="name-on-card" placeholder="John Doe" />
          </div>
        </div>
      )}

      {paymentMethod === "bank-transfer" && (
        <div className="rounded-md bg-muted p-4">
          <div className="flex items-start gap-4">
            <BanknoteIcon className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Bank Transfer Instructions</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Please transfer the total amount to the following bank account. Your order will be processed once the
                payment is confirmed.
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p>
                  <span className="font-medium">Bank:</span> Lit-Hosting Bank
                </p>
                <p>
                  <span className="font-medium">Account Name:</span> Lit-Hosting Inc.
                </p>
                <p>
                  <span className="font-medium">Account Number:</span> 1234567890
                </p>
                <p>
                  <span className="font-medium">Routing Number:</span> 987654321
                </p>
                <p>
                  <span className="font-medium">Reference:</span> Your order number will be provided after submission
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the{" "}
          <Link href="#" className="text-[#3cdd4a] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[#3cdd4a] hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline">Back</Button>
        <Button className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white">Complete Order</Button>
      </div>
    </div>
  )
}
