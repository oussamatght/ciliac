"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wheat,
  TrendingUp,
  BookOpen,
  Users,
  Heart,
  UtensilsCrossed,
  Calendar,
  ArrowLeft,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { useAuthStore, useLanguageStore } from "@/lib/store"
import { translations } from "@/lib/translations"

// Multi-language data
const pageData = {
  ar: {
    quickStats: [
      { title: "وصفات متاحة", value: "150+", icon: UtensilsCrossed, color: "text-primary" },
      { title: "نصائح صحية", value: "80+", icon: Heart, color: "text-red-500" },
      { title: "مستخدم نشط", value: "5K+", icon: Users, color: "text-blue-500" },
      { title: "مقال علمي", value: "45+", icon: BookOpen, color: "text-purple-500" },
    ],
    recentRecipes: [
      { title: "خبز الأرز الخالي من الغلوتين", category: "مخبوزات", time: "30 دقيقة" },
      { title: "باستا الكينوا بالخضروات", category: "أطباق رئيسية", time: "25 دقيقة" },
      { title: "كيك الشوكولاتة الصحي", category: "حلويات", time: "45 دقيقة" },
      { title: "سلطة الكينوا بالأفوكادو", category: "سلطات", time: "15 دقيقة" },
    ],
    healthTips: [
      "تأكد دائماً من قراءة ملصقات المنتجات الغذائية",
      "احمل معك دائماً وجبات خفيفة آمنة",
      "استشر طبيبك قبل تناول أي مكملات غذائية",
      "شارك تجربتك مع مجتمع السيلياك للدعم المتبادل"
    ],
    infoCards: [
      {
        title: "ما هو السيلياك؟",
        description: "مرض السيلياك هو اضطراب مناعي ذاتي يحدث عند تناول الغلوتين",
        icon: Wheat,
        href: "/dashboard/about"
      },
      {
        title: "الأغذية الآمنة",
        description: "تعرف على قائمة الأطعمة الخالية من الغلوتين الآمنة لك",
        icon: UtensilsCrossed,
        href: "/dashboard/nutrition"
      },
      {
        title: "ابحث عن عيادة",
        description: "اعثر على أقرب عيادة متخصصة في أمراض الجهاز الهضمي",
        icon: Heart,
        href: "/dashboard/clinics"
      }
    ],
    latestRecipes: "أحدث الوصفات",
    newGlutenFreeRecipes: "وصفات جديدة خالية من الغلوتين",
    viewAll: "عرض الكل",
    dailyHealthTips: "نصائح صحية يومية",
    importantTipsForHealthyLife: "نصائح مهمة لحياة صحية",
    increasing: "متزايد"
  },
  fr: {
    quickStats: [
      { title: "Recettes disponibles", value: "150+", icon: UtensilsCrossed, color: "text-primary" },
      { title: "Conseils santé", value: "80+", icon: Heart, color: "text-red-500" },
      { title: "Utilisateurs actifs", value: "5K+", icon: Users, color: "text-blue-500" },
      { title: "Articles scientifiques", value: "45+", icon: BookOpen, color: "text-purple-500" },
    ],
    recentRecipes: [
      { title: "Pain de riz sans gluten", category: "Boulangerie", time: "30 min" },
      { title: "Pâtes au quinoa aux légumes", category: "Plats principaux", time: "25 min" },
      { title: "Gâteau au chocolat sain", category: "Desserts", time: "45 min" },
      { title: "Salade de quinoa à l'avocat", category: "Salades", time: "15 min" },
    ],
    healthTips: [
      "Lisez toujours les étiquettes des produits alimentaires",
      "Emportez toujours des collations sûres avec vous",
      "Consultez votre médecin avant de prendre des suppléments",
      "Partagez votre expérience avec la communauté cœliaque"
    ],
    infoCards: [
      {
        title: "Qu'est-ce que la maladie cœliaque?",
        description: "La maladie cœliaque est un trouble auto-immun qui survient lors de la consommation de gluten",
        icon: Wheat,
        href: "/dashboard/about"
      },
      {
        title: "Aliments sûrs",
        description: "Découvrez la liste des aliments sans gluten qui sont sûrs pour vous",
        icon: UtensilsCrossed,
        href: "/dashboard/nutrition"
      },
      {
        title: "Trouver une clinique",
        description: "Trouvez la clinique spécialisée en gastro-entérologie la plus proche",
        icon: Heart,
        href: "/dashboard/clinics"
      }
    ],
    latestRecipes: "Dernières Recettes",
    newGlutenFreeRecipes: "Nouvelles recettes sans gluten",
    viewAll: "Voir tout",
    dailyHealthTips: "Conseils Santé Quotidiens",
    importantTipsForHealthyLife: "Conseils importants pour une vie saine",
    increasing: "En hausse"
  },
  en: {
    quickStats: [
      { title: "Available Recipes", value: "150+", icon: UtensilsCrossed, color: "text-primary" },
      { title: "Health Tips", value: "80+", icon: Heart, color: "text-red-500" },
      { title: "Active Users", value: "5K+", icon: Users, color: "text-blue-500" },
      { title: "Scientific Articles", value: "45+", icon: BookOpen, color: "text-purple-500" },
    ],
    recentRecipes: [
      { title: "Gluten-Free Rice Bread", category: "Bakery", time: "30 min" },
      { title: "Quinoa Pasta with Vegetables", category: "Main Dishes", time: "25 min" },
      { title: "Healthy Chocolate Cake", category: "Desserts", time: "45 min" },
      { title: "Quinoa Avocado Salad", category: "Salads", time: "15 min" },
    ],
    healthTips: [
      "Always read food product labels carefully",
      "Always carry safe snacks with you",
      "Consult your doctor before taking any supplements",
      "Share your experience with the celiac community for mutual support"
    ],
    infoCards: [
      {
        title: "What is Celiac Disease?",
        description: "Celiac disease is an autoimmune disorder that occurs when consuming gluten",
        icon: Wheat,
        href: "/dashboard/about"
      },
      {
        title: "Safe Foods",
        description: "Learn about the list of gluten-free foods that are safe for you",
        icon: UtensilsCrossed,
        href: "/dashboard/nutrition"
      },
      {
        title: "Find a Clinic",
        description: "Find the nearest clinic specialized in digestive diseases",
        icon: Heart,
        href: "/dashboard/clinics"
      }
    ],
    latestRecipes: "Latest Recipes",
    newGlutenFreeRecipes: "New gluten-free recipes",
    viewAll: "View All",
    dailyHealthTips: "Daily Health Tips",
    importantTipsForHealthyLife: "Important tips for a healthy life",
    increasing: "Increasing"
  }
}

export default function DashboardPage() {
  const { user } = useAuthStore()
  const { language } = useLanguageStore()
  const t = translations.common[language]
  const dashT = translations.dashboard[language]
  const data = pageData[language]
  const isRtl = language === 'ar'
  
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? t.goodMorning : currentHour < 18 ? t.goodAfternoon : t.goodEvening

  // Get locale for date
  const locale = language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US'

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl p-8"
        style={{
          background: "linear-gradient(135deg, oklch(0.55 0.2 145) 0%, oklch(0.45 0.15 145) 100%)"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 rounded-full bg-white/10" />
          <div className="absolute -bottom-1/4 -right-1/4 w-64 h-64 rounded-full bg-white/5" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Wheat className="w-8 h-8 text-white/80" />
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              {greeting}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">
            {t.welcome}, {user?.name || (language === 'ar' ? "صديقنا" : language === 'fr' ? "notre ami" : "friend")}! 
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            {dashT.welcomeMessage}
            {' '}{dashT.discoverMessage}
          </p>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-5 h-5" />
              <span>{new Date().toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.quickStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-secondary ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>{data.increasing}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Recipes */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                  {data.latestRecipes}
                </CardTitle>
                <CardDescription>{data.newGlutenFreeRecipes}</CardDescription>
              </div>
              <Link 
                href="/dashboard/recipes" 
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                {data.viewAll}
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.recentRecipes.map((recipe, index) => (
                  <motion.div
                    key={recipe.title}
                    initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <UtensilsCrossed className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{recipe.title}</p>
                        <p className="text-sm text-muted-foreground">{recipe.category}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{recipe.time}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Health Tips */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                {data.dailyHealthTips}
              </CardTitle>
              <CardDescription>{data.importantTipsForHealthyLife}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.healthTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRtl ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.infoCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <Link href={card.href}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
