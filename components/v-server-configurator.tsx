"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Server, HardDrive, Cpu, BarChart4 } from "lucide-react"

type OperatingSystem = "ubuntu" | "debian" | "centos" | "windows"

interface ConfiguratorState {
  cpu: number
  ram: number
  storage: number
  bandwidth: number
  backups: boolean
  ddosProtection: boolean
  operatingSystem: OperatingSystem
}

export function VServerConfigurator() {
  const [config, setConfig] = useState<ConfiguratorState>({
    cpu: 2,
    ram: 4,
    storage: 40,
    bandwidth: 2,
    backups: false,
    ddosProtection: true,
    operatingSystem: "ubuntu",
  })

  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate price whenever configuration changes
  useEffect(() => {
    // Base prices
    const cpuPrice = config.cpu * 5
    const ramPrice = config.ram * 3
    const storagePrice = config.storage * 0.2
    const bandwidthPrice = config.bandwidth * 2

    // Add-ons
    const backupsPrice = config.backups ? 5 : 0
    const ddosProtectionPrice = config.ddosProtection ? 10 : 0

    // OS pricing
    let osPrice = 0
    if (config.operatingSystem === "windows") {
      osPrice = 10
    }

    // Calculate total
    const total = cpuPrice + ramPrice + storagePrice + bandwidthPrice + backupsPrice + ddosProtectionPrice + osPrice

    setTotalPrice(Number.parseFloat(total.toFixed(2)))
  }, [config])

  const handleCpuChange = (value: number[]) => {
    setConfig({ ...config, cpu: value[0] })
  }

  const handleRamChange = (value: number[]) => {
    setConfig({ ...config, ram: value[0] })
  }

  const handleStorageChange = (value: number[]) => {
    setConfig({ ...config, storage: value[0] })
  }

  const handleBandwidthChange = (value: number[]) => {
    setConfig({ ...config, bandwidth: value[0] })
  }

  const handleBackupsChange = (checked: boolean) => {
    setConfig({ ...config, backups: checked })
  }

  const handleDdosProtectionChange = (checked: boolean) => {
    setConfig({ ...config, ddosProtection: checked })
  }

  const handleOsChange = (value: string) => {
    setConfig({ ...config, operatingSystem: value as OperatingSystem })
  }

  return (
    <div className="w-full">
      <Card className="border-2 border-[#3cdd4a]/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Configure Your V-Server</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Configuration options */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-5 w-5 text-[#3cdd4a]" />
                    <h3 className="text-lg font-medium">CPU Cores</h3>
                  </div>
                  <span className="font-bold text-lg">{config.cpu} Cores</span>
                </div>
                <Slider
                  defaultValue={[config.cpu]}
                  min={1}
                  max={16}
                  step={1}
                  onValueChange={handleCpuChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 Core</span>
                  <span>16 Cores</span>
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
                  min={1}
                  max={64}
                  step={1}
                  onValueChange={handleRamChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 GB</span>
                  <span>64 GB</span>
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
                  min={20}
                  max={500}
                  step={10}
                  onValueChange={handleStorageChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>20 GB</span>
                  <span>500 GB</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart4 className="h-5 w-5 text-[#3cdd4a]" />
                    <h3 className="text-lg font-medium">Bandwidth</h3>
                  </div>
                  <span className="font-bold text-lg">{config.bandwidth} TB</span>
                </div>
                <Slider
                  defaultValue={[config.bandwidth]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={handleBandwidthChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 TB</span>
                  <span>10 TB</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Operating System</h3>
                <Tabs defaultValue={config.operatingSystem} onValueChange={handleOsChange}>
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="ubuntu">Ubuntu</TabsTrigger>
                    <TabsTrigger value="debian">Debian</TabsTrigger>
                    <TabsTrigger value="centos">CentOS</TabsTrigger>
                    <TabsTrigger value="windows">Windows</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Add-ons</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="backups" className="cursor-pointer">
                        Weekly Backups (+€5/month)
                      </Label>
                    </div>
                    <Switch id="backups" checked={config.backups} onCheckedChange={handleBackupsChange} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="ddos" className="cursor-pointer">
                        DDoS Protection (+€10/month)
                      </Label>
                    </div>
                    <Switch id="ddos" checked={config.ddosProtection} onCheckedChange={handleDdosProtectionChange} />
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
                      <span className="text-muted-foreground">Bandwidth</span>
                      <span className="font-medium">{config.bandwidth} TB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Operating System</span>
                      <span className="font-medium capitalize">{config.operatingSystem}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Weekly Backups</span>
                      <span className="font-medium">{config.backups ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">DDoS Protection</span>
                      <span className="font-medium">{config.ddosProtection ? "Yes" : "No"}</span>
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
                        <span className="text-sm">Full root access</span>
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
                        <span className="text-sm">German data center location</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#3cdd4a] text-white hover:bg-[#2bb039] h-12">
                    <Server className="mr-2 h-4 w-4" /> Deploy Server
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
