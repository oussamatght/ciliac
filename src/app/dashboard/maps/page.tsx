"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { 
  MapPin, 
  Navigation,
  Store,
  UtensilsCrossed,
  Building2,
  Phone,
  ExternalLink,
  Loader2
} from "lucide-react"

// Dynamic import for Leaflet (client-side only)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
)

// Real locations from MAPS.html - 16 gluten-free locations in Algeria
const locations = [
  { 
    id: 1,
    name: "Maison Goussem Gluten Free", 
    lat: 36.7675, 
    lon: 3.0419, 
    link: "https://www.facebook.com/Maison-Goussem-Gluten-Free-102886828683687/", 
    address: "حي السيلاست, Béni Messous",
    category: "متجر"
  },
  { 
    id: 2,
    name: "Délices sans Gluten El-Bahdja", 
    lat: 36.766, 
    lon: 3.0420, 
    phone: "0667 10 60 81", 
    link: "https://www.facebook.com/Elbahdjasansgluten/", 
    address: "Alger centre, Algiers, Algeria",
    category: "مخبزة"
  },
  { 
    id: 3,
    name: "Vie Sans Gluten", 
    lat: 36.763, 
    lon: 3.0505, 
    phone: "0793 88 46 11", 
    link: "https://www.facebook.com/viesansgluten1/", 
    address: "Bd Colonel Amirouche, Algiers 16000",
    category: "متجر"
  },
  { 
    id: 4,
    name: "Gluten Free Diet", 
    lat: 36.710, 
    lon: 2.9915, 
    phone: "0698 26 56 03", 
    link: "https://www.facebook.com/glutenfreediet0", 
    address: "Baba Hassen 16081, Algérie",
    category: "متجر"
  },
  { 
    id: 5,
    name: "Benna sans gluten", 
    lat: 36.696, 
    lon: 3.042, 
    phone: "0540 88 27 39", 
    link: "https://www.facebook.com/Benna-sans-gluten-103005454792908/", 
    address: "Draria, Alger",
    category: "مخبزة"
  },
  { 
    id: 6,
    name: "Biorégime", 
    lat: 35.004, 
    lon: -1.316, 
    phone: "0557 30 78 01", 
    link: "https://maps.app.goo.gl/NCSXZ7W3zyNymWMeA", 
    address: "Tlemcen, Algeria",
    category: "متجر"
  },
  { 
    id: 7,
    name: "Le Gastronome sans gluten", 
    lat: 35.730, 
    lon: -0.620, 
    phone: "0697 72 27 02", 
    address: "Bir El Djir, Oran",
    category: "مطعم"
  },
  { 
    id: 8,
    name: "S&R sans gluten", 
    lat: 36.781, 
    lon: 3.000, 
    phone: "0656 75 70 40", 
    link: "https://www.facebook.com/SandRsansgluten/", 
    address: "Bouzareah",
    category: "متجر"
  },
  { 
    id: 9,
    name: "Superette Le bon prix", 
    lat: 36.736, 
    lon: 3.086, 
    phone: "0774 10 00 95", 
    link: "http://www.promochoclebonprix.com/", 
    address: "El Harrach",
    category: "سوبرماركت"
  },
  { 
    id: 10,
    name: "Mini Market BBH", 
    lat: 36.720, 
    lon: 2.935, 
    address: "Baba Hassen",
    category: "متجر"
  },
  { 
    id: 11,
    name: "Mini Market Ihcene", 
    lat: 36.721, 
    lon: 2.940, 
    phone: "0663 85 81 91", 
    link: "https://web.facebook.com/Ihcene-sans-gluten-123058952429563/", 
    address: "Blida",
    category: "متجر"
  },
  { 
    id: 12,
    name: "Corail Rouge Market", 
    lat: 35.060, 
    lon: -1.340, 
    phone: "0556 16 66 38", 
    link: "https://corailmarket.com/", 
    address: "Maghnia, Tlemcen",
    category: "سوبرماركت"
  },
  { 
    id: 13,
    name: "Dar elkarim", 
    lat: 36.755, 
    lon: 2.991, 
    phone: "0540 84 94 40", 
    link: "https://www.facebook.com/darelkarim1/", 
    address: "Ouled Fayet, Algiers",
    category: "مخبزة"
  },
  { 
    id: 14,
    name: "Niema la maison du sans gluten", 
    lat: 36.720, 
    lon: 3.230, 
    phone: "0697 72 27 02", 
    address: "Bab Ezzouar",
    category: "متجر"
  },
  { 
    id: 15,
    name: "Magasin Habibou sans gluten", 
    lat: 36.780, 
    lon: 3.270, 
    phone: "0771 13 05 62", 
    link: "https://www.facebook.com/Habibou-Gluten-free-827559634088059/", 
    address: "Bordj El Bahri",
    category: "متجر"
  },
  { 
    id: 16,
    name: "Amissan Gluten Free", 
    lat: 36.785, 
    lon: 3.010, 
    phone: "0781 56 64 26", 
    link: "https://www.facebook.com/Ma-petite-cuisine-sans-gluten-104073014486557/", 
    address: "Bouzareah",
    category: "مخبزة"
  }
]

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "متجر": Store,
  "مخبزة": UtensilsCrossed,
  "مطعم": UtensilsCrossed,
  "سوبرماركت": Building2
}

const categoryColors: Record<string, string> = {
  "متجر": "bg-blue-500",
  "مخبزة": "bg-amber-500",
  "مطعم": "bg-green-500",
  "سوبرماركت": "bg-purple-500"
}

interface Location {
  id: number
  name: string
  lat: number
  lon: number
  link?: string
  phone?: string
  address: string
  category: string
}

export default function MapsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null as Location | null)
  const [filter, setFilter] = useState("all")

  const filteredLocations = filter === "all"
    ? locations 
    : locations.filter(loc => loc.category === filter)

  const categories = ["all", ...new Set(locations.map(l => l.category))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">خريطة المواقع</h1>
            <p className="text-muted-foreground">اعثر على متاجر ومطاعم خالية من الغلوتين في الجزائر</p>
          </div>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(cat)}
            className="rounded-full"
          >
            {cat === "all" ? "الكل" : cat}
            {cat !== "all" && (
              <Badge variant="secondary" className="mr-2">
                {locations.filter(l => l.category === cat).length}
              </Badge>
            )}
          </Button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[500px] relative">
                {isClient ? (
                  <>
                    <link
                      rel="stylesheet"
                      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                      crossOrigin=""
                    />
                    <MapContainer
                      center={[36.75, 3.06]}
                      zoom={10}
                      style={{ height: "100%", width: "100%" }}
                      className="z-0"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {filteredLocations.map((location, index) => (
                        <Marker
                          key={location.id}
                          position={[location.lat + (index * 0.001), location.lon + (index * 0.001)]}
                          eventHandlers={{
                            click: () => setSelectedLocation(location)
                          }}
                        >
                          <Popup>
                            <div className="text-right" dir="rtl">
                              <h3 className="font-bold text-sm mb-1">{location.name}</h3>
                              <p className="text-xs text-gray-600 mb-1">📍 {location.address}</p>
                              {location.phone && (
                                <p className="text-xs text-gray-600 mb-1">📞 {location.phone}</p>
                              )}
                              {location.link && (
                                <a 
                                  href={location.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-600 hover:underline"
                                >
                                  عرض على الفيسبوك
                                </a>
                              )}
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center bg-muted">
                    <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Locations List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-[500px] overflow-hidden">
            <CardContent className="p-4 h-full overflow-y-auto">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                قائمة المواقع ({filteredLocations.length})
              </h3>
              <div className="space-y-3">
                {filteredLocations.map((location) => {
                  const IconComponent = categoryIcons[location.category] || Store
                  return (
                    <motion.div
                      key={location.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedLocation?.id === location.id 
                          ? "border-primary bg-primary/5" 
                          : "hover:border-primary/50 hover:bg-secondary/30"
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full ${categoryColors[location.category] || "bg-gray-500"} flex items-center justify-center shrink-0`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{location.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{location.address}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {location.category}
                            </Badge>
                            {location.phone && (
                              <a 
                                href={`tel:${location.phone}`}
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Phone className="w-3 h-3" />
                                اتصال
                              </a>
                            )}
                            {location.link && (
                              <a 
                                href={location.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-3 h-3" />
                                رابط
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  هل تعرف متجراً آخر؟
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  إذا كنت تعرف متجراً أو مخبزة أو مطعماً يقدم منتجات خالية من الغلوتين 
                  ولم يكن مدرجاً في خريطتنا، يرجى التواصل معنا لإضافته. 
                  هدفنا هو توفير أكبر قاعدة بيانات للمواقع الصديقة لمرضى السيلياك في الجزائر.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
