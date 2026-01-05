"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServerLocationMap() {
  const mapRef = useRef(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  const [pingResults, setPingResults] = useState({})

  // Simulated data for server locations
  const serverLocations = [
    {
      id: 1,
      name: "Frankfurt",
      lat: 50.1109,
      lng: 8.6821,
      country: "Germany",
      region: "Europe",
      tier: 3,
      services: ["VPS", "Webspace", "Gameserver"],
    },
    {
      id: 2,
      name: "London",
      lat: 51.5074,
      lng: -0.1278,
      country: "United Kingdom",
      region: "Europe",
      tier: 3,
      services: ["VPS", "Webspace", "Gameserver"],
    },
    {
      id: 3,
      name: "Amsterdam",
      lat: 52.3676,
      lng: 4.9041,
      country: "Netherlands",
      region: "Europe",
      tier: 3,
      services: ["VPS", "Webspace", "Gameserver"],
    },
    {
      id: 4,
      name: "Paris",
      lat: 48.8566,
      lng: 2.3522,
      country: "France",
      region: "Europe",
      tier: 3,
      services: ["VPS", "Webspace"],
    },
    {
      id: 5,
      name: "New York",
      lat: 40.7128,
      lng: -74.006,
      country: "United States",
      region: "North America",
      tier: 3,
      services: ["VPS", "Webspace", "Gameserver"],
    },
    {
      id: 6,
      name: "Singapore",
      lat: 1.3521,
      lng: 103.8198,
      country: "Singapore",
      region: "Asia",
      tier: 3,
      services: ["VPS", "Gameserver"],
    },
    {
      id: 7,
      name: "Sydney",
      lat: -33.8688,
      lng: 151.2093,
      country: "Australia",
      region: "Oceania",
      tier: 3,
      services: ["VPS", "Gameserver"],
    },
    {
      id: 8,
      name: "Tokyo",
      lat: 35.6762,
      lng: 139.6503,
      country: "Japan",
      region: "Asia",
      tier: 3,
      services: ["VPS", "Gameserver"],
    },
    {
      id: 9,
      name: "São Paulo",
      lat: -23.5505,
      lng: -46.6333,
      country: "Brazil",
      region: "South America",
      tier: 3,
      services: ["VPS", "Gameserver"],
    },
  ]

  // Simulate ping times based on distance
  const simulatePing = (userLat, userLng, serverLat, serverLng) => {
    // Calculate distance using Haversine formula
    const R = 6371 // Earth's radius in km
    const dLat = ((serverLat - userLat) * Math.PI) / 180
    const dLng = ((serverLng - userLng) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((userLat * Math.PI) / 180) *
        Math.cos((serverLat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c

    // Simulate ping based on distance (roughly 0.5ms per 100km plus a base latency)
    return Math.round((distance * 0.5) / 100 + 5 + Math.random() * 10)
  }

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setUserLocation(userLoc)

          // Simulate ping times to all locations
          const pings = {}
          serverLocations.forEach((location) => {
            pings[location.id] = simulatePing(userLoc.lat, userLoc.lng, location.lat, location.lng)
          })
          setPingResults(pings)
        },
        () => {
          // Default to central Europe if geolocation is denied
          const defaultLoc = { lat: 50.0, lng: 10.0 }
          setUserLocation(defaultLoc)

          // Simulate ping times to all locations
          const pings = {}
          serverLocations.forEach((location) => {
            pings[location.id] = simulatePing(defaultLoc.lat, defaultLoc.lng, location.lat, location.lng)
          })
          setPingResults(pings)
        },
      )
    }

    // In a real implementation, we would initialize a map library here
    // For this example, we'll create a placeholder with CSS
  }, [])

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="relative w-full h-full bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden">
      {/* This would be replaced with an actual map library in production */}
      <div className="absolute inset-0 bg-[url('/placeholder-k4a95.png')] bg-cover bg-center opacity-50"></div>

      {/* Server location markers */}
      <div className="absolute inset-0">
        {serverLocations.map((location) => (
          <div
            key={location.id}
            className="absolute w-4 h-4 rounded-full bg-[#3cdd4a] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
            style={{
              left: `${((location.lng + 180) / 360) * 100}%`,
              top: `${((90 - location.lat) / 180) * 100}%`,
              zIndex: selectedLocation?.id === location.id ? 20 : 10,
            }}
            onClick={() => handleLocationSelect(location)}
          >
            <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#3cdd4a] opacity-30 animate-ping"></div>
            {pingResults[location.id] && (
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                {pingResults[location.id]}ms
              </div>
            )}
          </div>
        ))}

        {/* User location marker */}
        {userLocation && (
          <div
            className="absolute w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              left: `${((userLocation.lng + 180) / 360) * 100}%`,
              top: `${((90 - userLocation.lat) / 180) * 100}%`,
            }}
          >
            <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-blue-500 opacity-30"></div>
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-1 rounded">You</div>
          </div>
        )}
      </div>

      {/* Location details card */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 w-72 z-30">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{selectedLocation.name}</CardTitle>
                <Badge className="bg-[#3cdd4a]">{selectedLocation.region}</Badge>
              </div>
              <CardDescription>{selectedLocation.country}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier:</span>
                  <span>Tier {selectedLocation.tier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Services:</span>
                  <span>{selectedLocation.services.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ping:</span>
                  <span className="font-bold">{pingResults[selectedLocation.id] || "--"}ms</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <div className="bg-background rounded-md shadow-md p-2">
          <div className="text-sm font-medium mb-2">Filter by Service</div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              All
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              VPS
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              Webspace
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              Gameserver
            </Badge>
          </div>
        </div>
        <div className="bg-background rounded-md shadow-md p-2">
          <div className="text-sm font-medium mb-2">Filter by Region</div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              All
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              Europe
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              North America
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              Asia
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              Oceania
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-[#3cdd4a] hover:text-white">
              South America
            </Badge>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-background rounded-md shadow-md p-2">
        <div className="text-sm font-medium mb-2">Legend</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3cdd4a]"></div>
            <span className="text-xs">Data Center</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs">Your Location</span>
          </div>
        </div>
      </div>
    </div>
  )
}
