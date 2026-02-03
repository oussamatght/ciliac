"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Heart, 
  MessageCircle, 
  Smile,
  Frown,
  Meh,
  Sun,
  CloudRain,
  Users,
  Phone
} from "lucide-react"

const mentalHealthTips = [
  {
    title: "تقبل حالتك",
    description: "السيلياك حالة قابلة للإدارة. تقبل أنك بحاجة لنظام غذائي مختلف لكن هذا لا يقلل من جودة حياتك.",
    icon: Heart,
    color: "text-red-500"
  },
  {
    title: "تحدث عن مشاعرك",
    description: "لا تكتم مشاعرك. شارك تحدياتك مع العائلة والأصدقاء أو انضم لمجموعات دعم.",
    icon: MessageCircle,
    color: "text-blue-500"
  },
  {
    title: "مارس تقنيات الاسترخاء",
    description: "التأمل، التنفس العميق، واليوغا يمكن أن تساعد في تقليل التوتر والقلق المرتبط بالحالة.",
    icon: Sun,
    color: "text-amber-500"
  },
  {
    title: "احتفل بالإنجازات الصغيرة",
    description: "كل وصفة ناجحة، كل يوم بدون أعراض، كل تجربة اجتماعية ناجحة تستحق الاحتفال.",
    icon: Smile,
    color: "text-green-500"
  }
]

const emotionalStages = [
  {
    stage: "الصدمة والإنكار",
    description: "من الطبيعي الشعور بالصدمة عند التشخيص. قد تحتاج وقتاً لاستيعاب الخبر.",
    icon: Frown,
    tips: ["خذ وقتك للتعامل مع المشاعر", "اطرح الأسئلة على طبيبك", "لا تتخذ قرارات متسرعة"]
  },
  {
    stage: "الغضب والإحباط",
    description: "الشعور بالغضب من التغييرات المطلوبة أمر طبيعي ومرحلة صحية.",
    icon: CloudRain,
    tips: ["عبّر عن غضبك بطرق صحية", "مارس الرياضة لتفريغ الطاقة", "تحدث مع معالج نفسي إذا لزم الأمر"]
  },
  {
    stage: "التفاوض والتكيف",
    description: "تبدأ بالتعلم والتكيف مع نمط الحياة الجديد.",
    icon: Meh,
    tips: ["تعلم وصفات جديدة", "ابحث عن بدائل لأطعمتك المفضلة", "أنشئ روتيناً جديداً"]
  },
  {
    stage: "القبول والازدهار",
    description: "تصل لمرحلة تقبل حالتك وتكتشف أن حياتك يمكن أن تكون رائعة.",
    icon: Smile,
    tips: ["ساعد الآخرين في نفس الحالة", "شارك تجاربك الإيجابية", "استمتع بحياتك الصحية الجديدة"]
  }
]

const supportResources = [
  {
    title: "مجموعات الدعم المحلية",
    description: "انضم لمجموعات دعم مرضى السيلياك في منطقتك للتواصل مع من يفهمون تجربتك.",
    icon: Users
  },
  {
    title: "الاستشارة النفسية",
    description: "لا تتردد في طلب المساعدة المتخصصة إذا شعرت بالحاجة لذلك.",
    icon: Phone
  },
  {
    title: "المجتمعات الإلكترونية",
    description: "توجد العديد من المنتديات والمجموعات عبر الإنترنت لمشاركة التجارب والنصائح.",
    icon: MessageCircle
  }
]

export default function MentalPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">الصحة النفسية</h1>
            <p className="text-muted-foreground">العناية بصحتك النفسية مع السيلياك</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-900">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              التعايش مع مرض السيلياك لا يؤثر فقط على جسمك، بل قد يؤثر أيضاً على صحتك النفسية.
              من الطبيعي الشعور بمشاعر مختلفة مثل الإحباط، القلق، أو الحزن.
              تذكر أنك لست وحدك، والعناية بصحتك النفسية جزء مهم من رحلة التعافي.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Mental Health Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentalHealthTips.map((tip, index) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 ${tip.color}`}>
                    <tip.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Emotional Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">مراحل التكيف العاطفي</h2>
        <div className="relative">
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-6">
            {emotionalStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.15 }}
                className="relative pr-14"
              >
                <div className="absolute right-0 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <stage.icon className="w-5 h-5 text-primary" />
                </div>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{stage.stage}</CardTitle>
                    <CardDescription>{stage.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stage.tips.map((tip, i) => (
                        <Badge key={i} variant="secondary">
                          {tip}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Support Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl font-bold mb-4">موارد الدعم</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
