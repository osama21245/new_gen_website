'use client'

import { ThemeProvider } from 'next-themes'
import { createContext, useContext, useState, ReactNode } from 'react'

// Language Context
type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Course Content',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Master Flutter Development',
    'hero.subtitle': 'Join New Gen Academy',
    'hero.description': 'Transform your career with industry-focused Flutter development training. Build real-world applications and become a market-ready engineer.',
    'hero.cta': 'Start Your Journey',
    'hero.watchDemo': 'Watch Demo',
    
    // Main Focus Section
    'focus.title': 'Our Flutter Course is Laser-Focused on Creating Industry-Ready Engineers',
    'focus.description': 'We train you to master every corner of Flutter — UI/UX, state management, APIs, Firebase, deployment, animations, and testing — through real-world projects that make you market-ready.',
    
    // Features
    'features.title': 'Why Choose New Gen Academy?',
    'features.realWorld': 'Real-World Projects',
    'features.realWorldDesc': 'Build actual applications used by thousands of users',
    'features.expert': 'Expert Instructors',
    'features.expertDesc': 'Learn from industry professionals with years of experience',
    'features.support': '24/7 Support',
    'features.supportDesc': 'Get help whenever you need it from our dedicated team',
    'features.career': 'Career Guidance',
    'features.careerDesc': 'Job placement assistance and career development support',
    
    // Curriculum
    'curriculum.title': 'Comprehensive Curriculum',
    'curriculum.foundation': 'Foundation',
    'curriculum.foundationDesc': 'Dart fundamentals, Flutter basics, and development environment setup',
    'curriculum.intermediate': 'Intermediate',
    'curriculum.intermediateDesc': 'State management, navigation, APIs, and database integration',
    'curriculum.advanced': 'Advanced',
    'curriculum.advancedDesc': 'Animations, testing, deployment, and performance optimization',
    'curriculum.mastery': 'Mastery',
    'curriculum.masteryDesc': 'Real-world projects, code reviews, and industry best practices',
    
    // Testimonials
    'testimonials.title': 'What Our Students Say',
    
    // CTA
    'cta.title': 'Ready to Start Your Flutter Journey?',
    'cta.description': 'Join thousands of successful developers who will transform their careers with New Gen Academy.',
    'cta.button': 'Enroll Now',
    'cta.guarantee': '30-day money-back guarantee',
    
    // Footer
    'footer.description': 'Empowering the next generation of Flutter developers with industry-focused education.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.follow': 'Follow Us',

    // Courses Page
    'courses.badge': 'Flutter Mastery Course',
    'courses.title': 'Real Projects, Real Skills',
    'courses.englishTitle': 'English',
    'courses.arabicTitle': 'العربية',
    'courses.englishDesc': 'In this course, you\'ll build real-world mobile applications for companies and our academy. You\'ll start where others ended — working directly in the market with real business owners and learning how to turn ideas into high-quality applications.',
    'courses.arabicDesc': 'في الكورس ده، هتشتغل على تطبيقات حقيقية لشركات وللأكاديمية بتاعتنا. هتتعلم من جوه السوق، وتبدأ من آخر نقطة وقف عندها غيرك.',
    'courses.startLearning': 'Start Learning',
    'courses.downloadPdf': 'Download Course PDF',
    
    // Course Levels Section
    'courses.levelsTitle': 'Course Levels & Projects',
    'courses.levelsSubtitle': '4 Levels, +20 Real Projects',
    'courses.levelsDesc': 'Each level focuses on a specific project that will teach you different Flutter skills and technologies. You\'ll build real applications that can be sold and generate revenue.',
    
    // Academy vs Client Projects
    'courses.academyProjectsTitle': '🔹 Academy Projects +6',
    'courses.academyProjectsSubtitle': 'Business-Based Learning',
    'courses.academyProjectsDesc': 'You\'ll work on our academy\'s own apps — real apps with business models. We\'ll build them together and try to sell them as products under our brand. Every app will teach you a different Flutter skill and use a different tech stack.',
    'courses.clientProjectsTitle': '🔹 Real Client Projects +14',
    'courses.clientProjectsSubtitle': 'Hands-on with Companies',
    'courses.clientProjectsDesc': 'Alongside our own projects, you\'ll also build apps for real companies. Some will be paid, some not — but all of them will give you direct experience in the market.',
    
    // Project Levels
    'courses.level1': 'Level 1',
    'courses.level2': 'Level 2',
    'courses.level3': 'Level 3',
    'courses.level4': 'Level 4',
    'courses.firstProject': 'Your First Project - Start Here!',
    'courses.businessModel': 'Business Model',
    'courses.detailedBreakdown': 'Detailed Learning Breakdown',
    'courses.hours': 'hours',
    'courses.technologiesMaster': 'Technologies You\'ll Master',
    
    // Course Stats
    'courses.trainingHours': 'Training Hours',
    'courses.realProjects': 'Real Projects',
    'courses.technologies': 'Technologies',
    'courses.careerGrowth': 'Career Growth',
    
    // Level 1 Spotlight
    'courses.level1Spotlight': 'Level 1 Project Spotlight',
    'courses.firstAppTitle': '✅ The First App: DM HUB - HR SaaS Automation Tool',
    'courses.whatYouBuild': 'What You\'ll Build',
    'courses.keyFeatures': 'Key Features:',
    'courses.enterpriseValue': 'Enterprise Value:',
    'courses.enterpriseValueDesc': 'This is a real SaaS tool that HR companies will pay $99+/month for. You\'ll learn to build, deploy, and monetize enterprise-grade applications.',
    'courses.showMore': 'Show More',
    'courses.showLess': 'Show Less',
    
    // Learning Journey
    'courses.learningJourney': 'Your Learning Journey',
    'courses.journeyTitle': 'From Beginner to Flutter Expert',
    'courses.journeyDesc': 'Follow our structured 4-level progression. Each level builds on the previous one, taking you from basic concepts to advanced enterprise-grade applications.',
    'courses.completeJourney': 'Complete Journey Overview',
    'courses.totalTraining': 'Total Training',
    'courses.revenuePotential': 'Revenue Potential',
    
    // Partnership Applications
    'courses.partnershipApps': 'Real Partnership Applications',
    'courses.partnershipTitle': 'Work on Real Client Projects',
    'courses.partnershipDesc': 'Beyond our academy projects, you\'ll collaborate with our partner companies on real applications that serve actual users and generate revenue.',
    'courses.softwareHousePartner': 'Software House Partner',
    'courses.aiSolutionsPartner': 'AI Solutions Partner',
    'courses.productBasedSportsApp': 'Product-Based Sports App',
    'courses.motorcycleDeliveryService': 'Motorcycle Delivery Service',
    'courses.whatWorkOn': 'What You\'ll Work On:',
    'courses.aiProjectsBuild': 'AI Projects You\'ll Build:',
    'courses.featuresYouDevelop': 'Features You\'ll Develop:',
    'courses.deliveryAppFeatures': 'Delivery App Features:',
    'courses.partnershipBenefits': 'Partnership Benefits',
    'courses.earnWhileLearning': 'Earn While Learning',
    'courses.earnDesc': 'Get paid for contributing to real projects',
    'courses.industryExperience': 'Industry Experience',
    'courses.industryDesc': 'Work directly with established companies',
    'courses.portfolioBuilding': 'Portfolio Building',
    'courses.portfolioDesc': 'Build impressive portfolio with real apps',
    
    // How We Work
    'courses.howWeWork': 'How We Work',
    'courses.fullDevCycle': 'The Full Development Cycle',
    'courses.designFigma': 'Design in Figma',
    'courses.developmentFlutter': 'Development with Flutter',
    'courses.testingFeedback': 'Testing with feedback',
    'courses.deployStores': 'Deploy to App Stores',
    'courses.monitorMonetize': 'Monitor & Monetize',
    
    // Prerequisites
    'courses.prerequisites': 'What Do You Need to Start?',
    'courses.downloadableContent': 'Downloadable Content',
    'courses.pdfDesc': 'You can refer to the PDF "Tech Flutter Training 100.pdf" for the full list of apps and what you\'ll learn at each level.',
    'courses.downloadFullDetails': 'Download Full Course Details',
    'courses.trainingHoursDesc': 'Complete curriculum with hands-on projects',
    'courses.dontHaveSkills': 'Don\'t have these skills?',
    'courses.level0Desc': 'We offer Level 0 training to prepare you with the latest, up-to-date content.',
    
    // Final CTA
    'courses.readyStart': 'Ready to Start Your Journey?',
    'courses.finalCtaDesc': 'Join thousands of developers who transformed their careers with real-world Flutter development',
    'courses.startLearningNow': 'Start Learning Now',

    // Video Hero
    'videoHero.featuredCourse': 'Featured Course',
    'videoHero.courseTitle': 'NewGen Flutter Course',
    'videoHero.courseDesc': 'Work on real projects from actual companies while learning Flutter. Get hands-on experience with live client requirements and unlock direct hiring opportunities with our partner companies upon course completion.',
    'videoHero.realCompanyProjects': 'Real company projects during training',
    'videoHero.directHiring': 'Direct hiring opportunities with partner companies',
    'videoHero.startLearningNow': 'Start Learning Now',
    'videoHero.viewProjects': 'View Projects',
    'videoHero.partnerCompanies': 'Partner Companies',
    'videoHero.hiringRate': 'Hiring Rate',
    'videoHero.realClientExp': 'Real Client Experience',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.courses': 'الكورسات',
    'nav.about': 'عننا',
    'nav.contact': 'كلمنا',
    
    // Hero Section
    'hero.title': 'اتعلم Flutter زي المحترفين',
    'hero.subtitle': 'تعال معانا في أكاديمية الجيل الجديد',
    'hero.description': 'غير مستقبلك المهني مع أقوى تدريب Flutter في مصر. اعمل مشاريع حقيقية وخلي نفسك مطور جاهز لسوق العمل.',
    'hero.cta': 'ابدأ دلوقتي',
    'hero.watchDemo': 'شوف الديمو',
    
    // Main Focus Section
    'focus.title': 'كورس Flutter بتاعنا مركز على إنك تطلع مهندس جاهز للشغل فعلاً',
    'focus.description': 'هنعلمك كل حاجة في Flutter — UI/UX، إدارة البيانات، APIs، Firebase، النشر، الأنيميشن، والتست — من خلال مشاريع حقيقية تخليك جاهز للسوق.',
    
    // Features
    'features.title': 'إيه اللي يخليك تختارنا؟',
    'features.realWorld': 'مشاريع حقيقية',
    'features.realWorldDesc': 'اشتغل على تطبيقات بجد بيستخدمها آلاف الناس',
    'features.expert': 'مدربين محترفين',
    'features.expertDesc': 'اتعلم من خبراء الصناعة اللي شغالين بسنين',
    'features.support': 'دعم 24/7',
    'features.supportDesc': 'لو احتجت مساعدة في أي وقت، احنا هنا',
    'features.career': 'توجيه مهني',
    'features.careerDesc': 'هنساعدك تلاقي شغل ونطور مسيرتك المهنية',
    
    // Curriculum
    'curriculum.title': 'المنهج الشامل',
    'curriculum.foundation': 'الأساسيات',
    'curriculum.foundationDesc': 'أساسيات Dart و Flutter وإزاي تجهز بيئة الشغل',
    'curriculum.intermediate': 'المستوى المتوسط',
    'curriculum.intermediateDesc': 'إدارة البيانات، التنقل، APIs، وربط قواعد البيانات',
    'curriculum.advanced': 'المستوى المتقدم',
    'curriculum.advancedDesc': 'الأنيميشن، التست، النشر، وتحسين الأداء',
    'curriculum.mastery': 'الاحتراف',
    'curriculum.masteryDesc': 'مشاريع حقيقية، مراجعة الكود، وأفضل الممارسات',
    
    // Testimonials
    'testimonials.title': 'إيه رأي طلابنا فينا',
    
    // CTA
    'cta.title': 'مستعد تبدأ رحلتك مع Flutter؟',
    'cta.description': 'تعال انضم لآلاف المطورين الناجحين اللي غيروا حياتهم المهنية معانا.',
    'cta.button': 'اشترك دلوقتي',
    'cta.guarantee': 'ضمان استرداد الفلوس لمدة 30 يوم',
    
    // Footer
    'footer.description': 'بنساعد الجيل الجديد من مطوري Flutter يبقوا أحسن في الصناعة.',
    'footer.quickLinks': 'لينكات مهمة',
    'footer.contact': 'بياناتنا',
    'footer.follow': 'تابعنا',

    // Courses Page
    'courses.badge': 'دورة إتقان Flutter',
    'courses.title': 'مشاريع حقيقية، مهارات حقيقية',
    'courses.englishTitle': 'English',
    'courses.arabicTitle': 'العربية',
    'courses.englishDesc': 'In this course, you\'ll build real-world mobile applications for companies and our academy. You\'ll start where others ended — working directly in the market with real business owners and learning how to turn ideas into high-quality applications.',
    'courses.arabicDesc': 'في الكورس ده، هتشتغل على تطبيقات حقيقية لشركات وللأكاديمية بتاعتنا. هتتعلم من جوه السوق، وتبدأ من آخر نقطة وقف عندها غيرك.',
    'courses.startLearning': 'ابدأ التعلم',
    'courses.downloadPdf': 'حمّل PDF الدورة',
    
    // Course Levels Section
    'courses.levelsTitle': 'مستويات الكورس والمشاريع',
    'courses.levelsSubtitle': 'مستويات، +20 مشاريع حقيقية',
    'courses.levelsDesc': 'كل مستوى مركز على مشروع معين هيعلمك مهارات وتقنيات مختلفة في Flutter. هتبني تطبيقات حقيقية ممكن تتباع وتجيب فلوس.',
    
    // Academy vs Client Projects
    'courses.academyProjectsTitle': '🔹 مشاريع الأكاديمية +6',
    'courses.academyProjectsSubtitle': 'تعلم قائم على الأعمال',
    'courses.academyProjectsDesc': 'هنبني تطبيقات للأكاديمية بنفسنا، تطبيقات حقيقية ووراها فكرة مشروع. وهنجرب نبيعها تحت اسم شركتنا. كل تطبيق هيعلمك حاجة جديدة في فلاتر.',
    'courses.clientProjectsTitle': '🔹 مشاريع عملاء حقيقيين +14',
    'courses.clientProjectsSubtitle': 'خبرة عملية مع الشركات',
    'courses.clientProjectsDesc': 'كمان هتشتغل على تطبيقات لشركات حقيقية. ممكن يكون في ربح بسيط، بس الأهم هو خبرة السوق والتعامل مع الكلاينت.',
    
    // Project Levels
    'courses.level1': 'المستوى الأول',
    'courses.level2': 'المستوى الثاني',
    'courses.level3': 'المستوى الثالث',
    'courses.level4': 'المستوى الرابع',
    'courses.firstProject': 'أول مشروع ليك - ابدأ من هنا!',
    'courses.businessModel': 'نموذج العمل',
    'courses.detailedBreakdown': 'تفصيل التعلم',
    'courses.hours': 'ساعة',
    'courses.technologiesMaster': 'التقنيات اللي هتتعلمها',
    
    // Course Stats
    'courses.trainingHours': 'ساعة تدريب',
    'courses.realProjects': 'مشروع حقيقي',
    'courses.technologies': 'تقنية',
    'courses.careerGrowth': 'نمو مهني',
    
    // Level 1 Spotlight
    'courses.level1Spotlight': 'تسليط الضوء على مشروع المستوى الأول',
    'courses.firstAppTitle': '✅ أول تطبيق: DM HUB - أداة أتمتة HR SaaS',
    'courses.whatYouBuild': 'إيه اللي هتبنيه',
    'courses.keyFeatures': 'المميزات الأساسية:',
    'courses.enterpriseValue': 'قيمة للشركات:',
    'courses.enterpriseValueDesc': 'ده أداة SaaS حقيقية شركات HR هتدفع 99 دولار+ شهرياً فيها. هتتعلم تبني وتنشر وتحقق ربح من تطبيقات مستوى الشركات.',
    'courses.showMore': 'إظهار المزيد',
    'courses.showLess': 'إخفاء المزيد',
    
    // Learning Journey
    'courses.learningJourney': 'رحلة التعلم الخاصة بك',
    'courses.journeyTitle': 'من المبتدئ إلى خبير Flutter',
    'courses.journeyDesc': 'اتبع التقدم المنظم من 4 مستويات. كل مستوى يبني على اللي قبله، يوصلك من المفاهيم الأساسية لتطبيقات الشركات المتقدمة.',
    'courses.completeJourney': 'نظرة عامة على الرحلة الكاملة',
    'courses.totalTraining': 'إجمالي التدريب',
    'courses.revenuePotential': 'إمكانية الربح',
    
    // Partnership Applications
    'courses.partnershipApps': 'تطبيقات الشراكات الحقيقية',
    'courses.partnershipTitle': 'اشتغل على مشاريع عملاء حقيقيين',
    'courses.partnershipDesc': 'بالإضافة لمشاريع الأكاديمية، هتتعاون مع الشركات الشريكة على تطبيقات حقيقية تخدم مستخدمين فعليين وتحقق أرباح.',
    'courses.softwareHousePartner': 'شريك بيت البرمجيات',
    'courses.aiSolutionsPartner': 'شريك حلول الذكاء الاصطناعي',
    'courses.productBasedSportsApp': 'تطبيق رياضي قائم على المنتج',
    'courses.motorcycleDeliveryService': 'خدمة توصيل بالدراجات النارية',
    'courses.whatWorkOn': 'إيه اللي هتشتغل عليه:',
    'courses.aiProjectsBuild': 'مشاريع الذكاء الاصطناعي اللي هتبنيها:',
    'courses.featuresYouDevelop': 'المميزات اللي هتطورها:',
    'courses.deliveryAppFeatures': 'مميزات تطبيق التوصيل:',
    'courses.partnershipBenefits': 'فوائد الشراكات',
    'courses.earnWhileLearning': 'اكسب أثناء التعلم',
    'courses.earnDesc': 'احصل على أجر للمساهمة في مشاريع حقيقية',
    'courses.industryExperience': 'خبرة في الصناعة',
    'courses.industryDesc': 'اشتغل مباشرة مع شركات راسخة',
    'courses.portfolioBuilding': 'بناء المحفظة',
    'courses.portfolioDesc': 'ابني محفظة مميزة بتطبيقات حقيقية',
    
    // How We Work
    'courses.howWeWork': 'إزاي بنشتغل',
    'courses.fullDevCycle': 'دورة التطوير الكاملة',
    'courses.designFigma': 'تصميم على Figma',
    'courses.developmentFlutter': 'برمجة بفلاتر',
    'courses.testingFeedback': 'اختبار وتحسين',
    'courses.deployStores': 'رفع على المتاجر',
    'courses.monitorMonetize': 'متابعة وكسب أرباح',
    
    // Prerequisites
    'courses.prerequisites': 'إيه اللي محتاجه عشان تبدأ؟',
    'courses.downloadableContent': 'محتوى قابل للتحميل',
    'courses.pdfDesc': 'تقدر تبص على ملف PDF "Tech Flutter Training 100.pdf" علشان تعرف التطبيقات والمستوى التعليمي في كل مرحلة.',
    'courses.downloadFullDetails': 'حمّل تفاصيل الدورة كاملة',
    'courses.trainingHoursDesc': 'منهج كامل مع مشاريع عملية',
    'courses.dontHaveSkills': 'مش عندك المهارات دي؟',
    'courses.level0Desc': 'احنا بنوفر مستوى تمهيدي (Level 0) يخليك جاهز تبدأ معانا.',
    
    // Final CTA
    'courses.readyStart': 'مستعد تبدأ رحلتك؟',
    'courses.finalCtaDesc': 'تعال انضم لآلاف المطورين اللي غيروا حياتهم المهنية بتطوير Flutter في العالم الحقيقي',
    'courses.startLearningNow': 'ابدأ التعلم دلوقتي',

    // Video Hero
    'videoHero.featuredCourse': 'الدورة المميزة',
    'videoHero.courseTitle': 'دورة NewGen Flutter',
    'videoHero.courseDesc': 'اعمل على مشاريع حقيقية من شركات فعلية أثناء تعلم Flutter. احصل على خبرة عملية مع متطلبات العملاء الحقيقية وافتح فرص التوظيف المباشر مع شركائنا عند إكمال الدورة.',
    'videoHero.realCompanyProjects': 'مشاريع شركات حقيقية أثناء التدريب',
    'videoHero.directHiring': 'فرص توظيف مباشر مع الشركات الشريكة',
    'videoHero.startLearningNow': 'ابدأ التعلم الآن',
    'videoHero.viewProjects': 'عرض المشاريع',
    'videoHero.partnerCompanies': 'شركة شريكة',
    'videoHero.hiringRate': 'معدل التوظيف',
    'videoHero.realClientExp': 'تجربة عملاء حقيقية',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  
  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
} 