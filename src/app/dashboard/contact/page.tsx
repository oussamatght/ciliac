"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Phone, 
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2
} from "lucide-react"
import { useLanguageStore } from "@/lib/store"
import { t, getDirection, type Language } from "@/lib/translations"

const getContactInfo = (lang: Language) => [
  {
    icon: Phone,
    title: lang === 'ar' ? 'واتساب' : 'WhatsApp',
    value: "+213 783 32 13 19",
    description: lang === 'ar' ? 'تواصل معنا مباشرة' : lang === 'fr' ? 'Contactez-nous directement' : 'Contact us directly',
    link: "https://wa.me/213783321319"
  },
  {
    icon: Mail,
    title: lang === 'ar' ? 'البريد الإلكتروني' : 'Email',
    value: "glutenfrecilaic.dz@gmail.com",
    description: lang === 'ar' ? 'نرد خلال 24 ساعة' : lang === 'fr' ? 'Réponse sous 24h' : 'We reply within 24 hours',
    link: "mailto:glutenfrecilaic.dz@gmail.com"
  },
  {
    icon: MapPin,
    title: lang === 'ar' ? 'الموقع' : lang === 'fr' ? 'Localisation' : 'Location',
    value: lang === 'ar' ? 'الجزائر العاصمة، الجزائر' : 'Alger, Algérie',
    description: lang === 'ar' ? 'جمعية مرضى الأمراض المزمنة' : lang === 'fr' ? 'Association des maladies chroniques' : 'Chronic Disease Association',
    link: null
  },
  {
    icon: Clock,
    title: lang === 'ar' ? 'ساعات التواصل' : lang === 'fr' ? 'Heures de contact' : 'Contact Hours',
    value: lang === 'ar' ? 'السبت - الخميس' : lang === 'fr' ? 'Samedi - Jeudi' : 'Saturday - Thursday',
    description: lang === 'ar' ? '9:00 ص - 6:00 م' : '9:00 AM - 6:00 PM',
    link: null
  }
]

const getFaqs = (lang: Language) => [
  {
    question: lang === 'ar' ? 'كيف يمكنني التأكد من أن منتجاً ما خالٍ من الغلوتين؟' : lang === 'fr' ? 'Comment puis-je vérifier qu\'un produit est sans gluten ?' : 'How can I verify if a product is gluten-free?',
    answer: lang === 'ar' ? 'ابحث عن علامة \'خالي من الغلوتين\' المعتمدة على العبوة، واقرأ قائمة المكونات بعناية.' : lang === 'fr' ? 'Cherchez le label « sans gluten » certifié sur l\'emballage et lisez attentivement la liste des ingrédients.' : 'Look for the certified "gluten-free" label on the packaging and read the ingredients list carefully.'
  },
  {
    question: lang === 'ar' ? 'هل يمكنني تناول الشوفان؟' : lang === 'fr' ? 'Puis-je manger de l\'avoine ?' : 'Can I eat oats?',
    answer: lang === 'ar' ? 'نعم، يمكن لمعظم مرضى السيلياك تناول الشوفان النقي الخالي من التلوث، لكن استشر طبيبك أولاً.' : lang === 'fr' ? 'Oui, la plupart des patients cœliaques peuvent manger de l\'avoine pure non contaminée, mais consultez d\'abord votre médecin.' : 'Yes, most celiac patients can eat pure, uncontaminated oats, but consult your doctor first.'
  },
  {
    question: lang === 'ar' ? 'كيف أتعامل مع المناسبات الاجتماعية؟' : lang === 'fr' ? 'Comment gérer les événements sociaux ?' : 'How do I handle social events?',
    answer: lang === 'ar' ? 'أخبر المضيف مسبقاً، احمل طعامك الخاص إذا لزم الأمر، ولا تتردد في السؤال عن مكونات الأطعمة.' : lang === 'fr' ? 'Informez l\'hôte à l\'avance, apportez votre propre nourriture si nécessaire, et n\'hésitez pas à demander les ingrédients.' : 'Inform the host in advance, bring your own food if needed, and don\'t hesitate to ask about ingredients.'
  }
]

export default function ContactPage() {
  const { language } = useLanguageStore()
  const dir = getDirection(language)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
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
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t('contact.title', language)}</h1>
            <p className="text-muted-foreground">{t('contact.description', language)}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                {language === 'ar' ? 'أرسل رسالة' : language === 'fr' ? 'Envoyer un message' : 'Send a Message'}
              </CardTitle>
              <CardDescription>{language === 'ar' ? 'سنرد عليك في أقرب وقت ممكن' : language === 'fr' ? 'Nous vous répondrons dès que possible' : 'We will reply as soon as possible'}</CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : language === 'fr' ? 'Votre message a été envoyé avec succès!' : 'Your message has been sent successfully!'}</h3>
                  <p className="text-muted-foreground mb-4">{language === 'ar' ? 'شكراً لتواصلك معنا، سنرد عليك قريباً' : language === 'fr' ? 'Merci de nous avoir contactés, nous vous répondrons bientôt' : 'Thank you for contacting us, we will reply soon'}</p>
                  <Button onClick={() => setFormSubmitted(false)}>
                    {language === 'ar' ? 'إرسال رسالة أخرى' : language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.name', language)}</Label>
                      <Input
                        id="name"
                        placeholder={language === 'ar' ? 'اسمك الكامل' : language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: (e.target as HTMLInputElement).value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value })}
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{language === 'ar' ? 'الموضوع' : language === 'fr' ? 'Sujet' : 'Subject'}</Label>
                    <Input
                      id="subject"
                      placeholder={language === 'ar' ? 'موضوع الرسالة' : language === 'fr' ? 'Sujet du message' : 'Message subject'}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: (e.target as HTMLInputElement).value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message', language)}</Label>
                    <textarea
                      id="message"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : language === 'fr' ? 'Écrivez votre message ici...' : 'Write your message here...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: (e.target as HTMLTextAreaElement).value })}
                      required
                      className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 ml-2" />
                    {t('contact.send', language)}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {getContactInfo(language).map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{info.title}</p>
                        <p className="text-sm" dir="ltr">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-sm">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{language === 'ar' ? 'الأسئلة الشائعة' : language === 'fr' ? 'Questions fréquentes' : 'FAQ'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getFaqs(language).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
