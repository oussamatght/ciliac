"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import {
  ChefHat,
  Clock,
  Users,
  Flame,
  Search,
  Heart
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

/* ───── Recipe data ────────────────────────────────── */

function getRecipes(lang: Language) {
  return [
    {
      id: 1,
      name: lang === 'ar' ? 'خبز الأرز الخالي من الغلوتين' : lang === 'fr' ? 'Pain de riz sans gluten' : 'Gluten-Free Rice Bread',
      category: lang === 'ar' ? 'مخبوزات' : lang === 'fr' ? 'Boulangerie' : 'Bakery',
      time: lang === 'ar' ? '45 دقيقة' : lang === 'fr' ? '45 min' : '45 min',
      servings: 4,
      calories: 180,
      emoji: '🍞',
      ingredients: lang === 'ar'
        ? ['2 كوب دقيق أرز', '1 كوب ماء دافئ', '1 ملعقة خميرة', '2 ملعقة زيت زيتون', '1 ملعقة سكر', 'رشة ملح']
        : lang === 'fr'
        ? ['2 tasses de farine de riz', '1 tasse d\'eau tiède', '1 c. à soupe de levure', '2 c. à soupe d\'huile d\'olive', '1 c. à soupe de sucre', 'Pincée de sel']
        : ['2 cups rice flour', '1 cup warm water', '1 tbsp yeast', '2 tbsp olive oil', '1 tbsp sugar', 'Pinch of salt'],
      instructions: lang === 'ar'
        ? ['اخلط المكونات الجافة', 'أضف الماء والزيت تدريجياً', 'اعجن حتى تحصل على عجينة متماسكة', 'اتركها ترتاح 30 دقيقة', 'اخبزها في الفرن على 200°م لمدة 25 دقيقة']
        : lang === 'fr'
        ? ['Mélangez les ingrédients secs', 'Ajoutez l\'eau et l\'huile progressivement', 'Pétrissez jusqu\'à obtenir une pâte homogène', 'Laissez reposer 30 minutes', 'Cuisez au four à 200°C pendant 25 minutes']
        : ['Mix dry ingredients', 'Gradually add water and oil', 'Knead until smooth', 'Let rest for 30 minutes', 'Bake at 200°C for 25 minutes']
    },
    {
      id: 2,
      name: lang === 'ar' ? 'باستا الكينوا بالخضروات' : lang === 'fr' ? 'Pâtes de quinoa aux légumes' : 'Quinoa Pasta with Vegetables',
      category: lang === 'ar' ? 'أطباق رئيسية' : lang === 'fr' ? 'Plats principaux' : 'Main Dishes',
      time: lang === 'ar' ? '30 دقيقة' : lang === 'fr' ? '30 min' : '30 min',
      servings: 3,
      calories: 320,
      emoji: '🍝',
      ingredients: lang === 'ar'
        ? ['250غ مكرونة كينوا', 'كوسا مقطعة', 'فلفل ألوان', 'طماطم كرزية', 'ثوم مفروم', 'زيت زيتون', 'ملح وفلفل']
        : lang === 'fr'
        ? ['250g pâtes de quinoa', 'Courgettes coupées', 'Poivrons colorés', 'Tomates cerises', 'Ail émincé', 'Huile d\'olive', 'Sel et poivre']
        : ['250g quinoa pasta', 'Diced zucchini', 'Bell peppers', 'Cherry tomatoes', 'Minced garlic', 'Olive oil', 'Salt and pepper'],
      instructions: lang === 'ar'
        ? ['اسلق المكرونة حسب التعليمات', 'اقلي الخضروات مع الثوم', 'أضف الطماطم والتوابل', 'اخلط المكرونة مع الصلصة', 'قدم ساخناً مع الجبن']
        : lang === 'fr'
        ? ['Cuire les pâtes selon les instructions', 'Faire sauter les légumes avec l\'ail', 'Ajouter les tomates et les épices', 'Mélanger les pâtes avec la sauce', 'Servir chaud avec du fromage']
        : ['Cook pasta according to instructions', 'Sauté vegetables with garlic', 'Add tomatoes and seasoning', 'Mix pasta with sauce', 'Serve hot with cheese']
    },
    {
      id: 3,
      name: lang === 'ar' ? 'كيك الشوكولاتة الصحي' : lang === 'fr' ? 'Gâteau au chocolat sain' : 'Healthy Chocolate Cake',
      category: lang === 'ar' ? 'حلويات' : lang === 'fr' ? 'Desserts' : 'Desserts',
      time: lang === 'ar' ? '50 دقيقة' : lang === 'fr' ? '50 min' : '50 min',
      servings: 8,
      calories: 220,
      emoji: '🍫',
      ingredients: lang === 'ar'
        ? ['1.5 كوب دقيق لوز', '½ كوب كاكاو', '3 بيضات', '½ كوب عسل', '¼ كوب زيت جوز الهند', '1 ملعقة فانيلا', '1 ملعقة بيكنج باودر']
        : lang === 'fr'
        ? ['1.5 tasse de farine d\'amande', '½ tasse de cacao', '3 œufs', '½ tasse de miel', '¼ tasse d\'huile de coco', '1 c. à café de vanille', '1 c. à café de levure']
        : ['1.5 cups almond flour', '½ cup cocoa', '3 eggs', '½ cup honey', '¼ cup coconut oil', '1 tsp vanilla', '1 tsp baking powder'],
      instructions: lang === 'ar'
        ? ['سخن الفرن على 180°م', 'اخلط المكونات الجافة', 'اخفق البيض مع العسل والزيت', 'اخلط المكونات الرطبة مع الجافة', 'اسكب في قالب واخبز 35 دقيقة']
        : lang === 'fr'
        ? ['Préchauffez le four à 180°C', 'Mélangez les ingrédients secs', 'Battez les œufs avec le miel et l\'huile', 'Combinez les ingrédients', 'Versez dans un moule et cuisez 35 min']
        : ['Preheat oven to 180°C', 'Mix dry ingredients', 'Beat eggs with honey and oil', 'Combine wet and dry ingredients', 'Pour into pan and bake 35 min']
    },
    {
      id: 4,
      name: lang === 'ar' ? 'سلطة الكينوا بالأفوكادو' : lang === 'fr' ? 'Salade de quinoa à l\'avocat' : 'Quinoa Avocado Salad',
      category: lang === 'ar' ? 'سلطات' : lang === 'fr' ? 'Salades' : 'Salads',
      time: lang === 'ar' ? '20 دقيقة' : lang === 'fr' ? '20 min' : '20 min',
      servings: 2,
      calories: 280,
      emoji: '🥗',
      ingredients: lang === 'ar'
        ? ['1 كوب كينوا مطبوخة', 'أفوكادو ناضج', 'طماطم كرزية', 'خيار', 'ليمون', 'نعنع طازج', 'زيت زيتون']
        : lang === 'fr'
        ? ['1 tasse de quinoa cuit', 'Avocat mûr', 'Tomates cerises', 'Concombre', 'Citron', 'Menthe fraîche', 'Huile d\'olive']
        : ['1 cup cooked quinoa', 'Ripe avocado', 'Cherry tomatoes', 'Cucumber', 'Lemon', 'Fresh mint', 'Olive oil'],
      instructions: lang === 'ar'
        ? ['اطبخ الكينوا واتركها تبرد', 'قطع الخضروات والأفوكادو', 'اخلط كل المكونات', 'أضف عصير الليمون والزيت', 'زين بالنعنع وقدم']
        : lang === 'fr'
        ? ['Cuisez le quinoa et laissez refroidir', 'Coupez les légumes et l\'avocat', 'Mélangez tous les ingrédients', 'Ajoutez le jus de citron et l\'huile', 'Décorez de menthe et servez']
        : ['Cook quinoa and let cool', 'Dice vegetables and avocado', 'Mix all ingredients', 'Add lemon juice and oil', 'Garnish with mint and serve']
    },
    {
      id: 5,
      name: lang === 'ar' ? 'بان كيك الموز' : lang === 'fr' ? 'Pancakes à la banane' : 'Banana Pancakes',
      category: lang === 'ar' ? 'مخبوزات' : lang === 'fr' ? 'Boulangerie' : 'Bakery',
      time: lang === 'ar' ? '15 دقيقة' : lang === 'fr' ? '15 min' : '15 min',
      servings: 2,
      calories: 190,
      emoji: '🥞',
      ingredients: lang === 'ar'
        ? ['2 موزة ناضجة', '2 بيضة', '¼ كوب دقيق شوفان نقي', 'رشة قرفة', 'عسل للتقديم']
        : lang === 'fr'
        ? ['2 bananes mûres', '2 œufs', '¼ tasse de farine d\'avoine pure', 'Pincée de cannelle', 'Miel pour servir']
        : ['2 ripe bananas', '2 eggs', '¼ cup pure oat flour', 'Pinch of cinnamon', 'Honey for serving'],
      instructions: lang === 'ar'
        ? ['اهرس الموز جيداً', 'أضف البيض والدقيق واخلط', 'صب على مقلاة ساخنة', 'اقلب بعد ظهور فقاعات', 'قدم مع العسل والفواكه']
        : lang === 'fr'
        ? ['Écrasez bien les bananes', 'Ajoutez les œufs et la farine', 'Versez dans une poêle chaude', 'Retournez après les bulles', 'Servez avec du miel']
        : ['Mash bananas well', 'Add eggs and flour, mix', 'Pour onto hot pan', 'Flip after bubbles form', 'Serve with honey and fruit']
    },
    {
      id: 6,
      name: lang === 'ar' ? 'شوربة العدس' : lang === 'fr' ? 'Soupe de lentilles' : 'Lentil Soup',
      category: lang === 'ar' ? 'أطباق رئيسية' : lang === 'fr' ? 'Plats principaux' : 'Main Dishes',
      time: lang === 'ar' ? '40 دقيقة' : lang === 'fr' ? '40 min' : '40 min',
      servings: 4,
      calories: 250,
      emoji: '🍲',
      ingredients: lang === 'ar'
        ? ['1.5 كوب عدس أحمر', 'بصلة مفرومة', '2 جزرة', '2 حبة بطاطس', 'كمون وكركم', 'عصير ليمون', 'ملح وفلفل']
        : lang === 'fr'
        ? ['1.5 tasse de lentilles', 'Oignon haché', '2 carottes', '2 pommes de terre', 'Cumin et curcuma', 'Jus de citron', 'Sel et poivre']
        : ['1.5 cups red lentils', 'Chopped onion', '2 carrots', '2 potatoes', 'Cumin and turmeric', 'Lemon juice', 'Salt and pepper'],
      instructions: lang === 'ar'
        ? ['اقلي البصل حتى يذبل', 'أضف الخضروات والعدس', 'أضف الماء والتوابل', 'اطبخ حتى ينضج العدس', 'اهرس واضف الليمون وقدم']
        : lang === 'fr'
        ? ['Faites revenir l\'oignon', 'Ajoutez les légumes et les lentilles', 'Ajoutez l\'eau et les épices', 'Cuisez jusqu\'à tendreté', 'Mixez, ajoutez le citron et servez']
        : ['Sauté onion until soft', 'Add vegetables and lentils', 'Add water and spices', 'Cook until lentils are tender', 'Blend, add lemon and serve']
    },
  ]
}

function getCategories(lang: Language) {
  return [
    { key: 'all', label: t('recipes.all', lang) },
    { key: lang === 'ar' ? 'مخبوزات' : lang === 'fr' ? 'Boulangerie' : 'Bakery', label: lang === 'ar' ? 'مخبوزات' : lang === 'fr' ? 'Boulangerie' : 'Bakery' },
    { key: lang === 'ar' ? 'أطباق رئيسية' : lang === 'fr' ? 'Plats principaux' : 'Main Dishes', label: lang === 'ar' ? 'أطباق رئيسية' : lang === 'fr' ? 'Plats principaux' : 'Main Dishes' },
    { key: lang === 'ar' ? 'حلويات' : lang === 'fr' ? 'Desserts' : 'Desserts', label: lang === 'ar' ? 'حلويات' : lang === 'fr' ? 'Desserts' : 'Desserts' },
    { key: lang === 'ar' ? 'سلطات' : lang === 'fr' ? 'Salades' : 'Salads', label: lang === 'ar' ? 'سلطات' : lang === 'fr' ? 'Salades' : 'Salads' },
  ]
}

/* ───── Component ──────────────────────────────────── */

export default function RecipesPage() {
  const { language } = useLanguageStore()
  const dir = getDirection(language)
  const recipes = getRecipes(language)
  const categories = getCategories(language)

  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedRecipe, setSelectedRecipe] = useState<null | ReturnType<typeof getRecipes>[0]>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const filtered = recipes.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "all" || r.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: number) =>
    setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id])

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('recipes.title', language)}</h1>
            <p className="text-muted-foreground">{t('recipes.description', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Search + Filter */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
        <div className="relative">
          <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
          <Input
            placeholder={t('recipes.search', language)}
            value={search}
            onChange={e => setSearch((e.target as HTMLInputElement).value)}
            className={dir === 'rtl' ? 'pr-10' : 'pl-10'}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Recipes Grid */}
      {filtered.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <ChefHat className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-1">{t('recipes.noResults', language)}</h3>
          <p className="text-sm text-muted-foreground">{t('recipes.tryAgain', language)}</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((recipe, index) => (
            <motion.div key={recipe.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.05 }}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedRecipe(recipe)}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{recipe.emoji}</span>
                    <button
                      onClick={e => { e.stopPropagation(); toggleFavorite(recipe.id) }}
                      className="p-1"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(recipe.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                    </button>
                  </div>
                  <CardTitle className="text-lg mt-2">{recipe.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="text-xs">{recipe.category}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{recipe.time}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" />{recipe.servings} {t('recipes.persons', language)}</span>
                    <span className="flex items-center gap-1"><Flame className="w-4 h-4" />{recipe.calories} {t('recipes.cal', language)}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">{t('recipes.viewRecipe', language)}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Recipe Detail Dialog */}
      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        {selectedRecipe && (
          <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="text-4xl mb-2">{selectedRecipe.emoji}</div>
              <DialogTitle>{selectedRecipe.name}</DialogTitle>
              <DialogDescription>
                <div className="flex gap-3 mt-2">
                  <Badge variant="secondary">{selectedRecipe.category}</Badge>
                  <span className="flex items-center gap-1 text-xs"><Clock className="w-3 h-3" />{selectedRecipe.time}</span>
                  <span className="flex items-center gap-1 text-xs"><Users className="w-3 h-3" />{selectedRecipe.servings}</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">{t('recipes.ingredients', language)}</h4>
                <ul className="space-y-1">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('recipes.instructions', language)}</h4>
                <ol className="space-y-2">
                  {selectedRecipe.instructions.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
