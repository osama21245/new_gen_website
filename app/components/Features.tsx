'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../providers'
import { Code, Users, Building, Rocket, CheckCircle, Star } from 'lucide-react'

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Code,
      key: 'realWorld',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Users,
      key: 'expert',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      icon: Building,
      key: 'clients',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: Rocket,
      key: 'career',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    }
  ]

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '98%', label: 'Job Placement Rate' },
    { number: '4.9', label: 'Average Rating' },
    { number: '100+', label: 'Partner Companies' }
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20" />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"
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
        {/* Header */}
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
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            <span className="font-semibold">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            {t('features.title')}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.key}
                className="glass-strong rounded-2xl p-8 text-center group hover:glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6`}
                >
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4">
                  {feature.key === 'clients' ? (
                    <>
                      <span className="lang-en">Real Client Projects</span>
                      <span className="lang-ar hidden">مشاريع عملاء حقيقية</span>
                    </>
                  ) : (
                    t(`features.${feature.key}`)
                  )}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.key === 'clients' ? (
                    <>
                      <span className="lang-en">Work on real client projects while learning, giving you hands-on experience with actual business requirements and professional development workflows.</span>
                      <span className="lang-ar hidden">اعمل على مشاريع عملاء حقيقية أثناء التعلم، مما يمنحك خبرة عملية مع متطلبات الأعمال الفعلية وسير العمل المهني للتطوير.</span>
                    </>
                  ) : (
                    t(`features.${feature.key}Desc`)
                  )}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 