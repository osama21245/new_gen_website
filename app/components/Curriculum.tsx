'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../providers'
import { BookOpen, Code2, Zap, Trophy, ChevronRight, CheckCircle2 } from 'lucide-react'

export function Curriculum() {
  const { t } = useLanguage()

  const curriculumSteps = [
    {
      icon: BookOpen,
      key: 'foundation',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-emerald-600',
      topics: ['Dart Fundamentals', 'Flutter Basics', 'Widget Tree', 'Development Setup']
    },
    {
      icon: Code2,
      key: 'intermediate',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-cyan-600',
      topics: ['State Management', 'Navigation', 'HTTP APIs', 'Local Storage']
    },
    {
      icon: Zap,
      key: 'advanced',
      color: 'text-purple-600',  
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-violet-600',
      topics: ['Animations', 'Testing', 'Performance', 'Architecture']
    },
    {
      icon: Trophy,
      key: 'mastery',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      gradientFrom: 'from-orange-400',
      gradientTo: 'to-red-600',
      topics: ['Real Projects', 'Code Reviews', 'Best Practices', 'Job Prep']
    }
  ]

  const skills = [
    'UI/UX Design Implementation',
    'State Management (Provider, Bloc, Riverpod)',
    'REST API Integration',
    'Firebase Integration',
    'Database Management (SQLite, Hive)',
    'Push Notifications',
    'App Store Deployment',
    'Testing & Debugging',
    'Performance Optimization',
    'Clean Architecture',
    'CI/CD Pipelines',
    'Native Platform Features'
  ]

  return (
    <section id="curriculum" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-green-300/20 to-cyan-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
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
            <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
            <span className="font-semibold">Learning Path</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            {t('curriculum.title')}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master Flutter development through our carefully structured curriculum designed by industry experts to take you from beginner to professional.
          </p>
        </motion.div>

        {/* Curriculum Roadmap */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-orange-400 rounded-full transform -translate-y-1/2 opacity-30" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {curriculumSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.key}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <motion.div
                    className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden group-hover:glow transition-all duration-500"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className={`w-10 h-10 ${step.color}`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      {t(`curriculum.${step.key}`)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {t(`curriculum.${step.key}Desc`)}
                    </p>

                    {/* Topics */}
                    <div className="space-y-2">
                      {step.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topic}
                          className="flex items-center text-sm text-left"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + topicIndex * 0.1 + 0.8, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 className={`w-4 h-4 ${step.color} mr-2 flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow to Next */}
                    {index < curriculumSteps.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Complete Skill Set You&apos;ll Master
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              By the end of our course, you&apos;ll have hands-on experience with all the essential Flutter development skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="flex items-center p-4 glass rounded-xl hover:glass-strong transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 glow"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Learning Journey
          </motion.button>
          
          <motion.p
            className="mt-4 text-sm text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join thousands of developers who have transformed their careers
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 