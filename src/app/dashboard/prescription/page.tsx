"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, X, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguageStore } from "@/lib/store"
import { t } from "@/lib/translations"

export default function PrescriptionPage() {
  const { language } = useLanguageStore()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [notes, setNotes] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
      if (!validTypes.includes(file.type)) {
        alert(t('medicalFile.invalidFileType', language))
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(t('medicalFile.fileTooLarge', language))
        return
      }
      setSelectedFile(file)
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => setPreviewUrl(reader.result as string)
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
      alert(t('medicalFile.noFileSelected', language))
      return
    }
    setIsUploading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitted(true)
      setSelectedFile(null)
      setPreviewUrl(null)
      setNotes("")
    } catch (error) {
      alert(t('medicalFile.errorDesc', language))
    } finally {
      setIsUploading(false)
    }
  }

  if (submitted) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
          <Check className="w-20 h-20 mx-auto text-green-500 mb-6" />
          <h2 className="text-3xl font-bold mb-3">{t('medicalFile.successTitle', language)}</h2>
          <p className="text-muted-foreground mb-6 text-lg">{t('medicalFile.successDesc', language)}</p>
          <Button onClick={() => setSubmitted(false)} size="lg">
            {t('common.back', language)}
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              {t('medicalFile.title', language)}
            </CardTitle>
            <CardDescription className="text-lg">
              {t('medicalFile.description', language)}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload Area */}
              <div className="space-y-2">
                <Label htmlFor="prescription" className="text-lg">
                  {t('medicalFile.uploadFile', language)}
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
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer bg-gray-50 dark:bg-gray-900/30">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg font-medium mb-2">
                        {t('medicalFile.clickToUpload', language)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('medicalFile.fileTypes', language)}
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
                          <p className="text-sm text-muted-foreground">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={handleRemoveFile} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    {previewUrl && (
                      <div className="mt-4">
                        <img src={previewUrl} alt="Preview" className="max-w-full h-auto rounded-lg border-2 border-gray-200" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Notes Area */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-lg">
                  {t('medicalFile.additionalNotes', language)}
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('medicalFile.notesPlaceholder', language)}
                  className="min-h-32 text-base"
                />
              </div>

              {/* Info Alert */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900 dark:text-blue-200">
                  <p className="font-medium mb-1">{t('medicalFile.importantInfo', language)}</p>
                  <p className="text-blue-700 dark:text-blue-300">{t('medicalFile.importantInfoDesc', language)}</p>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={!selectedFile || isUploading}>
                {isUploading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="me-2">
                      <Upload className="w-5 h-5" />
                    </motion.div>
                    {t('medicalFile.submitting', language)}
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 me-2" />
                    {t('medicalFile.submit', language)}
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
