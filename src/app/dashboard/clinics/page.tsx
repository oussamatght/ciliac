"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguageStore, Language } from "@/lib/store"
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Clock,
  Star,
  ExternalLink,
  MessageCircle,
  Globe
} from "lucide-react"

// Multi-language clinic data
interface ClinicData {
  ar: { name: string; specialty: string; address: string; phone: string }
  fr: { name: string; specialty: string; address: string; phone: string }
  en: { name: string; specialty: string; address: string; phone: string }
  img: string
  rating: number
  workingHours: { ar: string; fr: string; en: string }
  mapUrl: string
  contactUrl: string
  services: { ar: string[]; fr: string[]; en: string[] }
}

const clinicsData: ClinicData[] = [
  {
    ar: { name: "عيادة الحياة", specialty: "أمراض الجهاز الهضمي", address: "الجزائر العاصمة، شارع ديدوش مراد", phone: "+213 21 XX XX XX" },
    fr: { name: "Clinique Al Hayat", specialty: "Gastro-entérologie", address: "Alger, Rue Didouche Mourad", phone: "+213 21 XX XX XX" },
    en: { name: "Al Hayat Clinic", specialty: "Gastroenterology", address: "Algiers, Didouche Mourad Street", phone: "+213 21 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=12",
    rating: 4.8,
    workingHours: { ar: "8 ص - 6 م", fr: "8h - 18h", en: "8 AM - 6 PM" },
    mapUrl: "https://maps.google.com/?q=Clinique+Al+Hayat+Alger",
    contactUrl: "https://wa.me/213555555555",
    services: { 
      ar: ["تشخيص السيلياك", "تنظير الجهاز الهضمي", "استشارات تغذية"],
      fr: ["Diagnostic de la maladie cœliaque", "Endoscopie digestive", "Consultations nutritionnelles"],
      en: ["Celiac Disease Diagnosis", "Digestive Endoscopy", "Nutritional Consultations"]
    }
  },
  {
    ar: { name: "د. أمينة بن يوسف", specialty: "تغذية علاجية", address: "وهران، وسط المدينة", phone: "+213 41 XX XX XX" },
    fr: { name: "Dr. Amina Ben Youssef", specialty: "Nutrition thérapeutique", address: "Oran, centre-ville", phone: "+213 41 XX XX XX" },
    en: { name: "Dr. Amina Ben Youssef", specialty: "Therapeutic Nutrition", address: "Oran, city center", phone: "+213 41 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=32",
    rating: 4.9,
    workingHours: { ar: "9 ص - 5 م", fr: "9h - 17h", en: "9 AM - 5 PM" },
    mapUrl: "https://maps.google.com/?q=Oran+centre-ville",
    contactUrl: "mailto:amina.nutrition@example.com",
    services: { 
      ar: ["برامج غذائية للسيلياك", "متابعة دورية", "تثقيف صحي"],
      fr: ["Programmes nutritionnels pour cœliaques", "Suivi régulier", "Éducation sanitaire"],
      en: ["Celiac Nutrition Programs", "Regular Follow-up", "Health Education"]
    }
  },
  {
    ar: { name: "مركز التشخيص الحديث", specialty: "تحاليل طبية متقدمة", address: "قسنطينة، شارع عبان رمضان", phone: "+213 31 XX XX XX" },
    fr: { name: "Centre de Diagnostic Moderne", specialty: "Analyses médicales avancées", address: "Constantine, Rue Abane Ramdane", phone: "+213 31 XX XX XX" },
    en: { name: "Modern Diagnostic Center", specialty: "Advanced Medical Tests", address: "Constantine, Abane Ramdane Street", phone: "+213 31 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=5",
    rating: 4.7,
    workingHours: { ar: "7 ص - 7 م", fr: "7h - 19h", en: "7 AM - 7 PM" },
    mapUrl: "https://maps.google.com/?q=Constantine+Rue+Abane+Ramdane",
    contactUrl: "tel:+213777777777",
    services: { 
      ar: ["فحص الأجسام المضادة tTG-IgA", "تحاليل شاملة", "نتائج سريعة"],
      fr: ["Test d'anticorps tTG-IgA", "Analyses complètes", "Résultats rapides"],
      en: ["tTG-IgA Antibody Test", "Complete Analysis", "Fast Results"]
    }
  },
  {
    ar: { name: "مستشفى مصطفى باشا الجامعي", specialty: "أمراض الجهاز الهضمي والكبد", address: "الجزائر العاصمة، باب الوادي", phone: "+213 21 96 65 00" },
    fr: { name: "CHU Mustapha Bacha", specialty: "Gastro-entérologie et hépatologie", address: "Alger, Bab El Oued", phone: "+213 21 96 65 00" },
    en: { name: "Mustapha Bacha University Hospital", specialty: "Gastroenterology & Hepatology", address: "Algiers, Bab El Oued", phone: "+213 21 96 65 00" },
    img: "https://i.pravatar.cc/100?img=60",
    rating: 4.6,
    workingHours: { ar: "24 ساعة", fr: "24 heures", en: "24 Hours" },
    mapUrl: "https://maps.google.com/?q=CHU+Mustapha+Bacha+Alger",
    contactUrl: "tel:+213219665000",
    services: { 
      ar: ["تنظير داخلي", "خزعات الأمعاء", "علاج متقدم"],
      fr: ["Endoscopie", "Biopsies intestinales", "Traitement avancé"],
      en: ["Endoscopy", "Intestinal Biopsies", "Advanced Treatment"]
    }
  },
  {
    ar: { name: "عيادة الشفاء", specialty: "طب الأطفال وأمراض الجهاز الهضمي", address: "عنابة، شارع زيغود يوسف", phone: "+213 38 XX XX XX" },
    fr: { name: "Clinique Echifa", specialty: "Pédiatrie et gastro-entérologie", address: "Annaba, Rue Zighoud Youcef", phone: "+213 38 XX XX XX" },
    en: { name: "Echifa Clinic", specialty: "Pediatrics & Gastroenterology", address: "Annaba, Zighoud Youcef Street", phone: "+213 38 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=15",
    rating: 4.5,
    workingHours: { ar: "8 ص - 8 م", fr: "8h - 20h", en: "8 AM - 8 PM" },
    mapUrl: "https://maps.google.com/?q=Clinique+Echifa+Annaba",
    contactUrl: "https://wa.me/213666666666",
    services: { 
      ar: ["تشخيص السيلياك للأطفال", "متابعة النمو", "استشارات عائلية"],
      fr: ["Diagnostic cœliaque pédiatrique", "Suivi de croissance", "Consultations familiales"],
      en: ["Pediatric Celiac Diagnosis", "Growth Monitoring", "Family Consultations"]
    }
  },
  {
    ar: { name: "د. كريم حداد", specialty: "أمراض الجهاز الهضمي", address: "سطيف، حي المدينة الجديدة", phone: "+213 36 XX XX XX" },
    fr: { name: "Dr. Karim Haddad", specialty: "Gastro-entérologie", address: "Sétif, Cité Nouvelle Ville", phone: "+213 36 XX XX XX" },
    en: { name: "Dr. Karim Haddad", specialty: "Gastroenterology", address: "Setif, New City District", phone: "+213 36 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=68",
    rating: 4.8,
    workingHours: { ar: "9 ص - 6 م", fr: "9h - 18h", en: "9 AM - 6 PM" },
    mapUrl: "https://maps.google.com/?q=Setif+Nouvelle+Ville",
    contactUrl: "https://wa.me/213555123456",
    services: { 
      ar: ["تشخيص وعلاج السيلياك", "تنظير علوي وسفلي", "استشارات متخصصة"],
      fr: ["Diagnostic et traitement cœliaque", "Endoscopie haute et basse", "Consultations spécialisées"],
      en: ["Celiac Diagnosis & Treatment", "Upper & Lower Endoscopy", "Specialized Consultations"]
    }
  },
  {
    ar: { name: "مركز الصحة للتغذية", specialty: "تغذية علاجية متخصصة", address: "تلمسان، وسط المدينة", phone: "+213 43 XX XX XX" },
    fr: { name: "Centre Santé Nutrition", specialty: "Nutrition thérapeutique spécialisée", address: "Tlemcen, centre-ville", phone: "+213 43 XX XX XX" },
    en: { name: "Health Nutrition Center", specialty: "Specialized Therapeutic Nutrition", address: "Tlemcen, City Center", phone: "+213 43 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=25",
    rating: 4.6,
    workingHours: { ar: "8 ص - 5 م", fr: "8h - 17h", en: "8 AM - 5 PM" },
    mapUrl: "https://maps.google.com/?q=Tlemcen+centre-ville",
    contactUrl: "mailto:contact@sante-nutrition.dz",
    services: { 
      ar: ["خطط غذائية شخصية", "متابعة مرضى السيلياك", "ورشات تثقيفية"],
      fr: ["Plans nutritionnels personnalisés", "Suivi des patients cœliaques", "Ateliers éducatifs"],
      en: ["Personalized Nutrition Plans", "Celiac Patient Follow-up", "Educational Workshops"]
    }
  },
  {
    ar: { name: "مستشفى فرانتز فانون", specialty: "الطب الباطني", address: "البليدة، وسط المدينة", phone: "+213 25 XX XX XX" },
    fr: { name: "Hôpital Frantz Fanon", specialty: "Médecine interne", address: "Blida, centre-ville", phone: "+213 25 XX XX XX" },
    en: { name: "Frantz Fanon Hospital", specialty: "Internal Medicine", address: "Blida, City Center", phone: "+213 25 XX XX XX" },
    img: "https://i.pravatar.cc/100?img=33",
    rating: 4.4,
    workingHours: { ar: "24 ساعة", fr: "24 heures", en: "24 Hours" },
    mapUrl: "https://maps.google.com/?q=Hopital+Frantz+Fanon+Blida",
    contactUrl: "tel:+21325XXXXXX",
    services: { 
      ar: ["فحوصات شاملة", "تشخيص أمراض المناعة", "رعاية متكاملة"],
      fr: ["Examens complets", "Diagnostic des maladies auto-immunes", "Soins intégrés"],
      en: ["Complete Examinations", "Autoimmune Disease Diagnosis", "Integrated Care"]
    }
  }
]

// Translations
const translations = {
  ar: {
    title: "العيادات والمختصون",
    subtitle: "مراكز طبية متخصصة في علاج السيلياك في الجزائر",
    whatToExpect: "ماذا تتوقع عند زيارة الطبيب؟",
    steps: "خطوات التشخيص والعلاج",
    specialty: "التخصص",
    address: "العنوان",
    phone: "الهاتف",
    workingHours: "ساعات العمل",
    services: "الخدمات المتوفرة",
    location: "📍 الموقع",
    contact: "💬 تواصل",
    langSwitch: "اللغة",
    step1Title: "الفحص السريري",
    step1Desc: "سيقوم الطبيب بفحصك وسؤالك عن الأعراض والتاريخ العائلي",
    step2Title: "فحوصات الدم",
    step2Desc: "فحص الأجسام المضادة للكشف عن السيلياك (tTG-IgA)",
    step3Title: "التنظير والخزعة",
    step3Desc: "أخذ عينة من الأمعاء الدقيقة للتأكد من التشخيص",
    step4Title: "خطة العلاج",
    step4Desc: "وضع خطة غذائية وبرنامج متابعة مع فريق طبي متخصص"
  },
  fr: {
    title: "Cliniques et Spécialistes",
    subtitle: "Centres médicaux spécialisés dans le traitement de la maladie cœliaque en Algérie",
    whatToExpect: "À quoi s'attendre lors de la visite médicale ?",
    steps: "Étapes du diagnostic et du traitement",
    specialty: "Spécialité",
    address: "Adresse",
    phone: "Téléphone",
    workingHours: "Horaires",
    services: "Services disponibles",
    location: "📍 Localisation",
    contact: "💬 Contact",
    langSwitch: "Langue",
    step1Title: "Examen clinique",
    step1Desc: "Le médecin vous examinera et vous posera des questions sur vos symptômes et vos antécédents familiaux",
    step2Title: "Analyses de sang",
    step2Desc: "Test d'anticorps pour détecter la maladie cœliaque (tTG-IgA)",
    step3Title: "Endoscopie et biopsie",
    step3Desc: "Prélèvement d'un échantillon de l'intestin grêle pour confirmer le diagnostic",
    step4Title: "Plan de traitement",
    step4Desc: "Élaboration d'un régime alimentaire et d'un programme de suivi avec une équipe médicale spécialisée"
  },
  en: {
    title: "Clinics & Specialists",
    subtitle: "Medical centers specialized in celiac disease treatment in Algeria",
    whatToExpect: "What to expect during your visit?",
    steps: "Diagnosis and treatment steps",
    specialty: "Specialty",
    address: "Address",
    phone: "Phone",
    workingHours: "Working Hours",
    services: "Available Services",
    location: "📍 Location",
    contact: "💬 Contact",
    langSwitch: "Language",
    step1Title: "Clinical Examination",
    step1Desc: "The doctor will examine you and ask about your symptoms and family history",
    step2Title: "Blood Tests",
    step2Desc: "Antibody test to detect celiac disease (tTG-IgA)",
    step3Title: "Endoscopy & Biopsy",
    step3Desc: "Taking a sample from the small intestine to confirm the diagnosis",
    step4Title: "Treatment Plan",
    step4Desc: "Creating a dietary plan and follow-up program with a specialized medical team"
  }
}

export default function ClinicsPage() {
  const { language, setLanguage } = useLanguageStore()
  const t = translations[language]
  const isRtl = language === 'ar'

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Language Switcher */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center gap-2"
      >
        <Button
          variant={language === 'ar' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('ar')}
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          العربية
        </Button>
        <Button
          variant={language === 'fr' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('fr')}
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          Français
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          English
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* What to Expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{t.whatToExpect}</CardTitle>
            <CardDescription>{t.steps}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: t.step1Title, desc: t.step1Desc },
                { title: t.step2Title, desc: t.step2Desc },
                { title: t.step3Title, desc: t.step3Desc },
                { title: t.step4Title, desc: t.step4Desc }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Clinics List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinicsData.map((clinic, index) => {
          const clinicInfo = clinic[language]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={clinic.img} 
                        alt={clinicInfo.name}
                        className="w-14 h-14 rounded-full border-2 border-primary/20 object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{clinicInfo.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4 shrink-0" />
                          {clinicInfo.address}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 shrink-0">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{clinic.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="secondary">{clinicInfo.specialty}</Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span dir="ltr">{clinicInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{clinic.workingHours[language]}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">{t.services}:</p>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services[language].map((service, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="flex-1" 
                      variant="outline"
                      onClick={() => window.open(clinic.mapUrl, '_blank')}
                    >
                      <ExternalLink className={`w-4 h-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                      {t.location}
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => window.open(clinic.contactUrl, '_blank')}
                    >
                      <MessageCircle className={`w-4 h-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                      {t.contact}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}