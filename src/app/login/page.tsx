"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Wheat, Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuthStore } from "@/lib/store"

export default function LoginPage() {
  const router = useRouter()
  const { login, register } = useAuthStore()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      let success = false
      if (isLogin) {
        success = await login(formData.email, formData.password)
      } else {
        success = await register(formData.name, formData.email, formData.password)
      }
      
      if (success) {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4" dir="rtl">
      {/* Animated background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, oklch(0.25 0.08 145) 0%, oklch(0.35 0.1 145) 50%, oklch(0.25 0.08 145) 100%)"
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `radial-gradient(circle, oklch(0.65 0.15 80 / ${Math.random() * 0.2}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-xl">
          <CardHeader className="text-center pb-2">
            {/* Logo */}
            <motion.div
              className="mx-auto mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: "linear-gradient(135deg, oklch(0.55 0.2 145) 0%, oklch(0.45 0.18 145) 100%)"
                }}
              >
                <Wheat className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <CardTitle className="text-3xl font-bold text-white">
              {isLogin ? "مرحباً بعودتك" : "إنشاء حساب جديد"}
            </CardTitle>
            <CardDescription className="text-white/70">
              {isLogin 
                ? "سجل دخولك للوصول إلى دليلك الشامل" 
                : "انضم إلينا لحياة صحية خالية من الغلوتين"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/90">الاسم الكامل</Label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="أدخل اسمك"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">البريد الإلكتروني</Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/90">كلمة المرور</Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pr-10 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent"
                    dir="ltr"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, oklch(0.65 0.15 80) 0%, oklch(0.55 0.18 80) 100%)"
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    {isLogin ? "تسجيل الدخول" : "إنشاء الحساب"}
                    <ArrowRight className="mr-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-white/70 hover:text-white transition-colors"
              >
                {isLogin ? (
                  <>ليس لديك حساب؟ <span className="text-accent font-semibold">سجل الآن</span></>
                ) : (
                  <>لديك حساب بالفعل؟ <span className="text-accent font-semibold">سجل دخولك</span></>
                )}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
