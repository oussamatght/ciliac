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
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { useAuthStore } from "@/lib/store"

const quickStats = [
  { title: "وصفات متاحة", value: "150+", icon: UtensilsCrossed, color: "text-primary" },
  { title: "نصائح صحية", value: "80+", icon: Heart, color: "text-red-500" },
  { title: "مستخدم نشط", value: "5K+", icon: Users, color: "text-blue-500" },
  { title: "مقال علمي", value: "45+", icon: BookOpen, color: "text-purple-500" },
]

const recentRecipes = [
  { title: "خبز الأرز الخالي من الغلوتين", category: "مخبوزات", time: "30 دقيقة" },
  { title: "باستا الكينوا بالخضروات", category: "أطباق رئيسية", time: "25 دقيقة" },
  { title: "كيك الشوكولاتة الصحي", category: "حلويات", time: "45 دقيقة" },
  { title: "سلطة الكينوا بالأفوكادو", category: "سلطات", time: "15 دقيقة" },
]

const healthTips = [
  "تأكد دائماً من قراءة ملصقات المنتجات الغذائية",
  "احمل معك دائماً وجبات خفيفة آمنة",
  "استشر طبيبك قبل تناول أي مكملات غذائية",
  "شارك تجربتك مع مجتمع السيلياك للدعم المتبادل"
]

export default function DashboardPage() {
  const { user } = useAuthStore()
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? "صباح الخير" : currentHour < 18 ? "مساء الخير" : "مساء الخير"

  return (
    <div className="space-y-8">
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
            مرحباً، {user?.name || "صديقنا"}! 
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            مرحباً بك في دليلك الشامل لحياة صحية خالية من الغلوتين. 
            اكتشف وصفات جديدة ونصائح مفيدة كل يوم.
          </p>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-5 h-5" />
              <span>{new Date().toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
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
                  <span>متزايد</span>
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
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                  أحدث الوصفات
                </CardTitle>
                <CardDescription>وصفات جديدة خالية من الغلوتين</CardDescription>
              </div>
              <Link 
                href="/dashboard/recipes" 
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                عرض الكل
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRecipes.map((recipe, index) => (
                  <motion.div
                    key={recipe.title}
                    initial={{ opacity: 0, x: -10 }}
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                نصائح صحية يومية
              </CardTitle>
              <CardDescription>نصائح مهمة لحياة صحية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
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
        {[
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
        ].map((card, index) => (
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
