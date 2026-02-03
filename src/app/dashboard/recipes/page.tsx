"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  UtensilsCrossed, 
  Clock, 
  Users, 
  Search,
  Heart,
  ChefHat,
  Flame,
  Star
} from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "خبز الأرز الخالي من الغلوتين",
    category: "مخبوزات",
    time: "45 دقيقة",
    servings: 8,
    difficulty: "متوسط",
    calories: 150,
    rating: 4.8,
    image: "🍞",
    ingredients: [
      "2 كوب دقيق أرز",
      "1 كوب نشا البطاطس",
      "2 ملعقة صغيرة خميرة",
      "1 ملعقة صغيرة ملح",
      "2 ملعقة كبيرة زيت زيتون",
      "1.5 كوب ماء دافئ"
    ],
    instructions: [
      "اخلط المكونات الجافة معاً",
      "أضف الزيت والماء الدافئ",
      "اعجن حتى تحصل على عجينة متماسكة",
      "اترك العجينة لترتاح 30 دقيقة",
      "شكل الخبز واخبزه على 180 درجة لمدة 35 دقيقة"
    ]
  },
  {
    id: 2,
    title: "باستا الكينوا بالخضروات",
    category: "أطباق رئيسية",
    time: "30 دقيقة",
    servings: 4,
    difficulty: "سهل",
    calories: 280,
    rating: 4.5,
    image: "🍝",
    ingredients: [
      "250 جرام باستا كينوا",
      "2 حبة كوسا مقطعة",
      "1 فلفل أحمر",
      "200 جرام طماطم كرزية",
      "3 ملاعق زيت زيتون",
      "ملح وفلفل حسب الرغبة"
    ],
    instructions: [
      "اسلق الباستا حسب التعليمات",
      "قلّب الخضروات في الزيت",
      "أضف الباستا المسلوقة",
      "تبّل واخلط جيداً",
      "قدمها ساخنة"
    ]
  },
  {
    id: 3,
    title: "كيك الشوكولاتة الصحي",
    category: "حلويات",
    time: "50 دقيقة",
    servings: 10,
    difficulty: "متوسط",
    calories: 220,
    rating: 4.9,
    image: "🍰",
    ingredients: [
      "1.5 كوب دقيق لوز",
      "0.5 كوب كاكاو",
      "1 كوب سكر جوز الهند",
      "3 بيضات",
      "0.5 كوب زيت جوز الهند",
      "1 ملعقة صغيرة فانيليا"
    ],
    instructions: [
      "سخن الفرن على 175 درجة",
      "اخلط المكونات الجافة",
      "اخفق البيض مع السكر والزيت",
      "اخلط الكل معاً",
      "اخبز لمدة 35 دقيقة"
    ]
  },
  {
    id: 4,
    title: "سلطة الكينوا بالأفوكادو",
    category: "سلطات",
    time: "20 دقيقة",
    servings: 4,
    difficulty: "سهل",
    calories: 180,
    rating: 4.7,
    image: "🥗",
    ingredients: [
      "1 كوب كينوا مطبوخة",
      "1 حبة أفوكادو",
      "1 كوب طماطم كرزية",
      "0.5 كوب خيار مقطع",
      "عصير ليمونة",
      "زيت زيتون، ملح وفلفل"
    ],
    instructions: [
      "اطبخ الكينوا واتركها تبرد",
      "قطع الأفوكادو والخضروات",
      "اخلط الكل في وعاء كبير",
      "أضف التتبيلة وقلّب",
      "قدمها باردة"
    ]
  },
  {
    id: 5,
    title: "فطائر الموز والشوفان",
    category: "إفطار",
    time: "15 دقيقة",
    servings: 6,
    difficulty: "سهل",
    calories: 120,
    rating: 4.6,
    image: "🥞",
    ingredients: [
      "1 كوب شوفان خالي من الغلوتين",
      "1 موزة ناضجة",
      "2 بيضة",
      "0.5 كوب حليب لوز",
      "1 ملعقة عسل",
      "قرفة حسب الرغبة"
    ],
    instructions: [
      "اخلط الشوفان في الخلاط حتى يصبح دقيقاً",
      "أضف باقي المكونات واخلط",
      "سخن مقلاة غير لاصقة",
      "اسكب الخليط واطبخ كل جانب",
      "قدمها مع الفواكه الطازجة"
    ]
  },
  {
    id: 6,
    title: "شوربة العدس الأحمر",
    category: "شوربات",
    time: "35 دقيقة",
    servings: 6,
    difficulty: "سهل",
    calories: 160,
    rating: 4.8,
    image: "🍲",
    ingredients: [
      "1.5 كوب عدس أحمر",
      "1 بصلة كبيرة",
      "2 جزرة",
      "3 فصوص ثوم",
      "1 ملعقة كمون",
      "6 أكواب مرق خضار"
    ],
    instructions: [
      "قلّب البصل والثوم في الزيت",
      "أضف الجزر والعدس",
      "أضف المرق والتوابل",
      "اطبخ حتى ينضج العدس",
      "اخلط في الخلاط وقدمها ساخنة"
    ]
  }
]

const categories = ["الكل", "مخبوزات", "أطباق رئيسية", "حلويات", "سلطات", "إفطار", "شوربات"]

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [favorites, setFavorites] = useState([] as number[])

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.includes(searchTerm) || 
                          recipe.ingredients.some((ing: string) => ing.includes(searchTerm))
    const matchesCategory = selectedCategory === "الكل" || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev: number[]) => 
      prev.includes(id) ? prev.filter((f: number) => f !== id) : [...prev, id]
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "سهل": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "متوسط": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      case "صعب": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default: return ""
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UtensilsCrossed className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">الوصفات</h1>
            <p className="text-muted-foreground">وصفات شهية وصحية خالية من الغلوتين</p>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="ابحث عن وصفة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
            className="pr-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe, index) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Dialog>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer group overflow-hidden">
                <CardHeader className="relative pb-2">
                  <div className="absolute top-4 left-4 z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${favorites.includes(recipe.id) ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(recipe.id)
                      }}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(recipe.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                  <div className="text-6xl text-center py-6 bg-secondary/30 rounded-lg group-hover:scale-110 transition-transform">
                    {recipe.image}
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{recipe.category}</Badge>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{recipe.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{recipe.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {recipe.servings} أشخاص
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      {recipe.calories} سعرة
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex items-center justify-between w-full">
                    <Badge className={getDifficultyColor(recipe.difficulty)}>
                      {recipe.difficulty}
                    </Badge>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-primary">
                        عرض الوصفة
                      </Button>
                    </DialogTrigger>
                  </div>
                </CardFooter>
              </Card>
              
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="text-6xl text-center py-4">{recipe.image}</div>
                  <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
                  <DialogDescription className="flex items-center gap-4 pt-2">
                    <Badge variant="secondary">{recipe.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {recipe.servings} أشخاص
                    </span>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <ChefHat className="w-5 h-5 text-primary" />
                      المكونات
                    </h3>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <UtensilsCrossed className="w-5 h-5 text-primary" />
                      طريقة التحضير
                    </h3>
                    <ol className="space-y-3">
                      {recipe.instructions.map((instruction, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            {i + 1}
                          </span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <UtensilsCrossed className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">لم يتم العثور على وصفات</h3>
          <p className="text-muted-foreground">جرب تغيير كلمات البحث أو الفئة</p>
        </motion.div>
      )}
    </div>
  )
}
