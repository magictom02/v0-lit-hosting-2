import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GameserverConfigurator } from "@/components/gameserver-configurator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, Trophy, Clock, Shield, Users, Server, Cpu, HardDrive } from "lucide-react"

export const metadata: Metadata = {
  title: "Gameserver | Lit-Hosting",
  description: "High-performance game servers for all your favorite games",
}

export default function GameserverPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Header */}
        <div className="relative bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-50">
            <Image
              src="/dark-gaming-server-room.png"
              alt="Gaming server background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Level Up Your <span className="text-[#3cdd4a]">Gaming Experience</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                High-performance, low-latency game servers with 99.9% uptime and advanced DDoS protection.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white">
                  Configure Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Game List
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 pt-6 text-sm md:text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-[#3cdd4a]" />
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#3cdd4a]" />
                  <span>DDoS Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#3cdd4a]" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#3cdd4a]" />
                  <span>High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="h-5 w-5 text-[#3cdd4a]" />
                  <CardTitle>Easy Setup</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  One-click installation for popular games. Your server will be up and running in minutes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-[#3cdd4a]" />
                  <CardTitle>High Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Powered by latest-gen CPUs and NVMe SSDs for smooth gameplay and minimal lag.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-[#3cdd4a]" />
                  <CardTitle>99.9% Uptime</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your game server stays online 24/7, so you and your friends can play anytime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-[#3cdd4a]" />
                  <CardTitle>DDoS Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced protection against DDoS attacks keeps your server safe and running.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Configure Your Game Server</h2>
            <GameserverConfigurator />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-center">Supported Games</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Card className="text-center p-6">
                <h3 className="font-medium">Minecraft</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">Counter-Strike 2</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">ARK: Survival Evolved</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">Valheim</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">Rust</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">Terraria</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">Team Fortress 2</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">7 Days to Die</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">Garry's Mod</h3>
              </Card>
              <Card className="text-center p-6">
                <h3 className="font-medium">And many more...</h3>
              </Card>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="bg-muted/50">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <HardDrive className="h-5 w-5 text-[#3cdd4a] mt-0.5" />
                    <span>Enterprise-grade NVMe SSDs for lightning-fast loading times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Server className="h-5 w-5 text-[#3cdd4a] mt-0.5" />
                    <span>Latest AMD EPYC and Intel Xeon processors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-[#3cdd4a] mt-0.5" />
                    <span>Advanced DDoS protection up to 800 Gbps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#3cdd4a] mt-0.5" />
                    <span>24/7 technical support from gaming experts</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">FAQ</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">How quickly can I get my server?</h4>
                    <p className="text-muted-foreground">Most game servers are deployed instantly after payment.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Can I switch games later?</h4>
                    <p className="text-muted-foreground">Yes, you can switch between supported games at any time.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Do you offer modding support?</h4>
                    <p className="text-muted-foreground">
                      Yes, we support mods for all compatible games with easy installation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get Started</h3>
                <p>
                  Ready to level up your gaming experience? Configure your server now or contact our gaming specialists
                  for custom setups.
                </p>
                <div className="flex flex-col space-y-3 pt-2">
                  <Button className="bg-[#3cdd4a] hover:bg-[#2bb039] text-white w-full">Configure Server</Button>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                  <Link href="/login" className="text-sm text-center text-muted-foreground hover:text-[#3cdd4a]">
                    Already have a server? Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
