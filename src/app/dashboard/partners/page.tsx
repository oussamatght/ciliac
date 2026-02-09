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
import Image from 'next/image'
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

const getPartners = (lang: Language) => [
  {
    name: "Reginat",
    type: lang === 'ar' ? 'شركة' : lang === 'fr' ? 'Entreprise' : 'Company',
    description: lang === 'ar' ? 'شركة رائدة في مجال المنتجات الغذائية الخالية من الغلوتين، تقدم مجموعة واسعة من الحلول الصحية.' : lang === 'fr' ? 'Entreprise leader dans les produits alimentaires sans gluten, offrant une large gamme de solutions santé.' : 'Leading company in gluten-free food products, offering a wide range of healthy solutions.',
    location: "Béni Messous, Algérie",
    website: "https://www.reginat-dietetique.com/",
    services: lang === 'ar' ? ['منتجات غذائية', 'دقيق خالي من الغلوتين', 'حلويات', 'خبز'] : lang === 'fr' ? ['Produits alimentaires', 'Farine sans gluten', 'Pâtisseries', 'Pain'] : ['Food products', 'Gluten-free flour', 'Pastries', 'Bread'],
    img: null,
  },
  {
    name: "Restaurant Chez Petit",
    type: lang === 'ar' ? 'مطعم' : 'Restaurant',
    description: lang === 'ar' ? 'مطعم متخصص في تقديم الأطعمة الخالية من الغلوتين بجودة عالية.' : lang === 'fr' ? 'Restaurant spécialisé dans les plats sans gluten de haute qualité.' : 'Restaurant specializing in high-quality gluten-free food.',
    location: lang === 'ar' ? 'الجزائر العاصمة' : 'Alger',
    website: "https://www.tiktok.com/@chezpetitglutenfree?is_from_webapp=1&sender_device=pc",
    services: lang === 'ar' ? ['خبز طازج', 'حلويات', 'كعك المناسبات', 'توصيل'] : lang === 'fr' ? ['Pain frais', 'Pâtisseries', 'Gâteaux', 'Livraison'] : ['Fresh bread', 'Pastries', 'Event cakes', 'Delivery'],
    img: null,
  },
  {
    name: "Clinique El Bordj",
    type: lang === 'ar' ? 'عيادة متخصصة' : lang === 'fr' ? 'Clinique spécialisée' : 'Specialized Clinic',
    description: lang === 'ar' ? 'عيادة متخصصة في أمراض الجهاز الهضمي، ترافق المرضى في رحلتهم نحو حياة صحية ومتوازنة.' : lang === 'fr' ? 'Clinique spécialisée en gastro-entérologie, accompagnant les patients vers une vie saine et équilibrée.' : 'Clinic specialized in gastroenterology, supporting patients toward a healthy and balanced life.',
    location: lang === 'ar' ? 'شارع العقيد عميروش، الجزائر' : 'Bd Colonel Amirouche, Alger',
    website: "https://www.facebook.com/clinique.elbordj/",
    services: lang === 'ar' ? ['منتجات متنوعة', 'استشارات', 'توصيل', 'طلبات خاصة'] : lang === 'fr' ? ['Produits variés', 'Consultations', 'Livraison', 'Commandes spéciales'] : ['Various products', 'Consultations', 'Delivery', 'Special orders'],
    img: "/partner3.jpg",
  },
  {
    name: "Benna Sans Gluten",
    type: lang === 'ar' ? 'عجائن المدلل' : lang === 'fr' ? 'Pâtisserie spécialisée' : 'Specialty Bakery',
    description: lang === 'ar' ? 'متجر متخصص في بيع المنتجات الخالية من الغلوتين، يقدم مجموعة متنوعة من الحلويات والمعجنات التقليدية الجزائرية.' : lang === 'fr' ? 'Boutique spécialisée dans les produits sans gluten, proposant des pâtisseries et gâteaux traditionnels algériens.' : 'Specialty store for gluten-free products, offering traditional Algerian pastries and sweets.',
    location: lang === 'ar' ? 'الجزائر' : 'Algérie',
    website: "https://www.facebook.com/Tibeche/",
    services: lang === 'ar' ? ['خبز تقليدي', 'معجنات', 'حلويات جزائرية'] : lang === 'fr' ? ['Pain traditionnel', 'Pâtisseries', 'Gâteaux algériens'] : ['Traditional bread', 'Pastries', 'Algerian sweets'],
    img: "/Remove-bg.ai_1751795712690.webp",
  },
]

const getBenefits = (lang: Language) => [
  lang === 'ar' ? 'الوصول لمنتجات خالية من الغلوتين بأسعار مناسبة' : lang === 'fr' ? 'Accès à des produits sans gluten à des prix abordables' : 'Access to gluten-free products at affordable prices',
  lang === 'ar' ? 'خريطة تفاعلية لجميع نقاط البيع في الجزائر' : lang === 'fr' ? 'Carte interactive de tous les points de vente en Algérie' : 'Interactive map of all sales points in Algeria',
  lang === 'ar' ? 'تقييمات ومراجعات من المرضى' : lang === 'fr' ? 'Évaluations et avis des patients' : 'Ratings and reviews from patients',
  lang === 'ar' ? 'إشعارات عند توفر منتجات جديدة' : lang === 'fr' ? 'Notifications pour les nouveaux produits' : 'Notifications for new products',
]

export default function PartnersPage() {
  const { language } = useLanguageStore()
  const dir = getDirection(language)

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
            <h1 className="text-3xl font-bold">{t('partners.title', language)}</h1>
            <p className="text-muted-foreground">{t('partners.description', language)}</p>
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
            <CardTitle>{t('partners.benefits', language)}</CardTitle>
            <CardDescription>{t('partners.benefitsDesc', language)}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {getBenefits(language).map((benefit, index) => (
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
        {getPartners(language).map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    {partner.img ? (
                      <Image src={partner.img} alt={partner.name} width={150} height={150} className="rounded-full object-cover w-full h-full" />
                    ) : (
                      <Building2 className="w-10 h-10 text-primary" />
                    )}
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
                  <p className="text-sm font-medium mb-2">{t('partners.services', language)}</p>
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
                    {t('partners.visitPage', language)}
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
            <h2 className="text-2xl font-bold mb-2">{t('partners.becomePartner', language)}</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {t('partners.becomePartnerDesc', language)}
            </p>
            <Button size="lg" asChild>
              <a href="https://wa.me/213783321319" target="_blank" rel="noopener noreferrer">
                {t('partners.contactWhatsapp', language)}
                <ExternalLink className="w-4 h-4 mr-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
