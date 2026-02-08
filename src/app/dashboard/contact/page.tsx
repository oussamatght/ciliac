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

const contactInfo = [
  {
    icon: Phone,
    title: "واتساب",
    value: "+213 783 32 13 19",
    description: "تواصل معنا مباشرة",
    link: "https://wa.me/213783321319"
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "glutenfrecilaic.dz@gmail.com",
    description: "نرد خلال 24 ساعة",
    link: "mailto:contact@ciliac-dz.com"
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "الجزائر العاصمة، الجزائر",
    description: "جمعية مرضى السيلياك",
    link: null
  },
  {
    icon: Clock,
    title: "ساعات التواصل",
    value: "السبت - الخميس",
    description: "9:00 ص - 6:00 م",
    link: null
  }
]

const faqs = [
  {
    question: "كيف يمكنني التأكد من أن منتجاً ما خالٍ من الغلوتين؟",
    answer: "ابحث عن علامة 'خالي من الغلوتين' المعتمدة على العبوة، واقرأ قائمة المكونات بعناية."
  },
  {
    question: "هل يمكنني تناول الشوفان؟",
    answer: "نعم، يمكن لمعظم مرضى السيلياك تناول الشوفان النقي الخالي من التلوث، لكن استشر طبيبك أولاً."
  },
  {
    question: "كيف أتعامل مع المناسبات الاجتماعية؟",
    answer: "أخبر المضيف مسبقاً، احمل طعامك الخاص إذا لزم الأمر، ولا تتردد في السؤال عن مكونات الأطعمة."
  }
]

export default function ContactPage() {
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
            <h1 className="text-3xl font-bold">تواصل معنا</h1>
            <p className="text-muted-foreground">نسعد بتواصلكم واستفساراتكم</p>
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
                أرسل رسالة
              </CardTitle>
              <CardDescription>سنرد عليك في أقرب وقت ممكن</CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-muted-foreground mb-4">شكراً لتواصلك معنا، سنرد عليك قريباً</p>
                  <Button onClick={() => setFormSubmitted(false)}>
                    إرسال رسالة أخرى
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم</Label>
                      <Input
                        id="name"
                        placeholder="اسمك الكامل"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: (e.target as HTMLInputElement).value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
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
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input
                      id="subject"
                      placeholder="موضوع الرسالة"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: (e.target as HTMLInputElement).value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <textarea
                      id="message"
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: (e.target as HTMLTextAreaElement).value })}
                      required
                      className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 ml-2" />
                    إرسال الرسالة
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
          {contactInfo.map((info, index) => (
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
        <h2 className="text-2xl font-bold mb-4">الأسئلة الشائعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {faqs.map((faq, index) => (
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
