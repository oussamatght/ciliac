"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguageStore } from "@/lib/store"
import { translations } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import {
  FileText,
  Upload,
  X,
  File,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Trash2,
  Eye,
  Download,
  Pill
} from "lucide-react"

interface PrescriptionFile {
  id: string
  name: string
  size: number
  type: string
  uploadDate: Date
  preview?: string
  status: "pending" | "analyzed" | "warning"
}

export default function PrescriptionPage() {
  const { language } = useLanguageStore()
  const t = translations.prescription[language]
  const isRtl = language === 'ar'
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [prescriptions, setPrescriptions] = useState<PrescriptionFile[]>([])
  const [selectedFile, setSelectedFile] = useState<PrescriptionFile | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileUpload = (file: File) => {
    // Validate file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
    if (!validTypes.includes(file.type)) {
      alert(language === 'ar' ? 'نوع الملف غير مدعوم' : language === 'fr' ? 'Type de fichier non supporté' : 'Unsupported file type')
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert(language === 'ar' ? 'حجم الملف كبير جداً' : language === 'fr' ? 'Fichier trop volumineux' : 'File too large')
      return
    }

    // Create preview for images
    let preview: string | undefined
    if (file.type.startsWith('image/')) {
      preview = URL.createObjectURL(file)
    }

    const newPrescription: PrescriptionFile = {
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadDate: new Date(),
      preview,
      status: "pending"
    }

    setPrescriptions(prev => [newPrescription, ...prev])
    setSelectedFile(newPrescription)
  }

  const handleRemoveFile = (id: string) => {
    setPrescriptions(prev => prev.filter(p => p.id !== id))
    if (selectedFile?.id === id) {
      setSelectedFile(null)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Language Switcher */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center"
      >
        <LanguageSwitcher />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Warning Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                {t.glutenWarning}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary" />
                {t.uploadPrescription}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Drop Zone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
                  transition-all duration-200
                  ${isDragging 
                    ? 'border-primary bg-primary/5 scale-[1.02]' 
                    : 'border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/50'
                  }
                `}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <motion.div
                  animate={{ y: isDragging ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className={`w-8 h-8 text-primary ${isDragging ? 'animate-bounce' : ''}`} />
                  </div>
                  <p className="text-lg font-medium mb-2">{t.dragAndDrop}</p>
                  <p className="text-sm text-muted-foreground mb-1">{t.supportedFormats}</p>
                  <p className="text-xs text-muted-foreground">{t.maxFileSize}</p>
                </motion.div>
              </div>

              {/* Selected File Preview */}
              <AnimatePresence>
                {selectedFile && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-muted rounded-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {selectedFile.preview ? (
                          <img 
                            src={selectedFile.preview} 
                            alt="Preview" 
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                            <File className="w-8 h-8 text-primary" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-sm truncate max-w-[200px]">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(selectedFile.size)}
                          </p>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {formatDate(selectedFile.uploadDate)}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFile(selectedFile.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button className="w-full mt-4" disabled>
                      <Pill className={`w-4 h-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                      {t.analyzeButton}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prescription History */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                {t.prescriptionHistory}
              </CardTitle>
              <CardDescription>
                {prescriptions.length > 0 
                  ? `${prescriptions.length} ${language === 'ar' ? 'ملفات' : language === 'fr' ? 'fichiers' : 'files'}`
                  : t.noPrescriptions
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {prescriptions.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>{t.noPrescriptions}</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {prescriptions.map((prescription, index) => (
                    <motion.div
                      key={prescription.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedFile(prescription)}
                      className={`
                        p-3 rounded-lg border cursor-pointer transition-all
                        ${selectedFile?.id === prescription.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-transparent bg-muted/50 hover:bg-muted'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {prescription.preview ? (
                            <img 
                              src={prescription.preview} 
                              alt="Preview" 
                              className="w-10 h-10 object-cover rounded"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                              <File className="w-5 h-5 text-primary" />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-sm truncate max-w-[150px]">
                              {prescription.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(prescription.uploadDate)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge 
                            variant={
                              prescription.status === "analyzed" ? "default" :
                              prescription.status === "warning" ? "destructive" :
                              "secondary"
                            }
                            className="text-xs"
                          >
                            {prescription.status === "analyzed" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                            {prescription.status === "warning" && <AlertTriangle className="w-3 h-3 mr-1" />}
                            {prescription.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                            {prescription.status === "analyzed" 
                              ? (language === 'ar' ? 'تم التحليل' : language === 'fr' ? 'Analysé' : 'Analyzed')
                              : prescription.status === "warning"
                              ? (language === 'ar' ? 'تحذير' : language === 'fr' ? 'Attention' : 'Warning')
                              : (language === 'ar' ? 'معلق' : language === 'fr' ? 'En attente' : 'Pending')
                            }
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleRemoveFile(prescription.id)
                            }}
                          >
                            <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Doctor Notes Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-primary" />
              {t.medications}
            </CardTitle>
            <CardDescription>{t.doctorNotes}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Pill className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>
                {language === 'ar' 
                  ? 'قم بتحميل وصفة طبية لعرض الأدوية الموصوفة'
                  : language === 'fr'
                  ? 'Téléchargez une ordonnance pour voir les médicaments prescrits'
                  : 'Upload a prescription to view prescribed medications'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
