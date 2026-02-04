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
  Loader2,
  StopCircle
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t } from "@/lib/translations"

import { Html5Qrcode } from "html5-qrcode"

interface ProductData {
  name: string
  brand: string
  ingredients: string[]
  glutenStatus: "free" | "contains" | "unknown"
  glutenMessage: string
}

interface CameraDevice {
  id: string
  label: string
}

export default function ScannerPage() {
  const { language } = useLanguageStore()
  const [isScanning, setIsScanning] = useState(false)
  const [scannedCode, setScannedCode] = useState(null as string | null)
  const [productData, setProductData] = useState(null as ProductData | null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null as string | null)
  const [cameras, setCameras] = useState([] as CameraDevice[])
  const [selectedCamera, setSelectedCamera] = useState("")
  const [isCameraStarted, setIsCameraStarted] = useState(false)
  const qrCodeScannerRef = useRef(null as any)

  // Initialize cameras list
  useEffect(() => {
    Html5Qrcode.getCameras().then((devices: CameraDevice[]) => {
      if (devices && devices.length) {
        setCameras(devices)
        // Select back camera by default
        const backCamera = devices.find(device => 
          device.label.toLowerCase().includes("back")
        ) || devices[0]
        setSelectedCamera(backCamera.id)
      }
    }).catch((err: any) => {
      console.error("Error getting cameras:", err)
      setError("لم يتم العثور على كاميرا")
    })
  }, [])


  // Callback when barcode is successfully scanned
  const onScanSuccess = (decodedText: string, decodedResult: any) => {
    console.log("✅ Barcode scanned:", decodedText)
    setScannedCode(decodedText)
    setError(null)
    fetchProductData(decodedText)
  }

  // Callback for scan failures (can be ignored)
  const onScanFailure = (error: any) => {
    // Silent failures during scanning are normal
  }

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
        setIsLoading(false)
        return
      }

      const product = data.product
      const name = product.product_name || "غير معروف"
      const brand = product.brands || "غير معروف"
      
      const ingredientsText = product.ingredients_text_ar || 
                       product.ingredients_text_fr || 
                       product.ingredients_text_en || 
                       product.ingredients_text || ""

      const ingredients = ingredientsText ? ingredientsText.split(',').map((i: string) => i.trim()) : ["لا توجد مكونات"]

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
          ingredientsText.toLowerCase().includes(word.toLowerCase())
        )
        if (hasGluten) {
          glutenStatus = "contains"
          glutenMessage = "يحتوي على الغلوتين (تحليل المكونات) ❌"
        } else if (ingredientsText) {
          glutenStatus = "free"
          glutenMessage = "خالٍ من الغلوتين (تحليل المكونات) ✅"
        }
      }

      setProductData({
        name,
        brand,
        ingredients,
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
    if (isCameraStarted) {
      return // Camera already started
    }

    try {
      setError(null)
      
      if (!selectedCamera) {
        setError("الرجاء اختيار كاميرا")
        return
      }

      qrCodeScannerRef.current = new Html5Qrcode("reader")

      await qrCodeScannerRef.current.start(
        selectedCamera,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 }
        },
        onScanSuccess,
        onScanFailure
      )

      setIsCameraStarted(true)
      setIsScanning(true)
    } catch (err: any) {
      console.error("Error starting camera:", err)
      setError("حدث خطأ أثناء بدء الكاميرا. تحقق من إعدادات المتصفح.")
    }
  }

  // Stop camera scanning
  const stopScanning = async () => {
    if (qrCodeScannerRef.current && isCameraStarted) {
      try {
        await qrCodeScannerRef.current.stop()
        qrCodeScannerRef.current = null
        setIsCameraStarted(false)
        setIsScanning(false)
      } catch (err) {
        console.error("Error stopping camera:", err)
      }
    }
  }

  // Reset scan
  const resetScan = () => {
    setScannedCode(null)
    setProductData(null)
    setError(null)
    setIsLoading(false)
  }
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
              {cameras.length > 0 && (
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
                      <option key={camera.id} value={camera.id}>
                        {camera.label || `كاميرا ${cameras.indexOf(camera) + 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Video Preview Container */}
              <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border-2 border-primary/20">
                {/* html5-qrcode will create video element inside this div */}
                <div id="reader" className="w-full h-full"></div>
                
                {!isScanning && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-muted">
                    <ScanBarcode className="w-16 h-16 text-muted-foreground" />
                    <p className="text-muted-foreground">اضغط للبدء بالمسح</p>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-center">
                  {error}
                </div>
              )}

              {/* Control Buttons */}
              <div className="flex gap-3">
                {!isScanning ? (
                  <Button onClick={startScanning} className="flex-1 h-12" disabled={!selectedCamera}>
                    <Camera className="w-5 h-5 ml-2" />
                    بدء المسح
                  </Button>
                ) : (
                  <Button onClick={stopScanning} variant="destructive" className="flex-1 h-12">
                    <StopCircle className="w-5 h-5 ml-2" />
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
