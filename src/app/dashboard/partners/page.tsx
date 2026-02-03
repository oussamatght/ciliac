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

const partners = [
  {
    name: "Maison Goussem Gluten Free",
    type: "متجر متخصص",
    description: "متجر متخصص في المنتجات الخالية من الغلوتين في الجزائر العاصمة، يوفر تشكيلة واسعة من المنتجات المستوردة والمحلية.",
    location: "Béni Messous, الجزائر",
    website: "https://www.facebook.com/Maison-Goussem-Gluten-Free-102886828683687/",
    services: ["منتجات غذائية", "دقيق خالي من الغلوتين", "حلويات", "خبز"]
  },
  {
    name: "Délices sans Gluten El-Bahdja",
    type: "مخبزة متخصصة",
    description: "مخبزة متخصصة في إنتاج الخبز والحلويات الخالية من الغلوتين بجودة عالية.",
    location: "الجزائر العاصمة",
    website: "https://www.facebook.com/Elbahdjasansgluten/",
    services: ["خبز طازج", "حلويات", "كعك المناسبات", "توصيل"]
  },
  {
    name: "Vie Sans Gluten",
    type: "متجر متخصص",
    description: "متجر رائد في مجال المنتجات الخالية من الغلوتين، يوفر استشارات غذائية للمرضى.",
    location: "شارع العقيد عميروش، الجزائر",
    website: "https://www.facebook.com/viesansgluten1/",
    services: ["منتجات متنوعة", "استشارات", "توصيل", "طلبات خاصة"]
  },
  {
    name: "Gluten Free Diet",
    type: "متجر متخصص",
    description: "متجر متخصص في المنتجات الصحية والخالية من الغلوتين في باب الحسن.",
    location: "Baba Hassen, الجزائر",
    website: "https://www.facebook.com/glutenfreediet0",
    services: ["منتجات خالية من الغلوتين", "أغذية صحية", "مكملات"]
  },
  {
    name: "Benna sans gluten",
    type: "مخبزة متخصصة",
    description: "مخبزة عائلية متخصصة في إنتاج المخبوزات الخالية من الغلوتين بوصفات تقليدية.",
    location: "دراريا، الجزائر",
    website: "https://www.facebook.com/Benna-sans-gluten-103005454792908/",
    services: ["خبز تقليدي", "معجنات", "حلويات جزائرية"]
  },
  {
    name: "S&R sans gluten",
    type: "متجر متخصص",
    description: "متجر يوفر مجموعة واسعة من المنتجات الخالية من الغلوتين مع خدمة توصيل.",
    location: "بوزريعة، الجزائر",
    website: "https://www.facebook.com/SandRsansgluten/",
    services: ["منتجات متنوعة", "توصيل", "طلبات بالجملة"]
  },
  {
    name: "Dar elkarim",
    type: "مخبزة متخصصة",
    description: "دار الكريم متخصصة في إنتاج الخبز والمعجنات الخالية من الغلوتين.",
    location: "أولاد فايت، الجزائر",
    website: "https://www.facebook.com/darelkarim1/",
    services: ["خبز يومي", "معجنات", "حلويات المناسبات"]
  },
  {
    name: "Corail Rouge Market",
    type: "سوبرماركت",
    description: "سوبرماركت كبير يوفر قسماً خاصاً بالمنتجات الخالية من الغلوتين في تلمسان.",
    location: "مغنية، تلمسان",
    website: "https://corailmarket.com/",
    services: ["قسم خاص", "منتجات متنوعة", "أسعار تنافسية"]
  },
  {
    name: "Magasin Habibou sans gluten",
    type: "متجر متخصص",
    description: "متجر حبيبو متخصص في المنتجات الخالية من الغلوتين مع توفير منتجات نادرة.",
    location: "برج البحري، الجزائر",
    website: "https://www.facebook.com/Habibou-Gluten-free-827559634088059/",
    services: ["منتجات نادرة", "استيراد خاص", "توصيل"]
  }
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
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
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
