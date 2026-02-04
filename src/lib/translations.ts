// Centralized translations for all pages
export type Language = 'ar' | 'fr' | 'en'

export const translations = {
  // Common translations used across pages
  common: {
    ar: {
      welcome: "مرحباً",
      goodMorning: "صباح الخير",
      goodAfternoon: "مساء الخير",
      goodEvening: "مساء الخير",
      loading: "جاري التحميل...",
      error: "حدث خطأ",
      success: "تم بنجاح",
      save: "حفظ",
      cancel: "إلغاء",
      submit: "إرسال",
      close: "إغلاق",
      back: "رجوع",
      next: "التالي",
      viewAll: "عرض الكل",
      search: "بحث",
      filter: "تصفية",
      language: "اللغة",
      increasing: "متزايد",
      minutes: "دقيقة",
      hours: "ساعات"
    },
    fr: {
      welcome: "Bienvenue",
      goodMorning: "Bonjour",
      goodAfternoon: "Bon après-midi",
      goodEvening: "Bonsoir",
      loading: "Chargement...",
      error: "Une erreur s'est produite",
      success: "Succès",
      save: "Enregistrer",
      cancel: "Annuler",
      submit: "Soumettre",
      close: "Fermer",
      back: "Retour",
      next: "Suivant",
      viewAll: "Voir tout",
      search: "Rechercher",
      filter: "Filtrer",
      language: "Langue",
      increasing: "En hausse",
      minutes: "minutes",
      hours: "heures"
    },
    en: {
      welcome: "Welcome",
      goodMorning: "Good Morning",
      goodAfternoon: "Good Afternoon",
      goodEvening: "Good Evening",
      loading: "Loading...",
      error: "An error occurred",
      success: "Success",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      close: "Close",
      back: "Back",
      next: "Next",
      viewAll: "View All",
      search: "Search",
      filter: "Filter",
      language: "Language",
      increasing: "Increasing",
      minutes: "minutes",
      hours: "hours"
    }
  },

  // Navigation/Sidebar
  nav: {
    ar: {
      mainMenu: "القائمة الرئيسية",
      home: "الرئيسية",
      scanner: "ماسح الباركود",
      nutrition: "التغذية",
      recipes: "الوصفات",
      tips: "النصائح",
      sport: "الرياضة",
      mental: "الصحة النفسية",
      clinics: "العيادات",
      maps: "الخريطة",
      research: "الأبحاث",
      partners: "الشركاء",
      contact: "تواصل معنا",
      about: "عن التطبيق",
      prescription: "الوصفة الطبية",
      logout: "تسجيل الخروج",
      lightMode: "الوضع الفاتح",
      darkMode: "الوضع الداكن"
    },
    fr: {
      mainMenu: "Menu Principal",
      home: "Accueil",
      scanner: "Scanner",
      nutrition: "Nutrition",
      recipes: "Recettes",
      tips: "Conseils",
      sport: "Sport",
      mental: "Santé Mentale",
      clinics: "Cliniques",
      maps: "Carte",
      research: "Recherches",
      partners: "Partenaires",
      contact: "Contact",
      about: "À Propos",
      prescription: "Ordonnance",
      logout: "Déconnexion",
      lightMode: "Mode Clair",
      darkMode: "Mode Sombre"
    },
    en: {
      mainMenu: "Main Menu",
      home: "Home",
      scanner: "Scanner",
      nutrition: "Nutrition",
      recipes: "Recipes",
      tips: "Tips",
      sport: "Sport",
      mental: "Mental Health",
      clinics: "Clinics",
      maps: "Map",
      research: "Research",
      partners: "Partners",
      contact: "Contact",
      about: "About",
      prescription: "Prescription",
      logout: "Logout",
      lightMode: "Light Mode",
      darkMode: "Dark Mode"
    }
  },

  // Dashboard Home Page
  dashboard: {
    ar: {
      welcomeMessage: "مرحباً بك في دليلك الشامل لحياة صحية خالية من الغلوتين.",
      discoverMessage: "اكتشف وصفات جديدة ونصائح مفيدة كل يوم.",
      availableRecipes: "وصفات متاحة",
      healthTips: "نصائح صحية",
      activeUsers: "مستخدم نشط",
      scientificArticles: "مقال علمي",
      latestRecipes: "أحدث الوصفات",
      newGlutenFreeRecipes: "وصفات جديدة خالية من الغلوتين",
      dailyTips: "نصائح اليوم",
      helpfulTipsForCeliac: "نصائح مفيدة للتعايش مع السيلياك"
    },
    fr: {
      welcomeMessage: "Bienvenue dans votre guide complet pour une vie saine sans gluten.",
      discoverMessage: "Découvrez de nouvelles recettes et des conseils utiles chaque jour.",
      availableRecipes: "Recettes disponibles",
      healthTips: "Conseils santé",
      activeUsers: "Utilisateurs actifs",
      scientificArticles: "Articles scientifiques",
      latestRecipes: "Dernières Recettes",
      newGlutenFreeRecipes: "Nouvelles recettes sans gluten",
      dailyTips: "Conseils du Jour",
      helpfulTipsForCeliac: "Conseils utiles pour vivre avec la maladie cœliaque"
    },
    en: {
      welcomeMessage: "Welcome to your comprehensive guide for a healthy gluten-free life.",
      discoverMessage: "Discover new recipes and helpful tips every day.",
      availableRecipes: "Available Recipes",
      healthTips: "Health Tips",
      activeUsers: "Active Users",
      scientificArticles: "Scientific Articles",
      latestRecipes: "Latest Recipes",
      newGlutenFreeRecipes: "New gluten-free recipes",
      dailyTips: "Daily Tips",
      helpfulTipsForCeliac: "Helpful tips for living with celiac disease"
    }
  },

  // Nutrition Page
  nutrition: {
    ar: {
      title: "دليل التغذية",
      subtitle: "كل ما تحتاج معرفته عن الأطعمة الآمنة والممنوعة",
      safeFoods: "أطعمة آمنة",
      unsafeFoods: "أطعمة ممنوعة",
      tips: "نصائح",
      safeProteins: "البروتينات الآمنة",
      safeGrains: "الحبوب الآمنة",
      dairyProducts: "منتجات الألبان",
      fruitsVegetables: "الفواكه والخضروات"
    },
    fr: {
      title: "Guide Nutritionnel",
      subtitle: "Tout ce que vous devez savoir sur les aliments sûrs et interdits",
      safeFoods: "Aliments Sûrs",
      unsafeFoods: "Aliments Interdits",
      tips: "Conseils",
      safeProteins: "Protéines Sûres",
      safeGrains: "Céréales Sûres",
      dairyProducts: "Produits Laitiers",
      fruitsVegetables: "Fruits et Légumes"
    },
    en: {
      title: "Nutrition Guide",
      subtitle: "Everything you need to know about safe and forbidden foods",
      safeFoods: "Safe Foods",
      unsafeFoods: "Forbidden Foods",
      tips: "Tips",
      safeProteins: "Safe Proteins",
      safeGrains: "Safe Grains",
      dairyProducts: "Dairy Products",
      fruitsVegetables: "Fruits & Vegetables"
    }
  },

  // Recipes Page
  recipes: {
    ar: {
      title: "وصفات خالية من الغلوتين",
      subtitle: "وصفات لذيذة وصحية لحياة أفضل",
      searchPlaceholder: "ابحث عن وصفة...",
      allCategories: "جميع الأصناف",
      difficulty: "الصعوبة",
      servings: "الحصص",
      calories: "سعرات",
      ingredients: "المكونات",
      instructions: "طريقة التحضير",
      easy: "سهل",
      medium: "متوسط",
      hard: "صعب"
    },
    fr: {
      title: "Recettes Sans Gluten",
      subtitle: "Recettes délicieuses et saines pour une vie meilleure",
      searchPlaceholder: "Rechercher une recette...",
      allCategories: "Toutes les catégories",
      difficulty: "Difficulté",
      servings: "Portions",
      calories: "Calories",
      ingredients: "Ingrédients",
      instructions: "Instructions",
      easy: "Facile",
      medium: "Moyen",
      hard: "Difficile"
    },
    en: {
      title: "Gluten-Free Recipes",
      subtitle: "Delicious and healthy recipes for a better life",
      searchPlaceholder: "Search for a recipe...",
      allCategories: "All Categories",
      difficulty: "Difficulty",
      servings: "Servings",
      calories: "Calories",
      ingredients: "Ingredients",
      instructions: "Instructions",
      easy: "Easy",
      medium: "Medium",
      hard: "Hard"
    }
  },

  // Tips Page
  tips: {
    ar: {
      title: "النصائح والإرشادات",
      subtitle: "نصائح عملية للتعايش مع السيلياك",
      quickTips: "نصائح سريعة",
      importantWarning: "تنبيه مهم",
      shoppingTips: "التسوق والمشتريات",
      cookingTips: "الطبخ في المنزل",
      eatingOut: "تناول الطعام خارجاً",
      traveling: "السفر",
      socialEvents: "المناسبات الاجتماعية"
    },
    fr: {
      title: "Conseils et Directives",
      subtitle: "Conseils pratiques pour vivre avec la maladie cœliaque",
      quickTips: "Conseils Rapides",
      importantWarning: "Avertissement Important",
      shoppingTips: "Achats et Courses",
      cookingTips: "Cuisiner à la Maison",
      eatingOut: "Manger à l'Extérieur",
      traveling: "Voyager",
      socialEvents: "Événements Sociaux"
    },
    en: {
      title: "Tips & Guidelines",
      subtitle: "Practical tips for living with celiac disease",
      quickTips: "Quick Tips",
      importantWarning: "Important Warning",
      shoppingTips: "Shopping Tips",
      cookingTips: "Cooking at Home",
      eatingOut: "Eating Out",
      traveling: "Traveling",
      socialEvents: "Social Events"
    }
  },

  // Sport Page
  sport: {
    ar: {
      title: "الرياضة والنشاط البدني",
      subtitle: "تمارين مناسبة لمرضى السيلياك",
      importantNote: "ملاحظة مهمة",
      lowIntensity: "منخفضة الشدة",
      mediumIntensity: "متوسطة الشدة",
      highIntensity: "عالية الشدة",
      duration: "المدة",
      caloriesBurned: "السعرات المحروقة",
      benefits: "الفوائد",
      exerciseTips: "نصائح التمرين"
    },
    fr: {
      title: "Sport et Activité Physique",
      subtitle: "Exercices adaptés aux patients cœliaques",
      importantNote: "Note Importante",
      lowIntensity: "Faible Intensité",
      mediumIntensity: "Intensité Moyenne",
      highIntensity: "Haute Intensité",
      duration: "Durée",
      caloriesBurned: "Calories Brûlées",
      benefits: "Avantages",
      exerciseTips: "Conseils d'Exercice"
    },
    en: {
      title: "Sport & Physical Activity",
      subtitle: "Exercises suitable for celiac patients",
      importantNote: "Important Note",
      lowIntensity: "Low Intensity",
      mediumIntensity: "Medium Intensity",
      highIntensity: "High Intensity",
      duration: "Duration",
      caloriesBurned: "Calories Burned",
      benefits: "Benefits",
      exerciseTips: "Exercise Tips"
    }
  },

  // Mental Health Page
  mental: {
    ar: {
      title: "الصحة النفسية",
      subtitle: "العناية بصحتك النفسية مع السيلياك",
      intro: "التعايش مع مرض السيلياك لا يؤثر فقط على جسمك، بل قد يؤثر أيضاً على صحتك النفسية.",
      acceptYourCondition: "تقبل حالتك",
      talkAboutFeelings: "تحدث عن مشاعرك",
      practiceRelaxation: "مارس تقنيات الاسترخاء",
      celebrateSmallWins: "احتفل بالإنجازات الصغيرة",
      emotionalStages: "مراحل التكيف العاطفي",
      supportResources: "موارد الدعم"
    },
    fr: {
      title: "Santé Mentale",
      subtitle: "Prendre soin de votre santé mentale avec la maladie cœliaque",
      intro: "Vivre avec la maladie cœliaque n'affecte pas seulement votre corps, mais peut aussi affecter votre santé mentale.",
      acceptYourCondition: "Acceptez votre condition",
      talkAboutFeelings: "Parlez de vos sentiments",
      practiceRelaxation: "Pratiquez des techniques de relaxation",
      celebrateSmallWins: "Célébrez les petites victoires",
      emotionalStages: "Étapes d'Adaptation Émotionnelle",
      supportResources: "Ressources de Soutien"
    },
    en: {
      title: "Mental Health",
      subtitle: "Taking care of your mental health with celiac disease",
      intro: "Living with celiac disease doesn't just affect your body, it can also affect your mental health.",
      acceptYourCondition: "Accept your condition",
      talkAboutFeelings: "Talk about your feelings",
      practiceRelaxation: "Practice relaxation techniques",
      celebrateSmallWins: "Celebrate small wins",
      emotionalStages: "Emotional Adaptation Stages",
      supportResources: "Support Resources"
    }
  },

  // Maps Page
  maps: {
    ar: {
      title: "خريطة المتاجر",
      subtitle: "اعثر على أقرب متجر للمنتجات الخالية من الغلوتين",
      stores: "المتاجر",
      bakeries: "المخابز",
      restaurants: "المطاعم",
      supermarkets: "السوبرماركت",
      address: "العنوان",
      phone: "الهاتف",
      directions: "الاتجاهات",
      visitPage: "زيارة الصفحة"
    },
    fr: {
      title: "Carte des Magasins",
      subtitle: "Trouvez le magasin de produits sans gluten le plus proche",
      stores: "Magasins",
      bakeries: "Boulangeries",
      restaurants: "Restaurants",
      supermarkets: "Supermarchés",
      address: "Adresse",
      phone: "Téléphone",
      directions: "Itinéraire",
      visitPage: "Visiter la Page"
    },
    en: {
      title: "Store Map",
      subtitle: "Find the nearest gluten-free products store",
      stores: "Stores",
      bakeries: "Bakeries",
      restaurants: "Restaurants",
      supermarkets: "Supermarkets",
      address: "Address",
      phone: "Phone",
      directions: "Directions",
      visitPage: "Visit Page"
    }
  },

  // Research Page
  research: {
    ar: {
      title: "الأبحاث العلمية",
      subtitle: "أحدث الدراسات والأبحاث عن السيلياك من مصادر موثوقة",
      globalPrevalence: "نسبة الإصابة عالمياً",
      undiagnosed: "نسبة غير المشخصين",
      avgDiagnosisTime: "متوسط وقت التشخيص",
      symptomImprovement: "تحسن الأعراض",
      readMore: "قراءة المزيد"
    },
    fr: {
      title: "Recherches Scientifiques",
      subtitle: "Dernières études et recherches sur la maladie cœliaque",
      globalPrevalence: "Prévalence Mondiale",
      undiagnosed: "Non Diagnostiqués",
      avgDiagnosisTime: "Temps de Diagnostic Moyen",
      symptomImprovement: "Amélioration des Symptômes",
      readMore: "Lire Plus"
    },
    en: {
      title: "Scientific Research",
      subtitle: "Latest studies and research on celiac disease",
      globalPrevalence: "Global Prevalence",
      undiagnosed: "Undiagnosed",
      avgDiagnosisTime: "Average Diagnosis Time",
      symptomImprovement: "Symptom Improvement",
      readMore: "Read More"
    }
  },

  // Partners Page
  partners: {
    ar: {
      title: "شركاؤنا",
      subtitle: "المؤسسات والشركات الداعمة لمجتمع السيلياك",
      partnershipBenefits: "مزايا الشراكة",
      benefitFromNetwork: "استفد من شبكة شركائنا",
      services: "الخدمات",
      visitPage: "زيارة الصفحة",
      becomePartner: "انضم كشريك",
      becomePartnerDesc: "إذا كنت تملك متجراً أو مخبزة متخصصة في المنتجات الخالية من الغلوتين، انضم إلينا"
    },
    fr: {
      title: "Nos Partenaires",
      subtitle: "Institutions et entreprises soutenant la communauté cœliaque",
      partnershipBenefits: "Avantages du Partenariat",
      benefitFromNetwork: "Bénéficiez de notre réseau de partenaires",
      services: "Services",
      visitPage: "Visiter la Page",
      becomePartner: "Devenir Partenaire",
      becomePartnerDesc: "Si vous possédez un magasin ou une boulangerie spécialisée sans gluten, rejoignez-nous"
    },
    en: {
      title: "Our Partners",
      subtitle: "Institutions and companies supporting the celiac community",
      partnershipBenefits: "Partnership Benefits",
      benefitFromNetwork: "Benefit from our partner network",
      services: "Services",
      visitPage: "Visit Page",
      becomePartner: "Become a Partner",
      becomePartnerDesc: "If you own a gluten-free specialized store or bakery, join us"
    }
  },

  // Contact Page
  contact: {
    ar: {
      title: "تواصل معنا",
      subtitle: "نسعد بتواصلكم واستفساراتكم",
      sendMessage: "أرسل رسالة",
      weWillReply: "سنرد عليك في أقرب وقت ممكن",
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال",
      messageSent: "تم إرسال رسالتك بنجاح!",
      thankYou: "شكراً لتواصلك معنا، سنرد عليك قريباً",
      sendAnother: "إرسال رسالة أخرى",
      contactInfo: "معلومات التواصل",
      whatsapp: "واتساب",
      contactDirectly: "تواصل معنا مباشرة",
      replyIn24: "نرد خلال 24 ساعة",
      location: "الموقع",
      workingHours: "ساعات التواصل",
      faq: "الأسئلة الشائعة"
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Nous sommes heureux de recevoir vos questions",
      sendMessage: "Envoyer un Message",
      weWillReply: "Nous vous répondrons dès que possible",
      name: "Nom",
      email: "E-mail",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer",
      messageSent: "Votre message a été envoyé avec succès!",
      thankYou: "Merci de nous avoir contactés, nous vous répondrons bientôt",
      sendAnother: "Envoyer un autre message",
      contactInfo: "Informations de Contact",
      whatsapp: "WhatsApp",
      contactDirectly: "Contactez-nous directement",
      replyIn24: "Nous répondons sous 24 heures",
      location: "Emplacement",
      workingHours: "Heures de Contact",
      faq: "Questions Fréquentes"
    },
    en: {
      title: "Contact Us",
      subtitle: "We're happy to hear from you",
      sendMessage: "Send a Message",
      weWillReply: "We'll reply as soon as possible",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      messageSent: "Your message was sent successfully!",
      thankYou: "Thank you for contacting us, we'll reply soon",
      sendAnother: "Send another message",
      contactInfo: "Contact Information",
      whatsapp: "WhatsApp",
      contactDirectly: "Contact us directly",
      replyIn24: "We reply within 24 hours",
      location: "Location",
      workingHours: "Contact Hours",
      faq: "FAQ"
    }
  },

  // About Page
  about: {
    ar: {
      title: "عن التطبيق",
      subtitle: "تعرف على CILIAC ورسالتنا",
      slogan: "دليلك الشامل لحياة صحية وسعيدة خالية من الغلوتين",
      ourMission: "رسالتنا",
      missionText: "نسعى لتوفير منصة شاملة تدعم مرضى السيلياك في رحلتهم نحو حياة صحية.",
      comprehensiveGuide: "دليل شامل",
      continuousSupport: "دعم مستمر",
      practicalSolutions: "حلول عملية",
      whatIsCeliac: "ما هو مرض السيلياك؟",
      ourTeam: "فريقنا",
      milestones: "إنجازاتنا"
    },
    fr: {
      title: "À Propos",
      subtitle: "Découvrez CILIAC et notre mission",
      slogan: "Votre guide complet pour une vie saine et heureuse sans gluten",
      ourMission: "Notre Mission",
      missionText: "Nous nous efforçons de fournir une plateforme complète qui soutient les patients cœliaques dans leur parcours vers une vie saine.",
      comprehensiveGuide: "Guide Complet",
      continuousSupport: "Soutien Continu",
      practicalSolutions: "Solutions Pratiques",
      whatIsCeliac: "Qu'est-ce que la maladie cœliaque?",
      ourTeam: "Notre Équipe",
      milestones: "Nos Réalisations"
    },
    en: {
      title: "About",
      subtitle: "Learn about CILIAC and our mission",
      slogan: "Your comprehensive guide for a healthy and happy gluten-free life",
      ourMission: "Our Mission",
      missionText: "We strive to provide a comprehensive platform that supports celiac patients in their journey towards a healthy life.",
      comprehensiveGuide: "Comprehensive Guide",
      continuousSupport: "Continuous Support",
      practicalSolutions: "Practical Solutions",
      whatIsCeliac: "What is Celiac Disease?",
      ourTeam: "Our Team",
      milestones: "Our Milestones"
    }
  },

  // Scanner Page
  scanner: {
    ar: {
      title: "ماسح الباركود",
      subtitle: "امسح الباركود للتحقق من المنتج",
      startScan: "بدء المسح",
      stopScan: "إيقاف المسح",
      scanBarcode: "امسح باركود المنتج",
      pointCamera: "وجّه الكاميرا نحو الباركود",
      productInfo: "معلومات المنتج",
      productName: "اسم المنتج",
      brand: "العلامة التجارية",
      ingredients: "المكونات",
      glutenFree: "خالٍ من الغلوتين",
      containsGluten: "يحتوي على الغلوتين",
      unknownStatus: "غير محدد",
      productNotFound: "المنتج غير موجود في قاعدة البيانات",
      scanAnother: "مسح منتج آخر",
      selectCamera: "اختر الكاميرا"
    },
    fr: {
      title: "Scanner de Code-barres",
      subtitle: "Scannez le code-barres pour vérifier le produit",
      startScan: "Démarrer le Scan",
      stopScan: "Arrêter le Scan",
      scanBarcode: "Scannez le code-barres du produit",
      pointCamera: "Pointez la caméra vers le code-barres",
      productInfo: "Informations sur le Produit",
      productName: "Nom du Produit",
      brand: "Marque",
      ingredients: "Ingrédients",
      glutenFree: "Sans Gluten",
      containsGluten: "Contient du Gluten",
      unknownStatus: "Non Déterminé",
      productNotFound: "Produit non trouvé dans la base de données",
      scanAnother: "Scanner un autre produit",
      selectCamera: "Sélectionner la Caméra"
    },
    en: {
      title: "Barcode Scanner",
      subtitle: "Scan barcode to verify the product",
      startScan: "Start Scan",
      stopScan: "Stop Scan",
      scanBarcode: "Scan product barcode",
      pointCamera: "Point camera at barcode",
      productInfo: "Product Information",
      productName: "Product Name",
      brand: "Brand",
      ingredients: "Ingredients",
      glutenFree: "Gluten Free",
      containsGluten: "Contains Gluten",
      unknownStatus: "Unknown",
      productNotFound: "Product not found in database",
      scanAnother: "Scan another product",
      selectCamera: "Select Camera"
    }
  },

  // Login Page
  login: {
    ar: {
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      welcomeBack: "مرحباً بعودتك",
      createAccount: "أنشئ حسابك الآن",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      name: "الاسم الكامل",
      loginButton: "دخول",
      registerButton: "تسجيل",
      noAccount: "ليس لديك حساب؟",
      hasAccount: "لديك حساب بالفعل؟",
      forgotPassword: "نسيت كلمة المرور؟"
    },
    fr: {
      login: "Connexion",
      register: "Créer un Compte",
      welcomeBack: "Bon Retour",
      createAccount: "Créez votre compte maintenant",
      email: "E-mail",
      password: "Mot de passe",
      name: "Nom Complet",
      loginButton: "Se Connecter",
      registerButton: "S'inscrire",
      noAccount: "Pas de compte?",
      hasAccount: "Vous avez déjà un compte?",
      forgotPassword: "Mot de passe oublié?"
    },
    en: {
      login: "Login",
      register: "Register",
      welcomeBack: "Welcome Back",
      createAccount: "Create your account now",
      email: "Email",
      password: "Password",
      name: "Full Name",
      loginButton: "Login",
      registerButton: "Register",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      forgotPassword: "Forgot password?"
    }
  },

  // Prescription Page
  prescription: {
    ar: {
      title: "الوصفة الطبية",
      subtitle: "قم بتحميل وصفتك الطبية لتحليلها",
      uploadPrescription: "تحميل الوصفة",
      dragAndDrop: "اسحب وأفلت الملف هنا أو انقر للاختيار",
      supportedFormats: "الصيغ المدعومة: PDF, JPG, PNG",
      maxFileSize: "الحجم الأقصى: 5MB",
      uploadedFile: "الملف المحمل",
      removeFile: "إزالة الملف",
      analyzeButton: "تحليل الوصفة",
      prescriptionHistory: "سجل الوصفات",
      noPrescriptions: "لا توجد وصفات محملة بعد",
      doctorNotes: "ملاحظات الطبيب",
      medications: "الأدوية الموصوفة",
      glutenWarning: "تنبيه: بعض الأدوية قد تحتوي على الغلوتين"
    },
    fr: {
      title: "Ordonnance Médicale",
      subtitle: "Téléchargez votre ordonnance pour analyse",
      uploadPrescription: "Télécharger l'Ordonnance",
      dragAndDrop: "Glissez-déposez le fichier ici ou cliquez pour sélectionner",
      supportedFormats: "Formats supportés: PDF, JPG, PNG",
      maxFileSize: "Taille maximale: 5MB",
      uploadedFile: "Fichier Téléchargé",
      removeFile: "Supprimer le fichier",
      analyzeButton: "Analyser l'Ordonnance",
      prescriptionHistory: "Historique des Ordonnances",
      noPrescriptions: "Aucune ordonnance téléchargée",
      doctorNotes: "Notes du Médecin",
      medications: "Médicaments Prescrits",
      glutenWarning: "Attention: Certains médicaments peuvent contenir du gluten"
    },
    en: {
      title: "Medical Prescription",
      subtitle: "Upload your prescription for analysis",
      uploadPrescription: "Upload Prescription",
      dragAndDrop: "Drag and drop file here or click to select",
      supportedFormats: "Supported formats: PDF, JPG, PNG",
      maxFileSize: "Maximum size: 5MB",
      uploadedFile: "Uploaded File",
      removeFile: "Remove File",
      analyzeButton: "Analyze Prescription",
      prescriptionHistory: "Prescription History",
      noPrescriptions: "No prescriptions uploaded yet",
      doctorNotes: "Doctor's Notes",
      medications: "Prescribed Medications",
      glutenWarning: "Warning: Some medications may contain gluten"
    }
  }
}

// Helper function to get translation
export function getTranslation<T extends keyof typeof translations>(
  section: T,
  language: Language
): (typeof translations)[T][Language] {
  return translations[section][language]
}
