"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Stethoscope,
  Phone,
  MapPin,
  Star,
  Clock,
  ExternalLink,
  ClipboardList
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

/* ───── Data ─────────────────────────────────────── */

function getData(lang: Language) {
  const clinics = [
    {
      name: lang === 'ar' ? 'مستشفى مصطفى باشا الجامعي' : 'CHU Mustapha Bacha',
      specialty: lang === 'ar' ? 'قسم أمراض الجهاز الهضمي' : lang === 'fr' ? 'Service de Gastro-entérologie' : 'Gastroenterology Department',
      location: lang === 'ar' ? 'الجزائر العاصمة' : lang === 'fr' ? 'Alger' : 'Algiers',
      phone: '+213 21 23 55 00',
      hours: lang === 'ar' ? 'السبت - الخميس: 8ص - 4م' : lang === 'fr' ? 'Sam - Jeu: 8h - 16h' : 'Sat - Thu: 8AM - 4PM',
      rating: 4.5,
      services: lang === 'ar'
        ? ['تشخيص السيلياك', 'منظار الجهاز الهضمي', 'اختبارات الدم', 'استشارات تغذية']
        : lang === 'fr'
        ? ['Diagnostic cœliaque', 'Endoscopie', 'Analyses sanguines', 'Consultations nutritionnelles']
        : ['Celiac diagnosis', 'Endoscopy', 'Blood tests', 'Nutrition consultations']
    },
    {
      name: lang === 'ar' ? 'مستشفى بن عكنون' : 'Hôpital de Beni Messous',
      specialty: lang === 'ar' ? 'عيادة الأمراض المزمنة' : lang === 'fr' ? 'Clinique des maladies chroniques' : 'Chronic Disease Clinic',
      location: lang === 'ar' ? 'بني مسوس، الجزائر' : lang === 'fr' ? 'Béni Messous, Alger' : 'Beni Messous, Algiers',
      phone: '+213 21 93 11 00',
      hours: lang === 'ar' ? 'الأحد - الخميس: 9ص - 5م' : lang === 'fr' ? 'Dim - Jeu: 9h - 17h' : 'Sun - Thu: 9AM - 5PM',
      rating: 4.3,
      services: lang === 'ar'
        ? ['متابعة الأمراض المزمنة', 'تحاليل مخبرية', 'استشارات متخصصة', 'دعم نفسي']
        : lang === 'fr'
        ? ['Suivi des maladies chroniques', 'Analyses de laboratoire', 'Consultations spécialisées', 'Soutien psychologique']
        : ['Chronic disease follow-up', 'Lab tests', 'Specialist consultations', 'Psychological support']
    },
    {
      name: lang === 'ar' ? 'عيادة البرج' : 'Clinique El Bordj',
      specialty: lang === 'ar' ? 'أمراض الجهاز الهضمي والتغذية' : lang === 'fr' ? 'Gastro-entérologie et nutrition' : 'Gastroenterology & Nutrition',
      location: lang === 'ar' ? 'شارع العقيد عميروش، الجزائر' : lang === 'fr' ? 'Rue Colonel Amirouche, Alger' : 'Colonel Amirouche St, Algiers',
      phone: '+213 21 63 50 00',
      hours: lang === 'ar' ? 'السبت - الخميس: 8ص - 6م' : lang === 'fr' ? 'Sam - Jeu: 8h - 18h' : 'Sat - Thu: 8AM - 6PM',
      rating: 4.7,
      services: lang === 'ar'
        ? ['تشخيص وعلاج السيلياك', 'خطط غذائية مخصصة', 'متابعة دورية', 'تثقيف صحي']
        : lang === 'fr'
        ? ['Diagnostic et traitement cœliaque', 'Plans alimentaires personnalisés', 'Suivi régulier', 'Éducation sanitaire']
        : ['Celiac diagnosis & treatment', 'Customized meal plans', 'Regular follow-up', 'Health education']
    },
    {
      name: lang === 'ar' ? 'مستشفى وهران الجامعي' : 'CHU Oran',
      specialty: lang === 'ar' ? 'قسم الطب الباطني' : lang === 'fr' ? 'Service de Médecine Interne' : 'Internal Medicine Department',
      location: lang === 'ar' ? 'وهران' : lang === 'fr' ? 'Oran' : 'Oran',
      phone: '+213 41 41 22 00',
      hours: lang === 'ar' ? 'السبت - الخميس: 8ص - 4م' : lang === 'fr' ? 'Sam - Jeu: 8h - 16h' : 'Sat - Thu: 8AM - 4PM',
      rating: 4.4,
      services: lang === 'ar'
        ? ['تشخيص شامل', 'اختبارات مصلية', 'إحالات متخصصة', 'برامج متابعة']
        : lang === 'fr'
        ? ['Diagnostic complet', 'Tests sérologiques', 'Références spécialisées', 'Programmes de suivi']
        : ['Comprehensive diagnosis', 'Serological tests', 'Specialist referrals', 'Follow-up programs']
    },
    {
      name: lang === 'ar' ? 'مستشفى قسنطينة الجامعي' : 'CHU Constantine',
      specialty: lang === 'ar' ? 'قسم أمراض الأطفال والجهاز الهضمي' : lang === 'fr' ? 'Service de Pédiatrie et Gastro-entérologie' : 'Pediatrics & Gastroenterology',
      location: lang === 'ar' ? 'قسنطينة' : lang === 'fr' ? 'Constantine' : 'Constantine',
      phone: '+213 31 69 42 00',
      hours: lang === 'ar' ? 'الأحد - الخميس: 8ص - 4م' : lang === 'fr' ? 'Dim - Jeu: 8h - 16h' : 'Sun - Thu: 8AM - 4PM',
      rating: 4.2,
      services: lang === 'ar'
        ? ['تشخيص السيلياك عند الأطفال', 'فحوصات الحساسية', 'استشارة تغذية', 'متابعة النمو']
        : lang === 'fr'
        ? ['Diagnostic cœliaque pédiatrique', 'Tests d\'allergie', 'Consultation nutritionnelle', 'Suivi de croissance']
        : ['Pediatric celiac diagnosis', 'Allergy tests', 'Nutrition consultation', 'Growth monitoring']
    },
    {
      name: lang === 'ar' ? 'مركز التشخيص الطبي' : 'Centre de Diagnostic Médical',
      specialty: lang === 'ar' ? 'تحاليل وفحوصات متخصصة' : lang === 'fr' ? 'Analyses et examens spécialisés' : 'Specialized Tests & Examinations',
      location: lang === 'ar' ? 'البليدة' : lang === 'fr' ? 'Blida' : 'Blida',
      phone: '+213 25 40 00 00',
      hours: lang === 'ar' ? 'السبت - الأربعاء: 8ص - 5م' : lang === 'fr' ? 'Sam - Mer: 8h - 17h' : 'Sat - Wed: 8AM - 5PM',
      rating: 4.6,
      services: lang === 'ar'
        ? ['اختبارات tTG-IgA', 'خزعة الأمعاء', 'اختبارات جينية', 'تقارير طبية شاملة']
        : lang === 'fr'
        ? ['Tests tTG-IgA', 'Biopsie intestinale', 'Tests génétiques', 'Rapports médicaux complets']
        : ['tTG-IgA tests', 'Intestinal biopsy', 'Genetic tests', 'Comprehensive medical reports']
    },
  ]

  const whatToExpect = [
    {
      step: 1,
      title: lang === 'ar' ? 'الاستشارة الأولى' : lang === 'fr' ? 'Première consultation' : 'First Consultation',
      description: lang === 'ar' ? 'مناقشة الأعراض والتاريخ الطبي مع الطبيب المتخصص' : lang === 'fr' ? 'Discussion des symptômes et de l\'historique médical avec le spécialiste' : 'Discussion of symptoms and medical history with the specialist'
    },
    {
      step: 2,
      title: lang === 'ar' ? 'التحاليل المخبرية' : lang === 'fr' ? 'Analyses de laboratoire' : 'Laboratory Tests',
      description: lang === 'ar' ? 'اختبارات الدم للكشف عن الأجسام المضادة (tTG-IgA)' : lang === 'fr' ? 'Tests sanguins pour détecter les anticorps (tTG-IgA)' : 'Blood tests to detect antibodies (tTG-IgA)'
    },
    {
      step: 3,
      title: lang === 'ar' ? 'التشخيص' : lang === 'fr' ? 'Diagnostic' : 'Diagnosis',
      description: lang === 'ar' ? 'ربما خزعة من الأمعاء الدقيقة لتأكيد التشخيص' : lang === 'fr' ? 'Possible biopsie de l\'intestin grêle pour confirmer le diagnostic' : 'Possible small intestine biopsy to confirm diagnosis'
    },
    {
      step: 4,
      title: lang === 'ar' ? 'خطة العلاج' : lang === 'fr' ? 'Plan de traitement' : 'Treatment Plan',
      description: lang === 'ar' ? 'وضع خطة غذائية خالية من الغلوتين ومتابعة دورية' : lang === 'fr' ? 'Établissement d\'un régime sans gluten et suivi régulier' : 'Establishing a gluten-free diet and regular follow-up'
    },
  ]

  return { clinics, whatToExpect }
}

/* ───── Component ──────────────────────────────────── */

export default function ClinicsPage() {
  const { language } = useLanguageStore()
  const dir = getDirection(language)
  const { clinics, whatToExpect } = getData(language)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('clinics.title', language)}</h1>
            <p className="text-muted-foreground">{t('clinics.description', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Clinics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinics.map((clinic, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.08 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{clinic.name}</CardTitle>
                    <CardDescription className="mt-1">{clinic.specialty}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium text-sm">{clinic.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{clinic.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{clinic.hours}</span>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">{t('clinics.services', language)}</p>
                  <div className="flex flex-wrap gap-1">
                    {clinic.services.map((service, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{service}</Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                  <a href={`tel:${clinic.phone}`}>
                    <Phone className="w-4 h-4 me-2" />
                    {t('clinics.call', language)} - <span dir="ltr">{clinic.phone}</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* What to Expect */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-bold mb-2">{t('clinics.whatToExpect', language)}</h2>
        <p className="text-muted-foreground mb-6">{t('clinics.diagnosisSteps', language)}</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {whatToExpect.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 0.1 }}>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Know Another Clinic */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Stethoscope className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">{t('clinics.knowAnotherClinic', language)}</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">{t('clinics.knowAnotherClinicDesc', language)}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/213783321319" target="_blank" rel="noopener noreferrer">
                    {t('clinics.contactUs', language)}
                    <ExternalLink className="w-4 h-4 ms-2" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
