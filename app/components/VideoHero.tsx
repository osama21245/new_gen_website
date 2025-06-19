'use client'

import { motion } from 'framer-motion'
import { Play, Info, Volume2, VolumeX, Building2, Briefcase } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../providers'

export function VideoHero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [useVideo, setUseVideo] = useState(true)
  const [userInteracted, setUserInteracted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { language, t } = useLanguage()

  // Handle user interaction to enable autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true)
      const video = videoRef.current
      if (video && video.paused && useVideo && !videoError) {
        video.play().catch((error) => {
          console.log('Play after interaction failed:', error)
        })
      }
    }

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [useVideo, videoError])

  useEffect(() => {
    const video = videoRef.current
    if (video && useVideo) {
      const handleLoadedData = () => {
        setIsLoaded(true)
        // Try to play immediately when data is loaded
        video.muted = true
        setIsMuted(true)
        video.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.log('Autoplay failed on loadeddata:', error)
          setIsPlaying(false)
        })
      }
      
      const handleError = () => {
        console.log('Video failed to load, showing fallback background')
        setVideoError(true)
        setUseVideo(false)
        setIsLoaded(true)
      }
      
      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(video.buffered.length - 1)
          const duration = video.duration
          if (duration > 0) {
            const progress = (bufferedEnd / duration) * 100
            setLoadingProgress(progress)
            
            // Start playing when we have enough buffered (25% or 3 seconds)
            if (progress > 25 || bufferedEnd > 3) {
              setIsLoaded(true)
              // Try to play when we have enough buffered
              if (video.paused) {
                video.play().then(() => {
                  setIsPlaying(true)
                }).catch((error) => {
                  console.log('Autoplay failed on progress:', error)
                  setIsPlaying(false)
                })
              }
            }
          }
        }
      }

      const handleCanPlay = () => {
        setIsLoaded(true)
        // Ensure video starts muted for autoplay compliance and try to play
        video.muted = true
        setIsMuted(true)
        // Attempt to play the video
        video.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.log('Autoplay failed on canplay:', error)
          setIsPlaying(false)
        })
      }

      const handleLoadedMetadata = () => {
        // Set up video for autoplay as soon as metadata is loaded
        video.muted = true
        setIsMuted(true)
      }

      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)

      // Network speed detection - fallback to background if slow
      const connectionSpeed = (navigator as any)?.connection?.effectiveType
      if (connectionSpeed === 'slow-2g' || connectionSpeed === '2g') {
        console.log('Slow connection detected, using background fallback')
        setUseVideo(false)
        setIsLoaded(true)
        return
      }

      // Set initial muted state immediately
      video.muted = true
      setIsMuted(true)
      
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('error', handleError)
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('progress', handleProgress)
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      
      // Try to load and play immediately
      video.load()
      
      // Timeout fallback - show content after 5 seconds regardless
      const timeout = setTimeout(() => {
        if (!isLoaded) {
          console.log('Video loading timeout, showing fallback')
          setUseVideo(false)
          setIsLoaded(true)
        }
      }, 5000)
      
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('error', handleError)
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('progress', handleProgress)
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        clearTimeout(timeout)
      }
    } else {
      // If not using video, show content immediately
      setIsLoaded(true)
    }
  }, [useVideo, isLoaded])

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {useVideo && !videoError ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/video-poster.jpg"
              controls={false}
              disablePictureInPicture
              webkit-playsinline="true"
            >
              <source src="/images/final cat (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Progressive Loading Indicator */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center">
                <motion.div
                  className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Loading Progress */}
                <div className="w-64 max-w-sm mx-auto">
                  <div className="flex justify-between text-white/80 text-sm mb-2">
                    <span>Loading video...</span>
                    <span>{Math.round(loadingProgress)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-white/60 text-xs mt-2 text-center">
                    Streaming video in chunks for optimal performance
                  </p>
                </div>
              </div>
            )}

            {/* Manual Play Button Overlay */}
            {isLoaded && !isPlaying && (
              <motion.div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => {
                    const video = videoRef.current
                    if (video) {
                      video.play().then(() => {
                        setIsPlaying(true)
                      }).catch((error) => {
                        console.log('Manual play failed:', error)
                      })
                    }
                  }}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                >
                  <Play className="w-8 h-8 ml-1" />
                </motion.button>
              </motion.div>
            )}
          </>
        ) : (
          /* Fallback Background */
          <div className="absolute inset-0">
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
              animate={{
                background: [
                  'linear-gradient(45deg, #7c3aed, #2563eb, #1e40af)',
                  'linear-gradient(45deg, #2563eb, #1e40af, #7c3aed)',
                  'linear-gradient(45deg, #1e40af, #7c3aed, #2563eb)',
                  'linear-gradient(45deg, #7c3aed, #2563eb, #1e40af)'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Floating Orbs */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.9, 0.4],
                x: [0, -80, 0],
                y: [0, 60, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-4xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {/* Badge */}
            <motion.div
              className={`inline-flex items-center px-4 py-2 rounded-full glass-strong mb-6 text-white/90 ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className={`w-2 h-2 bg-green-500 rounded-full animate-pulse ${
                language === 'ar' ? 'ml-3' : 'mr-3'
              }`} />
              <span className="text-sm font-medium">
                {t('videoHero.featuredCourse')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t('videoHero.courseTitle')}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {t('videoHero.courseDesc')}
            </motion.p>

            {/* Key Advantages */}
            <motion.div
              className="flex flex-col gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className={`flex items-center gap-3 text-white/90 ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}>
                <Building2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="font-medium">
                  {t('videoHero.realCompanyProjects')}
                </span>
              </div>
              <div className={`flex items-center gap-3 text-white/90 ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}>
                <Briefcase className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-medium">
                  {t('videoHero.directHiring')}
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 mb-8 ${
                language === 'ar' ? 'sm:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {/* Enhanced WhatsApp CTA Button */}
              <motion.div className="relative">
                {/* Glowing background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-2xl blur-lg opacity-75"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.a
                  href="https://wa.me/201031559635?text=Hello! I'm interested in the NewGen Flutter Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block px-10 py-5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-4 group overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(34, 197, 94, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* WhatsApp Icon */}
                  <motion.div
                    className="relative z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </motion.div>
                  
                  <span className="relative z-10 font-black tracking-wide">
                    {t('videoHero.startLearningNow')}
                  </span>
                  
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                </motion.a>
                
                {/* Floating particles around button */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${-10 + (i % 2) * 120}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>

              <motion.button
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3 border border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Info className="w-5 h-5" />
                {t('videoHero.viewProjects')}
              </motion.button>
            </motion.div>

            {/* Course Stats */}
            <motion.div
              className={`flex flex-wrap gap-6 text-white/80 ${
                language === 'ar' ? 'justify-end' : 'justify-start'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className={`flex items-center gap-2 ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">
                  {t('videoHero.partnerCompanies')}
                </span>
              </div>
              <div className={`flex items-center gap-2 ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}>
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium">
                  {t('videoHero.hiringRate')}
                </span>
              </div>
              <div className={`flex items-center gap-2 ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}>
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium">
                  {t('videoHero.realClientExp')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 right-8 flex gap-3">
          {/* Video Retry Button (only show if video failed or fallback is used) */}
          {(!useVideo || videoError) && (
            <motion.button
              onClick={() => {
                setVideoError(false)
                setUseVideo(true)
                setIsLoaded(false)
                setLoadingProgress(0)
                if (videoRef.current) {
                  videoRef.current.load()
                }
              }}
              className="p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Retry video loading"
            >
              <Play className="w-5 h-5" />
            </motion.button>
          )}

          {/* Volume Control (only show if video is playing) */}
          {useVideo && !videoError && (
            <motion.button
              onClick={toggleMute}
              className="p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
} 