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
import { t, getDirection, type Language } from "@/lib/translations"

export default function DashboardPage() {
  const { user } = useAuthStore()
  const { language } = useLanguageStore()
  const dir = getDirection(language)
  const currentHour = new Date().getHours()

  const greeting =
    currentHour < 12
      ? t('dashboard.goodMorning', language)
      : currentHour < 18
      ? t('dashboard.goodAfternoon', language)
      : t('dashboard.goodEvening', language)

  const quickStats = [
    { title: t('dashboard.availableRecipes', language), value: "150+", icon: UtensilsCrossed, color: "text-primary" },
    { title: t('dashboard.healthTips', language), value: "80+", icon: Heart, color: "text-red-500" },
    { title: t('dashboard.activeUsers', language), value: "5K+", icon: Users, color: "text-blue-500" },
    { title: t('dashboard.scientificArticles', language), value: "45+", icon: BookOpen, color: "text-purple-500" },
  ]

  const recentRecipes = [
    { title: t('dashboard.recipe1', language), category: t('dashboard.cat1', language), time: t('dashboard.time30', language) },
    { title: t('dashboard.recipe2', language), category: t('dashboard.cat2', language), time: t('dashboard.time25', language) },
    { title: t('dashboard.recipe3', language), category: t('dashboard.cat3', language), time: t('dashboard.time45', language) },
    { title: t('dashboard.recipe4', language), category: t('dashboard.cat4', language), time: t('dashboard.time15', language) },
  ]

  const healthTips = [
    t('dashboard.tip1', language),
    t('dashboard.tip2', language),
    t('dashboard.tip3', language),
    t('dashboard.tip4', language),
  ]

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const dateLocale = language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US'

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
            {t('dashboard.welcome', language)}, {user?.name || t('dashboard.friend', language)}!
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            {t('dashboard.welcomeMessage', language)}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-5 h-5" />
              <span>{new Date().toLocaleDateString(dateLocale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <motion.div
            key={index}
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
                  <span>{t('dashboard.increasing', language)}</span>
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
          initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                  {t('dashboard.recentRecipes', language)}
                </CardTitle>
                <CardDescription>{t('dashboard.newRecipesGF', language)}</CardDescription>
              </div>
              <Link
                href="/dashboard/recipes"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                {t('dashboard.viewAll', language)}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRecipes.map((recipe, index) => (
                  <motion.div
                    key={index}
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
          initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                {t('dashboard.dailyTips', language)}
              </CardTitle>
              <CardDescription>{t('dashboard.dailyTipsDesc', language)}</CardDescription>
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
            title: t('dashboard.whatIsChronic', language),
            description: t('dashboard.whatIsChronicDesc', language),
            icon: Wheat,
            href: "/dashboard/about"
          },
          {
            title: t('dashboard.safeFoods', language),
            description: t('dashboard.safeFoodsDesc', language),
            icon: UtensilsCrossed,
            href: "/dashboard/nutrition"
          },
          {
            title: t('dashboard.findClinic', language),
            description: t('dashboard.findClinicDesc', language),
            icon: Heart,
            href: "/dashboard/clinics"
          }
        ].map((card, index) => (
          <motion.div
            key={index}
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
