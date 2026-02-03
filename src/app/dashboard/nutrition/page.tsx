"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Salad, 
  Apple, 
  Wheat, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Leaf,
  Milk,
  Fish
} from "lucide-react"

const safefoods = [
  { name: "الأرز بجميع أنواعه", category: "حبوب", icon: "🍚" },
  { name: "الذرة ومنتجاتها", category: "حبوب", icon: "🌽" },
  { name: "الكينوا", category: "حبوب", icon: "🌾" },
  { name: "الحنطة السوداء", category: "حبوب", icon: "🌾" },
  { name: "البطاطس", category: "خضروات", icon: "🥔" },
  { name: "البطاطا الحلوة", category: "خضروات", icon: "🍠" },
  { name: "الفواكه الطازجة", category: "فواكه", icon: "🍎" },
  { name: "الفواكه المجففة الطبيعية", category: "فواكه", icon: "🍇" },
  { name: "الخضروات الطازجة", category: "خضروات", icon: "🥬" },
  { name: "اللحوم الطازجة (غير المتبلة)", category: "بروتين", icon: "🥩" },
  { name: "الدجاج الطازج", category: "بروتين", icon: "🍗" },
  { name: "الأسماك والمأكولات البحرية", category: "بروتين", icon: "🐟" },
  { name: "البيض", category: "بروتين", icon: "🥚" },
  { name: "الحليب الطبيعي", category: "ألبان", icon: "🥛" },
  { name: "الزبادي الطبيعي", category: "ألبان", icon: "🥛" },
  { name: "الجبن الطبيعي", category: "ألبان", icon: "🧀" },
  { name: "المكسرات النيئة", category: "وجبات خفيفة", icon: "🥜" },
  { name: "البقوليات (عدس، فول، حمص)", category: "بروتين نباتي", icon: "🫘" },
  { name: "زيت الزيتون", category: "زيوت", icon: "🫒" },
  { name: "العسل الطبيعي", category: "محليات", icon: "🍯" },
  { name: "السكر", category: "محليات", icon: "🍬" },
  { name: "التمر", category: "فواكه", icon: "🌴" },
  { name: "دقيق الأرز", category: "دقيق بديل", icon: "🌾" },
  { name: "دقيق الذرة", category: "دقيق بديل", icon: "🌽" },
  { name: "نشا البطاطس", category: "دقيق بديل", icon: "🥔" },
  { name: "دقيق اللوز", category: "دقيق بديل", icon: "🥜" },
  { name: "الشاي والقهوة", category: "مشروبات", icon: "☕" },
  { name: "العصائر الطبيعية", category: "مشروبات", icon: "🧃" },
]

const unsafeFoods = [
  { name: "القمح (بلي، فرينة)", reason: "المصدر الرئيسي للغلوتين" },
  { name: "الشعير", reason: "يحتوي على الغلوتين" },
  { name: "الجاودار (Rye)", reason: "يحتوي على الغلوتين" },
  { name: "السميد والبرغل", reason: "مشتق من القمح" },
  { name: "الكسكس التقليدي", reason: "مصنوع من السميد" },
  { name: "الخبز العادي", reason: "مصنوع من دقيق القمح" },
  { name: "المعكرونة والمقرونة", reason: "مصنوعة من دقيق القمح" },
  { name: "الكعك والبسكويت والحلويات", reason: "تحتوي على دقيق القمح" },
  { name: "صلصة الصويا العادية", reason: "تحتوي على القمح" },
  { name: "البيرة والمشروبات الشعيرية", reason: "مصنوعة من الشعير" },
  { name: "الفريك", reason: "قمح أخضر" },
  { name: "البليلة/الهريس", reason: "من القمح" },
  { name: "المثومة/الشخشوخة التقليدية", reason: "تحتوي على خبز القمح" },
  { name: "بعض التوابل المخلوطة", reason: "قد تحتوي على دقيق كمادة رابطة" },
  { name: "المرق الجاهز (مكعبات)", reason: "قد تحتوي على غلوتين" },
  { name: "الآيس كريم المخروطي", reason: "المخروط من القمح" },
]

const nutritionTips = [
  {
    title: "اقرأ الملصقات بعناية",
    description: "تحقق دائماً من مكونات المنتجات الغذائية وابحث عن علامة 'خالي من الغلوتين'. انتبه لكلمات: قمح، فرينة، سميد، نشا معدل، مالت.",
    icon: CheckCircle2,
  },
  {
    title: "احذر من التلوث المتقاطع",
    description: "استخدم أدوات طهي منفصلة وأسطح نظيفة. لا تستخدم نفس زيت القلي أو ماء السلق مع أطعمة تحتوي غلوتين.",
    icon: AlertTriangle,
  },
  {
    title: "تناول وجبات متوازنة",
    description: "النظام الخالي من الغلوتين قد يفتقر لبعض الفيتامينات. احرص على تناول تشكيلة متنوعة وفكر في المكملات الغذائية بعد استشارة الطبيب.",
    icon: Salad,
  },
  {
    title: "استشر أخصائي تغذية",
    description: "أخصائي التغذية يمكنه مساعدتك في وضع خطة غذائية متوازنة وضمان حصولك على جميع العناصر الغذائية الضرورية.",
    icon: Leaf,
  },
  {
    title: "راقب الحديد وفيتامين B12",
    description: "مرضى السيلياك معرضون لنقص الحديد وفيتامين B12 بسبب سوء الامتصاص. قم بفحص مستوياتها بانتظام.",
    icon: CheckCircle2,
  },
  {
    title: "الكالسيوم وفيتامين D",
    description: "احرص على تناول كمية كافية من الكالسيوم وفيتامين D للحفاظ على صحة العظام، خاصة في السنوات الأولى بعد التشخيص.",
    icon: Milk,
  },
]

const foodCategories = [
  { name: "البروتينات الآمنة", icon: Fish, foods: ["اللحوم الطازجة", "الدجاج", "الأسماك", "البيض", "العدس", "الحمص", "الفول"] },
  { name: "الحبوب الآمنة", icon: Wheat, foods: ["الأرز", "الذرة", "الكينوا", "الحنطة السوداء", "الدخن", "الشوفان النقي"] },
  { name: "منتجات الألبان", icon: Milk, foods: ["الحليب الطبيعي", "الزبادي بدون إضافات", "الأجبان الطبيعية", "اللبن"] },
  { name: "الفواكه والخضروات", icon: Apple, foods: ["جميع الفواكه الطازجة", "جميع الخضروات", "الفواكه المجففة", "الفواكه المجمدة"] },
]

export default function NutritionPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Salad className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">دليل التغذية</h1>
            <p className="text-muted-foreground">كل ما تحتاج معرفته عن الأطعمة الآمنة والممنوعة</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="safe" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="safe" className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            أطعمة آمنة
          </TabsTrigger>
          <TabsTrigger value="unsafe" className="flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            أطعمة ممنوعة
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            نصائح
          </TabsTrigger>
        </TabsList>

        {/* Safe Foods */}
        <TabsContent value="safe">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  الأطعمة الآمنة (خالية من الغلوتين)
                </CardTitle>
                <CardDescription>
                  هذه الأطعمة آمنة بشكل طبيعي لمرضى السيلياك عند تناولها بحالتها الطبيعية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {safefoods.map((food, index) => (
                    <motion.div
                      key={food.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900"
                    >
                      <span className="text-2xl">{food.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{food.name}</p>
                        <p className="text-xs text-muted-foreground">{food.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Food Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {foodCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-primary" />
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.foods.map((food) => (
                          <Badge key={food} variant="secondary">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Unsafe Foods */}
        <TabsContent value="unsafe">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <XCircle className="w-5 h-5" />
                  الأطعمة الممنوعة (تحتوي على الغلوتين)
                </CardTitle>
                <CardDescription>
                  يجب تجنب هذه الأطعمة تماماً لأنها تحتوي على الغلوتين
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {unsafeFoods.map((food, index) => (
                    <motion.div
                      key={food.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                          <XCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="font-medium">{food.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{food.reason}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Warning Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Card className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                        تحذير مهم
                      </h3>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        الغلوتين قد يكون موجوداً في منتجات غير متوقعة مثل الصلصات، التوابل المخلوطة، 
                        بعض الأدوية والمكملات الغذائية. تأكد دائماً من قراءة الملصقات بعناية.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Tips */}
        <TabsContent value="tips">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {nutritionTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <tip.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
