"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Gamepad2, Server, HardDrive, Users } from "lucide-react"

type GameType = "minecraft" | "csgo" | "ark" | "valheim" | "rust"

interface ConfiguratorState {
  gameType: GameType
  cpu: number
  ram: number
  storage: number
  slots: number
  location: "germany" | "france" | "uk" | "usa"
  backups: boolean
  ddosProtection: boolean
  modSupport: boolean
}

export function GameserverConfigurator() {
  const [config, setConfig] = useState<ConfiguratorState>({
    gameType: "minecraft",
    cpu: 2,
    ram: 4,
    storage: 20,
    slots: 10,
    location: "germany",
    backups: false,
    ddosProtection: true,
    modSupport: false,
  })

  const [totalPrice, setTotalPrice] = useState(0)

  // Game-specific requirements
  const gameRequirements = {
    minecraft: {
      ramPerSlot: 0.5, // GB per player
      cpuPerSlot: 0.2, // Core per player
      baseStorage: 10, // GB base
      storagePerSlot: 0.5, // GB per player
      basePrice: 5, // Base price per month
    },
    csgo: {
      ramPerSlot: 0.3,
      cpuPerSlot: 0.15,
      baseStorage: 15,
      storagePerSlot: 0.2,
      basePrice: 4,
    },
    ark: {
      ramPerSlot: 0.8,
      cpuPerSlot: 0.25,
      baseStorage: 25,
      storagePerSlot: 1,
      basePrice: 8,
    },
    valheim: {
      ramPerSlot: 0.6,
      cpuPerSlot: 0.2,
      baseStorage: 15,
      storagePerSlot: 0.5,
      basePrice: 6,
    },
    rust: {
      ramPerSlot: 0.7,
      cpuPerSlot: 0.25,
      baseStorage: 20,
      storagePerSlot: 0.8,
      basePrice: 7,
    },
  }

  // Calculate price whenever configuration changes
  useEffect(() => {
    const gameReq = gameRequirements[config.gameType]

    // Base price for the selected game
    const basePrice = gameReq.basePrice

    // Resource pricing
    const cpuPrice = config.cpu * 4
    const ramPrice = config.ram * 2.5
    const storagePrice = config.storage * 0.15
    const slotPrice = config.slots * 0.5

    // Location pricing
    let locationMultiplier = 1.0
    if (config.location === "usa") locationMultiplier = 1.1
    if (config.location === "uk") locationMultiplier = 1.05

    // Add-ons
    const backupsPrice = config.backups ? 4 : 0
    const ddosProtectionPrice = config.ddosProtection ? 8 : 0
    const modSupportPrice = config.modSupport ? 5 : 0

    // Calculate total
    const subtotal =
      basePrice + cpuPrice + ramPrice + storagePrice + slotPrice + backupsPrice + ddosProtectionPrice + modSupportPrice
    const total = subtotal * locationMultiplier

    setTotalPrice(Number.parseFloat(total.toFixed(2)))
  }, [config])

  const handleGameTypeChange = (value: string) => {
    setConfig({ ...config, gameType: value as GameType })
  }

  const handleCpuChange = (value: number[]) => {
    setConfig({ ...config, cpu: value[0] })
  }

  const handleRamChange = (value: number[]) => {
    setConfig({ ...config, ram: value[0] })
  }

  const handleStorageChange = (value: number[]) => {
    setConfig({ ...config, storage: value[0] })
  }

  const handleSlotsChange = (value: number[]) => {
    setConfig({ ...config, slots: value[0] })
  }

  const handleLocationChange = (value: string) => {
    setConfig({ ...config, location: value as "germany" | "france" | "uk" | "usa" })
  }

  const handleBackupsChange = (checked: boolean) => {
    setConfig({ ...config, backups: checked })
  }

  const handleDdosProtectionChange = (checked: boolean) => {
    setConfig({ ...config, ddosProtection: checked })
  }

  const handleModSupportChange = (checked: boolean) => {
    setConfig({ ...config, modSupport: checked })
  }

  return (
    <div className="w-full">
      <Card className="border-2 border-[#3cdd4a]/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Configure Your Gameserver</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Configuration options */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Game Type</h3>
                <Tabs defaultValue={config.gameType} onValueChange={handleGameTypeChange}>
                  <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="minecraft">Minecraft</TabsTrigger>
                    <TabsTrigger value="csgo">CS:GO</TabsTrigger>
                    <TabsTrigger value="ark">ARK</TabsTrigger>
                    <TabsTrigger value="valheim">Valheim</TabsTrigger>
                    <TabsTrigger value="rust">Rust</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#3cdd4a]" />
                    <h3 className="text-lg font-medium">Player Slots</h3>
                  </div>
                  <span className="font-bold text-lg">{config.slots} Players</span>
                </div>
                <Slider
                  defaultValue={[config.slots]}
                  min={4}
                  max={100}
                  step={2}
                  onValueChange={handleSlotsChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>4 Players</span>
                  <span>100 Players</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-[#3cdd4a]" />
                    <h3 className="text-lg font-medium">CPU Cores</h3>
                  </div>
                  <span className="font-bold text-lg">{config.cpu} Cores</span>
                </div>
                <Slider
                  defaultValue={[config.cpu]}
                  min={1}
                  max={12}
                  step={1}
                  onValueChange={handleCpuChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 Core</span>
                  <span>12 Cores</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
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
                      <path d="M6 19v-3"></path>
                      <path d="M10 19v-3"></path>
                      <path d="M14 19v-3"></path>
                      <path d="M18 19v-3"></path>
                      <path d="M4 15h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z"></path>
                    </svg>
                    <h3 className="text-lg font-medium">RAM</h3>
                  </div>
                  <span className="font-bold text-lg">{config.ram} GB</span>
                </div>
                <Slider
                  defaultValue={[config.ram]}
                  min={2}
                  max={32}
                  step={2}
                  onValueChange={handleRamChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2 GB</span>
                  <span>32 GB</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="h-5 w-5 text-[#3cdd4a]" />
                    <h3 className="text-lg font-medium">SSD Storage</h3>
                  </div>
                  <span className="font-bold text-lg">{config.storage} GB</span>
                </div>
                <Slider
                  defaultValue={[config.storage]}
                  min={10}
                  max={200}
                  step={10}
                  onValueChange={handleStorageChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10 GB</span>
                  <span>200 GB</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Server Location</h3>
                <Tabs defaultValue={config.location} onValueChange={handleLocationChange}>
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="germany">Germany</TabsTrigger>
                    <TabsTrigger value="france">France</TabsTrigger>
                    <TabsTrigger value="uk">UK</TabsTrigger>
                    <TabsTrigger value="usa">USA</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Add-ons</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="backups" className="cursor-pointer">
                        Daily Backups (+€4/month)
                      </Label>
                    </div>
                    <Switch id="backups" checked={config.backups} onCheckedChange={handleBackupsChange} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="ddos" className="cursor-pointer">
                        DDoS Protection (+€8/month)
                      </Label>
                    </div>
                    <Switch id="ddos" checked={config.ddosProtection} onCheckedChange={handleDdosProtectionChange} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="mods" className="cursor-pointer">
                        Mod Support & Installation (+€5/month)
                      </Label>
                    </div>
                    <Switch id="mods" checked={config.modSupport} onCheckedChange={handleModSupportChange} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Summary */}
            <div>
              <Card className="border-2 border-[#3cdd4a]/10">
                <CardHeader>
                  <CardTitle>Your Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Game</span>
                      <span className="font-medium capitalize">{config.gameType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Player Slots</span>
                      <span className="font-medium">{config.slots} Players</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">{config.cpu} Cores</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="font-medium">{config.ram} GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">{config.storage} GB SSD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium capitalize">{config.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Daily Backups</span>
                      <span className="font-medium">{config.backups ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">DDoS Protection</span>
                      <span className="font-medium">{config.ddosProtection ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Mod Support</span>
                      <span className="font-medium">{config.modSupport ? "Yes" : "No"}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">Monthly Price</span>
                      <span className="font-bold text-xl text-[#3cdd4a]">€{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a] mt-1" />
                        <span className="text-sm">One-click installation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a] mt-1" />
                        <span className="text-sm">Easy control panel</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a] mt-1" />
                        <span className="text-sm">99.9% Uptime guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a] mt-1" />
                        <span className="text-sm">24/7 Technical support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#3cdd4a] mt-1" />
                        <span className="text-sm">Low latency network</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039] h-12">
                    <Gamepad2 className="mr-2 h-4 w-4" /> Deploy Gameserver
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
