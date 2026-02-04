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

// Multi-language safe foods data
const safefoodsData = {
  ar: [
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
  ],
  fr: [
    { name: "Riz (tous types)", category: "Céréales", icon: "🍚" },
    { name: "Maïs et produits", category: "Céréales", icon: "🌽" },
    { name: "Quinoa", category: "Céréales", icon: "🌾" },
    { name: "Sarrasin", category: "Céréales", icon: "🌾" },
    { name: "Pommes de terre", category: "Légumes", icon: "🥔" },
    { name: "Patates douces", category: "Légumes", icon: "🍠" },
    { name: "Fruits frais", category: "Fruits", icon: "🍎" },
    { name: "Fruits secs naturels", category: "Fruits", icon: "🍇" },
    { name: "Légumes frais", category: "Légumes", icon: "🥬" },
    { name: "Viandes fraîches (non assaisonnées)", category: "Protéines", icon: "🥩" },
    { name: "Poulet frais", category: "Protéines", icon: "🍗" },
    { name: "Poissons et fruits de mer", category: "Protéines", icon: "🐟" },
    { name: "Œufs", category: "Protéines", icon: "🥚" },
    { name: "Lait naturel", category: "Produits laitiers", icon: "🥛" },
    { name: "Yaourt nature", category: "Produits laitiers", icon: "🥛" },
    { name: "Fromage naturel", category: "Produits laitiers", icon: "🧀" },
    { name: "Noix crues", category: "Snacks", icon: "🥜" },
    { name: "Légumineuses (lentilles, fèves, pois chiches)", category: "Protéines végétales", icon: "🫘" },
    { name: "Huile d'olive", category: "Huiles", icon: "🫒" },
    { name: "Miel naturel", category: "Sucres", icon: "🍯" },
    { name: "Sucre", category: "Sucres", icon: "🍬" },
    { name: "Dattes", category: "Fruits", icon: "🌴" },
    { name: "Farine de riz", category: "Farines alternatives", icon: "🌾" },
    { name: "Farine de maïs", category: "Farines alternatives", icon: "🌽" },
    { name: "Fécule de pomme de terre", category: "Farines alternatives", icon: "🥔" },
    { name: "Farine d'amande", category: "Farines alternatives", icon: "🥜" },
    { name: "Thé et café", category: "Boissons", icon: "☕" },
    { name: "Jus naturels", category: "Boissons", icon: "🧃" },
  ],
  en: [
    { name: "Rice (all types)", category: "Grains", icon: "🍚" },
    { name: "Corn and products", category: "Grains", icon: "🌽" },
    { name: "Quinoa", category: "Grains", icon: "🌾" },
    { name: "Buckwheat", category: "Grains", icon: "🌾" },
    { name: "Potatoes", category: "Vegetables", icon: "🥔" },
    { name: "Sweet potatoes", category: "Vegetables", icon: "🍠" },
    { name: "Fresh fruits", category: "Fruits", icon: "🍎" },
    { name: "Natural dried fruits", category: "Fruits", icon: "🍇" },
    { name: "Fresh vegetables", category: "Vegetables", icon: "🥬" },
    { name: "Fresh meats (unseasoned)", category: "Protein", icon: "🥩" },
    { name: "Fresh chicken", category: "Protein", icon: "🍗" },
    { name: "Fish and seafood", category: "Protein", icon: "🐟" },
    { name: "Eggs", category: "Protein", icon: "🥚" },
    { name: "Natural milk", category: "Dairy", icon: "🥛" },
    { name: "Natural yogurt", category: "Dairy", icon: "🥛" },
    { name: "Natural cheese", category: "Dairy", icon: "🧀" },
    { name: "Raw nuts", category: "Snacks", icon: "🥜" },
    { name: "Legumes (lentils, beans, chickpeas)", category: "Plant protein", icon: "🫘" },
    { name: "Olive oil", category: "Oils", icon: "🫒" },
    { name: "Natural honey", category: "Sweeteners", icon: "🍯" },
    { name: "Sugar", category: "Sweeteners", icon: "🍬" },
    { name: "Dates", category: "Fruits", icon: "🌴" },
    { name: "Rice flour", category: "Alternative flour", icon: "🌾" },
    { name: "Corn flour", category: "Alternative flour", icon: "🌽" },
    { name: "Potato starch", category: "Alternative flour", icon: "🥔" },
    { name: "Almond flour", category: "Alternative flour", icon: "🥜" },
    { name: "Tea and coffee", category: "Beverages", icon: "☕" },
    { name: "Natural juices", category: "Beverages", icon: "🧃" },
  ]
}

// Multi-language unsafe foods data
const unsafeFoodsData = {
  ar: [
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
  ],
  fr: [
    { name: "Blé (farine)", reason: "Source principale de gluten" },
    { name: "Orge", reason: "Contient du gluten" },
    { name: "Seigle", reason: "Contient du gluten" },
    { name: "Semoule et boulgour", reason: "Dérivé du blé" },
    { name: "Couscous traditionnel", reason: "Fait de semoule" },
    { name: "Pain ordinaire", reason: "Fait de farine de blé" },
    { name: "Pâtes", reason: "Faites de farine de blé" },
    { name: "Gâteaux et biscuits", reason: "Contiennent de la farine de blé" },
    { name: "Sauce soja ordinaire", reason: "Contient du blé" },
    { name: "Bière et boissons maltées", reason: "Faites d'orge" },
    { name: "Freekeh", reason: "Blé vert" },
    { name: "Blé concassé", reason: "De blé" },
    { name: "Plats traditionnels au pain", reason: "Contiennent du pain de blé" },
    { name: "Certaines épices mélangées", reason: "Peuvent contenir de la farine comme liant" },
    { name: "Bouillon en cubes", reason: "Peut contenir du gluten" },
    { name: "Cônes de crème glacée", reason: "Le cône est fait de blé" },
  ],
  en: [
    { name: "Wheat (flour)", reason: "Main source of gluten" },
    { name: "Barley", reason: "Contains gluten" },
    { name: "Rye", reason: "Contains gluten" },
    { name: "Semolina and bulgur", reason: "Wheat derivative" },
    { name: "Traditional couscous", reason: "Made from semolina" },
    { name: "Regular bread", reason: "Made from wheat flour" },
    { name: "Pasta", reason: "Made from wheat flour" },
    { name: "Cakes and biscuits", reason: "Contain wheat flour" },
    { name: "Regular soy sauce", reason: "Contains wheat" },
    { name: "Beer and malt beverages", reason: "Made from barley" },
    { name: "Freekeh", reason: "Green wheat" },
    { name: "Crushed wheat", reason: "From wheat" },
    { name: "Traditional wheat bread dishes", reason: "Contain wheat bread" },
    { name: "Some mixed spices", reason: "May contain flour as binder" },
    { name: "Bouillon cubes", reason: "May contain gluten" },
    { name: "Ice cream cones", reason: "Cone is made from wheat" },
  ]
}

// Multi-language nutrition tips
const nutritionTipsData = {
  ar: [
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
  ],
  fr: [
    {
      title: "Lisez les étiquettes attentivement",
      description: "Vérifiez toujours les ingrédients des produits alimentaires et recherchez le label 'sans gluten'. Faites attention aux mots: blé, farine, semoule, amidon modifié, malt.",
      icon: CheckCircle2,
    },
    {
      title: "Attention à la contamination croisée",
      description: "Utilisez des ustensiles de cuisine séparés et des surfaces propres. N'utilisez pas la même huile de friture ou l'eau de cuisson avec des aliments contenant du gluten.",
      icon: AlertTriangle,
    },
    {
      title: "Mangez des repas équilibrés",
      description: "Le régime sans gluten peut manquer de certaines vitamines. Assurez-vous de manger une variété d'aliments et envisagez des suppléments après consultation médicale.",
      icon: Salad,
    },
    {
      title: "Consultez un nutritionniste",
      description: "Un nutritionniste peut vous aider à établir un plan alimentaire équilibré et à garantir que vous obtenez tous les nutriments nécessaires.",
      icon: Leaf,
    },
    {
      title: "Surveillez le fer et la vitamine B12",
      description: "Les patients cœliaques sont sujets à des carences en fer et en vitamine B12 en raison d'une mauvaise absorption. Faites vérifier régulièrement vos niveaux.",
      icon: CheckCircle2,
    },
    {
      title: "Calcium et vitamine D",
      description: "Assurez-vous d'obtenir suffisamment de calcium et de vitamine D pour maintenir la santé des os, surtout dans les premières années après le diagnostic.",
      icon: Milk,
    },
  ],
  en: [
    {
      title: "Read labels carefully",
      description: "Always check food product ingredients and look for the 'gluten-free' label. Pay attention to words: wheat, flour, semolina, modified starch, malt.",
      icon: CheckCircle2,
    },
    {
      title: "Beware of cross-contamination",
      description: "Use separate cooking utensils and clean surfaces. Don't use the same frying oil or cooking water with foods containing gluten.",
      icon: AlertTriangle,
    },
    {
      title: "Eat balanced meals",
      description: "A gluten-free diet may lack some vitamins. Make sure to eat a variety of foods and consider supplements after consulting a doctor.",
      icon: Salad,
    },
    {
      title: "Consult a nutritionist",
      description: "A nutritionist can help you create a balanced meal plan and ensure you get all the necessary nutrients.",
      icon: Leaf,
    },
    {
      title: "Monitor iron and vitamin B12",
      description: "Celiac patients are prone to iron and vitamin B12 deficiency due to poor absorption. Have your levels checked regularly.",
      icon: CheckCircle2,
    },
    {
      title: "Calcium and vitamin D",
      description: "Make sure to get enough calcium and vitamin D to maintain bone health, especially in the first years after diagnosis.",
      icon: Milk,
    },
  ]
}

// Multi-language food categories
const foodCategoriesData = {
  ar: [
    { name: "البروتينات الآمنة", icon: Fish, foods: ["اللحوم الطازجة", "الدجاج", "الأسماك", "البيض", "العدس", "الحمص", "الفول"] },
    { name: "الحبوب الآمنة", icon: Wheat, foods: ["الأرز", "الذرة", "الكينوا", "الحنطة السوداء", "الدخن", "الشوفان النقي"] },
    { name: "منتجات الألبان", icon: Milk, foods: ["الحليب الطبيعي", "الزبادي بدون إضافات", "الأجبان الطبيعية", "اللبن"] },
    { name: "الفواكه والخضروات", icon: Apple, foods: ["جميع الفواكه الطازجة", "جميع الخضروات", "الفواكه المجففة", "الفواكه المجمدة"] },
  ],
  fr: [
    { name: "Protéines Sûres", icon: Fish, foods: ["Viandes fraîches", "Poulet", "Poisson", "Œufs", "Lentilles", "Pois chiches", "Fèves"] },
    { name: "Céréales Sûres", icon: Wheat, foods: ["Riz", "Maïs", "Quinoa", "Sarrasin", "Millet", "Avoine pure"] },
    { name: "Produits Laitiers", icon: Milk, foods: ["Lait naturel", "Yaourt nature", "Fromages naturels", "Babeurre"] },
    { name: "Fruits et Légumes", icon: Apple, foods: ["Tous les fruits frais", "Tous les légumes", "Fruits secs", "Fruits congelés"] },
  ],
  en: [
    { name: "Safe Proteins", icon: Fish, foods: ["Fresh meats", "Chicken", "Fish", "Eggs", "Lentils", "Chickpeas", "Beans"] },
    { name: "Safe Grains", icon: Wheat, foods: ["Rice", "Corn", "Quinoa", "Buckwheat", "Millet", "Pure oats"] },
    { name: "Dairy Products", icon: Milk, foods: ["Natural milk", "Plain yogurt", "Natural cheeses", "Buttermilk"] },
    { name: "Fruits & Vegetables", icon: Apple, foods: ["All fresh fruits", "All vegetables", "Dried fruits", "Frozen fruits"] },
  ]
}

// Page translations
const pageTranslations = {
  ar: {
    title: "دليل التغذية",
    subtitle: "كل ما تحتاج معرفته عن الأطعمة الآمنة والممنوعة",
    safeFoods: "أطعمة آمنة",
    unsafeFoods: "أطعمة ممنوعة",
    tips: "نصائح",
    safeFoodsTitle: "الأطعمة الآمنة (خالية من الغلوتين)",
    safeFoodsDescription: "هذه الأطعمة آمنة بشكل طبيعي لمرضى السيلياك عند تناولها بحالتها الطبيعية",
    unsafeFoodsTitle: "الأطعمة الممنوعة (تحتوي على الغلوتين)",
    unsafeFoodsDescription: "يجب تجنب هذه الأطعمة تماماً لأنها تحتوي على الغلوتين",
    warningTitle: "تحذير مهم",
    warningDescription: "الغلوتين قد يكون موجوداً في منتجات غير متوقعة مثل الصلصات، التوابل المخلوطة، بعض الأدوية والمكملات الغذائية. تأكد دائماً من قراءة الملصقات بعناية."
  },
  fr: {
    title: "Guide Nutritionnel",
    subtitle: "Tout ce que vous devez savoir sur les aliments sûrs et interdits",
    safeFoods: "Aliments Sûrs",
    unsafeFoods: "Aliments Interdits",
    tips: "Conseils",
    safeFoodsTitle: "Aliments Sûrs (Sans Gluten)",
    safeFoodsDescription: "Ces aliments sont naturellement sûrs pour les patients cœliaques lorsqu'ils sont consommés dans leur état naturel",
    unsafeFoodsTitle: "Aliments Interdits (Contiennent du Gluten)",
    unsafeFoodsDescription: "Ces aliments doivent être complètement évités car ils contiennent du gluten",
    warningTitle: "Avertissement Important",
    warningDescription: "Le gluten peut être présent dans des produits inattendus comme les sauces, les épices mélangées, certains médicaments et suppléments. Assurez-vous toujours de lire attentivement les étiquettes."
  },
  en: {
    title: "Nutrition Guide",
    subtitle: "Everything you need to know about safe and forbidden foods",
    safeFoods: "Safe Foods",
    unsafeFoods: "Forbidden Foods",
    tips: "Tips",
    safeFoodsTitle: "Safe Foods (Gluten-Free)",
    safeFoodsDescription: "These foods are naturally safe for celiac patients when consumed in their natural state",
    unsafeFoodsTitle: "Forbidden Foods (Contain Gluten)",
    unsafeFoodsDescription: "These foods must be completely avoided as they contain gluten",
    warningTitle: "Important Warning",
    warningDescription: "Gluten may be present in unexpected products such as sauces, mixed spices, some medications and supplements. Always make sure to read labels carefully."
  }
}

export default function NutritionPage() {
  const { language } = useLanguageStore()
  const t = pageTranslations[language]
  const safefoods = safefoodsData[language]
  const unsafeFoods = unsafeFoodsData[language]
  const nutritionTips = nutritionTipsData[language]
  const foodCategories = foodCategoriesData[language]
  const isRtl = language === 'ar'

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
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
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="safe" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="safe" className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {t.safeFoods}
          </TabsTrigger>
          <TabsTrigger value="unsafe" className="flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            {t.unsafeFoods}
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            {t.tips}
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
                  {t.safeFoodsTitle}
                </CardTitle>
                <CardDescription>
                  {t.safeFoodsDescription}
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
                  {t.unsafeFoodsTitle}
                </CardTitle>
                <CardDescription>
                  {t.unsafeFoodsDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {unsafeFoods.map((food, index) => (
                    <motion.div
                      key={food.name}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
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
                        {t.warningTitle}
                      </h3>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        {t.warningDescription}
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
