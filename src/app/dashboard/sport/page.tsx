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
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

const getExercises = (lang: Language) => [
  {
    category: lang === 'ar' ? 'تمارين منخفضة الشدة' : lang === 'fr' ? 'Exercices de faible intensité' : 'Low Intensity Exercises',
    description: lang === 'ar' ? 'مناسبة للمبتدئين ومن يعانون من أعراض نشطة' : lang === 'fr' ? 'Adaptés aux débutants et aux personnes avec des symptômes actifs' : 'Suitable for beginners and those with active symptoms',
    items: [
      { name: lang === 'ar' ? 'المشي' : lang === 'fr' ? 'Marche' : 'Walking', duration: lang === 'ar' ? '30 دقيقة' : '30 min', calories: lang === 'ar' ? '150 سعرة' : '150 cal', benefits: lang === 'ar' ? 'يحسن الهضم والدورة الدموية' : lang === 'fr' ? 'Améliore la digestion et la circulation' : 'Improves digestion and circulation', icon: '🚶' },
      { name: lang === 'ar' ? 'اليوغا اللطيفة' : lang === 'fr' ? 'Yoga doux' : 'Gentle Yoga', duration: '20-30 min', calories: lang === 'ar' ? '100 سعرة' : '100 cal', benefits: lang === 'ar' ? 'تقلل التوتر وتحسن المرونة' : lang === 'fr' ? 'Réduit le stress et améliore la souplesse' : 'Reduces stress and improves flexibility', icon: '🧘' },
      { name: lang === 'ar' ? 'السباحة الخفيفة' : lang === 'fr' ? 'Natation légère' : 'Light Swimming', duration: '30 min', calories: lang === 'ar' ? '200 سعرة' : '200 cal', benefits: lang === 'ar' ? 'تمرين شامل للجسم بدون ضغط على المفاصل' : lang === 'fr' ? 'Exercice complet sans impact sur les articulations' : 'Full body workout without joint stress', icon: '🏊' },
      { name: lang === 'ar' ? 'تمارين الإطالة' : lang === 'fr' ? 'Étirements' : 'Stretching', duration: '15 min', calories: lang === 'ar' ? '50 سعرة' : '50 cal', benefits: lang === 'ar' ? 'تحسن المرونة وتقلل التشنجات' : lang === 'fr' ? 'Améliore la souplesse et réduit les crampes' : 'Improves flexibility and reduces cramps', icon: '🤸' }
    ]
  },
  {
    category: lang === 'ar' ? 'تمارين متوسطة الشدة' : lang === 'fr' ? 'Exercices de moyenne intensité' : 'Medium Intensity Exercises',
    description: lang === 'ar' ? 'للأشخاص في مرحلة التعافي' : lang === 'fr' ? 'Pour les personnes en phase de récupération' : 'For those in recovery phase',
    items: [
      { name: lang === 'ar' ? 'ركوب الدراجة' : lang === 'fr' ? 'Vélo' : 'Cycling', duration: '30-45 min', calories: lang === 'ar' ? '300 سعرة' : '300 cal', benefits: lang === 'ar' ? 'يقوي عضلات الساقين ويحسن القدرة على التحمل' : lang === 'fr' ? 'Renforce les jambes et améliore l\'endurance' : 'Strengthens legs and improves endurance', icon: '🚴' },
      { name: lang === 'ar' ? 'تمارين المقاومة الخفيفة' : lang === 'fr' ? 'Résistance légère' : 'Light Resistance', duration: '30 min', calories: lang === 'ar' ? '200 سعرة' : '200 cal', benefits: lang === 'ar' ? 'تبني العضلات وتقوي العظام' : lang === 'fr' ? 'Développe les muscles et renforce les os' : 'Builds muscle and strengthens bones', icon: '💪' },
      { name: lang === 'ar' ? 'الرقص' : lang === 'fr' ? 'Danse' : 'Dancing', duration: '30 min', calories: lang === 'ar' ? '250 سعرة' : '250 cal', benefits: lang === 'ar' ? 'ممتع ويحسن التنسيق الحركي' : lang === 'fr' ? 'Amusant et améliore la coordination' : 'Fun and improves coordination', icon: '💃' },
      { name: lang === 'ar' ? 'بيلاتيس' : 'Pilates', duration: '45 min', calories: lang === 'ar' ? '180 سعرة' : '180 cal', benefits: lang === 'ar' ? 'يقوي العضلات الأساسية ويحسن الوضعية' : lang === 'fr' ? 'Renforce le tronc et améliore la posture' : 'Strengthens core and improves posture', icon: '🏋️' }
    ]
  },
  {
    category: lang === 'ar' ? 'تمارين عالية الشدة' : lang === 'fr' ? 'Exercices de haute intensité' : 'High Intensity Exercises',
    description: lang === 'ar' ? 'للأشخاص المتعافين تماماً بموافقة الطبيب' : lang === 'fr' ? 'Pour les personnes complètement rétablies avec accord médical' : 'For fully recovered individuals with medical approval',
    items: [
      { name: lang === 'ar' ? 'الجري' : lang === 'fr' ? 'Course' : 'Running', duration: '30 min', calories: lang === 'ar' ? '400 سعرة' : '400 cal', benefits: lang === 'ar' ? 'يحرق السعرات ويقوي القلب' : lang === 'fr' ? 'Brûle des calories et renforce le cœur' : 'Burns calories and strengthens the heart', icon: '🏃' },
      { name: 'HIIT', duration: '20-30 min', calories: lang === 'ar' ? '350 سعرة' : '350 cal', benefits: lang === 'ar' ? 'يحرق الدهون ويرفع الأيض' : lang === 'fr' ? 'Brûle les graisses et booste le métabolisme' : 'Burns fat and boosts metabolism', icon: '⚡' },
      { name: lang === 'ar' ? 'رفع الأثقال' : lang === 'fr' ? 'Musculation' : 'Weight Lifting', duration: '45 min', calories: lang === 'ar' ? '300 سعرة' : '300 cal', benefits: lang === 'ar' ? 'يبني كتلة عضلية ويقوي العظام' : lang === 'fr' ? 'Développe la masse musculaire et renforce les os' : 'Builds muscle mass and strengthens bones', icon: '🏋️‍♂️' }
    ]
  }
]

const getSportTips = (lang: Language) => [
  {
    icon: Droplets,
    title: lang === 'ar' ? 'اشرب كمية كافية من الماء' : lang === 'fr' ? 'Buvez suffisamment d\'eau' : 'Drink enough water',
    description: lang === 'ar' ? 'الترطيب مهم خاصة لمرضى الأمراض المزمنة. اشرب الماء قبل وأثناء وبعد التمرين.' : lang === 'fr' ? 'L\'hydratation est essentielle. Buvez avant, pendant et après l\'exercice.' : 'Hydration is essential. Drink before, during and after exercise.'
  },
  {
    icon: Flame,
    title: lang === 'ar' ? 'تناول وجبة خفيفة قبل التمرين' : lang === 'fr' ? 'Mangez léger avant l\'exercice' : 'Eat a light snack before exercise',
    description: lang === 'ar' ? 'تناول وجبة صغيرة صحية قبل التمرين بساعة أو ساعتين.' : lang === 'fr' ? 'Mangez un petit repas sain 1-2 heures avant l\'exercice.' : 'Eat a small healthy meal 1-2 hours before exercise.'
  },
  {
    icon: Moon,
    title: lang === 'ar' ? 'احصل على راحة كافية' : lang === 'fr' ? 'Reposez-vous suffisamment' : 'Get enough rest',
    description: lang === 'ar' ? 'النوم الجيد ضروري للتعافي وبناء العضلات. حاول النوم 7-8 ساعات يومياً.' : lang === 'fr' ? 'Un bon sommeil est essentiel pour la récupération. Dormez 7-8 heures par nuit.' : 'Good sleep is essential for recovery. Aim for 7-8 hours per night.'
  },
  {
    icon: Heart,
    title: lang === 'ar' ? 'استمع لجسمك' : lang === 'fr' ? 'Écoutez votre corps' : 'Listen to your body',
    description: lang === 'ar' ? 'إذا شعرت بالتعب أو أعراض غير طبيعية، توقف عن التمرين واستشر طبيبك.' : lang === 'fr' ? 'En cas de fatigue ou de symptômes anormaux, arrêtez et consultez votre médecin.' : 'If you feel tired or abnormal symptoms, stop and consult your doctor.'
  }
]

export default function SportPage() {
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
            <Dumbbell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('sport.title', language)}</h1>
            <p className="text-muted-foreground">{t('sport.description', language)}</p>
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
                  {t('sport.importantNote', language)}
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  {t('sport.importantNoteText', language)}
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
            {t('sport.lowIntensity', language)}
          </TabsTrigger>
          <TabsTrigger value="medium" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            {t('sport.mediumIntensity', language)}
          </TabsTrigger>
          <TabsTrigger value="high" className="flex items-center gap-2">
            <Flame className="w-4 h-4" />
            {t('sport.highIntensity', language)}
          </TabsTrigger>
        </TabsList>

        {getExercises(language).map((category, categoryIndex) => (
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
        <h2 className="text-2xl font-bold mb-4">{t('sport.sportTips', language)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getSportTips(language).map((tip, index) => (
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
