'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { 
  Code, 
  Rocket, 
  Users, 
  Building, 
  Target, 
  CheckCircle, 
  Star,
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
  DollarSign,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Play,
  Download,
  Brain,
  Palette,
  Database,
  Settings,
  Globe,
  Monitor,
  FileText,
  MessageSquare,
  Bot,
  Workflow
} from 'lucide-react'
import Image from 'next/image'

export default function CoursePage() {
  const { language, t } = useLanguage()
  const [expandedProject, setExpandedProject] = useState<number | null>(1) // Start with first project expanded

  const projects = [
    {
      id: 1,
      level: t('courses.level1'),
      name: "DM HUB",
      nameAr: "مركز الرسائل",
      type: "HR SaaS Automation Tool",
      typeAr: "أداة أتمتة للموارد البشرية",
      hours: 28,
      icon: Workflow,
      color: "from-orange-500 to-red-500",
      image: "/images/dm.jpg",
      isFirst: true,
      description: "Build a comprehensive HR automation tool that manages social media and direct messages for HR companies using Firebase, n8n workflows, and real-time monitoring.",
      descriptionAr: "اعمل أداة أتمتة شاملة للموارد البشرية تدير وسائل التواصل الاجتماعي والرسائل المباشرة لشركات HR باستخدام Firebase و n8n وأدوات المراقبة الفورية.",
      businessModel: "Enterprise SaaS solution for HR companies - monthly subscriptions starting at $99/month",
      businessModelAr: "حل SaaS للشركات - اشتراكات شهرية تبدأ من 99 دولار شهرياً",
      detailedBreakdown: [
        { task: "Introduction to Automation", taskAr: "مقدمة في الأتمتة", hours: "2h", description: "What it is and where it's used" },
        { task: "n8n Basics", taskAr: "أساسيات n8n", hours: "3h", description: "Visual workflows, triggers, HTTP requests" },
        { task: "n8n + Firebase Integration", taskAr: "تكامل n8n مع Firebase", hours: "3h", description: "Webhooks, triggers, automation" },
        { task: "Firebase Firestore Deep Dive", taskAr: "التعمق في Firebase Firestore", hours: "3h", description: "Structuring data, NoSQL vs SQL" },
        { task: "Firebase Functions", taskAr: "Firebase Functions", hours: "2h", description: "Business logic on backend" },
        { task: "Firestore Security Rules", taskAr: "قواعد أمان Firestore", hours: "2h", description: "Writing & applying security rules" },
        { task: "Firebase Auth Integration", taskAr: "تكامل مصادقة Firebase", hours: "2h", description: "Authentication with security rules" },
        { task: "Bloc & Cubit State Management", taskAr: "إدارة الحالة Bloc & Cubit", hours: "2h", description: "Clean state management" },
        { task: "Clean Architecture", taskAr: "البنية النظيفة", hours: "2h", description: "Feature-based scalable structure" },
        { task: "Frontend Integration", taskAr: "تكامل الواجهة الأمامية", hours: "3h", description: "Linking n8n workflows to Flutter" },
        { task: "UI Development", taskAr: "تطوير واجهة المستخدم", hours: "2h", description: "Dashboard, workflow manager, user pages" },
        { task: "Monitoring Tools", taskAr: "أدوات المراقبة", hours: "1h", description: "Sentry, logging, crash tracking" },
        { task: "SaaS Monetization", taskAr: "تحقيق الربح من SaaS", hours: "1h", description: "Usage pricing, subscription model" }
      ],
      skills: [
        { en: "n8n Automation Workflows", ar: "سير عمل الأتمتة n8n" },
        { en: "Firebase Functions", ar: "Firebase Functions" },
        { en: "Firestore Security Rules", ar: "قواعد أمان Firestore" },
        { en: "Real-time Database", ar: "قاعدة البيانات الفورية" },
        { en: "Social Media APIs", ar: "APIs وسائل التواصل" },
        { en: "Advanced Authentication", ar: "مصادقة متقدمة" },
        { en: "SaaS Monetization", ar: "تحقيق الربح من SaaS" },
        { en: "DevOps & Monitoring", ar: "DevOps والمراقبة" }
      ]
    },
    {
      id: 2,
      level: t('courses.level2'),
      name: "Reshape-AI",
      nameAr: "ريشيب - الذكي",
      type: "AI-Powered Interior Design",
      typeAr: "تصميم داخلي بالذكاء الاصطناعي",
      hours: 16,
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      image: "/images/reshapeAi.png",
      description: "Create an intelligent interior design app that uses AI to analyze room photos and suggest optimized design solutions with 3D visualization and cost estimation.",
      descriptionAr: "اعمل تطبيق تصميم داخلي ذكي يستخدم AI لتحليل صور الغرف واقتراح حلول تصميم محسنة مع تصور ثلاثي الأبعاد وتقدير التكلفة.",
      businessModel: "Freemium model with AI design credits - $19.99/month for unlimited AI suggestions",
      businessModelAr: "نموذج مجاني مع اقتراحات AI محدودة - 19.99 دولار شهرياً للاقتراحات اللامحدودة",
      detailedBreakdown: [
        { task: "MVVM Architecture", taskAr: "معمارية MVVM", hours: "2h", description: "Scalable project structure using MVVM" },
        { task: "State Management (Provider)", taskAr: "إدارة الحالة (Provider)", hours: "2h", description: "Managing UI state, logic, and separation" },
        { task: "API Integration", taskAr: "تكامل API", hours: "2h", description: "Handling requests, image upload, API responses" },
        { task: "Backend Development", taskAr: "تطوير الخلفية", hours: "3h", description: "Basic AI backend using Python/Node for image processing" },
        { task: "AI Image Handling", taskAr: "معالجة الصور بالذكاء الاصطناعي", hours: "2h", description: "Accepting room images and displaying AI-enhanced versions" },
        { task: "Payment Integration (PayPal)", taskAr: "تكامل الدفع (PayPal)", hours: "2h", description: "Adding PayPal gateway and handling transactions" },
        { task: "Final Touches", taskAr: "اللمسات الأخيرة", hours: "3h", description: "UI/UX polish, error handling, caching, optimization" }
      ],
      skills: [
        { en: "MVVM Architecture", ar: "معمارية MVVM" },
        { en: "Provider State Management", ar: "إدارة الحالة بـ Provider" },
        { en: "OpenAI API Integration", ar: "تكامل OpenAI API" },
        { en: "Computer Vision", ar: "رؤية الحاسوب" },
        { en: "Image Processing", ar: "معالجة الصور" },
        { en: "3D Visualization", ar: "التصور ثلاثي الأبعاد" },
        { en: "PayPal Integration", ar: "تكامل PayPal" },
        { en: "Camera & Gallery", ar: "الكاميرا والمعرض" }
      ]
    },
    {
      id: 3,
      level: t('courses.level3'),
      name: "Maktabty",
      nameAr: "مكتبتي",
      type: "Complete E-commerce Platform",
      typeAr: "منصة تجارة إلكترونية كاملة",
      hours: 30,
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      image: "/images/maktabty.jpg",
      description: "Build a fully scalable e-commerce marketplace for books and educational materials with vendor management, inventory tracking, and multi-payment gateway integration.",
      descriptionAr: "اعمل سوق إلكتروني قابل للتوسع للكتب والمواد التعليمية مع إدارة البائعين وتتبع المخزون وتكامل بوابات دفع متعددة.",
      businessModel: "Commission-based marketplace - 5% transaction fee + monthly vendor subscriptions",
      businessModelAr: "سوق بنظام العمولة - 5% رسوم معاملة + اشتراكات شهرية للبائعين",
      detailedBreakdown: [
        { task: "Clean Architecture", taskAr: "البنية النظيفة", hours: "3h", description: "Feature-based structure with scalable layers" },
        { task: "Riverpod State Management", taskAr: "إدارة الحالة Riverpod", hours: "3h", description: "Centralized, reactive logic handling" },
        { task: "Supabase Authentication", taskAr: "مصادقة Supabase", hours: "3h", description: "Sign in, Sign up, Email verification using Supabase" },
        { task: "App Screens UI", taskAr: "واجهات التطبيق", hours: "3h", description: "Home & Product Screens - Dynamic UI, categories, product listings" },
        { task: "Supabase PostgreSQL", taskAr: "قاعدة بيانات PostgreSQL", hours: "3h", description: "PostgreSQL setup and querying" },
        { task: "Supabase Storage", taskAr: "تخزين Supabase", hours: "2h", description: "Upload & retrieve product images and files" },
        { task: "Edge Functions", taskAr: "Edge Functions", hours: "2h", description: "Custom backend logic (e.g., calculating discounts)" },
        { task: "SQL Functions", taskAr: "دوال SQL", hours: "2h", description: "Creating custom queries in PostgreSQL" },
        { task: "Caching System", taskAr: "نظام التخزين المؤقت", hours: "2h", description: "Hive/shared_prefs for offline and faster access" },
        { task: "RLS Security", taskAr: "أمان RLS", hours: "2h", description: "Protecting data at the row level" },
        { task: "Error Handling", taskAr: "معالجة الأخطاء", hours: "1.5h", description: "Handling API errors, best practices" },
        { task: "Product Management", taskAr: "إدارة المنتجات", hours: "1h", description: "CRUD for categories/products using Supabase" },
        { task: "Order Overview", taskAr: "نظرة عامة على الطلبات", hours: "1h", description: "Viewing orders and updating statuses" },
        { task: "Admin Panel Integration", taskAr: "تكامل لوحة الإدارة", hours: "1h", description: "Shared DB, authentication, and API calls" },
        { task: "Finishing Touches", taskAr: "اللمسات الأخيرة", hours: "0.5h", description: "UI polish + role-based security" }
      ],
      skills: [
        { en: "Clean Architecture", ar: "البنية النظيفة" },
        { en: "Riverpod State Management", ar: "إدارة الحالة بـ Riverpod" },
        { en: "Supabase Database", ar: "قاعدة بيانات Supabase" },
        { en: "PostgreSQL Queries", ar: "استعلامات PostgreSQL" },
        { en: "Row Level Security", ar: "أمان مستوى الصف" },
        { en: "Multi-vendor System", ar: "نظام متعدد البائعين" },
        { en: "Inventory Management", ar: "إدارة المخزون" },
        { en: "Admin Dashboard", ar: "لوحة تحكم الإدارة" }
      ]
    },
    {
      id: 4,
      level: t('courses.level4'),
      name: "Talk-With-My-PDF",
      nameAr: "اتكلم مع الـ PDF بتاعي",
      type: "AI Document Intelligence",
      typeAr: "ذكاء المستندات بالذكاء الاصطناعي",
      hours: 26,
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      image: "/images/talk-with-pdf.png",
      description: "Develop an advanced AI-powered document chat system using RAG architecture, vector databases, and natural language processing for intelligent document interaction.",
      descriptionAr: "طور نظام محادثة مستندات متقدم بالذكاء الاصطناعي باستخدام معمارية RAG وقواعد البيانات المتجهة ومعالجة اللغة الطبيعية.",
      businessModel: "SaaS subscription for professionals - $29/month with usage-based pricing for enterprise",
      businessModelAr: "اشتراك SaaS للمهنيين - 29 دولار شهرياً مع تسعير حسب الاستخدام للشركات",
      detailedBreakdown: [
        { task: "RAG Development", taskAr: "تطوير RAG", hours: "2h", description: "Retrieval-Augmented Generation setup" },
        { task: "Pinecone Vector DB", taskAr: "قاعدة بيانات Pinecone المتجهة", hours: "2h", description: "Vector DB setup and querying" },
        { task: "Drizzle ORM Integration", taskAr: "تكامل Drizzle ORM", hours: "1.5h", description: "Database ORM setup" },
        { task: "Neon DB Setup", taskAr: "إعداد Neon DB", hours: "1.5h", description: "Database setup and querying" },
        { task: "AWS S3 Integration", taskAr: "تكامل AWS S3", hours: "1.5h", description: "File uploads and storage" },
        { task: "Bloc & Cubit State Management", taskAr: "إدارة الحالة Bloc & Cubit", hours: "2h", description: "Chat Flow + Uploads state management" },
        { task: "UI Development", taskAr: "تطوير واجهة المستخدم", hours: "3h", description: "Homepage, ChatPage, Upload UI" },
        { task: "Local Notifications", taskAr: "الإشعارات المحلية", hours: "1h", description: "Notification system setup" },
        { task: "Frontend <-> Backend", taskAr: "ربط الواجهة بالخلفية", hours: "2h", description: "Linking frontend with backend endpoints" },
        { task: "Firebase Remote Config", taskAr: "Firebase Remote Config", hours: "1h", description: "Remote configuration management" },
        { task: "Firebase Analytics", taskAr: "Firebase Analytics", hours: "1h", description: "Analytics integration" },
        { task: "Firebase Crashlytics", taskAr: "Firebase Crashlytics", hours: "1h", description: "Crash reporting" },
        { task: "Shorebird Integration", taskAr: "تكامل Shorebird", hours: "1.5h", description: "Over-the-air hotfixes" },
        { task: "Stripe Payment Gateway", taskAr: "بوابة دفع Stripe", hours: "1.5h", description: "Payment processing" },
        { task: "App Debugging & Fixes", taskAr: "تصحيح الأخطاء", hours: "1.5h", description: "Production issue tracking and fixes" }
      ],
      skills: [
        { en: "RAG Architecture", ar: "معمارية RAG" },
        { en: "Vector Databases", ar: "قواعد البيانات المتجهة" },
        { en: "Pinecone Integration", ar: "تكامل Pinecone" },
        { en: "OpenAI Embeddings", ar: "OpenAI Embeddings" },
        { en: "AWS S3 Storage", ar: "تخزين AWS S3" },
        { en: "Bloc/Cubit Pattern", ar: "نمط Bloc/Cubit" },
        { en: "Stripe Payments", ar: "مدفوعات Stripe" },
        { en: "PDF Processing", ar: "معالجة PDF" }
      ]
    }
  ]

  const learningCycle = [
    { icon: Palette, titleEn: t('courses.designFigma'), titleAr: t('courses.designFigma') },
    { icon: Code, titleEn: t('courses.developmentFlutter'), titleAr: t('courses.developmentFlutter') },
    { icon: Shield, titleEn: t('courses.testingFeedback'), titleAr: t('courses.testingFeedback') },
    { icon: Globe, titleEn: t('courses.deployStores'), titleAr: t('courses.deployStores') },
    { icon: Monitor, titleEn: t('courses.monitorMonetize'), titleAr: t('courses.monitorMonetize') }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full glass-strong mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="w-6 h-6 mr-3 text-purple-600" />
              <span className="font-semibold">{t('courses.badge')}</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="gradient-text">{t('courses.title')}</span>
            </motion.h1>

            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* English */}
              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EN</span>
                  </div>
                  <h3 className="text-xl font-bold">{t('courses.englishTitle')}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('courses.englishDesc')}
                </p>
              </div>

              {/* Arabic */}
              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AR</span>
                  </div>
                  <h3 className="text-xl font-bold">{t('courses.arabicTitle')}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed" dir="rtl">
                  {t('courses.arabicDesc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="https://wa.me/201031559635?text=Hello! I want to know more about the Flutter Mastery Course"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                {t('courses.startLearning')}
              </motion.a>

            
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Will You Build Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-5 h-5 mr-2 text-purple-500" />
              <span className="font-semibold">{t('courses.levelsTitle')}</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              {t('courses.levelsSubtitle')}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('courses.levelsDesc')}
            </p>
          </motion.div>

          {/* Academy vs Client Projects */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t('courses.academyProjectsTitle')}</h3>
                    <p className="text-sm text-purple-600 font-semibold">
                      {t('courses.academyProjectsSubtitle')}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {t('courses.academyProjectsDesc')}
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t('courses.clientProjectsTitle')}</h3>
                    <p className="text-sm text-green-600 font-semibold">
                      {t('courses.clientProjectsSubtitle')}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {t('courses.clientProjectsDesc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={project.id}
                  className={`glass-strong rounded-3xl p-8 hover:glow transition-all duration-300 ${
                    project.isFirst ? 'ring-2 ring-purple-500/50 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.isFirst && (
                    <div className="mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-bold">
                        <Star className="w-4 h-4 mr-2" />
                        {t('courses.firstProject')}
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    {/* Project Image & Info */}
                    <div className="md:col-span-2">
                      {/* Project Image */}
                      <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                              {project.level}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm font-semibold">{project.hours}h</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold">
                            {language === 'ar' ? project.nameAr : project.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {language === 'ar' ? project.typeAr : project.type}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {language === 'ar' ? project.descriptionAr : project.description}
                      </p>

                      {/* Business Model */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-800/50">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-semibold text-green-700 dark:text-green-300 text-sm">
                            {t('courses.businessModel')}
                          </span>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {language === 'ar' ? project.businessModelAr : project.businessModel}
                        </p>
                      </div>

                      {/* Detailed Breakdown */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-semibold text-lg mb-4">
                          {t('courses.detailedBreakdown')} ({project.hours} {t('courses.hours')})
                        </h4>
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                          {project.detailedBreakdown.map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: itemIndex * 0.05, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex-shrink-0 w-12 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-md flex items-center justify-center">
                                <span className="text-xs font-bold text-purple-700 dark:text-purple-300">{item.hours}</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="font-medium text-sm mb-1">
                                  {language === 'ar' ? item.taskAr : item.task}
                                </h5>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">
                        {t('courses.technologiesMaster')}
                      </h4>
                      <div className="space-y-2">
                        {project.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {language === 'ar' ? skill.ar : skill.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Course Stats */}
          <motion.div
            className="mt-16 text-center glass-strong rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">100</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t('courses.trainingHours')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t('courses.realProjects')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t('courses.technologies')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t('courses.careerGrowth')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Spotlight Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full glass mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-semibold">
                  {t('courses.level1Spotlight')}
                </span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('courses.firstAppTitle')}
              </h3>
            </div>

            {/* Project Cards Grid */}
            <div className="grid gap-6">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                const isExpanded = expandedProject === project.id
                
                return (
                  <motion.div
                    key={project.id}
                    className={`glass-strong rounded-3xl p-8 hover:glow transition-all duration-300 ${
                      project.isFirst ? 'ring-2 ring-purple-500/50 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Project Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full">
                              {project.level}
                            </span>
                            <span className="text-sm font-semibold text-purple-600">{project.hours}h</span>
                            {project.isFirst && (
                              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-full">
                                <Star className="w-3 h-3 mr-1 inline" />
                                {t('courses.firstProject')}
                              </span>
                            )}
                          </div>
                          <h4 className="text-2xl font-bold">
                            {language === 'ar' ? project.nameAr : project.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {language === 'ar' ? project.typeAr : project.type}
                          </p>
                        </div>
                      </div>
                      
                      <motion.button
                        onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                        className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isExpanded ? t('courses.showLess') : t('courses.showMore')}
                      </motion.button>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {language === 'ar' ? project.descriptionAr : project.description}
                    </p>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {isExpanded && (
                        <div className="space-y-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                          <div className="grid md:grid-cols-2 gap-8">
                            {/* English Details */}
                            <div className="glass rounded-2xl p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">EN</span>
                                </div>
                                <h5 className="text-xl font-bold">{t('courses.whatYouBuild')}</h5>
                              </div>
                              <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  <strong>{project.name} - {project.type}</strong> - {project.description}
                                </p>
                                
                                <div className="space-y-2">
                                  <h6 className="font-semibold text-purple-600">{t('courses.keyFeatures')}</h6>
                                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                    {project.skills.slice(0, 6).map((skill, skillIndex) => (
                                      <li key={skillIndex}>• {skill.en}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-sm text-green-700 dark:text-green-300">
                                    <strong>{t('courses.enterpriseValue')}</strong> {project.businessModel}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Arabic Details */}
                            <div className="glass rounded-2xl p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">AR</span>
                                </div>
                                <h5 className="text-xl font-bold">{t('courses.whatYouBuild')}</h5>
                              </div>
                              <div className="space-y-4" dir="rtl">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  <strong>{project.nameAr} - {project.typeAr}</strong> - {project.descriptionAr}
                                </p>
                                
                                <div className="space-y-2">
                                  <h6 className="font-semibold text-purple-600">{t('courses.keyFeatures')}</h6>
                                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                    {project.skills.slice(0, 6).map((skill, skillIndex) => (
                                      <li key={skillIndex}>• {skill.ar}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-sm text-green-700 dark:text-green-300">
                                    <strong>قيمة للشركات:</strong> {project.businessModelAr}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Technologies Breakdown */}
                          {project.id === 1 && (
                            <div className="mt-6 glass rounded-2xl p-6">
                              <h6 className="text-xl font-bold text-center mb-6">
                                <span className="lang-en">Technologies You'll Master in {project.level} ({project.name})</span>
                                <span className="lang-ar hidden">التقنيات اللي هتتعلمها في {project.level} ({project.nameAr})</span>
                              </h6>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                                {[
                                  { name: 'Firebase', icon: '🔥', description: 'Backend & Database' },
                                  { name: 'n8n', icon: '⚡', description: 'Workflow Automation' },
                                  { name: 'Firestore', icon: '📊', description: 'NoSQL Database' },
                                  { name: 'Authentication', icon: '🔐', description: 'User Security' },
                                  { name: 'Social APIs', icon: '📱', description: 'Platform Integration' },
                                  { name: 'Real-time', icon: '⚡', description: 'Live Updates' },
                                  { name: 'DevOps', icon: '🛠️', description: 'Monitoring Tools' },
                                  { name: 'SaaS', icon: '💰', description: 'Monetization' }
                                ].map((tech, techIndex) => (
                                  <motion.div
                                    key={techIndex}
                                    className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="text-2xl mb-2">{tech.icon}</div>
                                    <div className="font-semibold text-sm mb-1">{tech.name}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">{tech.description}</div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Learning Progression Timeline */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-5 h-5 mr-2 text-blue-500" />
                <span className="font-semibold">
                  <span className="lang-en">Your Learning Journey</span>
                  <span className="lang-ar hidden">رحلة التعلم الخاصة بك</span>
                </span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                <span className="lang-en">From Beginner to Flutter Expert</span>
                <span className="lang-ar hidden">من المبتدئ إلى خبير Flutter</span>
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                <span className="lang-en">
                  Follow our structured 4-level progression. Each level builds on the previous one, 
                  taking you from basic concepts to advanced enterprise-grade applications.
                </span>
                <span className="lang-ar hidden">
                  اتبع التقدم المنظم من 4 مستويات. كل مستوى يبني على اللي قبله، 
                  يوصلك من المفاهيم الأساسية لتطبيقات الشركات المتقدمة.
                </span>
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-purple-500 via-green-500 to-blue-500 rounded-full"></div>
              
              <div className="space-y-16">
                {projects.map((project, index) => {
                  const IconComponent = project.icon
                  const isEven = index % 2 === 0
                  
                  return (
                    <motion.div
                      key={project.id}
                      className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {/* Content */}
                      <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <motion.div
                          className="glass-strong rounded-2xl p-6 hover:glow transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className={isEven ? 'text-right' : 'text-left'}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full">
                                  {project.level}
                                </span>
                                <span className="text-sm font-semibold text-purple-600">{project.hours}h</span>
                              </div>
                              <h4 className="text-xl font-bold">
                                {language === 'ar' ? project.nameAr : project.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {language === 'ar' ? project.typeAr : project.type}
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            {language === 'ar' ? project.descriptionAr : project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.skills.slice(0, 4).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium"
                              >
                                {language === 'ar' ? skill.ar : skill.en}
                              </span>
                            ))}
                            {project.skills.length > 4 && (
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                                +{project.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1 }}
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(0,0,0,0.1)",
                              "0 0 30px rgba(168, 85, 247, 0.4)",
                              "0 0 20px rgba(0,0,0,0.1)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-white font-bold text-lg">{project.id}</span>
                        </motion.div>
                      </div>
                      
                      {/* Empty space for alternating layout */}
                      <div className="w-5/12"></div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Summary Stats */}
            <motion.div
              className="mt-16 text-center glass-strong rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-6">
                <span className="lang-en">Complete Journey Overview</span>
                <span className="lang-ar hidden">نظرة عامة على الرحلة الكاملة</span>
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">100h</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span className="lang-en">Total Training</span>
                    <span className="lang-ar hidden">إجمالي التدريب</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span className="lang-en">Real Projects</span>
                    <span className="lang-ar hidden">مشروع حقيقي</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span className="lang-en">Technologies</span>
                    <span className="lang-ar hidden">تقنية</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">$1K+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span className="lang-en">Revenue Potential</span>
                    <span className="lang-ar hidden">إمكانية الربح</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Applications Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-5 h-5 mr-2 text-green-500" />
            <span className="font-semibold">
              <span className="lang-en">Real Partnership Applications</span>
              <span className="lang-ar hidden">تطبيقات الشراكات الحقيقية</span>
            </span>
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            <span className="lang-en">Work on Real Client Projects</span>
            <span className="lang-ar hidden">اشتغل على مشاريع عملاء حقيقيين</span>
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            <span className="lang-en">
              Beyond our academy projects, you'll collaborate with our partner companies on real applications 
              that serve actual users and generate revenue.
            </span>
            <span className="lang-ar hidden">
              بالإضافة لمشاريع الأكاديمية، هتتعاون مع الشركات الشريكة على تطبيقات حقيقية 
              تخدم مستخدمين فعليين وتحقق أرباح.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fassla - Software House */}
          <motion.div
            className="glass-strong rounded-3xl p-8 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <Image
                  src="/images/fassla.jpg"
                  alt="Fassla Software"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Fassla Software</h4>
                <p className="text-sm text-purple-600 font-semibold">
                  <span className="lang-en">Software House Partner</span>
                  <span className="lang-ar hidden">شريك بيت البرمجيات</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200/50 dark:border-purple-800/50">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                  <span className="lang-en">What You'll Work On:</span>
                  <span className="lang-ar hidden">إيه اللي هتشتغل عليه:</span>
                </h5>
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Various client applications across different industries</span>
                      <span className="lang-ar hidden">تطبيقات عملاء متنوعة عبر صناعات مختلفة</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Custom business solutions and enterprise apps</span>
                      <span className="lang-ar hidden">حلول أعمال مخصصة وتطبيقات شركات</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Web and mobile applications with modern tech stacks</span>
                      <span className="lang-ar hidden">تطبيقات ويب وموبايل بتقنيات حديثة</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                  <span className="lang-en">Established 2019 • Multiple App Types</span>
                  <span className="lang-ar hidden">تأسست 2019 • أنواع تطبيقات متعددة</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* ByteWave - AI Projects */}
          <motion.div
            className="glass-strong rounded-3xl p-8 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <Image
                  src="/images/byteWaveLogo.png"
                  alt="ByteWave"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold">ByteWave</h4>
                <p className="text-sm text-blue-600 font-semibold">
                  <span className="lang-en">AI Solutions Partner</span>
                  <span className="lang-ar hidden">شريك حلول الذكاء الاصطناعي</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  <span className="lang-en">AI Projects You'll Build:</span>
                  <span className="lang-ar hidden">مشاريع الذكاء الاصطناعي اللي هتبنيها:</span>
                </h5>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Machine learning integration in mobile apps</span>
                      <span className="lang-ar hidden">تكامل تعلم الآلة في تطبيقات الموبايل</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Computer vision and image processing applications</span>
                      <span className="lang-ar hidden">تطبيقات رؤية الحاسوب ومعالجة الصور</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Natural language processing and chatbot systems</span>
                      <span className="lang-ar hidden">معالجة اللغة الطبيعية وأنظمة الشات بوت</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                  <span className="lang-en">AI-Driven Digital Solutions</span>
                  <span className="lang-ar hidden">حلول رقمية مدعومة بالذكاء الاصطناعي</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Kamn - Sports App */}
          <motion.div
            className="glass-strong rounded-3xl p-8 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <Image
                  src="/images/kamn_new copy.jpg"
                  alt="Kamn Sports"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Kamn Sports</h4>
                <p className="text-sm text-green-600 font-semibold">
                  <span className="lang-en">Product-Based Sports App</span>
                  <span className="lang-ar hidden">تطبيق رياضي قائم على المنتج</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200/50 dark:border-green-800/50">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                  <span className="lang-en">Features You'll Develop:</span>
                  <span className="lang-ar hidden">المميزات اللي هتطورها:</span>
                </h5>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">User fitness tracking and goal achievement system</span>
                      <span className="lang-ar hidden">نظام تتبع اللياقة وتحقيق الأهداف</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Social features to connect sports enthusiasts</span>
                      <span className="lang-ar hidden">مميزات اجتماعية لربط محبي الرياضة</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">"Find Your Hero KAMN" personalized experience</span>
                      <span className="lang-ar hidden">تجربة "اكتشف البطل KAMN" الشخصية</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                  <span className="lang-en">Sports & Wellness Platform</span>
                  <span className="lang-ar hidden">منصة رياضة وعافية</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* علي الايد - Delivery Service */}
          <motion.div
            className="glass-strong rounded-3xl p-8 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <Image
                  src="/images/IMG_3536.jpg"
                  alt="علي الايد Delivery"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold">علي الايد</h4>
                <p className="text-sm text-orange-600 font-semibold">
                  <span className="lang-en">Motorcycle Delivery Service</span>
                  <span className="lang-ar hidden">خدمة توصيل بالدراجات النارية</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200/50 dark:border-orange-800/50">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                  <span className="lang-en">Delivery App Features:</span>
                  <span className="lang-ar hidden">مميزات تطبيق التوصيل:</span>
                </h5>
                <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Real-time order tracking and GPS integration</span>
                      <span className="lang-ar hidden">تتبع الطلبات الفوري وتكامل GPS</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Motorcycle rider management system</span>
                      <span className="lang-ar hidden">نظام إدارة سائقي الدراجات النارية</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="lang-en">Multi-vendor marketplace like Talabat</span>
                      <span className="lang-ar hidden">سوق متعدد البائعين مثل طلبات</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium">
                  <span className="lang-en">Fast Delivery Solutions</span>
                  <span className="lang-ar hidden">حلول توصيل سريعة</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Benefits */}
        <motion.div
          className="mt-12 text-center glass-strong rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-6">
            <span className="lang-en">Partnership Benefits</span>
            <span className="lang-ar hidden">فوائد الشراكات</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h5 className="font-semibold">
                  <span className="lang-en">Earn While Learning</span>
                  <span className="lang-ar hidden">اكسب أثناء التعلم</span>
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="lang-en">Get paid for contributing to real projects</span>
                  <span className="lang-ar hidden">احصل على أجر للمساهمة في مشاريع حقيقية</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h5 className="font-semibold">
                  <span className="lang-en">Industry Experience</span>
                  <span className="lang-ar hidden">خبرة في الصناعة</span>
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="lang-en">Work directly with established companies</span>
                  <span className="lang-ar hidden">اشتغل مباشرة مع شركات راسخة</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h5 className="font-semibold">
                  <span className="lang-en">Portfolio Building</span>
                  <span className="lang-ar hidden">بناء المحفظة</span>
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="lang-en">Build impressive portfolio with real apps</span>
                  <span className="lang-ar hidden">ابني محفظة مميزة بتطبيقات حقيقية</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* How We Work Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              <span className="lang-en">How We Work</span>
              <span className="lang-ar hidden">إزاي بنشتغل</span>
            </h2>
            <p className="text-xl text-purple-100">
              <span className="lang-en">The Full Development Cycle</span>
              <span className="lang-ar hidden">دورة التطوير الكاملة</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {learningCycle.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  className="text-center group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-white mb-2">
                    <span className="lang-en">{step.titleEn}</span>
                    <span className="lang-ar hidden">{step.titleAr}</span>
                  </h3>
                  {index < learningCycle.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-white/20 transform -translate-y-1/2" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Prerequisites */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    <span className="lang-en">What Do You Need to Start?</span>
                    <span className="lang-ar hidden">إيه اللي محتاجه عشان تبدأ؟</span>
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="lang-en">Flutter basics and architecture patterns (Clean Architecture, MVC, MVP, MVVM)</span>
                      <span className="lang-ar hidden">أساسيات Flutter والأنماط المعمارية (Clean Architecture, MVC, MVP, MVVM)</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      <span className="lang-en">State management knowledge (Provider, Bloc, Riverpod)</span>
                      <span className="lang-ar hidden">معرفة بإدارة الحالة (Provider, Bloc, Riverpod)</span>
                    </span>
                  </div>
                </div>

                <motion.div
                  className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">
                      <span className="lang-en">Don't have these skills?</span>
                      <span className="lang-ar hidden">مش عندك المهارات دي؟</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="lang-en">
                      We offer Level 0 training to prepare you with the latest, up-to-date content.
                    </span>
                    <span className="lang-ar hidden">
                      احنا بنوفر مستوى تمهيدي (Level 0) يخليك جاهز تبدأ معانا.
                    </span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Course Highlights & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    <span className="lang-en">Course Outcomes & Benefits</span>
                    <span className="lang-ar hidden">نتائج ومميزات الكورس</span>
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  <span className="lang-en">
                    What you'll achieve after completing our comprehensive Flutter training program.
                  </span>
                  <span className="lang-ar hidden" dir="rtl">
                    إيه اللي هتحققه بعد ما تخلص برنامج التدريب الشامل بتاعنا.
                  </span>
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        <span className="lang-en">Portfolio of 4+ Real Applications At Least</span>
                        <span className="lang-ar hidden">سيره من 4+ تطبيقات حقيقية على الأقل</span>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="lang-en">Built for actual companies and ready for App Store</span>
                        <span className="lang-ar hidden">مبنية لشركات حقيقية وجاهزة للنشر</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        <span className="lang-en">Direct Hiring Opportunities</span>
                        <span className="lang-ar hidden">فرص توظيف مباشرة</span>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="lang-en">With our partner companies upon course completion</span>
                        <span className="lang-ar hidden">مع الشركات الشريكة بعد إنهاء الكورس</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        <span className="lang-en">Enterprise-Level Skills</span>
                        <span className="lang-ar hidden">مهارات مستوى الشركات</span>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="lang-en">Advanced patterns, testing, deployment, and monetization</span>
                        <span className="lang-ar hidden">أنماط متقدمة، اختبار، نشر، وتحقيق ربح</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        <span className="lang-en">Real Client Experience</span>
                        <span className="lang-ar hidden">خبرة عملاء حقيقية</span>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="lang-en">Learn to handle requirements, deadlines, and feedback</span>
                        <span className="lang-ar hidden">اتعلم تتعامل مع المتطلبات والمواعيد والملاحظات</span>
                      </p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/201031559635?text=Hello! I want to know more about the course outcomes and career opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  <span className="lang-en">Discuss Career Opportunities</span>
                  <span className="lang-ar hidden">ناقش الفرص المهنية</span>
                </motion.a>

               
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              <span className="lang-en">Ready to Start Your Journey?</span>
              <span className="lang-ar hidden">مستعد تبدأ رحلتك؟</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              <span className="lang-en">
                Join thousands of developers who transformed their careers with real-world Flutter development
              </span>
              <span className="lang-ar hidden">
                تعال انضم لآلاف المطورين اللي غيروا حياتهم المهنية بتطوير Flutter في العالم الحقيقي
              </span>
            </p>

            <motion.a
              href="https://wa.me/201031559635?text=Hello! I want to enroll in the Flutter Mastery Course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white rounded-2xl font-bold text-2xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="lang-en">Start Learning Now</span>
              <span className="lang-ar hidden">ابدأ التعلم دلوقتي</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 