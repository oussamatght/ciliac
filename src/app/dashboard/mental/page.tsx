"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  Phone,
  MapPin,
  Star,
  Clock,
  ExternalLink
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

/* ───── Data helper per language ────────────────────────────── */

function getData(lang: Language) {
  const mentalHealthTips = [
    {
      title:       lang === 'ar' ? 'تقبل حالتك' : lang === 'fr' ? 'Acceptez votre condition' : 'Accept your condition',
      description: lang === 'ar' ? 'الأمراض المزمنة قابلة للإدارة. تقبل حاجتك لنمط حياة مختلف لكن جودة حياتك لن تقل.' : lang === 'fr' ? 'Les maladies chroniques sont gérables. Acceptez vos besoins différents sans compromettre votre qualité de vie.' : 'Chronic diseases are manageable. Accept your different needs without compromising your quality of life.',
      icon: Heart, color: "text-red-500"
    },
    {
      title:       lang === 'ar' ? 'تحدث عن مشاعرك' : lang === 'fr' ? 'Parlez de vos émotions' : 'Talk about your feelings',
      description: lang === 'ar' ? 'لا تكتم مشاعرك. شارك تحدياتك مع العائلة والأصدقاء أو انضم لمجموعات دعم.' : lang === 'fr' ? 'Ne gardez pas vos émotions. Partagez vos défis avec famille et amis ou rejoignez des groupes de soutien.' : 'Don\'t bottle up your emotions. Share your challenges with family and friends or join support groups.',
      icon: MessageCircle, color: "text-blue-500"
    },
    {
      title:       lang === 'ar' ? 'مارس تقنيات الاسترخاء' : lang === 'fr' ? 'Pratiquez la relaxation' : 'Practice relaxation techniques',
      description: lang === 'ar' ? 'التأمل، التنفس العميق، واليوغا تساعد في تقليل التوتر والقلق المرتبط بالحالة.' : lang === 'fr' ? 'La méditation, la respiration profonde et le yoga aident à réduire le stress et l\'anxiété.' : 'Meditation, deep breathing, and yoga help reduce stress and anxiety related to your condition.',
      icon: Sun, color: "text-amber-500"
    },
    {
      title:       lang === 'ar' ? 'احتفل بالإنجازات الصغيرة' : lang === 'fr' ? 'Célébrez les petites victoires' : 'Celebrate small victories',
      description: lang === 'ar' ? 'كل يوم بدون أعراض وكل تجربة ناجحة تستحق الاحتفال.' : lang === 'fr' ? 'Chaque jour sans symptômes et chaque expérience réussie mérite d\'être célébrée.' : 'Every symptom-free day and every successful experience deserves celebration.',
      icon: Smile, color: "text-green-500"
    },
  ]

  const emotionalStages = [
    {
      stage:       lang === 'ar' ? 'الصدمة والإنكار' : lang === 'fr' ? 'Choc et déni' : 'Shock and Denial',
      description: lang === 'ar' ? 'من الطبيعي الشعور بالصدمة عند التشخيص. قد تحتاج وقتاً لاستيعاب الخبر.' : lang === 'fr' ? 'Il est normal de se sentir choqué lors du diagnostic. Vous pourriez avoir besoin de temps.' : 'It\'s normal to feel shocked at diagnosis. You may need time to process the news.',
      icon: Frown,
      tips: lang === 'ar' ? ['خذ وقتك للتعامل مع المشاعر','اطرح الأسئلة على طبيبك','لا تتخذ قرارات متسرعة'] : lang === 'fr' ? ['Prenez votre temps','Posez des questions à votre médecin','Ne prenez pas de décisions hâtives'] : ['Take your time to process','Ask your doctor questions','Don\'t rush decisions']
    },
    {
      stage:       lang === 'ar' ? 'الغضب والإحباط' : lang === 'fr' ? 'Colère et frustration' : 'Anger and Frustration',
      description: lang === 'ar' ? 'الشعور بالغضب من التغييرات المطلوبة أمر طبيعي ومرحلة صحية.' : lang === 'fr' ? 'Ressentir de la colère face aux changements nécessaires est normal et sain.' : 'Feeling angry about required changes is normal and healthy.',
      icon: CloudRain,
      tips: lang === 'ar' ? ['عبّر عن غضبك بطرق صحية','مارس الرياضة لتفريغ الطاقة','تحدث مع معالج نفسي'] : lang === 'fr' ? ['Exprimez votre colère sainement','Faites du sport','Consultez un psychologue'] : ['Express anger healthily','Exercise to release energy','Talk to a therapist']
    },
    {
      stage:       lang === 'ar' ? 'التفاوض والتكيف' : lang === 'fr' ? 'Négociation et adaptation' : 'Bargaining and Adaptation',
      description: lang === 'ar' ? 'تبدأ بالتعلم والتكيف مع نمط الحياة الجديد.' : lang === 'fr' ? 'Vous commencez à apprendre et à vous adapter à un nouveau mode de vie.' : 'You begin learning and adapting to a new lifestyle.',
      icon: Meh,
      tips: lang === 'ar' ? ['تعلم وصفات جديدة','ابحث عن بدائل لأطعمتك المفضلة','أنشئ روتيناً جديداً'] : lang === 'fr' ? ['Apprenez de nouvelles recettes','Trouvez des alternatives','Créez une nouvelle routine'] : ['Learn new recipes','Find alternatives to favorites','Create a new routine']
    },
    {
      stage:       lang === 'ar' ? 'القبول والازدهار' : lang === 'fr' ? 'Acceptation et épanouissement' : 'Acceptance and Thriving',
      description: lang === 'ar' ? 'تصل لمرحلة تقبل حالتك وتكتشف أن حياتك يمكن أن تكون رائعة.' : lang === 'fr' ? 'Vous atteignez l\'acceptation et découvrez que votre vie peut être formidable.' : 'You reach acceptance and discover your life can be wonderful.',
      icon: Smile,
      tips: lang === 'ar' ? ['ساعد الآخرين في نفس الحالة','شارك تجاربك الإيجابية','استمتع بحياتك الصحية'] : lang === 'fr' ? ['Aidez les autres dans la même situation','Partagez vos expériences positives','Profitez de votre vie saine'] : ['Help others in the same situation','Share positive experiences','Enjoy your healthy life']
    },
  ]

  const supportResources = [
    {
      title:       lang === 'ar' ? 'مجموعات الدعم المحلية' : lang === 'fr' ? 'Groupes de soutien locaux' : 'Local Support Groups',
      description: lang === 'ar' ? 'انضم لمجموعات دعم في منطقتك للتواصل مع من يفهمون تجربتك.' : lang === 'fr' ? 'Rejoignez des groupes de soutien locaux pour communiquer avec ceux qui comprennent.' : 'Join local support groups to connect with people who understand your experience.',
      icon: Users
    },
    {
      title:       lang === 'ar' ? 'الاستشارة النفسية' : lang === 'fr' ? 'Consultation psychologique' : 'Psychological Counseling',
      description: lang === 'ar' ? 'لا تتردد في طلب المساعدة المتخصصة إذا شعرت بالحاجة لذلك.' : lang === 'fr' ? 'N\'hésitez pas à demander l\'aide d\'un spécialiste si nécessaire.' : 'Don\'t hesitate to seek professional help if you feel the need.',
      icon: Phone
    },
    {
      title:       lang === 'ar' ? 'المجتمعات الإلكترونية' : lang === 'fr' ? 'Communautés en ligne' : 'Online Communities',
      description: lang === 'ar' ? 'منتديات ومجموعات عبر الإنترنت لمشاركة التجارب والنصائح.' : lang === 'fr' ? 'Forums et groupes en ligne pour partager expériences et conseils.' : 'Online forums and groups for sharing experiences and tips.',
      icon: MessageCircle
    },
  ]

  const psychologists = [
    {
      name:     lang === 'ar' ? 'د. سارة بن علي' : lang === 'fr' ? 'Dr. Sarah Ben Ali' : 'Dr. Sarah Ben Ali',
      specialty: lang === 'ar' ? 'أخصائية نفسية - دعم الأمراض المزمنة' : lang === 'fr' ? 'Psychologue - Soutien maladies chroniques' : 'Psychologist - Chronic disease support',
      location: lang === 'ar' ? 'الجزائر العاصمة' : lang === 'fr' ? 'Alger' : 'Algiers',
      phone:    '+213 555 12 34 56',
      hours:    lang === 'ar' ? 'السبت - الخميس: 9ص - 5م' : lang === 'fr' ? 'Sam - Jeu: 9h - 17h' : 'Sat - Thu: 9AM - 5PM',
      rating:   4.9
    },
    {
      name:     lang === 'ar' ? 'د. كريم مسعودي' : lang === 'fr' ? 'Dr. Karim Messaoudi' : 'Dr. Karim Messaoudi',
      specialty: lang === 'ar' ? 'طبيب نفسي - علاج القلق والاكتئاب' : lang === 'fr' ? 'Psychiatre - Traitement anxiété et dépression' : 'Psychiatrist - Anxiety and depression treatment',
      location: lang === 'ar' ? 'وهران' : lang === 'fr' ? 'Oran' : 'Oran',
      phone:    '+213 555 78 90 12',
      hours:    lang === 'ar' ? 'الأحد - الخميس: 10ص - 6م' : lang === 'fr' ? 'Dim - Jeu: 10h - 18h' : 'Sun - Thu: 10AM - 6PM',
      rating:   4.8
    },
    {
      name:     lang === 'ar' ? 'د. أمينة بوزيد' : lang === 'fr' ? 'Dr. Amina Bouzid' : 'Dr. Amina Bouzid',
      specialty: lang === 'ar' ? 'أخصائية نفسية - دعم الأطفال والمراهقين' : lang === 'fr' ? 'Psychologue - Soutien enfants et adolescents' : 'Psychologist - Children and teen support',
      location: lang === 'ar' ? 'قسنطينة' : lang === 'fr' ? 'Constantine' : 'Constantine',
      phone:    '+213 555 34 56 78',
      hours:    lang === 'ar' ? 'السبت - الأربعاء: 8ص - 4م' : lang === 'fr' ? 'Sam - Mer: 8h - 16h' : 'Sat - Wed: 8AM - 4PM',
      rating:   4.7
    },
    {
      name:     lang === 'ar' ? 'د. يوسف حمادي' : lang === 'fr' ? 'Dr. Youssef Hamadi' : 'Dr. Youssef Hamadi',
      specialty: lang === 'ar' ? 'أخصائي نفسي - العلاج السلوكي المعرفي' : lang === 'fr' ? 'Psychologue - Thérapie cognitivo-comportementale' : 'Psychologist - Cognitive behavioral therapy',
      location: lang === 'ar' ? 'البليدة' : lang === 'fr' ? 'Blida' : 'Blida',
      phone:    '+213 555 90 12 34',
      hours:    lang === 'ar' ? 'الأحد - الخميس: 9ص - 5م' : lang === 'fr' ? 'Dim - Jeu: 9h - 17h' : 'Sun - Thu: 9AM - 5PM',
      rating:   4.8
    },
  ]

  return { mentalHealthTips, emotionalStages, supportResources, psychologists }
}

/* ───── Component ───────────────────────────────────────────── */

export default function MentalPage() {
  const { language } = useLanguageStore()
  const dir = getDirection(language)
  const { mentalHealthTips, emotionalStages, supportResources, psychologists } = getData(language)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('mental.title', language)}</h1>
            <p className="text-muted-foreground">{t('mental.description', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-900">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">{t('mental.intro', language)}</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Mental Health Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentalHealthTips.map((tip, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }}>
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

      {/* ──── Psychologist Contacts (NEW) ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          {t('mental.psychologistContacts', language)}
        </h2>
        <p className="text-muted-foreground mb-6">{t('mental.psychologistDesc', language)}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {psychologists.map((psy, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }}>
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{psy.name}</CardTitle>
                      <CardDescription className="mt-1">{psy.specialty}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium text-sm">{psy.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{psy.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{psy.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span dir="ltr">{psy.phone}</span>
                  </div>
                  <Button className="w-full mt-2" variant="outline" asChild>
                    <a href={`tel:${psy.phone}`}>
                      <Phone className="w-4 h-4 me-2" />
                      {t('mental.bookAppointment', language)}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Emotional Journey */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-bold mb-4">{t('mental.emotionalStages', language)}</h2>
        <div className="relative">
          <div className={`absolute ${dir === 'rtl' ? 'right-6' : 'left-6'} top-0 bottom-0 w-0.5 bg-border`} />
          <div className="space-y-6">
            {emotionalStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.15 }}
                className={dir === 'rtl' ? 'relative pr-14' : 'relative pl-14'}
              >
                <div className={`absolute ${dir === 'rtl' ? 'right-0' : 'left-0'} w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center`}>
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
                        <Badge key={i} variant="secondary">{tip}</Badge>
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
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <h2 className="text-2xl font-bold mb-4">{t('mental.supportResources', language)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportResources.map((resource, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 + index * 0.1 }}>
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
