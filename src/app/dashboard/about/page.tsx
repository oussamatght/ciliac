"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Info, 
  Wheat,
  Heart,
  Target,
  Users,
  Award,
  Sparkles
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

const getFeatures = (lang: Language) => [
  {
    icon: Wheat,
    title: lang === 'ar' ? 'دليل شامل' : lang === 'fr' ? 'Guide complet' : 'Complete Guide',
    description: lang === 'ar' ? 'معلومات موثوقة ومحدثة عن الأمراض المزمنة وطرق التعامل معها' : lang === 'fr' ? 'Informations fiables et à jour sur les maladies chroniques et leur gestion' : 'Reliable and up-to-date information about chronic diseases and how to manage them'
  },
  {
    icon: Heart,
    title: lang === 'ar' ? 'دعم مستمر' : lang === 'fr' ? 'Soutien continu' : 'Ongoing Support',
    description: lang === 'ar' ? 'مجتمع داعم ونصائح يومية لمساعدتك في رحلتك' : lang === 'fr' ? 'Une communauté de soutien et des conseils quotidiens pour vous accompagner' : 'A supportive community and daily tips to help you on your journey'
  },
  {
    icon: Target,
    title: lang === 'ar' ? 'حلول عملية' : lang === 'fr' ? 'Solutions pratiques' : 'Practical Solutions',
    description: lang === 'ar' ? 'وصفات، قوائم تسوق، ونصائح قابلة للتطبيق' : lang === 'fr' ? 'Recettes, listes de courses et conseils pratiques' : 'Recipes, shopping lists, and actionable tips'
  }
]

const getTeam = (lang: Language) => [
  { name: lang === 'ar' ? 'فريق التطوير' : lang === 'fr' ? 'Équipe de développement' : 'Development Team', role: lang === 'ar' ? 'تطوير التطبيق' : lang === 'fr' ? "Développement de l'application" : 'App Development' },
  { name: lang === 'ar' ? 'أطباء متخصصون' : lang === 'fr' ? 'Médecins spécialisés' : 'Specialized Doctors', role: lang === 'ar' ? 'مراجعة المحتوى الطبي' : lang === 'fr' ? 'Révision du contenu médical' : 'Medical Content Review' },
  { name: lang === 'ar' ? 'أخصائيي تغذية' : lang === 'fr' ? 'Nutritionnistes' : 'Nutritionists', role: lang === 'ar' ? 'إعداد الوصفات والنصائح' : lang === 'fr' ? 'Préparation des recettes et conseils' : 'Recipe & Tip Preparation' },
  { name: lang === 'ar' ? 'مرضى الأمراض المزمنة' : lang === 'fr' ? 'Patients chroniques' : 'Chronic Disease Patients', role: lang === 'ar' ? 'مشاركة التجارب' : lang === 'fr' ? "Partage d'expériences" : 'Sharing Experiences' }
]

const getMilestones = (lang: Language) => [
  { year: "2024", event: lang === 'ar' ? 'إطلاق النسخة الأولى' : lang === 'fr' ? 'Lancement de la première version' : 'First version launch' },
  { year: "2025", event: lang === 'ar' ? 'إضافة خريطة المتاجر' : lang === 'fr' ? 'Ajout de la carte des magasins' : 'Store map added' },
  { year: "2025", event: lang === 'ar' ? 'إطلاق النسخة 2.0' : lang === 'fr' ? 'Lancement de la version 2.0' : 'Version 2.0 launch' },
  { year: "2026", event: lang === 'ar' ? 'توسيع التغطية الإقليمية' : lang === 'fr' ? 'Extension de la couverture régionale' : 'Regional coverage expansion' }
]

export default function AboutPage() {
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
            <Info className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('about.title', language)}</h1>
            <p className="text-muted-foreground">{t('about.subtitle', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="overflow-hidden">
          <div 
            className="p-8 text-center text-white"
            style={{
              background: "linear-gradient(135deg, oklch(0.55 0.2 145) 0%, oklch(0.45 0.15 145) 100%)"
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <Image src="/favicon.ico" alt="Logo" width={128} height={128} className="rounded-full" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">CILIAC PRO</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('about.heroTitle', language)}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {language === 'ar' ? 'رسالتنا' : language === 'fr' ? 'Notre mission' : 'Our Mission'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.heroDescription', language)}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getFeatures(language).map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* What is Celiac */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wheat className="w-5 h-5 text-primary" />
              {language === 'ar' ? 'ما هي الأمراض المزمنة؟' : language === 'fr' ? 'Que sont les maladies chroniques?' : 'What are chronic diseases?'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar' ? 'الأمراض المزمنة هي حالات صحية طويلة الأمد مثل السيلياك، السكري، الضغط، وأمراض المناعة الذاتية. تتطلب رعاية مستمرة وإدارة دقيقة للحفاظ على جودة الحياة.' : language === 'fr' ? 'Les maladies chroniques sont des conditions de santé à long terme telles que la maladie cœliaque, le diabète, l\'hypertension et les maladies auto-immunes. Elles nécessitent des soins continus et une gestion précise pour maintenir la qualité de vie.' : 'Chronic diseases are long-term health conditions such as celiac disease, diabetes, hypertension, and autoimmune diseases. They require ongoing care and precise management to maintain quality of life.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar' ? 'CILIAC PRO يساعدك في فهم حالتك، العثور على أطباء متخصصين، وتبني نمط حياة صحي مناسب.' : language === 'fr' ? 'CILIAC PRO vous aide à comprendre votre condition, à trouver des médecins spécialisés et à adopter un mode de vie sain adapté.' : 'CILIAC PRO helps you understand your condition, find specialized doctors, and adopt a suitable healthy lifestyle.'}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {(language === 'ar' ? ['أمراض مزمنة', 'قابلة للإدارة', 'دعم متكامل', 'حياة صحية'] : language === 'fr' ? ['Maladies chroniques', 'Gérables', 'Soutien complet', 'Vie saine'] : ['Chronic diseases', 'Manageable', 'Full support', 'Healthy life']).map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              {language === 'ar' ? 'فريقنا' : language === 'fr' ? 'Notre équipe' : 'Our Team'}
            </CardTitle>
            <CardDescription>{language === 'ar' ? 'خلف هذا التطبيق فريق متنوع ومتخصص' : language === 'fr' ? 'Derrière cette application, une équipe diversifiée et spécialisée' : 'Behind this app is a diverse and specialized team'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {getTeam(language).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-secondary/30"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {language === 'ar' ? 'محطات مهمة' : language === 'fr' ? 'Jalons importants' : 'Important Milestones'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-8">
              {getMilestones(language).map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                    {milestone.year}
                  </div>
                  <p className="text-sm font-medium">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Version Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-muted-foreground"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>{t('about.version', language)} 2.0.0</span>
        </div>
        <p className="text-sm">{t('footer.rights', language)}</p>
      </motion.div>
    </div>
  )
}
