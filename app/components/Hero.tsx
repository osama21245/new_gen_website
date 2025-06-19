'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../providers'
import { Code, Sparkles, Zap, Target, Shield, Brain, Lock, Play, Heart, Star, ShoppingBag, User, Settings } from 'lucide-react'
import { useRef, useState } from 'react'

// Interactive Flutter IDE Component
function FlutterIDE() {
  const [isRunning, setIsRunning] = useState(false)
  const [showApp, setShowApp] = useState(false)

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setShowApp(true)
    }, 2000)
  }

  const handleClose = () => {
    setShowApp(false)
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {/* IDE Container */}
      <div className="relative glass-strong rounded-2xl p-6 glow-strong">
        {/* IDE Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 ml-4">main.dart</div>
          </div>
          
          {/* Run Button */}
          <motion.button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-xs font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRunning ? (
              <>
                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Running...
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                Run
              </>
            )}
          </motion.button>
        </div>

        {/* Code Content */}
        <div className="font-mono text-sm space-y-2 mb-4">
          <motion.div
            className="text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {"import 'package:flutter/material.dart';"}
          </motion.div>
          
          <motion.div
            className="text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {"void main() => runApp(MyApp());"}
          </motion.div>

          <motion.div
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            {"class MyApp extends StatelessWidget {"}
          </motion.div>

          <motion.div
            className="text-green-600 dark:text-green-400 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            {"@override"}
          </motion.div>

          <motion.div
            className="text-gray-600 dark:text-gray-300 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            {"Widget build(BuildContext context) {"}
          </motion.div>

          <motion.div
            className="text-orange-600 dark:text-orange-400 ml-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            {"return MaterialApp(home: HomePage());"}
          </motion.div>

          <motion.div
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            {"}}"}
          </motion.div>
        </div>

        {/* Floating Cursor */}
        <motion.div
          className="absolute w-0.5 h-5 bg-purple-600 opacity-75"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            top: '60%',
            left: '85%'
          }}
        />
      </div>

      {/* Phone Mockup */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-24 h-48 glass-strong rounded-2xl p-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <motion.div
            className="text-white text-xs font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Flutter
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive App Modal */}
      {showApp && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-80 h-[600px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">
              <span>9:41</span>
              <span>Flutter Demo</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
              {/* Header */}
              <motion.div
                className="p-6 text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  NewGen App
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Built with Flutter & AI
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="px-6 grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Heart, label: 'Favorites', color: 'from-red-400 to-pink-400' },
                  { icon: ShoppingBag, label: 'Shop', color: 'from-green-400 to-emerald-400' },
                  { icon: User, label: 'Profile', color: 'from-blue-400 to-cyan-400' },
                  { icon: Settings, label: 'Settings', color: 'from-purple-400 to-indigo-400' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl text-white text-center`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                className="px-6 mb-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">5K+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Success</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">4.9</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${60 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export function Hero() {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        {/* Floating Widgets */}
        <motion.div
          className="absolute top-20 left-10 glass rounded-lg p-4 float"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Code className="w-8 h-8 text-purple-600" />
          <div className="mt-2 text-xs font-mono">Widget</div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 glass rounded-lg p-4 float-delayed"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Sparkles className="w-6 h-6 text-blue-600" />
          <div className="mt-2 text-xs">Flutter</div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 glass rounded-lg p-3 float"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <Zap className="w-6 h-6 text-yellow-600" />
        </motion.div>

        {/* Animated Background Shapes - Keep these in background */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">{t('hero.title')}</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Academy Specializations */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <Brain className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {language === 'ar' 
                    ? 'أول أكاديمية تُدرّس التكامل المتقدم للذكاء الاصطناعي مع Flutter'
                    : 'First Academy to Teach Advanced AI Integration with Flutter'
                  }
                </span>
              </div>

              <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {language === 'ar' 
                    ? 'متخصصون في الأمان والحماية المتقدمة للتطبيقات'
                    : 'Specialists in Advanced App Security & Protection'
                  }
                </span>
              </div>

              <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <Lock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {language === 'ar' 
                    ? 'تعليم أحدث تقنيات التشفير والأمان السيبراني'
                    : 'Teaching Latest Encryption & Cybersecurity Techniques'
                  }
                </span>
              </div>
            </motion.div>

            {/* Academy Badge - Repositioned */}
            <motion.div
              className={`inline-flex items-center px-6 py-3 rounded-full glass-strong mb-6 text-sm font-medium ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Target className={`w-5 h-5 text-purple-600 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
              <span>
                {language === 'ar' ? 'انضم إلى أكاديمية الجيل الجديد' : 'Join New Gen Academy'}
              </span>
            </motion.div>
          </div>

          {/* Right Content - Interactive Flutter IDE */}
          <FlutterIDE />
        </div>
      </motion.div>

      {/* Main Focus Section */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full glass-strong mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-6 h-6 mr-3 text-purple-600" />
            <span className="font-semibold">Our Mission</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">{t('focus.title')}</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('focus.description')}
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {['Automation', 'AI', 'Rag', 'Security', 'API', 'Testing', 'Animation'].map((tech, index) => (
              <motion.div
                key={tech}
                className="glass rounded-lg px-4 py-2 font-semibold text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}