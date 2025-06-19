'use client'

import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useLanguage } from '../providers'
import { Target, Users, Building2, Award, Globe, Heart, Star, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

// Custom About Video Section Component - Inspired by Home but Unique
function AboutVideoSection() {
  const { language } = useLanguage()
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Show video as soon as metadata is loaded (much faster)
      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded - showing video')
        setIsLoaded(true)
        video.muted = true
        setIsMuted(true)
      }

      // Start playing when we have enough data (progressive loading)
      const handleCanPlay = () => {
        console.log('Video can start playing')
        video.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.log('Autoplay failed:', error)
          setIsPlaying(false)
        })
      }

      // Show video even with minimal data loaded
      const handleLoadStart = () => {
        console.log('Video loading started')
        // Show video container immediately when loading starts
        setTimeout(() => {
          if (!isLoaded) {
            setIsLoaded(true)
          }
        }, 1000) // Show after 1 second even if not fully loaded
      }

      // Progressive loading - show as soon as we have some data
      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(video.buffered.length - 1)
          console.log(`Video buffered: ${bufferedEnd} seconds`)
          
          // Show video when we have at least 2 seconds buffered
          if (bufferedEnd >= 2 && !isLoaded) {
            console.log('Enough buffered - showing video')
            setIsLoaded(true)
            video.muted = true
            setIsMuted(true)
          }
        }
      }
      
      const handleError = () => {
        console.log('Video failed to load')
        setVideoError(true)
        setIsLoaded(true)
      }

      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      
      // Add all event listeners
      video.addEventListener('loadstart', handleLoadStart)
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('progress', handleProgress)
      video.addEventListener('error', handleError)
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)

      // Force load start
      video.load()

      // Fallback: Show video after 2 seconds regardless
      const fallbackTimer = setTimeout(() => {
        if (!isLoaded) {
          console.log('Fallback: Showing video after timeout')
          setIsLoaded(true)
        }
      }, 2000)
      
      return () => {
        video.removeEventListener('loadstart', handleLoadStart)
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('progress', handleProgress)
        video.removeEventListener('error', handleError)
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        clearTimeout(fallbackTimer)
      }
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const watchVideo = () => {
    setShowOverlay(false)
    playVideo()
  }

  const showContent = () => {
    setShowOverlay(true)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/PHOTO-2025-06-14-01-03-14.jpg"
              controls={false}
              disablePictureInPicture
              webkit-playsinline="true"
              crossOrigin="anonymous"
            >
              <source src="/images/finish.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Loading State */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                <motion.div
                  className="w-16 h-16 border-4 border-purple-300/30 border-t-purple-500 rounded-full mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {language === 'ar' ? 'جاري التحميل...' : 'Loading Vision...'}
                </motion.h3>
                <motion.p 
                  className="text-purple-200 text-center max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {language === 'ar' 
                    ? 'نحضر لك تجربة استثنائية لاستكشاف مستقبل التعليم التقني'
                    : 'Preparing an exceptional experience to explore the future of technical education'
                  }
                </motion.p>
              </div>
            )}
          </>
        ) : (
          // Fallback gradient background if video fails
          <div className="absolute inset-0 bg-black" />
        )}
      </div>

      {/* Gradient Overlays - Only show when overlay is active */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"
        animate={{ opacity: showOverlay ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-purple-900/30 z-10"
        animate={{ opacity: showOverlay ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Floating Particles - Purple theme */}
      <motion.div 
        className="absolute inset-0 z-20 overflow-hidden"
        animate={{ opacity: showOverlay ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
        animate={{ opacity: showOverlay ? 1 : 0, y: showOverlay ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Target className="w-5 h-5 mr-3 text-purple-300" />
            <span className="text-purple-100 font-semibold">
              {language === 'ar' ? 'رؤيتنا للمستقبل' : 'Our Future Vision'}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {language === 'ar' ? (
              <>
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  مستقبل التعليم
                </span>
                <br />
                <span className="text-white">التقني يبدأ هنا</span>
              </>
            ) : (
              <>
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  The Future of
                </span>
                <br />
                <span className="text-white">Tech Education</span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-purple-100/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {language === 'ar' 
              ? 'شاهد كيف ستتطور أكاديمية الجيل الجديد لتصبح الوجهة الأولى لتعليم تطوير التطبيقات والذكاء الاصطناعي'
              : 'Watch how New Gen Academy will evolve to become the premier destination for app development and AI education'
            }
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Watch Video Button - Main CTA */}
            <motion.button
              onClick={watchVideo}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 mr-3" />
              {language === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}
            </motion.button>

            {/* Sound Toggle */}
            <motion.button
              onClick={toggleMute}
              className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? (
                <>
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617-.793zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    <path d="M16.707 5.293a1 1 0 010 1.414L15.414 8l1.293 1.293a1 1 0 01-1.414 1.414L14 9.414l-1.293 1.293a1 1 0 01-1.414-1.414L12.586 8l-1.293-1.293a1 1 0 011.414-1.414L14 6.586l1.293-1.293a1 1 0 011.414 0z" />
                  </svg>
                  {language === 'ar' ? 'تشغيل الصوت' : 'Unmute'}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617-.793zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    <path d="M14.657 2.757a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.243 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.829a1 1 0 011.414 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.758 4.243 1 1 0 01-1.414-1.414A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
                  </svg>
                  {language === 'ar' ? 'كتم الصوت' : 'Mute'}
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-6 h-10 border-2 border-purple-300/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-300/60 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Video Controls - Always visible when overlay is hidden */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex items-center space-x-4"
        animate={{ opacity: showOverlay ? 0 : 1, y: showOverlay ? 20 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Play/Pause Button */}
        <motion.button
          onClick={() => {
            if (videoRef.current) {
              if (isPlaying) {
                videoRef.current.pause()
              } else {
                videoRef.current.play()
              }
            }
          }}
          className="w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>

        {/* Mute Button */}
        <motion.button
          onClick={toggleMute}
          className="w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617-.793zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
              <path d="M16.707 5.293a1 1 0 010 1.414L15.414 8l1.293 1.293a1 1 0 01-1.414 1.414L14 9.414l-1.293 1.293a1 1 0 01-1.414-1.414L12.586 8l-1.293-1.293a1 1 0 011.414-1.414L14 6.586l1.293-1.293a1 1 0 011.414 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793a1 1 0 011.617-.793zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
              <path d="M14.657 2.757a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.243 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.829a1 1 0 011.414 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.758 4.243 1 1 0 01-1.414-1.414A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
            </svg>
          )}
        </motion.button>

        {/* Show Info Button */}
        <motion.button
          onClick={showContent}
          className="px-4 py-2 bg-purple-600/90 backdrop-blur-md border border-purple-400/30 text-white rounded-full font-semibold hover:bg-purple-600 transition-all duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {language === 'ar' ? 'عرض المحتوى' : 'Show Info'}
        </motion.button>
      </motion.div>

      {/* Show Content Button - Only visible when overlay is hidden */}
      <motion.button
        onClick={showContent}
        className="fixed top-6 right-6 z-40 flex items-center px-4 py-2 bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-white rounded-full font-semibold hover:bg-purple-600 transition-all duration-300"
        animate={{ opacity: showOverlay ? 0 : 1, scale: showOverlay ? 0.8 : 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {language === 'ar' ? 'عرض المحتوى' : 'Show Info'}
      </motion.button>
    </section>
  )
}

export default function About() {
  const { language } = useLanguage()

  const values = [
    {
      icon: Target,
      title: { en: 'Direct Market Training', ar: 'التدريب المباشر لسوق العمل' },
      description: { 
        en: 'We will train you directly for the job market with real-world projects and industry requirements.',
        ar: 'سندربك مباشرة لسوق العمل بمشاريع حقيقية ومتطلبات الصناعة الفعلية.'
      }
    },
    {
      icon: Users,
      title: { en: 'Shortcut to Success', ar: 'طريق مختصر للنجاح' },
      description: { 
        en: 'We will save you years of trial and error by providing direct paths to professional expertise.',
        ar: 'سنوفر عليك سنوات من المحاولة والخطأ من خلال توفير مسارات مباشرة للخبرة المهنية.'
      }
    },
    {
      icon: Building2,
      title: { en: 'Corporate Partnerships', ar: 'شراكات مؤسسية' },
      description: { 
        en: 'We will be backed by multiple partner companies who will support our mission and hire our graduates.',
        ar: 'سنكون مدعومين من عدة شركات شريكة ستدعم مهمتنا وتوظف خريجينا.'
      }
    },
    {
      icon: Globe,
      title: { en: 'Industry Standards', ar: 'معايير الصناعة' },
      description: { 
        en: 'We will train developers who can truly meet market needs and elevate the industry standard.',
        ar: 'سندرب المطورين الذين يمكنهم فعلاً تلبية احتياجات السوق ورفع مستوى الصناعة.'
      }
    }
  ]

  const achievements = [
    { en: 'Will be the first academy to integrate AI with Flutter development', ar: 'ستكون أول أكاديمية تدمج الذكاء الاصطناعي مع تطوير Flutter' },
    { en: 'Will establish direct partnerships with leading tech companies', ar: 'ستؤسس شراكات مباشرة مع شركات التكنولوجيا الرائدة' },
    { en: 'Will offer real client projects during training', ar: 'ستوفر مشاريع عملاء حقيقية أثناء التدريب' },
    { en: 'Will guarantee job placement assistance', ar: 'ستضمن مساعدة في التوظيف' },
    { en: 'Will provide cutting-edge security and encryption training', ar: 'ستوفر تدريب متطور في الأمان والتشفير' },
    { en: 'Will offer industry-recognized certifications', ar: 'ستقدم شهادات معترف بها في الصناعة' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Custom Video Section for About */}
      <AboutVideoSection />
      
      {/* About Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main About Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full glass-strong mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-6 h-6 mr-3 text-red-500" />
              <span className="font-semibold">
                {language === 'ar' ? 'من سنكون' : 'Who We Will Be'}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">
                {language === 'ar' 
                  ? 'سنكون أكاديمية الجيل الجديد'
                  : 'We Will Be New Gen Academy'
                }
              </span>
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className={`text-xl md:text-2xl leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {language === 'ar' 
                  ? 'سنكون شركة متخصصة في تعليمك مباشرة لسوق العمل، سنختصر عليك طريق طويل وخبرة لن تستطيع الوصول إليها بمفردك. هذا مشروع سيكون مدعوم من أكثر من شركة من الشركات الشريكة معنا، وهدفه توفير مطورين قادرين فعلاً على سد احتياجات السوق ورفع مستوى المطورين في المنطقة.'
                  : 'We will be a company specialized in training you directly for the job market. We will save you a long journey and experience that you cannot achieve alone. This will be a project supported by multiple partner companies, aimed at providing developers who can truly meet market needs and elevate the level of developers in the region.'
                }
              </p>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                {language === 'ar' ? 'قيمنا ومبادئنا المستقبلية' : 'Our Future Values & Principles'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === 'ar' 
                  ? 'سنؤمن بتوفير تعليم عملي سيلبي احتياجات السوق الفعلية ويضمن نجاح طلابنا'
                  : 'We will believe in providing practical education that will meet real market needs and ensure our students\' success'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-strong rounded-2xl p-8 hover:glow transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? value.title.ar : value.title.en}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? value.description.ar : value.description.en}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                {language === 'ar' ? 'أهدافنا المستقبلية' : 'Our Future Goals'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === 'ar' 
                  ? 'سنحقق إنجازات مميزة في مجال التعليم التقني والتطوير المهني'
                  : 'We will achieve outstanding accomplishments in technical education and professional development'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-4 glass-strong rounded-xl p-6 hover:glow transition-all duration-300 ${
                    language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                  >
                    <CheckCircle className="w-6 h-6 text-purple-500" />
                  </motion.div>
                  <p className={`font-medium ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? achievement.ar : achievement.en}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === 'ar' 
                  ? 'سنكون هنا لمساعدتك في بداية رحلتك المهنية في عالم التطوير'
                  : 'We will be here to help you start your professional journey in the development world'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="glass-strong rounded-2xl p-8 text-center hover:glow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  +20 103 155 9635
                </p>
                <motion.a
                  href="https://wa.me/201031559635?text=Hello! I want to learn more about New Gen Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'ar' ? 'تواصل الآن' : 'Contact Now'}
                </motion.a>
              </motion.div>

              <motion.div
                className="glass-strong rounded-2xl p-8 text-center hover:glow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {language === 'ar' ? 'موقعنا المستقبلي' : 'Our Future Location'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {language === 'ar' ? 'مدينة نصر، القاهرة، مصر' : 'Nasr City, Cairo, Egypt'}
                </p>
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'ar' ? 'عرض الموقع' : 'View Location'}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  {language === 'ar' 
                    ? 'انضم إلينا وابدأ رحلتك المهنية المستقبلية'
                    : 'Join Us and Start Your Future Professional Journey'
                  }
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  {language === 'ar' 
                    ? 'ستكون جزءاً من مجتمع المطورين المحترفين وستحصل على التدريب الذي سيؤهلك لسوق العمل'
                    : 'You will be part of the professional developers community and get the training that will qualify you for the job market'
                  }
                </p>
                
                <motion.a
                  href="https://wa.me/201031559635?text=Hello! I want to enroll in the NewGen Flutter Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>
                    {language === 'ar' ? 'ابدأ رحلتك المستقبلية الآن' : 'Start Your Future Journey Now'}
                  </span>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
                    language === 'ar' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'
                  }`} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 