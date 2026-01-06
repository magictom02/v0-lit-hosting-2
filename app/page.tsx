import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { DashboardPreview } from "@/components/dashboard-preview"
import { LiveChat } from "@/components/live-chat"
import { AnimatedServiceIcon } from "@/components/animated-service-icon"
import { AnimatedButton } from "@/components/animated-button"

export const metadata = {
  title: "Fast & Reliable Web Hosting | Lit-Hosting",
  description:
    "Premium hosting solutions including webspace, VPS, gameservers, and storage. Powered by German infrastructure with 99.9% uptime.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Fast & Reliable Web Hosting
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Premium hosting solutions for your websites and applications. Based in Germany with top-tier
                  infrastructure and 99.9% uptime guarantee.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <AnimatedButton href="/webspace" variant="default" size="lg">
                  Get Started
                </AnimatedButton>
                <AnimatedButton href="#services" variant="outline" size="lg">
                  Explore Plans
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#3cdd4a]/10 px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Complete Hosting Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our range of hosting services designed to meet all your digital needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/domain">
                <Card className="border-2 border-transparent transition-all hover:border-[#3cdd4a]/50 h-full group">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                      <AnimatedServiceIcon type="domain" className="text-[#3cdd4a]" />
                    </div>
                    <CardTitle>Domain Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Register and manage domains with ease. Choose from hundreds of TLDs.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/webspace">
                <Card className="border-2 border-transparent transition-all hover:border-[#3cdd4a]/50 h-full group">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                      <AnimatedServiceIcon type="server" className="text-[#3cdd4a]" />
                    </div>
                    <CardTitle>Webspace Hosting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Reliable web hosting with SSD storage, free SSL, and 24/7 support.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/v-server">
                <Card className="border-2 border-transparent transition-all hover:border-[#3cdd4a]/50 h-full group">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                      <AnimatedServiceIcon type="server" className="text-[#3cdd4a]" />
                    </div>
                    <CardTitle>Virtual Servers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Powerful VPS solutions with full root access and guaranteed resources.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/storage">
                <Card className="border-2 border-transparent transition-all hover:border-[#3cdd4a]/50 h-full group">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                      <AnimatedServiceIcon type="storage" className="text-[#3cdd4a]" />
                    </div>
                    <CardTitle>Cloud Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Secure and scalable storage solutions for all your data needs.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/infrastructure">
                <Card className="border-2 border-transparent transition-all hover:border-[#3cdd4a]/50 h-full group">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                      <AnimatedServiceIcon type="cloud" className="text-[#3cdd4a]" />
                    </div>
                    <CardTitle>Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enterprise-grade infrastructure solutions for mission-critical applications.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/gameserver">
                <Card className="border-2 border-transparent transition-all hover:border-[#3cdd4a]/50 h-full group">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-[#3cdd4a]/10 p-2 w-10 h-10 flex items-center justify-center">
                      <AnimatedServiceIcon type="gameserver" className="text-[#3cdd4a]" />
                    </div>
                    <CardTitle>Game Servers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      High-performance game servers with low latency and DDoS protection.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">German Quality Hosting</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our infrastructure is based in Germany, providing you with the best performance and data protection
                    in Europe.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#3cdd4a]/10 flex items-center justify-center">
                      <AnimatedServiceIcon type="performance" className="text-[#3cdd4a]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#3cdd4a]">Lightning Fast</span>
                      <p className="text-muted-foreground">Optimized for speed</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#3cdd4a]/10 flex items-center justify-center">
                      <AnimatedServiceIcon type="security" className="text-[#3cdd4a]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#3cdd4a]">Secure Hosting</span>
                      <p className="text-muted-foreground">German data protection</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#3cdd4a]/10 flex items-center justify-center">
                      <AnimatedServiceIcon type="cloud" className="text-[#3cdd4a]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#3cdd4a]">24/7 Support</span>
                      <p className="text-muted-foreground">Always available</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/dark-gaming-server-room.png"
                  width={600}
                  height={400}
                  alt="German data center server room with modern infrastructure"
                  priority={false}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">See Our Control Panel in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Manage your hosting, domains, and servers with our intuitive control panel.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <DashboardPreview />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who trust Lit-Hosting for their web hosting needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#3cdd4a]/20 flex items-center justify-center">
                      <span className="font-semibold text-[#3cdd4a]">MK</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Michael Krause</CardTitle>
                      <CardDescription>Tech Startup Founder</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Lit-Hosting has been a game-changer for our business. The speed and reliability are unmatched, and
                    their support team is always there when we need them."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#3cdd4a]/20 flex items-center justify-center">
                      <span className="font-semibold text-[#3cdd4a]">LW</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Laura Weber</CardTitle>
                      <CardDescription>E-commerce Owner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Since switching to Lit-Hosting, our website load times have decreased significantly. Our customers
                    are happier, and our sales have increased."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#3cdd4a]/20 flex items-center justify-center">
                      <span className="font-semibold text-[#3cdd4a]">TS</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Thomas Schmidt</CardTitle>
                      <CardDescription>Freelance Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "As a developer, I need reliable hosting for my clients. Lit-Hosting provides the perfect balance of
                    performance, security, and value."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? Our support team is here to help you 24/7.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Email Us</h3>
                  <p className="text-muted-foreground">support@lit-hosting.de</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Call Us</h3>
                  <p className="text-muted-foreground">+49 123 456 7890</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Visit Us</h3>
                  <p className="text-muted-foreground">Germany</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <LiveChat />
    </div>
  )
}
