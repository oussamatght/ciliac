"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Lightbulb,
  ShoppingCart,
  CookingPot,
  UtensilsCrossed,
  Plane,
  Users,
  Send
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

/* ───── Data ────────────────────────────────────────── */

function getData(lang: Language) {
  const tipCategories = [
    {
      icon: ShoppingCart,
      title: lang === 'ar' ? 'نصائح التسوق' : lang === 'fr' ? 'Conseils d\'achat' : 'Shopping Tips',
      tips: lang === 'ar'
        ? ['اقرأ الملصقات بعناية دائماً', 'ابحث عن علامة "خالي من الغلوتين"', 'تجنب المنتجات السائبة غير المغلفة', 'احتفظ بقائمة للمنتجات الآمنة المعتمدة', 'تحقق من المكونات حتى لو اشتريت المنتج سابقاً']
        : lang === 'fr'
        ? ['Lisez toujours attentivement les étiquettes', 'Cherchez le label "sans gluten"', 'Évitez les produits en vrac non emballés', 'Gardez une liste de produits sûrs approuvés', 'Vérifiez les ingrédients même pour les produits déjà achetés']
        : ['Always read labels carefully', 'Look for the "gluten-free" label', 'Avoid unpackaged bulk products', 'Keep a list of approved safe products', 'Check ingredients even for previously bought items']
    },
    {
      icon: CookingPot,
      title: lang === 'ar' ? 'نصائح الطبخ' : lang === 'fr' ? 'Conseils de cuisine' : 'Cooking Tips',
      tips: lang === 'ar'
        ? ['استخدم أدوات طهي منفصلة', 'نظف الأسطح جيداً قبل الطهي', 'لا تستخدم نفس زيت القلي', 'احتفظ بأدوات خاصة للطهي الخالي من الغلوتين', 'استبدل الدقيق بدقيق الأرز أو اللوز']
        : lang === 'fr'
        ? ['Utilisez des ustensiles de cuisine séparés', 'Nettoyez bien les surfaces avant de cuisiner', 'N\'utilisez pas la même huile de friture', 'Gardez des ustensiles dédiés au sans gluten', 'Remplacez la farine par de la farine de riz ou d\'amande']
        : ['Use separate cooking utensils', 'Clean surfaces thoroughly before cooking', 'Don\'t reuse frying oil', 'Keep dedicated gluten-free utensils', 'Replace flour with rice or almond flour']
    },
    {
      icon: UtensilsCrossed,
      title: lang === 'ar' ? 'نصائح الأكل خارج المنزل' : lang === 'fr' ? 'Manger au restaurant' : 'Eating Out',
      tips: lang === 'ar'
        ? ['أخبر النادل عن حالتك الصحية', 'اسأل عن المكونات بالتفصيل', 'اختر الأطباق البسيطة (مشويات، سلطات)', 'تجنب الصلصات والمقالي المشتركة', 'احمل وجبة خفيفة احتياطية']
        : lang === 'fr'
        ? ['Informez le serveur de votre condition', 'Demandez les ingrédients en détail', 'Choisissez des plats simples (grillades, salades)', 'Évitez les sauces et les friteuses partagées', 'Emportez une collation de secours']
        : ['Tell your waiter about your condition', 'Ask about ingredients in detail', 'Choose simple dishes (grills, salads)', 'Avoid shared sauces and fryers', 'Carry a backup snack']
    },
    {
      icon: Plane,
      title: lang === 'ar' ? 'نصائح السفر' : lang === 'fr' ? 'Conseils de voyage' : 'Travel Tips',
      tips: lang === 'ar'
        ? ['اتصل بشركة الطيران مسبقاً لطلب وجبة خاصة', 'احمل وجبات خفيفة آمنة في حقيبتك', 'احفظ عبارة "خالي من الغلوتين" بلغة البلد', 'ابحث عن مطاعم صديقة قبل السفر', 'احمل بطاقة تعريفية بحالتك الصحية']
        : lang === 'fr'
        ? ['Contactez la compagnie aérienne pour un repas spécial', 'Emportez des collations sûres', 'Apprenez "sans gluten" dans la langue du pays', 'Recherchez des restaurants adaptés avant le voyage', 'Portez une carte médicale']
        : ['Contact airline ahead for special meal', 'Pack safe snacks in your bag', 'Learn "gluten-free" in the local language', 'Research friendly restaurants before traveling', 'Carry a medical ID card']
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'نصائح اجتماعية' : lang === 'fr' ? 'Conseils sociaux' : 'Social Tips',
      tips: lang === 'ar'
        ? ['أخبر المضيف مسبقاً عن حاجتك الغذائية', 'اعرض إحضار طبق آمن للمشاركة', 'لا تخجل من السؤال عن المكونات', 'ثقف من حولك عن حالتك', 'انضم لمجموعات دعم محلية أو عبر الإنترنت']
        : lang === 'fr'
        ? ['Informez l\'hôte à l\'avance de vos besoins', 'Proposez d\'apporter un plat sûr', 'N\'hésitez pas à demander les ingrédients', 'Éduquez votre entourage', 'Rejoignez des groupes de soutien']
        : ['Tell the host in advance about your dietary needs', 'Offer to bring a safe dish to share', 'Don\'t be shy about asking about ingredients', 'Educate those around you', 'Join local or online support groups']
    },
  ]

  const quickTips = lang === 'ar'
    ? [
      'تأكد دائماً من قراءة ملصقات المنتجات',
      'احمل وجبات خفيفة آمنة أينما ذهبت',
      'استشر طبيبك بانتظام',
      'شارك تجربتك مع الآخرين',
      'تعلم وصفات جديدة باستمرار',
      'راقب مستويات الحديد وفيتامين B12',
      'استخدم تطبيقات مسح الباركود',
      'انضم لجمعيات الدعم المحلية',
      'جرب بدائل الدقيق المختلفة',
      'لا تتردد في السؤال عن مكونات الأطعمة'
    ]
    : lang === 'fr'
    ? [
      'Lisez toujours les étiquettes des produits',
      'Emportez des collations sûres partout',
      'Consultez votre médecin régulièrement',
      'Partagez votre expérience avec les autres',
      'Apprenez continuellement de nouvelles recettes',
      'Surveillez les niveaux de fer et vitamine B12',
      'Utilisez des apps de scan de codes-barres',
      'Rejoignez des associations locales',
      'Essayez différentes farines alternatives',
      'N\'hésitez pas à demander les ingrédients'
    ]
    : [
      'Always read product labels',
      'Carry safe snacks wherever you go',
      'Consult your doctor regularly',
      'Share your experience with others',
      'Continuously learn new recipes',
      'Monitor iron and vitamin B12 levels',
      'Use barcode scanning apps',
      'Join local support associations',
      'Try different alternative flours',
      'Don\'t hesitate to ask about ingredients'
    ]

  return { tipCategories, quickTips }
}

/* ───── Component ──────────────────────────────────── */

export default function TipsPage() {
  const { language } = useLanguageStore()
  const { tipCategories, quickTips } = getData(language)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('tips.title', language)}</h1>
            <p className="text-muted-foreground">{t('tips.description', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Tip Categories Accordion */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Accordion type="single" collapsible className="space-y-4">
          {tipCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.05 }}>
              <AccordionItem value={`cat-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">{category.title}</span>
                    <Badge variant="secondary" className="text-xs">{category.tips.length}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pb-2">
                    {category.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs shrink-0 mt-0.5">{i + 1}</span>
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Quick Tips */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h2 className="text-2xl font-bold mb-4">{t('tips.quickTips', language)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {quickTips.map((tip, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.04 }}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-sm">{tip}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Share Tip */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card className="text-center">
          <CardContent className="p-8">
            <Send className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-xl font-bold mb-2">{t('tips.haveATip', language)}</h2>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">{t('tips.shareTip', language)}</p>
            <Button asChild>
              <a href="https://wa.me/213783321319" target="_blank" rel="noopener noreferrer">
                {t('tips.sendUs', language)}
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
