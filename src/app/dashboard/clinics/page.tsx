"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Clock,
  Star,
  ExternalLink
} from "lucide-react"

const clinics = [
  {
    name: "مستشفى الملك فيصل التخصصي",
    location: "الرياض، المملكة العربية السعودية",
    specialty: "أمراض الجهاز الهضمي",
    phone: "+966 11 464 7272",
    rating: 4.9,
    workingHours: "24 ساعة",
    services: ["تشخيص السيلياك", "متابعة دورية", "استشارات تغذية"]
  },
  {
    name: "مركز جونز هوبكنز أرامكو الصحي",
    location: "الظهران، المملكة العربية السعودية",
    specialty: "طب الأسرة والباطنية",
    phone: "+966 13 877 9999",
    rating: 4.8,
    workingHours: "8 ص - 10 م",
    services: ["فحوصات شاملة", "استشارات متخصصة", "برامج تغذية"]
  },
  {
    name: "مستشفى الحبيب الطبي",
    location: "جدة، المملكة العربية السعودية",
    specialty: "أمراض الجهاز الهضمي للأطفال والكبار",
    phone: "+966 12 6631000",
    rating: 4.7,
    workingHours: "24 ساعة",
    services: ["تنظير الجهاز الهضمي", "خزعات", "متابعة مرضى السيلياك"]
  },
  {
    name: "مستشفى كليفلاند كلينك أبوظبي",
    location: "أبوظبي، الإمارات العربية المتحدة",
    specialty: "أمراض الجهاز الهضمي",
    phone: "+971 2 501 9000",
    rating: 4.9,
    workingHours: "24 ساعة",
    services: ["تشخيص متقدم", "علاج شامل", "استشارات دولية"]
  },
  {
    name: "مستشفى الأميري",
    location: "الكويت",
    specialty: "الباطنية وأمراض الجهاز الهضمي",
    phone: "+965 2245 0005",
    rating: 4.6,
    workingHours: "24 ساعة",
    services: ["فحص السيلياك", "علاج ومتابعة", "تثقيف صحي"]
  },
  {
    name: "مستشفى حمد الطبي",
    location: "الدوحة، قطر",
    specialty: "أمراض الجهاز الهضمي",
    phone: "+974 4439 5777",
    rating: 4.8,
    workingHours: "24 ساعة",
    services: ["تشخيص شامل", "رعاية متكاملة", "برامج تأهيل"]
  }
]

const whatToExpect = [
  {
    title: "الفحص السريري",
    description: "سيقوم الطبيب بفحصك وسؤالك عن الأعراض والتاريخ العائلي"
  },
  {
    title: "فحوصات الدم",
    description: "فحص الأجسام المضادة للكشف عن السيلياك (tTG-IgA)"
  },
  {
    title: "التنظير والخزعة",
    description: "أخذ عينة من الأمعاء الدقيقة للتأكد من التشخيص"
  },
  {
    title: "خطة العلاج",
    description: "وضع خطة غذائية وبرنامج متابعة مع فريق طبي متخصص"
  }
]

export default function ClinicsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">العيادات والمستشفيات</h1>
            <p className="text-muted-foreground">مراكز طبية متخصصة في علاج السيلياك</p>
          </div>
        </div>
      </motion.div>

      {/* What to Expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>ماذا تتوقع عند زيارة الطبيب؟</CardTitle>
            <CardDescription>خطوات التشخيص والعلاج</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatToExpect.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Clinics List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinics.map((clinic, index) => (
          <motion.div
            key={clinic.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{clinic.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {clinic.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{clinic.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary">{clinic.specialty}</Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">{clinic.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{clinic.workingHours}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">الخدمات المتوفرة:</p>
                  <div className="flex flex-wrap gap-2">
                    {clinic.services.map((service, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 ml-2" />
                  زيارة الموقع
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
