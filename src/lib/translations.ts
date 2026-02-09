export type Language = 'ar' | 'fr' | 'en'

export const translations: Record<string, any> = {
  // ─── Common / Branding ──────────────────────────
  appName: { ar: 'CILIAC PRO', fr: 'CILIAC PRO', en: 'CILIAC PRO' },
  appTagline: {
    ar: 'دليلك الشامل للتعايش مع الأمراض المزمنة',
    fr: 'Votre guide complet pour vivre avec les maladies chroniques',
    en: 'Your complete guide to living with chronic diseases',
  },

  // ─── Navigation ──────────────────────────────────
  nav: {
    home:         { ar: 'الرئيسية',         fr: 'Accueil',           en: 'Home' },
    scanner:      { ar: 'ماسح الباركود',     fr: 'Scanner',           en: 'Barcode Scanner' },
    nutrition:    { ar: 'التغذية',           fr: 'Nutrition',         en: 'Nutrition' },
    recipes:      { ar: 'الوصفات',           fr: 'Recettes',          en: 'Recipes' },
    tips:         { ar: 'النصائح',           fr: 'Conseils',          en: 'Tips' },
    sport:        { ar: 'الرياضة',           fr: 'Sport',             en: 'Sports' },
    mental:       { ar: 'الصحة النفسية',     fr: 'Santé mentale',     en: 'Mental Health' },
    clinics:      { ar: 'العيادات',          fr: 'Cliniques',         en: 'Clinics' },
    maps:         { ar: 'الخريطة',           fr: 'Carte',             en: 'Map' },
    research:     { ar: 'الأبحاث',           fr: 'Recherches',        en: 'Research' },
    partners:     { ar: 'الشركاء',           fr: 'Partenaires',       en: 'Partners' },
    medicalFile:  { ar: 'الملف الطبي',       fr: 'Dossier médical',   en: 'Medical File' },
    contact:      { ar: 'تواصل معنا',        fr: 'Contact',           en: 'Contact' },
    about:        { ar: 'عن التطبيق',        fr: 'À propos',          en: 'About' },
  },

  // ─── Auth ────────────────────────────────────────
  auth: {
    login:             { ar: 'تسجيل الدخول',            fr: 'Connexion',               en: 'Login' },
    register:          { ar: 'إنشاء حساب',              fr: 'S\'inscrire',              en: 'Register' },
    logout:            { ar: 'تسجيل الخروج',            fr: 'Déconnexion',             en: 'Logout' },
    welcomeBack:       { ar: 'مرحباً بعودتك',           fr: 'Bon retour',              en: 'Welcome Back' },
    createAccount:     { ar: 'إنشاء حساب جديد',         fr: 'Créer un compte',         en: 'Create Account' },
    loginDescription:  { ar: 'سجل دخولك للوصول إلى دليلك الشامل', fr: 'Connectez-vous pour accéder à votre guide', en: 'Sign in to access your comprehensive guide' },
    registerDescription: { ar: 'انضم إلينا لحياة صحية أفضل', fr: 'Rejoignez-nous pour une vie plus saine', en: 'Join us for a healthier life' },
    fullName:          { ar: 'الاسم الكامل',             fr: 'Nom complet',             en: 'Full Name' },
    email:             { ar: 'البريد الإلكتروني',        fr: 'Email',                   en: 'Email' },
    password:          { ar: 'كلمة المرور',              fr: 'Mot de passe',            en: 'Password' },
    enterName:         { ar: 'أدخل اسمك',               fr: 'Entrez votre nom',        en: 'Enter your name' },
    noAccount:         { ar: 'ليس لديك حساب؟',          fr: 'Pas de compte?',          en: "Don't have an account?" },
    hasAccount:        { ar: 'لديك حساب بالفعل؟',       fr: 'Déjà un compte?',         en: 'Already have an account?' },
    registerNow:       { ar: 'سجل الآن',                fr: 'Inscrivez-vous',          en: 'Register Now' },
    loginNow:          { ar: 'سجل دخولك',              fr: 'Connectez-vous',          en: 'Login Now' },
  },

  // ─── Dashboard (Home) ───────────────────────────
  dashboard: {
    goodMorning:    { ar: 'صباح الخير',     fr: 'Bonjour',           en: 'Good Morning' },
    goodAfternoon:  { ar: 'مساء الخير',      fr: 'Bon après-midi',    en: 'Good Afternoon' },
    goodEvening:    { ar: 'مساء الخير',      fr: 'Bonsoir',           en: 'Good Evening' },
    welcome:        { ar: 'مرحباً',          fr: 'Bienvenue',         en: 'Welcome' },
    friend:         { ar: 'صديقنا',          fr: 'ami',               en: 'friend' },
    welcomeMessage: {
      ar: 'مرحباً بك في دليلك الشامل للتعايش مع الأمراض المزمنة. اكتشف وصفات جديدة ونصائح مفيدة كل يوم.',
      fr: 'Bienvenue dans votre guide complet pour vivre avec les maladies chroniques. Découvrez de nouvelles recettes et des conseils utiles chaque jour.',
      en: 'Welcome to your complete guide for living with chronic diseases. Discover new recipes and helpful tips every day.',
    },
    availableRecipes:    { ar: 'وصفات متاحة',       fr: 'Recettes disponibles',     en: 'Available Recipes' },
    healthTips:          { ar: 'نصائح صحية',         fr: 'Conseils santé',           en: 'Health Tips' },
    activeUsers:         { ar: 'مستخدم نشط',         fr: 'Utilisateurs actifs',      en: 'Active Users' },
    scientificArticles:  { ar: 'مقال علمي',          fr: 'Articles scientifiques',   en: 'Scientific Articles' },
    recentRecipes:       { ar: 'أحدث الوصفات',       fr: 'Recettes récentes',        en: 'Recent Recipes' },
    dailyTips:           { ar: 'نصائح صحية يومية',    fr: 'Conseils santé quotidiens',en: 'Daily Health Tips' },
    dailyTipsDesc:       { ar: 'نصائح مهمة لحياة صحية',fr: 'Conseils importants pour une vie saine', en: 'Important tips for a healthy life' },
    newRecipesGF:        { ar: 'وصفات جديدة صحية',    fr: 'Nouvelles recettes saines',en: 'New healthy recipes' },
    viewAll:             { ar: 'عرض الكل',            fr: 'Voir tout',               en: 'View All' },
    increasing:          { ar: 'متزايد',              fr: 'En hausse',               en: 'Increasing' },
    quickAccess:         { ar: 'الوصول السريع',       fr: 'Accès rapide',            en: 'Quick Access' },
    whatIsChronic:       { ar: 'ما هي الأمراض المزمنة؟', fr: 'Que sont les maladies chroniques?', en: 'What are chronic diseases?' },
    whatIsChronicDesc:   { ar: 'الأمراض المزمنة هي حالات صحية طويلة الأمد تتطلب رعاية وإدارة مستمرة للحفاظ على جودة الحياة', fr: 'Les maladies chroniques sont des conditions de santé à long terme nécessitant des soins et une gestion continue pour maintenir la qualité de vie', en: 'Chronic diseases are long-term health conditions that require ongoing care and management to maintain quality of life' },
    safeFoods:           { ar: 'الأغذية الصحية',      fr: 'Aliments sains',          en: 'Healthy Foods' },
    safeFoodsDesc:       { ar: 'تعرف على قائمة الأطعمة الصحية المناسبة لحالتك', fr: 'Découvrez la liste des aliments sains adaptés à votre condition', en: 'Learn about healthy foods suitable for your condition' },
    findClinic:          { ar: 'ابحث عن عيادة',       fr: 'Trouver une clinique',     en: 'Find a Clinic' },
    findClinicDesc:      { ar: 'اعثر على أقرب عيادة متخصصة في الأمراض المزمنة', fr: 'Trouvez la clinique spécialisée en maladies chroniques la plus proche', en: 'Find the nearest clinic specialized in chronic diseases' },
    tip1:                { ar: 'تأكد دائماً من قراءة ملصقات المنتجات الغذائية', fr: 'Assurez-vous toujours de lire les étiquettes des produits alimentaires', en: 'Always make sure to read food product labels' },
    tip2:                { ar: 'احمل معك دائماً وجبات خفيفة آمنة', fr: 'Emportez toujours des collations sûres avec vous', en: 'Always carry safe snacks with you' },
    tip3:                { ar: 'استشر طبيبك قبل تناول أي مكملات غذائية', fr: 'Consultez votre médecin avant de prendre des compléments alimentaires', en: 'Consult your doctor before taking any supplements' },
    tip4:                { ar: 'شارك تجربتك مع المجتمع للدعم المتبادل', fr: 'Partagez votre expérience avec la communauté pour un soutien mutuel', en: 'Share your experience with the community for mutual support' },
    recipe1:             { ar: 'خبز الأرز الخالي من الغلوتين', fr: 'Pain de riz sans gluten', en: 'Gluten-Free Rice Bread' },
    recipe2:             { ar: 'باستا الكينوا بالخضروات', fr: 'Pâtes de quinoa aux légumes', en: 'Quinoa Pasta with Vegetables' },
    recipe3:             { ar: 'كيك الشوكولاتة الصحي', fr: 'Gâteau au chocolat sain', en: 'Healthy Chocolate Cake' },
    recipe4:             { ar: 'سلطة الكينوا بالأفوكادو', fr: 'Salade de quinoa à l\'avocat', en: 'Quinoa Avocado Salad' },
    cat1:                { ar: 'مخبوزات', fr: 'Boulangerie', en: 'Bakery' },
    cat2:                { ar: 'أطباق رئيسية', fr: 'Plats principaux', en: 'Main Dishes' },
    cat3:                { ar: 'حلويات', fr: 'Desserts', en: 'Desserts' },
    cat4:                { ar: 'سلطات', fr: 'Salades', en: 'Salads' },
    time30:              { ar: '30 دقيقة', fr: '30 minutes', en: '30 minutes' },
    time25:              { ar: '25 دقيقة', fr: '25 minutes', en: '25 minutes' },
    time45:              { ar: '45 دقيقة', fr: '45 minutes', en: '45 minutes' },
    time15:              { ar: '15 دقيقة', fr: '15 minutes', en: '15 minutes' },
  },

  // ─── Scanner ─────────────────────────────────────
  scanner: {
    title:         { ar: 'ماسح الباركود',                      fr: 'Scanner de codes-barres',                     en: 'Barcode Scanner' },
    description:   { ar: 'امسح المنتجات للتحقق من مكوناتها ومدى ملاءمتها لحالتك الصحية', fr: 'Scannez les produits pour vérifier leurs ingrédients et leur compatibilité avec votre état de santé', en: 'Scan products to check their ingredients and compatibility with your health condition' },
    opticalScanner:{ ar: 'الماسح الضوئي',                      fr: 'Scanner optique',                              en: 'Optical Scanner' },
    selectCamera:  { ar: 'اختر الكاميرا:',                     fr: 'Choisir la caméra:',                           en: 'Select Camera:' },
    camera:        { ar: 'كاميرا',                             fr: 'Caméra',                                       en: 'Camera' },
    pressToScan:   { ar: 'اضغط للبدء بالمسح',                  fr: 'Appuyez pour commencer le scan',               en: 'Press to start scanning' },
    startScan:     { ar: 'بدء المسح',                          fr: 'Démarrer le scan',                             en: 'Start Scanning' },
    stop:          { ar: 'إيقاف',                              fr: 'Arrêter',                                      en: 'Stop' },
    scanResult:    { ar: 'نتيجة الفحص',                        fr: 'Résultat du scan',                             en: 'Scan Result' },
    fetchingData:  { ar: 'جاري جلب البيانات...',                fr: 'Récupération des données...',                  en: 'Fetching data...' },
    productName:   { ar: 'اسم المنتج',                         fr: 'Nom du produit',                               en: 'Product Name' },
    brand:         { ar: 'العلامة التجارية',                   fr: 'Marque',                                       en: 'Brand' },
    ingredients:   { ar: 'المكونات',                           fr: 'Ingrédients',                                  en: 'Ingredients' },
    barcode:       { ar: 'باركود',                             fr: 'Code-barres',                                  en: 'Barcode' },
    noProduct:     { ar: 'لم يتم مسح أي منتج بعد',             fr: 'Aucun produit scanné encore',                  en: 'No product scanned yet' },
    scanToCheck:   { ar: 'قم بمسح باركود المنتج للتحقق من محتواه', fr: 'Scannez le code-barres du produit pour vérifier son contenu', en: 'Scan the product barcode to check its content' },
    notFound:      { ar: 'المنتج غير موجود في قاعدة البيانات',  fr: 'Produit non trouvé dans la base de données',   en: 'Product not found in database' },
    noCamera:      { ar: 'لم يتم العثور على كاميرا',           fr: 'Aucune caméra trouvée',                        en: 'No camera found' },
    selectCameraFirst: { ar: 'الرجاء اختيار كاميرا',           fr: 'Veuillez sélectionner une caméra',             en: 'Please select a camera' },
    cameraError:   { ar: 'حدث خطأ أثناء بدء الكاميرا. تحقق من إعدادات المتصفح.', fr: 'Erreur lors du démarrage de la caméra. Vérifiez les paramètres du navigateur.', en: 'Error starting camera. Check browser settings.' },
    fetchError:    { ar: 'حدث خطأ أثناء جلب البيانات',         fr: 'Erreur lors de la récupération des données',   en: 'Error fetching data' },
    glutenFree:    { ar: 'خالي من الغلوتين ✅',                 fr: 'Sans gluten ✅',                                en: 'Gluten Free ✅' },
    containsGluten:{ ar: 'يحتوي على الغلوتين ❌',               fr: 'Contient du gluten ❌',                         en: 'Contains Gluten ❌' },
    unknown:       { ar: 'غير محدد',                           fr: 'Indéterminé',                                  en: 'Undetermined' },
    glutenFreeAnalysis:    { ar: 'خالي من الغلوتين (تحليل المكونات) ✅', fr: 'Sans gluten (analyse des ingrédients) ✅', en: 'Gluten Free (ingredient analysis) ✅' },
    containsGlutenAnalysis:{ ar: 'يحتوي على الغلوتين (تحليل المكونات) ❌', fr: 'Contient du gluten (analyse des ingrédients) ❌', en: 'Contains Gluten (ingredient analysis) ❌' },
    noIngredients: { ar: 'لا توجد مكونات',                     fr: 'Aucun ingrédient',                             en: 'No ingredients' },
    unknownLabel:  { ar: 'غير معروف',                          fr: 'Inconnu',                                      en: 'Unknown' },
    importantWarning:      { ar: 'تنبيه مهم',                  fr: 'Avertissement important',                      en: 'Important Warning' },
    warningText:   { ar: 'قد لا تكون جميع المنتجات متوفرة في قاعدة البيانات. في حالة عدم وجود المنتج، يرجى قراءة الملصق الغذائي بعناية والتحقق من قائمة المكونات.', fr: 'Tous les produits ne sont pas forcément dans la base de données. Si le produit n\'est pas trouvé, veuillez lire attentivement l\'étiquette nutritionnelle et vérifier la liste des ingrédients.', en: 'Not all products may be in the database. If the product is not found, please read the nutritional label carefully and check the ingredient list.' },
  },

  // ─── Nutrition ───────────────────────────────────
  nutrition: {
    title:       { ar: 'دليل التغذية',                 fr: 'Guide nutritionnel',              en: 'Nutrition Guide' },
    description: { ar: 'كل ما تحتاج معرفته عن الأطعمة الآمنة والممنوعة', fr: 'Tout ce que vous devez savoir sur les aliments autorisés et interdits', en: 'Everything you need to know about safe and forbidden foods' },
    safeFoods:   { ar: 'أطعمة آمنة',                    fr: 'Aliments sûrs',                   en: 'Safe Foods' },
    unsafeFoods: { ar: 'أطعمة ممنوعة',                   fr: 'Aliments interdits',              en: 'Forbidden Foods' },
    tips:        { ar: 'نصائح',                         fr: 'Conseils',                         en: 'Tips' },
    safeFoodsTitle:    { ar: 'الأطعمة الآمنة (خالية من الغلوتين)', fr: 'Aliments sûrs (sans gluten)', en: 'Safe Foods (Gluten-Free)' },
    safeFoodsDesc:     { ar: 'هذه الأطعمة آمنة بشكل طبيعي عند تناولها بحالتها الطبيعية', fr: 'Ces aliments sont naturellement sûrs lorsqu\'ils sont consommés à l\'état naturel', en: 'These foods are naturally safe when consumed in their natural state' },
    unsafeFoodsTitle:  { ar: 'الأطعمة الممنوعة (تحتوي على الغلوتين)', fr: 'Aliments interdits (contiennent du gluten)', en: 'Forbidden Foods (Contain Gluten)' },
    unsafeFoodsDesc:   { ar: 'يجب تجنب هذه الأطعمة تماماً لأنها تحتوي على الغلوتين', fr: 'Ces aliments doivent être complètement évités car ils contiennent du gluten', en: 'These foods must be completely avoided as they contain gluten' },
    warningTitle:      { ar: 'تحذير مهم', fr: 'Avertissement important', en: 'Important Warning' },
    warningText:       { ar: 'الغلوتين قد يكون موجوداً في منتجات غير متوقعة مثل الصلصات، التوابل المخلوطة، بعض الأدوية والمكملات الغذائية. تأكد دائماً من قراءة الملصقات بعناية.', fr: 'Le gluten peut être présent dans des produits inattendus comme les sauces, les épices mélangées, certains médicaments et compléments alimentaires. Assurez-vous toujours de lire attentivement les étiquettes.', en: 'Gluten may be present in unexpected products like sauces, mixed spices, some medications and supplements. Always make sure to read labels carefully.' },
    allowed:     { ar: 'مسموح', fr: 'Autorisé', en: 'Allowed' },
    forbidden:   { ar: 'ممنوع', fr: 'Interdit', en: 'Forbidden' },
    caution:     { ar: 'احذر',  fr: 'Attention', en: 'Caution' },
  },

  // ─── Recipes ─────────────────────────────────────
  recipes: {
    title:        { ar: 'الوصفات',                  fr: 'Recettes',                   en: 'Recipes' },
    description:  { ar: 'وصفات لذيذة وصحية مناسبة لحالتك', fr: 'Recettes délicieuses et saines adaptées à votre condition', en: 'Delicious and healthy recipes suitable for your condition' },
    ingredients:  { ar: 'المكونات', fr: 'Ingrédients', en: 'Ingredients' },
    instructions: { ar: 'طريقة التحضير', fr: 'Instructions', en: 'Instructions' },
    prepTime:     { ar: 'وقت التحضير', fr: 'Temps de préparation', en: 'Prep Time' },
    servings:     { ar: 'الحصص', fr: 'Portions', en: 'Servings' },
    search:       { ar: 'ابحث عن وصفة...', fr: 'Rechercher une recette...', en: 'Search for a recipe...' },
    viewRecipe:   { ar: 'عرض الوصفة', fr: 'Voir la recette', en: 'View Recipe' },
    persons:      { ar: 'أشخاص', fr: 'personnes', en: 'servings' },
    cal:          { ar: 'سعرة', fr: 'cal', en: 'cal' },
    noResults:    { ar: 'لم يتم العثور على وصفات', fr: 'Aucune recette trouvée', en: 'No recipes found' },
    tryAgain:     { ar: 'جرب تغيير كلمات البحث أو الفئة', fr: 'Essayez de changer les mots de recherche ou la catégorie', en: 'Try changing search terms or category' },
    all:          { ar: 'الكل', fr: 'Tous', en: 'All' },
  },

  // ─── Tips ────────────────────────────────────────
  tips: {
    title:       { ar: 'النصائح',                               fr: 'Conseils',                                    en: 'Tips' },
    description: { ar: 'نصائح مفيدة للتعايش مع الأمراض المزمنة', fr: 'Conseils utiles pour vivre avec les maladies chroniques', en: 'Helpful tips for living with chronic diseases' },
    quickTips:   { ar: 'نصائح سريعة', fr: 'Conseils rapides', en: 'Quick Tips' },
    haveATip:    { ar: 'هل لديك نصيحة؟', fr: 'Vous avez un conseil?', en: 'Have a tip?' },
    shareTip:    { ar: 'شارك نصائحك وتجاربك مع مجتمعنا لمساعدة الآخرين', fr: 'Partagez vos conseils et expériences avec notre communauté pour aider les autres', en: 'Share your tips and experiences with our community to help others' },
    sendUs:      { ar: 'ابعث لنا', fr: 'Envoyez-nous', en: 'Send us' },
  },

  // ─── Sports ──────────────────────────────────────
  sport: {
    title:       { ar: 'الرياضة والنشاط البدني',             fr: 'Sport et activité physique',           en: 'Sports & Physical Activity' },
    description: { ar: 'تمارين مناسبة للأشخاص ذوي الأمراض المزمنة', fr: 'Exercices adaptés aux personnes atteintes de maladies chroniques', en: 'Exercises suitable for people with chronic diseases' },
    importantNote:     { ar: 'ملاحظة مهمة', fr: 'Note importante', en: 'Important Note' },
    importantNoteText: { ar: 'ممارسة الرياضة مفيدة للأشخاص ذوي الأمراض المزمنة، لكن يجب البدء ببطء وزيادة الشدة تدريجياً. استشر طبيبك قبل البدء في أي برنامج رياضي جديد.', fr: 'L\'exercice est bénéfique pour les personnes atteintes de maladies chroniques, mais il faut commencer lentement et augmenter progressivement l\'intensité. Consultez votre médecin avant de commencer tout nouveau programme sportif.', en: 'Exercise is beneficial for people with chronic diseases, but you should start slowly and gradually increase intensity. Consult your doctor before starting any new exercise program.' },
    lowIntensity:      { ar: 'منخفضة الشدة', fr: 'Faible intensité', en: 'Low Intensity' },
    mediumIntensity:   { ar: 'متوسطة الشدة', fr: 'Intensité moyenne', en: 'Medium Intensity' },
    highIntensity:     { ar: 'عالية الشدة', fr: 'Haute intensité', en: 'High Intensity' },
    sportTips:         { ar: 'نصائح للرياضة', fr: 'Conseils sportifs', en: 'Sport Tips' },
  },

  // ─── Mental Health ───────────────────────────────
  mental: {
    title:       { ar: 'الصحة النفسية',                       fr: 'Santé mentale',                          en: 'Mental Health' },
    description: { ar: 'الدعم النفسي والتعامل مع التحديات',    fr: 'Soutien psychologique et gestion des défis', en: 'Psychological support and coping with challenges' },
    intro:       { ar: 'التعايش مع الأمراض المزمنة لا يؤثر فقط على جسمك، بل قد يؤثر أيضاً على صحتك النفسية. من الطبيعي الشعور بمشاعر مختلفة مثل الإحباط، القلق، أو الحزن. تذكر أنك لست وحدك، والعناية بصحتك النفسية جزء مهم من رحلة التعافي.', fr: 'Vivre avec des maladies chroniques n\'affecte pas seulement votre corps, mais peut aussi affecter votre santé mentale. Il est normal de ressentir différentes émotions comme la frustration, l\'anxiété ou la tristesse. Rappelez-vous que vous n\'êtes pas seul, et prendre soin de votre santé mentale est une partie importante du parcours de guérison.', en: 'Living with chronic diseases doesn\'t just affect your body, but can also affect your mental health. It\'s normal to feel different emotions like frustration, anxiety, or sadness. Remember you\'re not alone, and caring for your mental health is an important part of the recovery journey.' },
    emotionalStages:   { ar: 'مراحل التكيف العاطفي', fr: 'Étapes d\'adaptation émotionnelle', en: 'Emotional Adaptation Stages' },
    supportResources:  { ar: 'موارد الدعم', fr: 'Ressources de soutien', en: 'Support Resources' },
    psychologistContacts: { ar: 'أطباء نفسيون متخصصون', fr: 'Psychologues spécialisés', en: 'Specialized Psychologists' },
    psychologistDesc:  { ar: 'تواصل مع أطباء نفسيين متخصصين في دعم مرضى الأمراض المزمنة', fr: 'Contactez des psychologues spécialisés dans le soutien des patients atteints de maladies chroniques', en: 'Contact psychologists specialized in supporting chronic disease patients' },
    bookAppointment:   { ar: 'حجز موعد', fr: 'Prendre rendez-vous', en: 'Book Appointment' },
  },

  // ─── Clinics ─────────────────────────────────────
  clinics: {
    title:             { ar: 'العيادات المتخصصة',       fr: 'Cliniques spécialisées',             en: 'Specialized Clinics' },
    description:       { ar: 'اعثر على أطباء متخصصين في علاج الأمراض المزمنة', fr: 'Trouvez des médecins spécialisés dans le traitement des maladies chroniques', en: 'Find doctors specializing in chronic disease treatment' },
    whatToExpect:       { ar: 'ماذا تتوقع عند زيارة الطبيب؟', fr: 'À quoi s\'attendre lors de la visite chez le médecin?', en: 'What to expect when visiting the doctor?' },
    diagnosisSteps:    { ar: 'خطوات التشخيص والعلاج', fr: 'Étapes du diagnostic et du traitement', en: 'Diagnosis and treatment steps' },
    workingHours:      { ar: 'ساعات العمل', fr: 'Heures d\'ouverture', en: 'Working Hours' },
    services:          { ar: 'الخدمات', fr: 'Services', en: 'Services' },
    call:              { ar: 'اتصال', fr: 'Appeler', en: 'Call' },
    knowAnotherClinic: { ar: 'هل تعرف عيادة أخرى؟', fr: 'Connaissez-vous une autre clinique?', en: 'Know another clinic?' },
    knowAnotherClinicDesc: { ar: 'إذا كنت تعرف عيادة أو مركز طبي متخصص في علاج الأمراض المزمنة، يرجى التواصل معنا لإضافته إلى قائمتنا', fr: 'Si vous connaissez une clinique ou un centre médical spécialisé dans le traitement des maladies chroniques, veuillez nous contacter pour l\'ajouter à notre liste', en: 'If you know a clinic or medical center specialized in chronic disease treatment, please contact us to add it to our list' },
    contactUs:         { ar: 'تواصل معنا', fr: 'Contactez-nous', en: 'Contact us' },
  },

  // ─── Maps ────────────────────────────────────────
  maps: {
    title:       { ar: 'خريطة المواقع',         fr: 'Carte des emplacements', en: 'Location Map' },
    description: { ar: 'اعثر على متاجر ومطاعم صحية', fr: 'Trouvez des magasins et restaurants sains', en: 'Find healthy stores and restaurants' },
    store:       { ar: 'متجر', fr: 'Magasin', en: 'Store' },
    bakery:      { ar: 'مخبزة', fr: 'Boulangerie', en: 'Bakery' },
    restaurant:  { ar: 'مطعم', fr: 'Restaurant', en: 'Restaurant' },
    supermarket: { ar: 'سوبرماركت', fr: 'Supermarché', en: 'Supermarket' },
    all:         { ar: 'الكل', fr: 'Tous', en: 'All' },
    locationList:{ ar: 'قائمة المواقع', fr: 'Liste des emplacements', en: 'Location List' },
    call:        { ar: 'اتصال', fr: 'Appeler', en: 'Call' },
    link:        { ar: 'رابط', fr: 'Lien', en: 'Link' },
    knowAnotherStore:     { ar: 'هل تعرف متجراً آخر؟', fr: 'Connaissez-vous un autre magasin?', en: 'Know another store?' },
    knowAnotherStoreDesc: { ar: 'إذا كنت تعرف متجراً أو مخبزة أو مطعماً يقدم منتجات صحية ولم يكن مدرجاً في خريطتنا، يرجى التواصل معنا لإضافته.', fr: 'Si vous connaissez un magasin, une boulangerie ou un restaurant proposant des produits sains qui ne figure pas sur notre carte, veuillez nous contacter pour l\'ajouter.', en: 'If you know a store, bakery, or restaurant that offers healthy products not listed on our map, please contact us to add it.' },
  },

  // ─── Research ────────────────────────────────────
  research: {
    title:       { ar: 'الأبحاث العلمية', fr: 'Recherches scientifiques', en: 'Scientific Research' },
    description: { ar: 'أحدث الدراسات والأبحاث عن الأمراض المزمنة', fr: 'Dernières études et recherches sur les maladies chroniques', en: 'Latest studies and research on chronic diseases' },
  },

  // ─── Partners ────────────────────────────────────
  partners: {
    title:       { ar: 'شركاؤنا', fr: 'Nos partenaires', en: 'Our Partners' },
    description: { ar: 'المؤسسات والشركات الداعمة لمجتمعنا', fr: 'Entreprises et organisations qui nous soutiennent', en: 'Companies and organizations that support us' },
    benefits:    { ar: 'مزايا الشراكة', fr: 'Avantages du partenariat', en: 'Partnership Benefits' },
    benefitsDesc:{ ar: 'استفد من شبكة شركائنا', fr: 'Profitez de notre réseau de partenaires', en: 'Benefit from our partner network' },
    services:    { ar: 'الخدمات:', fr: 'Services:', en: 'Services:' },
    visitPage:   { ar: 'زيارة الصفحة', fr: 'Visiter la page', en: 'Visit Page' },
    becomePartner:     { ar: 'هل ترغب في الانضمام كشريك؟', fr: 'Voulez-vous devenir partenaire?', en: 'Want to become a partner?' },
    becomePartnerDesc: { ar: 'إذا كنت تملك متجراً أو مخبزة توفر منتجات صحية، تواصل معنا لإضافتك إلى قائمة شركائنا', fr: 'Si vous possédez un magasin ou une boulangerie offrant des produits sains, contactez-nous pour être ajouté à notre liste de partenaires', en: 'If you own a store or bakery offering healthy products, contact us to be added to our partner list' },
    contactWhatsapp:   { ar: 'تواصل عبر واتساب', fr: 'Contacter via WhatsApp', en: 'Contact via WhatsApp' },
  },

  // ─── Medical File (was Prescription) ─────────────
  medicalFile: {
    title:           { ar: 'الملف الطبي',                          fr: 'Dossier médical',                           en: 'Medical File' },
    description:     { ar: 'أرسل صورة من ملفك الطبي للحصول على استشارة متخصصة', fr: 'Envoyez une photo de votre dossier médical pour obtenir une consultation spécialisée', en: 'Send a photo of your medical file for a specialized consultation' },
    uploadFile:      { ar: 'الملف الطبي *',                        fr: 'Dossier médical *',                          en: 'Medical File *' },
    clickToUpload:   { ar: 'اضغط لتحميل صورة ملفك الطبي',           fr: 'Cliquez pour téléverser la photo de votre dossier médical', en: 'Click to upload your medical file photo' },
    fileTypes:       { ar: 'صورة (JPG, PNG) أو PDF - حجم أقصى 5MB', fr: 'Image (JPG, PNG) ou PDF - Max 5MB',          en: 'Image (JPG, PNG) or PDF - Max 5MB' },
    additionalNotes: { ar: 'ملاحظات إضافية (اختياري)',               fr: 'Notes supplémentaires (optionnel)',          en: 'Additional notes (optional)' },
    notesPlaceholder:{ ar: 'أضف أي ملاحظات أو استفسارات إضافية حول ملفك الطبي...', fr: 'Ajoutez des notes ou questions supplémentaires concernant votre dossier médical...', en: 'Add any additional notes or questions about your medical file...' },
    importantInfo:   { ar: 'معلومة هامة', fr: 'Information importante', en: 'Important Information' },
    importantInfoDesc: { ar: 'سيتم مراجعة ملفك الطبي من قبل فريقنا الطبي المختص. سنتواصل معك خلال 24-48 ساعة للحصول على التوصيات المناسبة.', fr: 'Votre dossier médical sera examiné par notre équipe médicale spécialisée. Nous vous contacterons dans les 24-48 heures avec les recommandations appropriées.', en: 'Your medical file will be reviewed by our specialized medical team. We will contact you within 24-48 hours with appropriate recommendations.' },
    submit:          { ar: 'إرسال الملف الطبي', fr: 'Envoyer le dossier médical', en: 'Submit Medical File' },
    submitting:      { ar: 'جاري الإرسال...', fr: 'Envoi en cours...', en: 'Submitting...' },
    successTitle:    { ar: 'تم الإرسال بنجاح', fr: 'Envoyé avec succès', en: 'Submitted Successfully' },
    successDesc:     { ar: 'تم إرسال ملفك الطبي. سيتم مراجعته قريباً.', fr: 'Votre dossier médical a été envoyé. Il sera examiné bientôt.', en: 'Your medical file has been sent. It will be reviewed soon.' },
    errorTitle:      { ar: 'خطأ في الإرسال', fr: 'Erreur d\'envoi', en: 'Submission Error' },
    errorDesc:       { ar: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.', fr: 'Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.', en: 'An error occurred while sending. Please try again.' },
    noFileSelected:  { ar: 'لم يتم تحديد ملف', fr: 'Aucun fichier sélectionné', en: 'No file selected' },
    pleaseUpload:    { ar: 'يرجى تحميل صورة ملفك الطبي', fr: 'Veuillez téléverser la photo de votre dossier médical', en: 'Please upload your medical file photo' },
    invalidFileType: { ar: 'نوع ملف غير صالح', fr: 'Type de fichier invalide', en: 'Invalid file type' },
    uploadImageOrPdf:{ ar: 'يرجى تحميل صورة (JPG, PNG) أو ملف PDF', fr: 'Veuillez téléverser une image (JPG, PNG) ou un fichier PDF', en: 'Please upload an image (JPG, PNG) or PDF file' },
    fileTooLarge:    { ar: 'حجم الملف كبير جداً', fr: 'Fichier trop volumineux', en: 'File too large' },
    maxFileSize:     { ar: 'يرجى تحميل ملف أقل من 5 ميجابايت', fr: 'Veuillez téléverser un fichier de moins de 5 Mo', en: 'Please upload a file less than 5MB' },
  },

  // ─── Contact ─────────────────────────────────────
  contact: {
    title:       { ar: 'تواصل معنا', fr: 'Contactez-nous', en: 'Contact Us' },
    description: { ar: 'نحن هنا للإجابة على استفساراتك', fr: 'Nous sommes là pour répondre à vos questions', en: 'We are here to answer your questions' },
    name:        { ar: 'الاسم', fr: 'Nom', en: 'Name' },
    message:     { ar: 'الرسالة', fr: 'Message', en: 'Message' },
    send:        { ar: 'إرسال', fr: 'Envoyer', en: 'Send' },
  },

  // ─── About ───────────────────────────────────────
  about: {
    title:       { ar: 'عن التطبيق', fr: 'À propos', en: 'About' },
    description: { ar: 'تعرف على قصتنا ورسالتنا', fr: 'Découvrez notre histoire et notre mission', en: 'Learn about our story and mission' },
    subtitle:    { ar: 'تعرف على CILIAC PRO ورسالتنا', fr: 'Découvrez CILIAC PRO et notre mission', en: 'Learn about CILIAC PRO and our mission' },
    version:     { ar: 'الإصدار', fr: 'Version', en: 'Version' },
    developers:  { ar: 'المطورون', fr: 'Développeurs', en: 'Developers' },
    heroTitle:   { ar: 'دليلك الشامل للتعايش مع الأمراض المزمنة', fr: 'Votre guide complet pour vivre avec les maladies chroniques', en: 'Your comprehensive guide to living with chronic diseases' },
    heroDescription: { ar: 'نحن نؤمن بأن كل شخص يستحق حياة صحية وسعيدة. CILIAC PRO هو رفيقك الموثوق في رحلة التعايش مع الأمراض المزمنة.', fr: 'Nous croyons que chacun mérite une vie saine et heureuse. CILIAC PRO est votre compagnon de confiance pour vivre avec les maladies chroniques.', en: 'We believe everyone deserves a healthy and happy life. CILIAC PRO is your trusted companion in living with chronic diseases.' },
  },

  // ─── Common Actions ──────────────────────────────
  common: {
    search:    { ar: 'بحث',             fr: 'Rechercher',    en: 'Search' },
    filter:    { ar: 'تصفية',           fr: 'Filtrer',       en: 'Filter' },
    loading:   { ar: 'جاري التحميل...', fr: 'Chargement...', en: 'Loading...' },
    error:     { ar: 'حدث خطأ',         fr: 'Une erreur s\'est produite', en: 'An error occurred' },
    retry:     { ar: 'إعادة المحاولة',  fr: 'Réessayer',     en: 'Retry' },
    save:      { ar: 'حفظ',             fr: 'Enregistrer',   en: 'Save' },
    cancel:    { ar: 'إلغاء',           fr: 'Annuler',       en: 'Cancel' },
    confirm:   { ar: 'تأكيد',           fr: 'Confirmer',     en: 'Confirm' },
    viewMore:  { ar: 'عرض المزيد',      fr: 'Voir plus',     en: 'View More' },
    readMore:  { ar: 'اقرأ المزيد',     fr: 'Lire la suite', en: 'Read More' },
    close:     { ar: 'إغلاق',           fr: 'Fermer',        en: 'Close' },
    back:      { ar: 'رجوع',            fr: 'Retour',        en: 'Back' },
    next:      { ar: 'التالي',           fr: 'Suivant',       en: 'Next' },
    previous:  { ar: 'السابق',          fr: 'Précédent',     en: 'Previous' },
    start:     { ar: 'ابدأ',            fr: 'Commencer',     en: 'Start' },
    language:  { ar: 'اللغة',           fr: 'Langue',        en: 'Language' },
    arabic:    { ar: 'العربية',          fr: 'Arabe',         en: 'Arabic' },
    french:    { ar: 'الفرنسية',         fr: 'Français',      en: 'French' },
    english:   { ar: 'الإنجليزية',       fr: 'Anglais',       en: 'English' },
    darkMode:  { ar: 'الوضع الداكن',     fr: 'Mode sombre',   en: 'Dark Mode' },
    lightMode: { ar: 'الوضع الفاتح',     fr: 'Mode clair',    en: 'Light Mode' },
  },

  // ─── Splash Screen ──────────────────────────────
  splash: {
    welcome:    { ar: 'مرحباً بك في', fr: 'Bienvenue sur', en: 'Welcome to' },
    tagline:    { ar: 'رفيقك في رحلة الحياة الصحية', fr: 'Votre compagnon pour une vie saine', en: 'Your companion for a healthy life' },
    loading:    { ar: 'جاري التحميل...', fr: 'Chargement...', en: 'Loading...' },
    getStarted: { ar: 'ابدأ الآن', fr: 'Commencer', en: 'Get Started' },
  },

  // ─── Footer ──────────────────────────────────────
  footer: {
    rights: { ar: '© 2026 CILIAC PRO - جميع الحقوق محفوظة', fr: '© 2026 CILIAC PRO - Tous droits réservés', en: '© 2026 CILIAC PRO - All rights reserved' },
  },

  // ─── Landing Page Features ──────────────────────
  landing: {
    feature1Title: { ar: 'وصفات متنوعة', fr: 'Recettes variées', en: 'Varied Recipes' },
    feature1Desc:  { ar: 'مئات الوصفات الصحية المناسبة لحالتك', fr: 'Des centaines de recettes saines adaptées à votre condition', en: 'Hundreds of healthy recipes suitable for your condition' },
    feature2Title: { ar: 'نصائح صحية', fr: 'Conseils santé', en: 'Health Tips' },
    feature2Desc:  { ar: 'إرشادات غذائية من متخصصين', fr: 'Conseils nutritionnels de spécialistes', en: 'Nutritional guidance from specialists' },
    feature3Title: { ar: 'حياة صحية', fr: 'Vie saine', en: 'Healthy Life' },
    feature3Desc:  { ar: 'دليل للتعايش مع الأمراض المزمنة', fr: 'Guide pour vivre avec les maladies chroniques', en: 'Guide to living with chronic diseases' },
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
      return key
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
