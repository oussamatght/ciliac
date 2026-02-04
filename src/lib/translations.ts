export type Language = 'ar' | 'fr' | 'en'

export const translations = {
  // Common
  appName: {
    ar: 'سيلياك',
    fr: 'CILIAC',
    en: 'CILIAC'
  },
  appTagline: {
    ar: 'دليلك الشامل لحياة خالية من الغلوتين',
    fr: 'Votre guide complet pour une vie sans gluten',
    en: 'Your complete guide to a gluten-free life'
  },
  
  // Navigation
  nav: {
    home: { ar: 'الرئيسية', fr: 'Accueil', en: 'Home' },
    scanner: { ar: 'ماسح الباركود', fr: 'Scanner', en: 'Barcode Scanner' },
    nutrition: { ar: 'التغذية', fr: 'Nutrition', en: 'Nutrition' },
    recipes: { ar: 'الوصفات', fr: 'Recettes', en: 'Recipes' },
    tips: { ar: 'النصائح', fr: 'Conseils', en: 'Tips' },
    sport: { ar: 'الرياضة', fr: 'Sport', en: 'Sports' },
    mental: { ar: 'الصحة النفسية', fr: 'Santé mentale', en: 'Mental Health' },
    clinics: { ar: 'العيادات', fr: 'Cliniques', en: 'Clinics' },
    maps: { ar: 'الخريطة', fr: 'Carte', en: 'Map' },
    research: { ar: 'الأبحاث', fr: 'Recherches', en: 'Research' },
    partners: { ar: 'الشركاء', fr: 'Partenaires', en: 'Partners' },
    prescription: { ar: 'الوصفة الطبية', fr: 'Ordonnance', en: 'Prescription' },
    contact: { ar: 'تواصل معنا', fr: 'Contact', en: 'Contact' },
    about: { ar: 'عن التطبيق', fr: 'À propos', en: 'About' },
  },
  
  // Auth
  auth: {
    login: { ar: 'تسجيل الدخول', fr: 'Connexion', en: 'Login' },
    register: { ar: 'إنشاء حساب', fr: 'S\'inscrire', en: 'Register' },
    logout: { ar: 'تسجيل الخروج', fr: 'Déconnexion', en: 'Logout' },
    welcomeBack: { ar: 'مرحباً بعودتك', fr: 'Bon retour', en: 'Welcome Back' },
    createAccount: { ar: 'إنشاء حساب جديد', fr: 'Créer un compte', en: 'Create Account' },
    loginDescription: { ar: 'سجل دخولك للوصول إلى دليلك الشامل', fr: 'Connectez-vous pour accéder à votre guide', en: 'Sign in to access your comprehensive guide' },
    registerDescription: { ar: 'انضم إلينا لحياة صحية خالية من الغلوتين', fr: 'Rejoignez-nous pour une vie saine sans gluten', en: 'Join us for a healthy gluten-free life' },
    fullName: { ar: 'الاسم الكامل', fr: 'Nom complet', en: 'Full Name' },
    email: { ar: 'البريد الإلكتروني', fr: 'Email', en: 'Email' },
    password: { ar: 'كلمة المرور', fr: 'Mot de passe', en: 'Password' },
    enterName: { ar: 'أدخل اسمك', fr: 'Entrez votre nom', en: 'Enter your name' },
    noAccount: { ar: 'ليس لديك حساب؟', fr: 'Pas de compte?', en: 'Don\'t have an account?' },
    hasAccount: { ar: 'لديك حساب بالفعل؟', fr: 'Déjà un compte?', en: 'Already have an account?' },
    registerNow: { ar: 'سجل الآن', fr: 'Inscrivez-vous', en: 'Register Now' },
    loginNow: { ar: 'سجل دخولك', fr: 'Connectez-vous', en: 'Login Now' },
  },
  
  // Dashboard
  dashboard: {
    welcome: { ar: 'مرحباً', fr: 'Bienvenue', en: 'Welcome' },
    quickAccess: { ar: 'الوصول السريع', fr: 'Accès rapide', en: 'Quick Access' },
    latestRecipes: { ar: 'أحدث الوصفات', fr: 'Dernières recettes', en: 'Latest Recipes' },
    dailyTip: { ar: 'نصيحة اليوم', fr: 'Conseil du jour', en: 'Daily Tip' },
    stats: { ar: 'إحصائيات', fr: 'Statistiques', en: 'Statistics' },
  },
  
  // Scanner
  scanner: {
    title: { ar: 'ماسح الباركود', fr: 'Scanner de codes-barres', en: 'Barcode Scanner' },
    description: { ar: 'امسح المنتجات للتحقق من خلوها من الغلوتين', fr: 'Scannez les produits pour vérifier s\'ils sont sans gluten', en: 'Scan products to check if they are gluten-free' },
    scanNow: { ar: 'امسح الآن', fr: 'Scanner maintenant', en: 'Scan Now' },
    enterCode: { ar: 'أدخل الرمز', fr: 'Entrez le code', en: 'Enter Code' },
    glutenFree: { ar: 'خالي من الغلوتين', fr: 'Sans gluten', en: 'Gluten Free' },
    containsGluten: { ar: 'يحتوي على الغلوتين', fr: 'Contient du gluten', en: 'Contains Gluten' },
    unknown: { ar: 'غير معروف', fr: 'Inconnu', en: 'Unknown' },
  },
  
  // Nutrition
  nutrition: {
    title: { ar: 'دليل التغذية', fr: 'Guide nutritionnel', en: 'Nutrition Guide' },
    description: { ar: 'تعرف على الأطعمة المسموحة والممنوعة', fr: 'Découvrez les aliments autorisés et interdits', en: 'Learn about allowed and forbidden foods' },
    allowed: { ar: 'مسموح', fr: 'Autorisé', en: 'Allowed' },
    forbidden: { ar: 'ممنوع', fr: 'Interdit', en: 'Forbidden' },
    caution: { ar: 'احذر', fr: 'Attention', en: 'Caution' },
  },
  
  // Recipes
  recipes: {
    title: { ar: 'الوصفات', fr: 'Recettes', en: 'Recipes' },
    description: { ar: 'وصفات لذيذة وصحية خالية من الغلوتين', fr: 'Recettes délicieuses et saines sans gluten', en: 'Delicious and healthy gluten-free recipes' },
    ingredients: { ar: 'المكونات', fr: 'Ingrédients', en: 'Ingredients' },
    instructions: { ar: 'طريقة التحضير', fr: 'Instructions', en: 'Instructions' },
    prepTime: { ar: 'وقت التحضير', fr: 'Temps de préparation', en: 'Prep Time' },
    cookTime: { ar: 'وقت الطهي', fr: 'Temps de cuisson', en: 'Cook Time' },
    servings: { ar: 'الحصص', fr: 'Portions', en: 'Servings' },
  },
  
  // Tips
  tips: {
    title: { ar: 'النصائح', fr: 'Conseils', en: 'Tips' },
    description: { ar: 'نصائح مفيدة لحياة أفضل مع السيلياك', fr: 'Conseils utiles pour mieux vivre avec la maladie cœliaque', en: 'Helpful tips for a better life with celiac disease' },
  },
  
  // Sports
  sport: {
    title: { ar: 'الرياضة والسيلياك', fr: 'Sport et maladie cœliaque', en: 'Sports & Celiac' },
    description: { ar: 'كيف تمارس الرياضة بأمان مع مرض السيلياك', fr: 'Comment faire du sport en toute sécurité avec la maladie cœliaque', en: 'How to exercise safely with celiac disease' },
  },
  
  // Mental Health
  mental: {
    title: { ar: 'الصحة النفسية', fr: 'Santé mentale', en: 'Mental Health' },
    description: { ar: 'الدعم النفسي والتعامل مع التحديات', fr: 'Soutien psychologique et gestion des défis', en: 'Psychological support and coping with challenges' },
  },
  
  // Clinics
  clinics: {
    title: { ar: 'العيادات المتخصصة', fr: 'Cliniques spécialisées', en: 'Specialized Clinics' },
    description: { ar: 'اعثر على أطباء متخصصين في علاج السيلياك', fr: 'Trouvez des médecins spécialisés dans le traitement de la maladie cœliaque', en: 'Find doctors specializing in celiac disease treatment' },
  },
  
  // Maps
  maps: {
    title: { ar: 'خريطة المواقع', fr: 'Carte des emplacements', en: 'Location Map' },
    description: { ar: 'اعثر على متاجر ومطاعم خالية من الغلوتين', fr: 'Trouvez des magasins et restaurants sans gluten', en: 'Find gluten-free stores and restaurants' },
    store: { ar: 'متجر', fr: 'Magasin', en: 'Store' },
    bakery: { ar: 'مخبزة', fr: 'Boulangerie', en: 'Bakery' },
    restaurant: { ar: 'مطعم', fr: 'Restaurant', en: 'Restaurant' },
    supermarket: { ar: 'سوبرماركت', fr: 'Supermarché', en: 'Supermarket' },
    all: { ar: 'الكل', fr: 'Tous', en: 'All' },
    locationList: { ar: 'قائمة المواقع', fr: 'Liste des emplacements', en: 'Location List' },
    call: { ar: 'اتصال', fr: 'Appeler', en: 'Call' },
    link: { ar: 'رابط', fr: 'Lien', en: 'Link' },
    knowAnotherStore: { ar: 'هل تعرف متجراً آخر؟', fr: 'Connaissez-vous un autre magasin?', en: 'Know another store?' },
    knowAnotherStoreDesc: { ar: 'إذا كنت تعرف متجراً أو مخبزة أو مطعماً يقدم منتجات خالية من الغلوتين ولم يكن مدرجاً في خريطتنا، يرجى التواصل معنا لإضافته.', fr: 'Si vous connaissez un magasin, une boulangerie ou un restaurant proposant des produits sans gluten qui ne figure pas sur notre carte, veuillez nous contacter pour l\'ajouter.', en: 'If you know a store, bakery, or restaurant that offers gluten-free products and is not listed on our map, please contact us to add it.' },
  },
  
  // Research
  research: {
    title: { ar: 'الأبحاث العلمية', fr: 'Recherches scientifiques', en: 'Scientific Research' },
    description: { ar: 'أحدث الدراسات والأبحاث عن السيلياك', fr: 'Dernières études et recherches sur la maladie cœliaque', en: 'Latest studies and research on celiac disease' },
  },
  
  // Partners
  partners: {
    title: { ar: 'شركاؤنا', fr: 'Nos partenaires', en: 'Our Partners' },
    description: { ar: 'الشركات والمؤسسات الداعمة لنا', fr: 'Entreprises et organisations qui nous soutiennent', en: 'Companies and organizations that support us' },
  },
  
  // Prescription
  prescription: {
    title: { ar: 'إرسال وصفة طبية', fr: 'Envoyer une ordonnance', en: 'Send Prescription' },
    description: { ar: 'قم بتحميل وصفة طبية من طبيبك للحصول على استشارة', fr: 'Téléchargez une ordonnance de votre médecin pour consultation', en: 'Upload a prescription from your doctor for consultation' },
    uploadFile: { ar: 'الوصفة الطبية *', fr: 'Ordonnance *', en: 'Prescription *' },
    clickToUpload: { ar: 'اضغط لتحميل الوصفة الطبية', fr: 'Cliquez pour télécharger l\'ordonnance', en: 'Click to upload prescription' },
    fileTypes: { ar: 'صورة (JPG, PNG) أو PDF - حجم أقصى 5MB', fr: 'Image (JPG, PNG) ou PDF - Max 5MB', en: 'Image (JPG, PNG) or PDF - Max 5MB' },
    additionalNotes: { ar: 'ملاحظات إضافية (اختياري)', fr: 'Notes supplémentaires (optionnel)', en: 'Additional notes (optional)' },
    notesPlaceholder: { ar: 'أضف أي ملاحظات أو استفسارات إضافية حول الوصفة...', fr: 'Ajoutez des notes ou questions supplémentaires concernant l\'ordonnance...', en: 'Add any additional notes or questions about the prescription...' },
    importantInfo: { ar: 'معلومة هامة', fr: 'Information importante', en: 'Important Information' },
    importantInfoDesc: { ar: 'سيتم مراجعة الوصفة الطبية من قبل فريقنا الطبي المختص. سنتواصل معك خلال 24-48 ساعة للحصول على التوصيات المناسبة.', fr: 'L\'ordonnance sera examinée par notre équipe médicale spécialisée. Nous vous contacterons dans les 24-48 heures avec les recommandations appropriées.', en: 'The prescription will be reviewed by our specialized medical team. We will contact you within 24-48 hours with appropriate recommendations.' },
    submit: { ar: 'إرسال الوصفة الطبية', fr: 'Envoyer l\'ordonnance', en: 'Submit Prescription' },
    submitting: { ar: 'جاري الإرسال...', fr: 'Envoi en cours...', en: 'Submitting...' },
    successTitle: { ar: 'تم الإرسال بنجاح', fr: 'Envoyé avec succès', en: 'Submitted Successfully' },
    successDesc: { ar: 'تم إرسال الوصفة الطبية. سيتم مراجعتها قريباً.', fr: 'L\'ordonnance a été envoyée. Elle sera examinée bientôt.', en: 'The prescription has been sent. It will be reviewed soon.' },
    errorTitle: { ar: 'خطأ في الإرسال', fr: 'Erreur d\'envoi', en: 'Submission Error' },
    errorDesc: { ar: 'حدث خطأ أثناء إرسال الوصفة. يرجى المحاولة مرة أخرى.', fr: 'Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.', en: 'An error occurred while sending. Please try again.' },
    noFileSelected: { ar: 'لم يتم تحديد ملف', fr: 'Aucun fichier sélectionné', en: 'No file selected' },
    pleaseUpload: { ar: 'يرجى تحميل وصفة طبية', fr: 'Veuillez télécharger une ordonnance', en: 'Please upload a prescription' },
    invalidFileType: { ar: 'نوع ملف غير صالح', fr: 'Type de fichier invalide', en: 'Invalid file type' },
    uploadImageOrPdf: { ar: 'يرجى تحميل صورة (JPG, PNG) أو ملف PDF', fr: 'Veuillez télécharger une image (JPG, PNG) ou un fichier PDF', en: 'Please upload an image (JPG, PNG) or PDF file' },
    fileTooLarge: { ar: 'حجم الملف كبير جداً', fr: 'Fichier trop volumineux', en: 'File too large' },
    maxFileSize: { ar: 'يرجى تحميل ملف أقل من 5 ميجابايت', fr: 'Veuillez télécharger un fichier de moins de 5 Mo', en: 'Please upload a file less than 5MB' },
  },
  
  // Contact
  contact: {
    title: { ar: 'تواصل معنا', fr: 'Contactez-nous', en: 'Contact Us' },
    description: { ar: 'نحن هنا للإجابة على استفساراتك', fr: 'Nous sommes là pour répondre à vos questions', en: 'We are here to answer your questions' },
    name: { ar: 'الاسم', fr: 'Nom', en: 'Name' },
    message: { ar: 'الرسالة', fr: 'Message', en: 'Message' },
    send: { ar: 'إرسال', fr: 'Envoyer', en: 'Send' },
  },
  
  // About
  about: {
    title: { ar: 'عن التطبيق', fr: 'À propos', en: 'About' },
    description: { ar: 'تعرف على قصتنا ورسالتنا', fr: 'Découvrez notre histoire et notre mission', en: 'Learn about our story and mission' },
    version: { ar: 'الإصدار', fr: 'Version', en: 'Version' },
    developers: { ar: 'المطورون', fr: 'Développeurs', en: 'Developers' },
  },
  
  // Common actions
  common: {
    search: { ar: 'بحث', fr: 'Rechercher', en: 'Search' },
    filter: { ar: 'تصفية', fr: 'Filtrer', en: 'Filter' },
    loading: { ar: 'جاري التحميل...', fr: 'Chargement...', en: 'Loading...' },
    error: { ar: 'حدث خطأ', fr: 'Une erreur s\'est produite', en: 'An error occurred' },
    retry: { ar: 'إعادة المحاولة', fr: 'Réessayer', en: 'Retry' },
    save: { ar: 'حفظ', fr: 'Enregistrer', en: 'Save' },
    cancel: { ar: 'إلغاء', fr: 'Annuler', en: 'Cancel' },
    confirm: { ar: 'تأكيد', fr: 'Confirmer', en: 'Confirm' },
    delete: { ar: 'حذف', fr: 'Supprimer', en: 'Delete' },
    edit: { ar: 'تعديل', fr: 'Modifier', en: 'Edit' },
    viewMore: { ar: 'عرض المزيد', fr: 'Voir plus', en: 'View More' },
    readMore: { ar: 'اقرأ المزيد', fr: 'Lire la suite', en: 'Read More' },
    close: { ar: 'إغلاق', fr: 'Fermer', en: 'Close' },
    back: { ar: 'رجوع', fr: 'Retour', en: 'Back' },
    next: { ar: 'التالي', fr: 'Suivant', en: 'Next' },
    previous: { ar: 'السابق', fr: 'Précédent', en: 'Previous' },
    start: { ar: 'ابدأ', fr: 'Commencer', en: 'Start' },
    language: { ar: 'اللغة', fr: 'Langue', en: 'Language' },
    arabic: { ar: 'العربية', fr: 'Arabe', en: 'Arabic' },
    french: { ar: 'الفرنسية', fr: 'Français', en: 'French' },
    english: { ar: 'الإنجليزية', fr: 'Anglais', en: 'English' },
    darkMode: { ar: 'الوضع الداكن', fr: 'Mode sombre', en: 'Dark Mode' },
    lightMode: { ar: 'الوضع الفاتح', fr: 'Mode clair', en: 'Light Mode' },
  },
  
  // Splash Screen
  splash: {
    welcome: { ar: 'مرحباً بك في', fr: 'Bienvenue sur', en: 'Welcome to' },
    tagline: { ar: 'رفيقك في رحلة الحياة الصحية', fr: 'Votre compagnon pour une vie saine', en: 'Your companion for a healthy life' },
    loading: { ar: 'جاري التحميل...', fr: 'Chargement...', en: 'Loading...' },
    getStarted: { ar: 'ابدأ الآن', fr: 'Commencer', en: 'Get Started' },
  },
}

// Helper function to get translation
export function t(key: string, lang: Language): string {
  const keys = key.split('.')
  let value: unknown = translations
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  if (value && typeof value === 'object' && lang in value) {
    return (value as Record<Language, string>)[lang]
  }
  
  return key
}

// Get direction based on language
export function getDirection(lang: Language): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr'
}

// Get font family based on language
export function getFontFamily(lang: Language): string {
  return lang === 'ar' ? 'font-arabic' : 'font-sans'
}
