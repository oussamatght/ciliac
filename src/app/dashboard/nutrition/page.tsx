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
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

const getSafeFoods = (lang: Language) => [
  { name: lang === 'ar' ? 'الأرز بجميع أنواعه' : lang === 'fr' ? 'Riz (tous types)' : 'Rice (all types)', category: lang === 'ar' ? 'حبوب' : lang === 'fr' ? 'Céréales' : 'Grains', icon: '🍚' },
  { name: lang === 'ar' ? 'الذرة ومنتجاتها' : lang === 'fr' ? 'Maïs et dérivés' : 'Corn and products', category: lang === 'ar' ? 'حبوب' : lang === 'fr' ? 'Céréales' : 'Grains', icon: '🌽' },
  { name: lang === 'ar' ? 'الكينوا' : 'Quinoa', category: lang === 'ar' ? 'حبوب' : lang === 'fr' ? 'Céréales' : 'Grains', icon: '🌾' },
  { name: lang === 'ar' ? 'الحنطة السوداء' : lang === 'fr' ? 'Sarrasin' : 'Buckwheat', category: lang === 'ar' ? 'حبوب' : lang === 'fr' ? 'Céréales' : 'Grains', icon: '🌾' },
  { name: lang === 'ar' ? 'البطاطس' : lang === 'fr' ? 'Pommes de terre' : 'Potatoes', category: lang === 'ar' ? 'خضروات' : lang === 'fr' ? 'Légumes' : 'Vegetables', icon: '🥔' },
  { name: lang === 'ar' ? 'البطاطا الحلوة' : lang === 'fr' ? 'Patate douce' : 'Sweet potato', category: lang === 'ar' ? 'خضروات' : lang === 'fr' ? 'Légumes' : 'Vegetables', icon: '🍠' },
  { name: lang === 'ar' ? 'الفواكه الطازجة' : lang === 'fr' ? 'Fruits frais' : 'Fresh fruits', category: lang === 'ar' ? 'فواكه' : lang === 'fr' ? 'Fruits' : 'Fruits', icon: '🍎' },
  { name: lang === 'ar' ? 'الفواكه المجففة الطبيعية' : lang === 'fr' ? 'Fruits secs naturels' : 'Natural dried fruits', category: lang === 'ar' ? 'فواكه' : lang === 'fr' ? 'Fruits' : 'Fruits', icon: '🍇' },
  { name: lang === 'ar' ? 'الخضروات الطازجة' : lang === 'fr' ? 'Légumes frais' : 'Fresh vegetables', category: lang === 'ar' ? 'خضروات' : lang === 'fr' ? 'Légumes' : 'Vegetables', icon: '🥬' },
  { name: lang === 'ar' ? 'اللحوم الطازجة (غير المتبلة)' : lang === 'fr' ? 'Viandes fraîches (non assaisonnées)' : 'Fresh meats (unseasoned)', category: lang === 'ar' ? 'بروتين' : lang === 'fr' ? 'Protéines' : 'Protein', icon: '🥩' },
  { name: lang === 'ar' ? 'الدجاج الطازج' : lang === 'fr' ? 'Poulet frais' : 'Fresh chicken', category: lang === 'ar' ? 'بروتين' : lang === 'fr' ? 'Protéines' : 'Protein', icon: '🍗' },
  { name: lang === 'ar' ? 'الأسماك والمأكولات البحرية' : lang === 'fr' ? 'Poissons et fruits de mer' : 'Fish and seafood', category: lang === 'ar' ? 'بروتين' : lang === 'fr' ? 'Protéines' : 'Protein', icon: '🐟' },
  { name: lang === 'ar' ? 'البيض' : lang === 'fr' ? 'Œufs' : 'Eggs', category: lang === 'ar' ? 'بروتين' : lang === 'fr' ? 'Protéines' : 'Protein', icon: '🥚' },
  { name: lang === 'ar' ? 'الحليب الطبيعي' : lang === 'fr' ? 'Lait naturel' : 'Natural milk', category: lang === 'ar' ? 'ألبان' : lang === 'fr' ? 'Produits laitiers' : 'Dairy', icon: '🥛' },
  { name: lang === 'ar' ? 'الزبادي الطبيعي' : lang === 'fr' ? 'Yaourt nature' : 'Natural yogurt', category: lang === 'ar' ? 'ألبان' : lang === 'fr' ? 'Produits laitiers' : 'Dairy', icon: '🥛' },
  { name: lang === 'ar' ? 'الجبن الطبيعي' : lang === 'fr' ? 'Fromage naturel' : 'Natural cheese', category: lang === 'ar' ? 'ألبان' : lang === 'fr' ? 'Produits laitiers' : 'Dairy', icon: '🧀' },
  { name: lang === 'ar' ? 'المكسرات النيئة' : lang === 'fr' ? 'Noix crues' : 'Raw nuts', category: lang === 'ar' ? 'وجبات خفيفة' : lang === 'fr' ? 'Collations' : 'Snacks', icon: '🥜' },
  { name: lang === 'ar' ? 'البقوليات (عدس، فول، حمص)' : lang === 'fr' ? 'Légumineuses (lentilles, fèves, pois chiches)' : 'Legumes (lentils, beans, chickpeas)', category: lang === 'ar' ? 'بروتين نباتي' : lang === 'fr' ? 'Protéines végétales' : 'Plant protein', icon: '🫘' },
  { name: lang === 'ar' ? 'زيت الزيتون' : lang === 'fr' ? "Huile d'olive" : 'Olive oil', category: lang === 'ar' ? 'زيوت' : lang === 'fr' ? 'Huiles' : 'Oils', icon: '🫒' },
  { name: lang === 'ar' ? 'العسل الطبيعي' : lang === 'fr' ? 'Miel naturel' : 'Natural honey', category: lang === 'ar' ? 'محليات' : lang === 'fr' ? 'Édulcorants' : 'Sweeteners', icon: '🍯' },
  { name: lang === 'ar' ? 'السكر' : lang === 'fr' ? 'Sucre' : 'Sugar', category: lang === 'ar' ? 'محليات' : lang === 'fr' ? 'Édulcorants' : 'Sweeteners', icon: '🍬' },
  { name: lang === 'ar' ? 'التمر' : lang === 'fr' ? 'Dattes' : 'Dates', category: lang === 'ar' ? 'فواكه' : lang === 'fr' ? 'Fruits' : 'Fruits', icon: '🌴' },
  { name: lang === 'ar' ? 'دقيق الأرز' : lang === 'fr' ? 'Farine de riz' : 'Rice flour', category: lang === 'ar' ? 'دقيق بديل' : lang === 'fr' ? 'Farines alternatives' : 'Alternative flour', icon: '🌾' },
  { name: lang === 'ar' ? 'دقيق الذرة' : lang === 'fr' ? 'Farine de maïs' : 'Corn flour', category: lang === 'ar' ? 'دقيق بديل' : lang === 'fr' ? 'Farines alternatives' : 'Alternative flour', icon: '🌽' },
  { name: lang === 'ar' ? 'نشا البطاطس' : lang === 'fr' ? 'Fécule de pomme de terre' : 'Potato starch', category: lang === 'ar' ? 'دقيق بديل' : lang === 'fr' ? 'Farines alternatives' : 'Alternative flour', icon: '🥔' },
  { name: lang === 'ar' ? 'دقيق اللوز' : lang === 'fr' ? "Farine d'amande" : 'Almond flour', category: lang === 'ar' ? 'دقيق بديل' : lang === 'fr' ? 'Farines alternatives' : 'Alternative flour', icon: '🥜' },
  { name: lang === 'ar' ? 'الشاي والقهوة' : lang === 'fr' ? 'Thé et café' : 'Tea and coffee', category: lang === 'ar' ? 'مشروبات' : lang === 'fr' ? 'Boissons' : 'Beverages', icon: '☕' },
  { name: lang === 'ar' ? 'العصائر الطبيعية' : lang === 'fr' ? 'Jus naturels' : 'Natural juices', category: lang === 'ar' ? 'مشروبات' : lang === 'fr' ? 'Boissons' : 'Beverages', icon: '🧃' },
]

const getUnsafeFoods = (lang: Language) => [
  { name: lang === 'ar' ? 'القمح (بلي، فرينة)' : lang === 'fr' ? 'Blé (farine)' : 'Wheat (flour)', reason: lang === 'ar' ? 'المصدر الرئيسي للغلوتين' : lang === 'fr' ? 'Source principale de gluten' : 'Main source of gluten' },
  { name: lang === 'ar' ? 'الشعير' : lang === 'fr' ? 'Orge' : 'Barley', reason: lang === 'ar' ? 'يحتوي على الغلوتين' : lang === 'fr' ? 'Contient du gluten' : 'Contains gluten' },
  { name: lang === 'ar' ? 'الجاودار (Rye)' : lang === 'fr' ? 'Seigle' : 'Rye', reason: lang === 'ar' ? 'يحتوي على الغلوتين' : lang === 'fr' ? 'Contient du gluten' : 'Contains gluten' },
  { name: lang === 'ar' ? 'السميد والبرغل' : lang === 'fr' ? 'Semoule et boulgour' : 'Semolina and bulgur', reason: lang === 'ar' ? 'مشتق من القمح' : lang === 'fr' ? 'Dérivé du blé' : 'Derived from wheat' },
  { name: lang === 'ar' ? 'الكسكس التقليدي' : lang === 'fr' ? 'Couscous traditionnel' : 'Traditional couscous', reason: lang === 'ar' ? 'مصنوع من السميد' : lang === 'fr' ? 'Fait à partir de semoule' : 'Made from semolina' },
  { name: lang === 'ar' ? 'الخبز العادي' : lang === 'fr' ? 'Pain ordinaire' : 'Regular bread', reason: lang === 'ar' ? 'مصنوع من دقيق القمح' : lang === 'fr' ? 'Fait à partir de farine de blé' : 'Made from wheat flour' },
  { name: lang === 'ar' ? 'المعكرونة والمقرونة' : lang === 'fr' ? 'Pâtes' : 'Pasta', reason: lang === 'ar' ? 'مصنوعة من دقيق القمح' : lang === 'fr' ? 'Faites à partir de farine de blé' : 'Made from wheat flour' },
  { name: lang === 'ar' ? 'الكعك والبسكويت والحلويات' : lang === 'fr' ? 'Gâteaux, biscuits et pâtisseries' : 'Cakes, biscuits and pastries', reason: lang === 'ar' ? 'تحتوي على دقيق القمح' : lang === 'fr' ? 'Contiennent de la farine de blé' : 'Contain wheat flour' },
  { name: lang === 'ar' ? 'صلصة الصويا العادية' : lang === 'fr' ? 'Sauce soja ordinaire' : 'Regular soy sauce', reason: lang === 'ar' ? 'تحتوي على القمح' : lang === 'fr' ? 'Contient du blé' : 'Contains wheat' },
  { name: lang === 'ar' ? 'البيرة والمشروبات الشعيرية' : lang === 'fr' ? "Bière et boissons à base d'orge" : 'Beer and barley-based drinks', reason: lang === 'ar' ? 'مصنوعة من الشعير' : lang === 'fr' ? "Faites à partir d'orge" : 'Made from barley' },
  { name: lang === 'ar' ? 'الفريك' : lang === 'fr' ? 'Freekeh' : 'Freekeh', reason: lang === 'ar' ? 'قمح أخضر' : lang === 'fr' ? 'Blé vert' : 'Green wheat' },
  { name: lang === 'ar' ? 'البليلة/الهريس' : lang === 'fr' ? 'Belila/Harees' : 'Belila/Harees', reason: lang === 'ar' ? 'من القمح' : lang === 'fr' ? 'À base de blé' : 'From wheat' },
  { name: lang === 'ar' ? 'المثومة/الشخشوخة التقليدية' : lang === 'fr' ? 'Chakhchoukha traditionnelle' : 'Traditional Chakhchoukha', reason: lang === 'ar' ? 'تحتوي على خبز القمح' : lang === 'fr' ? 'Contient du pain de blé' : 'Contains wheat bread' },
  { name: lang === 'ar' ? 'بعض التوابل المخلوطة' : lang === 'fr' ? 'Certaines épices mélangées' : 'Some mixed spices', reason: lang === 'ar' ? 'قد تحتوي على دقيق كمادة رابطة' : lang === 'fr' ? 'Peuvent contenir de la farine comme liant' : 'May contain flour as a binder' },
  { name: lang === 'ar' ? 'المرق الجاهز (مكعبات)' : lang === 'fr' ? 'Bouillon en cubes' : 'Stock cubes', reason: lang === 'ar' ? 'قد تحتوي على غلوتين' : lang === 'fr' ? 'Peuvent contenir du gluten' : 'May contain gluten' },
  { name: lang === 'ar' ? 'الآيس كريم المخروطي' : lang === 'fr' ? 'Glace en cornet' : 'Ice cream cones', reason: lang === 'ar' ? 'المخروط من القمح' : lang === 'fr' ? 'Le cornet est en blé' : 'The cone is made from wheat' },
]

const getNutritionTips = (lang: Language) => [
  {
    title: lang === 'ar' ? 'اقرأ الملصقات بعناية' : lang === 'fr' ? 'Lisez les étiquettes attentivement' : 'Read labels carefully',
    description: lang === 'ar' ? 'تحقق دائماً من مكونات المنتجات الغذائية وابحث عن علامة \'خالي من الغلوتين\'.' : lang === 'fr' ? 'Vérifiez toujours les ingrédients et cherchez le label « sans gluten ».' : 'Always check ingredients and look for the "gluten-free" label.',
    icon: CheckCircle2,
  },
  {
    title: lang === 'ar' ? 'احذر من التلوث المتقاطع' : lang === 'fr' ? 'Attention à la contamination croisée' : 'Beware of cross-contamination',
    description: lang === 'ar' ? 'استخدم أدوات طهي منفصلة وأسطح نظيفة. لا تستخدم نفس زيت القلي.' : lang === 'fr' ? 'Utilisez des ustensiles séparés et des surfaces propres.' : 'Use separate cooking utensils and clean surfaces.',
    icon: AlertTriangle,
  },
  {
    title: lang === 'ar' ? 'تناول وجبات متوازنة' : lang === 'fr' ? 'Mangez des repas équilibrés' : 'Eat balanced meals',
    description: lang === 'ar' ? 'النظام الخالي من الغلوتين قد يفتقر لبعض الفيتامينات. احرص على تناول تشكيلة متنوعة.' : lang === 'fr' ? 'Un régime sans gluten peut manquer de vitamines. Variez votre alimentation.' : 'A gluten-free diet may lack some vitamins. Eat a diverse variety.',
    icon: Salad,
  },
  {
    title: lang === 'ar' ? 'استشر أخصائي تغذية' : lang === 'fr' ? 'Consultez un nutritionniste' : 'Consult a nutritionist',
    description: lang === 'ar' ? 'أخصائي التغذية يمكنه مساعدتك في وضع خطة غذائية متوازنة.' : lang === 'fr' ? 'Un nutritionniste peut vous aider à établir un plan alimentaire équilibré.' : 'A nutritionist can help you create a balanced diet plan.',
    icon: Leaf,
  },
  {
    title: lang === 'ar' ? 'راقب الحديد وفيتامين B12' : lang === 'fr' ? 'Surveillez le fer et la vitamine B12' : 'Monitor iron and vitamin B12',
    description: lang === 'ar' ? 'مرضى الأمراض المزمنة معرضون لنقص الحديد وفيتامين B12. قم بفحص مستوياتها بانتظام.' : lang === 'fr' ? 'Les patients chroniques risquent des carences en fer et B12. Faites des bilans réguliers.' : 'Chronic disease patients are prone to iron and B12 deficiency. Check levels regularly.',
    icon: CheckCircle2,
  },
  {
    title: lang === 'ar' ? 'الكالسيوم وفيتامين D' : lang === 'fr' ? 'Calcium et vitamine D' : 'Calcium and vitamin D',
    description: lang === 'ar' ? 'احرص على تناول كمية كافية من الكالسيوم وفيتامين D للحفاظ على صحة العظام.' : lang === 'fr' ? 'Assurez un apport suffisant en calcium et vitamine D pour la santé osseuse.' : 'Ensure adequate calcium and vitamin D intake for bone health.',
    icon: Milk,
  },
]

const getFoodCategories = (lang: Language) => [
  { name: lang === 'ar' ? 'البروتينات الآمنة' : lang === 'fr' ? 'Protéines sûres' : 'Safe Proteins', icon: Fish, foods: lang === 'ar' ? ['اللحوم الطازجة', 'الدجاج', 'الأسماك', 'البيض', 'العدس', 'الحمص', 'الفول'] : lang === 'fr' ? ['Viandes fraîches', 'Poulet', 'Poissons', 'Œufs', 'Lentilles', 'Pois chiches', 'Fèves'] : ['Fresh meats', 'Chicken', 'Fish', 'Eggs', 'Lentils', 'Chickpeas', 'Beans'] },
  { name: lang === 'ar' ? 'الحبوب الآمنة' : lang === 'fr' ? 'Céréales sûres' : 'Safe Grains', icon: Wheat, foods: lang === 'ar' ? ['الأرز', 'الذرة', 'الكينوا', 'الحنطة السوداء', 'الدخن', 'الشوفان النقي'] : lang === 'fr' ? ['Riz', 'Maïs', 'Quinoa', 'Sarrasin', 'Millet', 'Avoine pure'] : ['Rice', 'Corn', 'Quinoa', 'Buckwheat', 'Millet', 'Pure oats'] },
  { name: lang === 'ar' ? 'منتجات الألبان' : lang === 'fr' ? 'Produits laitiers' : 'Dairy Products', icon: Milk, foods: lang === 'ar' ? ['الحليب الطبيعي', 'الزبادي بدون إضافات', 'الأجبان الطبيعية', 'اللبن'] : lang === 'fr' ? ['Lait naturel', 'Yaourt nature', 'Fromages naturels', 'Babeurre'] : ['Natural milk', 'Plain yogurt', 'Natural cheeses', 'Buttermilk'] },
  { name: lang === 'ar' ? 'الفواكه والخضروات' : lang === 'fr' ? 'Fruits et légumes' : 'Fruits & Vegetables', icon: Apple, foods: lang === 'ar' ? ['جميع الفواكه الطازجة', 'جميع الخضروات', 'الفواكه المجففة', 'الفواكه المجمدة'] : lang === 'fr' ? ['Tous les fruits frais', 'Tous les légumes', 'Fruits secs', 'Fruits surgelés'] : ['All fresh fruits', 'All vegetables', 'Dried fruits', 'Frozen fruits'] },
]

export default function NutritionPage() {
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
            <Salad className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('nutrition.title', language)}</h1>
            <p className="text-muted-foreground">{t('nutrition.description', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="safe" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="safe" className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {t('nutrition.safeFoods', language)}
          </TabsTrigger>
          <TabsTrigger value="unsafe" className="flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            {t('nutrition.unsafeFoods', language)}
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            {t('nutrition.tips', language)}
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
                  {t('nutrition.safeFoodsTitle', language)}
                </CardTitle>
                <CardDescription>
                  {t('nutrition.safeFoodsDesc', language)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {getSafeFoods(language).map((food, index) => (
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
              {getFoodCategories(language).map((category, index) => (
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
                  {t('nutrition.unsafeFoodsTitle', language)}
                </CardTitle>
                <CardDescription>
                  {t('nutrition.unsafeFoodsDesc', language)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getUnsafeFoods(language).map((food, index) => (
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
                        {t('nutrition.warningTitle', language)}
                      </h3>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        {t('nutrition.warningText', language)}
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
            {getNutritionTips(language).map((tip, index) => (
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
