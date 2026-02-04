"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { SplashScreen } from "@/components/splash/SplashScreen"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Sparkles, Heart, Shield, BookOpen } from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { translations } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import Image from "next/image"

// Generate random values outside component to avoid re-renders
const generateBackgroundElements = () => {
  return [...Array(20)].map((_, i) => ({
    id: i,
    width: Math.random() * 150 + 50,
    height: Math.random() * 150 + 50,
    opacity: Math.random() * 0.15,
    left: Math.random() * 100,
    top: Math.random() * 100,
    xOffset: Math.random() * 100 - 50,
    yOffset: Math.random() * 100 - 50,
    duration: Math.random() * 8 + 5,
  }))
}

const backgroundElements = generateBackgroundElements()

export default function Home() {
  const router = useRouter()
  const { language } = useLanguageStore()
  const t = translations.dashboard[language]
  const isRtl = language === 'ar'
  const [showSplash, setShowSplash] = useState(true)

  // Page translations
  const pageText = {
    ar: {
      tagline: "دليلك الشامل لحياة صحية",
      headline1: "حياة",
      headline2: "خالية",
      headline3: "من الغلوتين",
      description: "اكتشف عالماً من الوصفات الشهية، النصائح الغذائية، والموارد المفيدة لمرضى حساسية القمح (السيلياك)",
      startNow: "ابدأ الآن",
      login: "تسجيل الدخول",
      features: [
        { icon: BookOpen, title: "وصفات متنوعة", description: "مئات الوصفات الخالية من الغلوتين" },
        { icon: Heart, title: "نصائح صحية", description: "إرشادات غذائية من متخصصين" },
        { icon: Shield, title: "حياة آمنة", description: "دليل للتعامل مع السيلياك يومياً" }
      ],
      copyright: "© 2026 CILIAC - جميع الحقوق محفوظة"
    },
    fr: {
      tagline: "Votre guide complet pour une vie saine",
      headline1: "Une vie",
      headline2: "sans",
      headline3: "gluten",
      description: "Découvrez un monde de recettes délicieuses, de conseils nutritionnels et de ressources utiles pour les patients cœliaques",
      startNow: "Commencer",
      login: "Se connecter",
      features: [
        { icon: BookOpen, title: "Recettes variées", description: "Des centaines de recettes sans gluten" },
        { icon: Heart, title: "Conseils santé", description: "Conseils nutritionnels de spécialistes" },
        { icon: Shield, title: "Vie sûre", description: "Guide pour gérer la maladie cœliaque au quotidien" }
      ],
      copyright: "© 2026 CILIAC - Tous droits réservés"
    },
    en: {
      tagline: "Your comprehensive guide to a healthy life",
      headline1: "A",
      headline2: "gluten-free",
      headline3: "life",
      description: "Discover a world of delicious recipes, nutritional advice, and helpful resources for celiac disease patients",
      startNow: "Get Started",
      login: "Login",
      features: [
        { icon: BookOpen, title: "Diverse Recipes", description: "Hundreds of gluten-free recipes" },
        { icon: Heart, title: "Health Tips", description: "Nutritional guidance from specialists" },
        { icon: Shield, title: "Safe Living", description: "Daily guide for managing celiac disease" }
      ],
      copyright: "© 2026 CILIAC - All rights reserved"
    }
  }

  const content = pageText[language]

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative overflow-hidden"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[oklch(0.25_0.08_145)] via-[oklch(0.35_0.1_145)] to-[oklch(0.25_0.08_145)]" />

        <div className="absolute inset-0 overflow-hidden">
          {backgroundElements.map((el) => (
            <motion.div
              key={el.id}
              className="absolute rounded-full"
              style={{
                width: el.width,
                height: el.height,
                background: `radial-gradient(circle, oklch(0.65 0.15 80 / ${el.opacity}) 0%, transparent 70%)`,
                left: `${el.left}%`,
                top: `${el.top}%`,
              }}
              animate={{
                x: [0, el.xOffset],
                y: [0, el.yOffset],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <header className="p-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.55_0.2_145)] to-[oklch(0.45_0.18_145)]">
                  <Image src="/Logo.png" alt="CILIAC" width={48} height={48} className="rounded-full" />
                </div>
                <span className="text-2xl font-bold text-white">CILIAC</span>
              </div>
              <LanguageSwitcher variant="compact"  />
            
            
            </motion.div>
          </header>

          {/* Main content */}
          <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[oklch(0.65_0.15_80_/_0.2)]"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-white/90 text-sm">{content.tagline}</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {content.headline1} <span className="text-[oklch(0.65_0.15_80)]">{content.headline2}</span> {content.headline3}
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {content.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push("/login")}
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.65 0.15 80) 0%, oklch(0.55 0.18 80) 100%)"
                  }}
                >
                  {content.startNow}
                  {isRtl ? <ArrowLeft className="mr-2 w-5 h-5" /> : <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
                
                <Button
                  onClick={() => router.push("/login")}
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-semibold border-white/3 hover:bg-white/10"
                >
                  {content.login}
                </Button>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full"
            >
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="w-10 h-10 mb-4" style={{ color: "oklch(0.65 0.15 80)" }} />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </main>

          {/* Footer */}
          <footer className="p-6 text-center text-white/50">
            <p>{content.copyright}</p>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
