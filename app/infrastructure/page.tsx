import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Server } from "lucide-react"
import { ServerLocationMap } from "@/components/server-location-map"
import Image from "next/image"

export default function InfrastructurePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#3cdd4a]/10 px-3 py-1 text-sm">Infrastructure</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Enterprise-Grade Infrastructure</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Scalable, reliable, and secure infrastructure solutions for mission-critical applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Contact Sales</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/data-center-infrastructure.png"
                  alt="Infrastructure"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Global Network</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our data centers are strategically located around the world to provide optimal performance and
                  reliability.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Server Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px] w-full rounded-lg border overflow-hidden">
                    <ServerLocationMap />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    With data centers across 5 continents, we provide low-latency access to your applications from
                    anywhere in the world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Network Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our network backbone delivers over 100 Tbps of capacity with direct peering to major ISPs globally.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>DDoS Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced DDoS mitigation with 10+ Tbps of scrubbing capacity protects your infrastructure from
                    attacks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Infrastructure Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive infrastructure solutions for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                    <Server className="h-5 w-5 text-[#3cdd4a]" />
                  </div>
                  <CardTitle>Dedicated Servers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    High-performance dedicated servers with full hardware control and customization options.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
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
                      className="h-5 w-5 text-[#3cdd4a]"
                    >
                      <path d="M3 9h.382a1 1 0 0 0 .894-.553L6 4h12l1.724 4.447A1 1 0 0 0 20.618 9H21" />
                      <path d="M12 4v16" />
                    </svg>
                  </div>
                  <CardTitle>Private Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Secure and isolated cloud environments dedicated to your organization's needs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
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
                      className="h-5 w-5 text-[#3cdd4a]"
                    >
                      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <CardTitle>Content Delivery Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Global CDN to deliver your content faster to users around the world.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
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
                      className="h-5 w-5 text-[#3cdd4a]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle>DDoS Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced DDoS protection to keep your infrastructure safe from attacks.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
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
                      className="h-5 w-5 text-[#3cdd4a]"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <CardTitle>Backup Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Reliable backup solutions to ensure your data is always safe and recoverable.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
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
                      className="h-5 w-5 text-[#3cdd4a]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>
                  <CardTitle>Managed Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Let our experts manage your infrastructure so you can focus on your business.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039]">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Enterprise Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enterprise-grade features for mission-critical applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>High Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>99.99% Uptime SLA</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Redundant Systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Automatic Failover</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Load Balancing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>DDoS Protection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Firewall</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Intrusion Detection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>SSL/TLS Encryption</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>SSD Storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>High-Performance CPUs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Global CDN</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Low-Latency Network</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>24/7 Technical Support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Priority Response</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a]" />
                      <span>Proactive Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
