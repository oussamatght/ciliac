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

const features = [
  {
    icon: Wheat,
    title: "دليل شامل",
    description: "معلومات موثوقة ومحدثة عن مرض السيلياك وطرق التعامل معه"
  },
  {
    icon: Heart,
    title: "دعم مستمر",
    description: "مجتمع داعم ونصائح يومية لمساعدتك في رحلتك"
  },
  {
    icon: Target,
    title: "حلول عملية",
    description: "وصفات، قوائم تسوق، ونصائح قابلة للتطبيق"
  }
]

const team = [
  { name: "فريق التطوير", role: "تطوير التطبيق" },
  { name: "أطباء متخصصون", role: "مراجعة المحتوى الطبي" },
  { name: "أخصائيي تغذية", role: "إعداد الوصفات والنصائح" },
  { name: "مرضى السيلياك", role: "مشاركة التجارب" }
]

const milestones = [
  { year: "2024", event: "إطلاق النسخة الأولى" },
  { year: "2025", event: "إضافة خريطة المتاجر" },
  { year: "2025", event: "إطلاق النسخة 2.0" },
  { year: "2026", event: "توسيع التغطية الإقليمية" }
]

export default function AboutPage() {
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
            <h1 className="text-3xl font-bold">عن التطبيق</h1>
            <p className="text-muted-foreground">تعرف على CILIAC ورسالتنا</p>
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
            <h2 className="text-3xl font-bold mb-4">CILIAC</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              دليلك الشامل لحياة صحية وسعيدة خالية من الغلوتين
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
              رسالتنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              نسعى لتوفير منصة شاملة تدعم مرضى السيلياك في رحلتهم نحو حياة صحية.
              نؤمن بأن التشخيص بمرض السيلياك ليس نهاية المطاف، بل بداية لأسلوب حياة جديد
              يمكن أن يكون صحياً وممتعاً. من خلال توفير المعلومات الموثوقة، الوصفات الشهية،
              والدعم المجتمعي، نهدف لجعل التعايش مع السيلياك أسهل وأكثر إيجابية.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
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
              ما هو مرض السيلياك؟
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              مرض السيلياك (Celiac Disease) هو اضطراب مناعي ذاتي يصيب الجهاز الهضمي.
              يحدث عندما يتناول الشخص المصاب الغلوتين، وهو بروتين موجود في القمح والشعير والجاودار.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              عند تناول الغلوتين، يهاجم جهاز المناعة بطانة الأمعاء الدقيقة، مما يسبب
              تلفاً في الزغابات المعوية المسؤولة عن امتصاص المغذيات. هذا يمكن أن يؤدي
              إلى سوء امتصاص العناصر الغذائية ومشاكل صحية متعددة.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["اضطراب مناعي", "وراثي", "قابل للإدارة", "بدون علاج دوائي"].map((tag) => (
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
              فريقنا
            </CardTitle>
            <CardDescription>خلف هذا التطبيق فريق متنوع ومتخصص</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((member, index) => (
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
              محطات مهمة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-8">
              {milestones.map((milestone, index) => (
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
          <span>النسخة 2.0.0</span>
        </div>
        <p className="text-sm">© 2026 CILIAC - جميع الحقوق محفوظة</p>
      </motion.div>
    </div>
  )
}
