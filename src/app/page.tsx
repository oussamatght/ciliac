"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { SplashScreen } from "@/components/splash/SplashScreen"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Heart, Shield, BookOpen } from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection } from "@/lib/translations"
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
  const [showSplash, setShowSplash] = useState(true)
  const { language } = useLanguageStore()
  const direction = getDirection(language)

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
        dir={direction}
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
          <header className="p-6 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.55_0.2_145)] to-[oklch(0.45_0.18_145)]">
                <Image src="/favicon.ico" alt="Logo" width={128} height={128} className="rounded-full" />
              </div>
              <span className="text-2xl font-bold text-white">{t('appName', language)}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <LanguageSwitcher />
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
                <span className="text-white/90 text-sm">{t('appTagline', language)}</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t('splash.welcome', language)} <span className="text-[oklch(0.65_0.15_80)]">{t('appName', language)}</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {t('splash.tagline', language)}
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
                  {t('splash.getStarted', language)}
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => router.push("/login")}
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-semibold border-white/30 "
                >
                  {t('auth.login', language)}
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
              {[
                {
                  icon: BookOpen,
                  title: language === 'ar' ? 'وصفات متنوعة' : language === 'fr' ? 'Recettes variées' : 'Varied Recipes',
                  description: language === 'ar' ? 'مئات الوصفات الخالية من الغلوتين' : language === 'fr' ? 'Des centaines de recettes sans gluten' : 'Hundreds of gluten-free recipes'
                },
                {
                  icon: Heart,
                  title: language === 'ar' ? 'نصائح صحية' : language === 'fr' ? 'Conseils santé' : 'Health Tips',
                  description: language === 'ar' ? 'إرشادات غذائية من متخصصين' : language === 'fr' ? 'Conseils nutritionnels de spécialistes' : 'Nutritional guidance from specialists'
                },
                {
                  icon: Shield,
                  title: language === 'ar' ? 'حياة آمنة' : language === 'fr' ? 'Vie sûre' : 'Safe Life',
                  description: language === 'ar' ? 'دليل للتعامل مع السيلياك يومياً' : language === 'fr' ? 'Guide pour gérer la maladie cœliaque au quotidien' : 'Guide to managing celiac disease daily'
                }
              ].map((feature, index) => (
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
            <p>© 2026 CILIAC - جميع الحقوق محفوظة</p>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
