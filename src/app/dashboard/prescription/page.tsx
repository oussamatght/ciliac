"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, X, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PrescriptionPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [notes, setNotes] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
      if (!validTypes.includes(file.type)) {
        toast({
          title: "نوع ملف غير صالح",
          description: "يرجى تحميل صورة (JPG, PNG) أو ملف PDF",
          variant: "destructive"
        })
        return
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "حجم الملف كبير جداً",
          description: "يرجى تحميل ملف أقل من 5 ميجابايت",
          variant: "destructive"
        })
        return
      }

      setSelectedFile(file)
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        setPreviewUrl(null)
      }
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedFile) {
      toast({
        title: "لم يتم تحديد ملف",
        description: "يرجى تحميل وصفة طبية",
        variant: "destructive"
      })
      return
    }

    setIsUploading(true)

    try {
      // Simulate upload - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "تم الإرسال بنجاح",
        description: "تم إرسال الوصفة الطبية. سيتم مراجعتها قريباً.",
      })

      // Reset form
      setSelectedFile(null)
      setPreviewUrl(null)
      setNotes("")
    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الوصفة. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              إرسال وصفة طبية
            </CardTitle>
            <CardDescription className="text-lg">
              قم بتحميل وصفة طبية من طبيبك للحصول على استشارة أو توصيات غذائية مخصصة
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload Area */}
              <div className="space-y-2">
                <Label htmlFor="prescription" className="text-lg">
                  الوصفة الطبية *
                </Label>
                
                {!selectedFile ? (
                  <div className="relative">
                    <input
                      id="prescription"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer bg-gray-50">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        اضغط لتحميل الوصفة الطبية
                      </p>
                      <p className="text-sm text-gray-500">
                        صورة (JPG, PNG) أو PDF - حجم أقصى 5MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-primary rounded-lg p-6 bg-primary/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Check className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-medium text-lg">{selectedFile.name}</p>
                          <p className="text-sm text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveFile}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Image Preview */}
                    {previewUrl && (
                      <div className="mt-4">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-w-full h-auto rounded-lg border-2 border-gray-200"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Notes Area */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-lg">
                  ملاحظات إضافية (اختياري)
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="أضف أي ملاحظات أو استفسارات إضافية حول الوصفة..."
                  className="min-h-32 text-base"
                />
              </div>

              {/* Info Alert */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">معلومة هامة</p>
                  <p>
                    سيتم مراجعة الوصفة الطبية من قبل فريقنا الطبي المختص. 
                    سنتواصل معك خلال 24-48 ساعة للحصول على التوصيات المناسبة.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-14"
                disabled={!selectedFile || isUploading}
              >
                {isUploading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Upload className="w-5 h-5" />
                    </motion.div>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 ml-2" />
                    إرسال الوصفة الطبية
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
