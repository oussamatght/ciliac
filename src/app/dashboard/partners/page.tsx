"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Handshake, 
  Building2,
  ExternalLink,
  MapPin,
  Globe
} from "lucide-react"
import { img } from "framer-motion/client"
import Image from 'next/image';

const partners = [
  {
    name: "Reginat",
    type: "شركة ",
    description: 
    "شركة رائدة في مجال المنتجات الغذائية الخالية من الغلوتين، تقدم مجموعة واسعة من الحلول الصحية لمرضى السيلياك.",
    location: "Béni Messous, الجزائر",
    website: "https://www.reginat-dietetique.com/",
    services: ["منتجات غذائية", "دقيق خالي من الغلوتين", "حلويات", "خبز"],
  },
  {
    name: "restaurant chez petit",
    type: "مطعم ",
    description: "مطعم متخصص في تقديم الأطعمة الخالية من الغلوتين بجودة عالية.",
    location: "الجزائر العاصمة",
    website: "https://www.tiktok.com/@chezpetitglutenfree?is_from_webapp=1&sender_device=pc",
    services: ["خبز طازج", "حلويات", "كعك المناسبات", "توصيل"],
  },
  {
    name: "Clinique El Bordj",
    type: "متجر متخصص",
    description: "عيادة متخصصة في أمراض الجهاز الهضمي، ترافق مرضى السيلياك في رحلتهم نحو حياة صحية ومتوازنة.",
    location: "شارع العقيد عميروش، الجزائر",
    website: "https://www.facebook.com/clinique.elbordj/",
    services: ["منتجات متنوعة", "استشارات", "توصيل", "طلبات خاصة"],
    img:"/partner3.jpg"
  },

  {
    name: "Benna sans gluten",
    type: "عجائن المدلل",
    description: " متجر متخصص في بيع المنتجات الخالية من الغلوتين، يقدم مجموعة متنوعة من الحلويات والمعجنات التقليدية الجزائرية المعدة خصيصاً لمرضى السيلياك.",
    location: " الجزائر",
    website: "https://www.facebook.com/Tibeche/posts/%D9%85%D9%86%D8%AA%D9%88%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AF%D9%84%D9%84-%D9%87%D8%B6%D8%A7%D8%A8%D9%81%D8%B1%D9%8A%D9%86%D8%A9-%D8%B9%D8%AC%D8%A7%D8%A6%D9%86-%D8%AF%D9%82%D9%8A%D9%82-%D9%85%D8%AA%D9%88%D9%81%D8%B1-%D8%A7%D9%84%D8%A7%D9%86-%D9%81%D9%8A-%D9%85%D8%AD%D9%84-ma-vie-sans-gluten/906058820843768/,",
    services: ["خبز تقليدي", "معجنات", "حلويات جزائرية"],
    img:"/Remove-bg.ai_1751795712690.webp"
  
  },

]

const benefits = [
  "الوصول لمنتجات خالية من الغلوتين بأسعار مناسبة",
  "خريطة تفاعلية لجميع نقاط البيع في الجزائر",
  "تقييمات ومراجعات من مرضى السيلياك",
  "إشعارات عند توفر منتجات جديدة"
]

export default function PartnersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Handshake className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">شركاؤنا</h1>
            <p className="text-muted-foreground">المؤسسات والشركات الداعمة لمجتمع السيلياك</p>
          </div>
        </div>
      </motion.div>

      {/* Benefits Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle>مزايا الشراكة</CardTitle>
            <CardDescription>استفد من شبكة شركائنا</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Image src={partner.img} alt={partner.name} width={150} height={150} className="rounded-full" />
                  </div>
                  <Badge variant="secondary">{partner.type}</Badge>
                </div>
                <CardTitle className="text-lg mt-3">{partner.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {partner.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{partner.description}</p>
                
                <div>
                  <p className="text-sm font-medium mb-2">الخدمات:</p>
                  <div className="flex flex-wrap gap-1">
                    {partner.services.map((service, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="sm" asChild>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 ml-2" />
                    زيارة الصفحة
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Become Partner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="text-center">
          <CardContent className="p-8">
            <Handshake className="w-16 h-16 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">هل ترغب في الانضمام كشريك؟</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              إذا كنت تملك متجراً أو مخبزة توفر منتجات خالية من الغلوتين، تواصل معنا لإضافتك إلى قائمة شركائنا
            </p>
            <Button size="lg" asChild>
              <a href="https://wa.me/213783321319" target="_blank" rel="noopener noreferrer">
                تواصل عبر واتساب
                <ExternalLink className="w-4 h-4 mr-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
