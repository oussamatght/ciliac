"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  ScanBarcode,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Package,
  Factory,
  Wheat,
  RefreshCw,
  Loader2
} from "lucide-react"

interface ProductData {
  name: string
  brand: string
  ingredients: string[]
  glutenStatus: "free" | "contains" | "unknown"
  glutenMessage: string
}

interface CameraDevice {
  deviceId: string
  label: string
  kind: string
}

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedCode, setScannedCode] = useState(null as string | null)
  const [productData, setProductData] = useState(null as ProductData | null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null as string | null)
  const [cameras, setCameras] = useState([] as CameraDevice[])
  const [selectedCamera, setSelectedCamera] = useState("")
  const videoRef = useRef(null as HTMLVideoElement | null)
  const canvasRef = useRef(null as HTMLCanvasElement | null)
  const scannerRef = useRef(null as unknown)
  const [hasPermission, setHasPermission] = useState(null)

  // Get available cameras
  useEffect(() => {
    const getCameras = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = devices.filter(device => device.kind === "videoinput") as CameraDevice[]
        setCameras(videoDevices)
        
        // Select back camera by default if available
        const backCamera = videoDevices.find((device: CameraDevice) => 
          device.label.toLowerCase().includes("back") || 
          device.label.toLowerCase().includes("rear")
        )
        if (backCamera) {
          setSelectedCamera(backCamera.deviceId)
        } else if (videoDevices.length > 0) {
          setSelectedCamera(videoDevices[0].deviceId)
        }
      } catch (err) {
        console.error("Error getting cameras:", err)
      }
    }
    getCameras()
  }, [])

  // Fetch product data from Open Food Facts API
  const fetchProductData = async (barcode: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      const data = await response.json()

      if (!data || !data.product) {
        setError("المنتج غير موجود في قاعدة البيانات")
        setProductData(null)
        return
      }

      const product = data.product
      const name = product.product_name || "غير معروف"
      const brand = product.brands || "غير معروف"
      
      const ingredients = product.ingredients_text_ar || 
                       product.ingredients_text_fr || 
                       product.ingredients_text_en || 
                       product.ingredients_text || ""

      let glutenStatus: "free" | "contains" | "unknown" = "unknown"
      let glutenMessage = "غير محدد"

      if (product.ingredients_analysis_tags?.includes("en:gluten-free")) {
        glutenStatus = "free"
        glutenMessage = "خالٍ من الغلوتين ✅"
      } else if (product.ingredients_analysis_tags?.includes("en:contains-gluten")) {
        glutenStatus = "contains"
        glutenMessage = "يحتوي على الغلوتين ❌"
      } else {
        // Manual check
        const glutenWords = [
          "قمح", "فرينة", "جلوتين", "شعير", "كسكس", "شوفان",
          "wheat", "gluten", "barley", "couscous", "oats", "semolina",
          "farine", "blé", "orge", "seigle", "rye"
        ]
        const hasGluten = glutenWords.some(word => 
          ingredients.toLowerCase().includes(word.toLowerCase())
        )
        if (hasGluten) {
          glutenStatus = "contains"
          glutenMessage = "يحتوي على الغلوتين (تحليل المكونات) ❌"
        } else if (ingredients) {
          glutenStatus = "free"
          glutenMessage = "خالٍ من الغلوتين (تحليل المكونات) ✅"
        }
      }

      const ingredientsList = ingredients
        ? ingredients.split(/[,،]/).map((i: string) => i.trim()).filter((i: string) => i)
        : []

      setProductData({
        name,
        brand,
        ingredients: ingredientsList,
        glutenStatus,
        glutenMessage
      })
    } catch (err) {
      console.error("Error fetching product:", err)
      setError("حدث خطأ أثناء جلب البيانات")
      setProductData(null)
    } finally {
      setIsLoading(false)
    }
  }

  // Start camera scanning
  const startScanning = async () => {
    try {
      setError(null)
      setHasPermission(null)
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
          facingMode: selectedCamera ? undefined : { ideal: "environment" }
        }
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setIsScanning(true)
        setHasPermission(true)
        
        // Load and initialize barcode scanner
        const { BrowserMultiFormatReader } = await import("@zxing/library")
        scannerRef.current = new BrowserMultiFormatReader()
        
        scannerRef.current.decodeFromVideoDevice(
          selectedCamera || undefined,
          videoRef.current,
          (result: unknown) => {
            if (result && typeof result === 'object' && result !== null && 'getText' in result) {
              const code = (result as { getText: () => string }).getText()
              setScannedCode(code)
              stopScanning()
              fetchProductData(code)
            }
          }
        )
      }
    } catch (err: unknown) {
      console.error("Camera error:", err)
      if (err && typeof err === 'object' && 'name' in err && (err as { name: string }).name === "NotAllowedError") {
        setError("لم يتم السماح بالوصول إلى الكاميرا. يرجى تفعيل الصلاحيات من إعدادات المتصفح.")
      } else {
        setError("حدث خطأ أثناء تشغيل الكاميرا")
      }
    }
  }

  // Stop scanning
  const stopScanning = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    if (scannerRef.current) {
      scannerRef.current.reset()
    }
    setIsScanning(false)
  }

  // Reset for new scan
  const resetScan = () => {
    setScannedCode(null)
    setProductData(null)
    setError(null)
    startScanning()
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanning()
    }
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <ScanBarcode className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ماسح الباركود</h1>
            <p className="text-muted-foreground">افحص المنتجات للتأكد من خلوها من الغلوتين</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scanner Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                الماسح الضوئي
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Camera Selection */}
              {cameras.length > 1 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">اختر الكاميرا:</label>
                  <select
                    value={selectedCamera}
                    onChange={(e) => setSelectedCamera((e.target as HTMLSelectElement).value)}
                    className="w-full p-2 border rounded-lg bg-background"
                    disabled={isScanning}
                    aria-label="اختر الكاميرا"
                  >
                    {cameras.map((camera: CameraDevice) => (
                      <option key={camera.deviceId} value={camera.deviceId}>
                        {camera.label || `كاميرا ${cameras.indexOf(camera) + 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Video Preview */}
              <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border-2 border-primary/20">
                {isScanning ? (
                  <>
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      playsInline
                      muted
                    />
                    {/* Scan overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-2 border-primary rounded-lg animate-pulse">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 inset-x-4 text-center">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        وجّه الكاميرا نحو الباركود
                      </Badge>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <ScanBarcode className="w-16 h-16 text-muted-foreground" />
                    <p className="text-muted-foreground">اضغط للبدء بالمسح</p>
                  </div>
                )}
              </div>

              {/* Hidden canvas for processing */}
              <canvas ref={canvasRef} className="hidden" />

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-center">
                  {error}
                </div>
              )}

              {/* Control Buttons */}
              <div className="flex gap-3">
                {!isScanning ? (
                  <Button onClick={startScanning} className="flex-1 h-12">
                    <Camera className="w-5 h-5 ml-2" />
                    بدء المسح
                  </Button>
                ) : (
                  <Button onClick={stopScanning} variant="destructive" className="flex-1 h-12">
                    <XCircle className="w-5 h-5 ml-2" />
                    إيقاف
                  </Button>
                )}
                {(scannedCode || productData) && (
                  <Button onClick={resetScan} variant="outline" className="h-12">
                    <RefreshCw className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                نتيجة الفحص
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                  <p className="text-muted-foreground">جاري جلب البيانات...</p>
                </div>
              ) : productData ? (
                <div className="space-y-6">
                  {/* Gluten Status */}
                  <div className={`p-6 rounded-xl text-center ${
                    productData.glutenStatus === "free" 
                      ? "bg-green-100 dark:bg-green-900/30 border-2 border-green-500" 
                      : productData.glutenStatus === "contains"
                      ? "bg-red-100 dark:bg-red-900/30 border-2 border-red-500"
                      : "bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-500"
                  }`}>
                    {productData.glutenStatus === "free" ? (
                      <CheckCircle2 className="w-16 h-16 mx-auto text-green-600 mb-3" />
                    ) : productData.glutenStatus === "contains" ? (
                      <XCircle className="w-16 h-16 mx-auto text-red-600 mb-3" />
                    ) : (
                      <AlertTriangle className="w-16 h-16 mx-auto text-amber-600 mb-3" />
                    )}
                    <p className={`text-xl font-bold ${
                      productData.glutenStatus === "free" 
                        ? "text-green-700 dark:text-green-400" 
                        : productData.glutenStatus === "contains"
                        ? "text-red-700 dark:text-red-400"
                        : "text-amber-700 dark:text-amber-400"
                    }`}>
                      {productData.glutenMessage}
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                      <Package className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">اسم المنتج</p>
                        <p className="font-semibold">{productData.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                      <Factory className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">العلامة التجارية</p>
                        <p className="font-semibold">{productData.brand}</p>
                      </div>
                    </div>

                    {productData.ingredients.length > 0 && (
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Wheat className="w-5 h-5 text-primary" />
                          <p className="text-sm text-muted-foreground">المكونات</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm max-h-40 overflow-y-auto">
                          {productData.ingredients.map((ing: string, idx: number) => (
                            <li key={idx}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {scannedCode && (
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          باركود: {scannedCode}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <ScanBarcode className="w-16 h-16 text-muted-foreground/50" />
                  <div>
                    <p className="text-muted-foreground">لم يتم مسح أي منتج بعد</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      قم بمسح باركود المنتج للتحقق من محتواه
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Warning Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  تنبيه مهم
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  قد لا تكون جميع المنتجات متوفرة في قاعدة البيانات. في حالة عدم وجود المنتج، 
                  يرجى قراءة الملصق الغذائي بعناية والبحث عن عبارة &quot;خالي من الغلوتين&quot; أو 
                  التحقق من قائمة المكونات للتأكد من خلوها من القمح والشعير والجاودار والشوفان.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
