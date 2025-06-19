'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../providers'
import { Phone, MapPin, Linkedin, Instagram, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.courses', href: '/course-content' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '#contact' },
  ]

  const socialLinks = [
    { 
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61577477726183', 
      color: 'hover:text-blue-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram',
      href: 'https://www.instagram.com/newgen1228?igsh=bWtqa2ptdXdjcGRn', 
      color: 'hover:text-pink-400',
      icon: <Instagram className="w-5 h-5" />
    },
    { 
      name: 'TikTok',
      href: 'https://www.tiktok.com/@newgen_academy4?_t=ZS-8xEgnpLemgr&_r=1', 
      color: 'hover:text-black dark:hover:text-white',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/107886435', 
      color: 'hover:text-blue-600',
      icon: <Linkedin className="w-5 h-5" />
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
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

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-20 transform rotate-12">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center"
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/PHOTO-2025-06-14-01-03-14.jpg"
                  alt="NewGen Academy Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                New Gen Academy
              </span>
            </motion.div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">
              {t('footer.quickLinks')}
            </h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t(link.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">
              {t('footer.contact')}
            </h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+20 103 155 9635', href: 'tel:+201031559635' },
                { icon: MapPin, text: 'Nasr City, Egypt', href: '#' },
              ].map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm font-medium text-gray-400 mr-4">
                {t('footer.follow')}:
              </span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-200 hover:scale-125`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <motion.div
              className="text-sm text-gray-400 text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2025 New Gen Academy. All rights reserved.</p>
              <p className="mt-1">Built by ❤️ New Gen Academy Team</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
      </motion.button>
    </footer>
  )
} 