"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FlaskConical, 
  BookOpen,
  Calendar,
  ExternalLink,
  Users,
  Globe
} from "lucide-react"

// Real research data from research.html
const researches = [
  {
    title: "مرض السيلياك",
    titleFr: "Maladie cœliaque",
    titleEn: "Celiac Disease",
    authors: "NCBI - National Center for Biotechnology Information",
    journal: "PubMed / NCBI",
    year: "2023",
    abstract: "مرض السيلياك هو اضطراب مناعي ذاتي يصيب الأمعاء الدقيقة عند تناول الغلوتين، ويؤدي إلى تلف الزغابات المعوية وسوء الامتصاص.",
    abstractFr: "La maladie cœliaque est un trouble auto-immun qui affecte l'intestin grêle lors de la consommation de gluten, entraînant des dommages aux villosités intestinales et une malabsorption.",
    tags: ["سيلياك", "مناعة ذاتية", "غلوتين"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK441900/"
  },
  {
    title: "التهاب الجلد الحلئي الشكل",
    titleFr: "Dermatite herpétiforme",
    titleEn: "Dermatitis Herpetiformis",
    authors: "NCBI Research Team",
    journal: "NCBI Books",
    year: "2023",
    abstract: "التهاب الجلد الحلئي الشكل هو مرض جلدي مرتبط بالسيلياك يظهر على شكل طفح جلدي حاك ومؤلم.",
    abstractFr: "La dermatite herpétiforme est une maladie cutanée liée à la maladie cœliaque qui se manifeste par une éruption cutanée prurigineuse et douloureuse.",
    tags: ["جلد", "طفح جلدي", "سيلياك"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK493179/"
  },
  {
    title: "نظام غذائي خالٍ من الغلوتين",
    titleFr: "Régime sans gluten",
    titleEn: "Gluten-Free Diet",
    authors: "NCBI Nutrition Research",
    journal: "NCBI Books",
    year: "2024",
    abstract: "النظام الغذائي الخالي من الغلوتين هو العلاج الرئيسي لمرض السيلياك، ويتطلب تجنب القمح والشعير والجاودار.",
    abstractFr: "Le régime sans gluten est le traitement principal de la maladie cœliaque, nécessitant d'éviter le blé, l'orge et le seigle.",
    tags: ["تغذية", "علاج", "حمية"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK536550/"
  },
  {
    title: "ترنح الغلوتين",
    titleFr: "Ataxie au gluten",
    titleEn: "Gluten Ataxia",
    authors: "Neurological Research Team",
    journal: "NCBI Neurology",
    year: "2023",
    abstract: "ترنح الغلوتين هو اضطراب عصبي نادر مرتبط بحساسية الغلوتين يؤثر على التوازن والتنسيق الحركي.",
    abstractFr: "L'ataxie au gluten est un trouble neurologique rare lié à la sensibilité au gluten affectant l'équilibre et la coordination motrice.",
    tags: ["أعصاب", "توازن", "غلوتين"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK526105/"
  },
  {
    title: "آلام البطن المزمنة",
    titleFr: "Douleur abdominale chronique",
    titleEn: "Chronic Abdominal Pain",
    authors: "Gastroenterology Research",
    journal: "NCBI GI Series",
    year: "2024",
    abstract: "آلام البطن المزمنة قد تكون من أعراض السيلياك غير المشخص وتتطلب فحصاً دقيقاً للتشخيص.",
    abstractFr: "La douleur abdominale chronique peut être un symptôme de la maladie cœliaque non diagnostiquée et nécessite un examen approfondi.",
    tags: ["ألم", "بطن", "تشخيص"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK551677/"
  },
  {
    title: "قرحة الفم",
    titleFr: "Aphtes buccaux",
    titleEn: "Oral Ulcers",
    authors: "Dental Health Research",
    journal: "NCBI Oral Health",
    year: "2023",
    abstract: "قرح الفم المتكررة قد تكون علامة على مرض السيلياك غير المكتشف.",
    abstractFr: "Les aphtes récurrents peuvent être un signe de maladie cœliaque non détectée.",
    tags: ["فم", "قرح", "أعراض"],
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4827300/"
  },
  {
    title: "نقص الحديد غير المبرر",
    titleFr: "Carence en fer inexpliquée",
    titleEn: "Unexplained Iron Deficiency",
    authors: "Hematology Research Group",
    journal: "PubMed Central",
    year: "2024",
    abstract: "نقص الحديد المستمر رغم العلاج قد يشير إلى سوء امتصاص ناتج عن السيلياك.",
    abstractFr: "Une carence en fer persistante malgré le traitement peut indiquer une malabsorption due à la maladie cœliaque.",
    tags: ["حديد", "فقر دم", "امتصاص"],
    link: "https://pubmed.ncbi.nlm.nih.gov/26605537/"
  },
  {
    title: "التعب المزمن والسيلياك",
    titleFr: "Fatigue chronique et cœliaque",
    titleEn: "Chronic Fatigue and Celiac",
    authors: "Fatigue Research Institute",
    journal: "NCBI Research",
    year: "2023",
    abstract: "التعب المزمن غير المبرر قد يكون أحد أعراض السيلياك الصامت.",
    abstractFr: "La fatigue chronique inexpliquée peut être un symptôme de la maladie cœliaque silencieuse.",
    tags: ["تعب", "إرهاق", "أعراض صامتة"],
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8467702/"
  },
  {
    title: "هشاشة العظام والسيلياك",
    titleFr: "Ostéoporose et cœliaque",
    titleEn: "Osteoporosis and Celiac Disease",
    authors: "Bone Health Research",
    journal: "ScienceDirect",
    year: "2024",
    abstract: "سوء امتصاص الكالسيوم وفيتامين D بسبب السيلياك قد يؤدي إلى هشاشة العظام.",
    abstractFr: "La malabsorption du calcium et de la vitamine D due à la maladie cœliaque peut entraîner l'ostéoporose.",
    tags: ["عظام", "كالسيوم", "فيتامين D"],
    link: "https://www.sciencedirect.com/topics/medicine-and-dentistry/gluten-ataxia"
  },
  {
    title: "السيلياك والعقم",
    titleFr: "Cœliaque et infertilité",
    titleEn: "Celiac Disease and Infertility",
    authors: "Reproductive Health Research",
    journal: "PubMed Central",
    year: "2023",
    abstract: "مرض السيلياك غير المشخص قد يرتبط بمشاكل الخصوبة عند النساء والرجال.",
    abstractFr: "La maladie cœliaque non diagnostiquée peut être liée à des problèmes de fertilité chez les femmes et les hommes.",
    tags: ["خصوبة", "إنجاب", "صحة"],
    link: "https://pubmed.ncbi.nlm.nih.gov/24533607/"
  },
  {
    title: "السيلياك عند الأطفال",
    titleFr: "Cœliaque chez les enfants",
    titleEn: "Celiac Disease in Children",
    authors: "Pediatric Gastroenterology Team",
    journal: "NCBI Pediatrics",
    year: "2024",
    abstract: "تشخيص مبكر لمرض السيلياك عند الأطفال ضروري لمنع مضاعفات النمو.",
    abstractFr: "Un diagnostic précoce de la maladie cœliaque chez les enfants est essentiel pour prévenir les complications de croissance.",
    tags: ["أطفال", "نمو", "تشخيص مبكر"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK441900/"
  },
  {
    title: "الاختبارات المصلية للسيلياك",
    titleFr: "Tests sérologiques pour la maladie cœliaque",
    titleEn: "Serological Tests for Celiac Disease",
    authors: "Laboratory Medicine Research",
    journal: "Clinical Chemistry Journal",
    year: "2024",
    abstract: "الاختبارات المصلية بما في ذلك الأجسام المضادة tTG-IgA هي الخطوة الأولى في تشخيص السيلياك.",
    abstractFr: "Les tests sérologiques, y compris les anticorps tTG-IgA, sont la première étape du diagnostic de la maladie cœliaque.",
    tags: ["تحاليل", "تشخيص", "أجسام مضادة"],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK441900/"
  }
]

const statistics = [
  { label: "نسبة الإصابة عالمياً", value: "1%", description: "من السكان" },
  { label: "نسبة غير المشخصين", value: "83%", description: "من المصابين" },
  { label: "متوسط وقت التشخيص", value: "6-10", description: "سنوات" },
  { label: "تحسن الأعراض", value: "95%", description: "بعد الحمية" }
]

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">الأبحاث العلمية</h1>
            <p className="text-muted-foreground">أحدث الدراسات والأبحاث عن السيلياك من مصادر موثوقة</p>
          </div>
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {statistics.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
              <p className="text-xs mt-1 font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Research Papers */}
      <div className="space-y-4">
        {researches.map((research, index) => (
          <motion.div
            key={research.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg leading-relaxed">{research.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{research.titleFr} | {research.titleEn}</p>
                    <CardDescription className="flex items-center gap-4 mt-2 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {research.authors}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {research.journal}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {research.year}
                      </span>
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={research.link} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 ml-1" />
                      عرض
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{research.abstract}</p>
                <p className="text-xs text-muted-foreground/70 mb-4" dir="ltr">{research.abstractFr}</p>
                <div className="flex flex-wrap gap-2">
                  {research.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* External Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>مصادر علمية موثوقة</CardTitle>
            <CardDescription>روابط مباشرة لقواعد البيانات العلمية</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "NCBI - المركز الوطني لمعلومات التقنية الحيوية", url: "https://www.ncbi.nlm.nih.gov/" },
                { name: "PubMed - قاعدة بيانات البحوث الطبية", url: "https://pubmed.ncbi.nlm.nih.gov/" },
                { name: "ScienceDirect - مجلات علمية محكمة", url: "https://www.sciencedirect.com/" },
                { name: "Celiac Disease Foundation", url: "https://celiac.org/" }
              ].map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  className="justify-between h-auto py-3"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span>{link.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
