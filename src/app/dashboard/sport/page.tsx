"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Dumbbell, 
  Heart, 
  Timer, 
  Flame,
  Zap,
  Moon,
  Droplets,
  AlertCircle
} from "lucide-react"

const exercises = [
  {
    category: "تمارين منخفضة الشدة",
    description: "مناسبة للمبتدئين ومن يعانون من أعراض نشطة",
    items: [
      {
        name: "المشي",
        duration: "30 دقيقة",
        calories: "150 سعرة",
        benefits: "يحسن الهضم والدورة الدموية",
        icon: "🚶"
      },
      {
        name: "اليوغا اللطيفة",
        duration: "20-30 دقيقة",
        calories: "100 سعرة",
        benefits: "تقلل التوتر وتحسن المرونة",
        icon: "🧘"
      },
      {
        name: "السباحة الخفيفة",
        duration: "30 دقيقة",
        calories: "200 سعرة",
        benefits: "تمرين شامل للجسم بدون ضغط على المفاصل",
        icon: "🏊"
      },
      {
        name: "تمارين الإطالة",
        duration: "15 دقيقة",
        calories: "50 سعرة",
        benefits: "تحسن المرونة وتقلل التشنجات",
        icon: "🤸"
      }
    ]
  },
  {
    category: "تمارين متوسطة الشدة",
    description: "للأشخاص في مرحلة التعافي",
    items: [
      {
        name: "ركوب الدراجة",
        duration: "30-45 دقيقة",
        calories: "300 سعرة",
        benefits: "يقوي عضلات الساقين ويحسن القدرة على التحمل",
        icon: "🚴"
      },
      {
        name: "تمارين المقاومة الخفيفة",
        duration: "30 دقيقة",
        calories: "200 سعرة",
        benefits: "تبني العضلات وتقوي العظام",
        icon: "💪"
      },
      {
        name: "الرقص",
        duration: "30 دقيقة",
        calories: "250 سعرة",
        benefits: "ممتع ويحسن التنسيق الحركي",
        icon: "💃"
      },
      {
        name: "بيلاتيس",
        duration: "45 دقيقة",
        calories: "180 سعرة",
        benefits: "يقوي العضلات الأساسية ويحسن الوضعية",
        icon: "🏋️"
      }
    ]
  },
  {
    category: "تمارين عالية الشدة",
    description: "للأشخاص المتعافين تماماً بموافقة الطبيب",
    items: [
      {
        name: "الجري",
        duration: "30 دقيقة",
        calories: "400 سعرة",
        benefits: "يحرق السعرات ويقوي القلب",
        icon: "🏃"
      },
      {
        name: "HIIT",
        duration: "20-30 دقيقة",
        calories: "350 سعرة",
        benefits: "يحرق الدهون ويرفع الأيض",
        icon: "⚡"
      },
      {
        name: "رفع الأثقال",
        duration: "45 دقيقة",
        calories: "300 سعرة",
        benefits: "يبني كتلة عضلية ويقوي العظام",
        icon: "🏋️‍♂️"
      }
    ]
  }
]

const sportTips = [
  {
    icon: Droplets,
    title: "اشرب كمية كافية من الماء",
    description: "الترطيب مهم خاصة لمرضى السيلياك. اشرب الماء قبل وأثناء وبعد التمرين."
  },
  {
    icon: Flame,
    title: "تناول وجبة خفيفة قبل التمرين",
    description: "تناول وجبة صغيرة خالية من الغلوتين قبل التمرين بساعة أو ساعتين."
  },
  {
    icon: Moon,
    title: "احصل على راحة كافية",
    description: "النوم الجيد ضروري للتعافي وبناء العضلات. حاول النوم 7-8 ساعات يومياً."
  },
  {
    icon: Heart,
    title: "استمع لجسمك",
    description: "إذا شعرت بالتعب أو أعراض غير طبيعية، توقف عن التمرين واستشر طبيبك."
  }
]

export default function SportPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Dumbbell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">الرياضة والنشاط البدني</h1>
            <p className="text-muted-foreground">تمارين مناسبة لمرضى السيلياك</p>
          </div>
        </div>
      </motion.div>

      {/* Warning Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  ملاحظة مهمة
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  ممارسة الرياضة مفيدة لمرضى السيلياك، لكن يجب البدء ببطء وزيادة الشدة تدريجياً.
                  استشر طبيبك قبل البدء في أي برنامج رياضي جديد، خاصة إذا كنت في مراحل التشخيص المبكرة.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Exercise Types */}
      <Tabs defaultValue="low" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="low" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            منخفضة الشدة
          </TabsTrigger>
          <TabsTrigger value="medium" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            متوسطة الشدة
          </TabsTrigger>
          <TabsTrigger value="high" className="flex items-center gap-2">
            <Flame className="w-4 h-4" />
            عالية الشدة
          </TabsTrigger>
        </TabsList>

        {exercises.map((category, categoryIndex) => (
          <TabsContent 
            key={categoryIndex} 
            value={categoryIndex === 0 ? "low" : categoryIndex === 1 ? "medium" : "high"}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((exercise, index) => (
                  <motion.div
                    key={exercise.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{exercise.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{exercise.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Timer className="w-3 h-3" />
                                {exercise.duration}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Flame className="w-3 h-3" />
                                {exercise.calories}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{exercise.benefits}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Sport Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">نصائح للرياضة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sportTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
