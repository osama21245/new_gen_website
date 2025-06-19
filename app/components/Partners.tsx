'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export const Partners = () => {
  const [showAll, setShowAll] = useState(false);
  const partners = [
    {
      name: 'ByteWave',
      logo: '/images/byteWaveLogo.png',
      description: {
        en: 'Pioneering AI-driven digital solutions that transform businesses through innovative technology integration and intelligent automation.',
        ar: 'شركة رائدة في تقديم الحلول الرقمية المدعومة بالذكاء الاصطناعي التي تحول الأعمال من خلال التكامل التكنولوجي المبتكر والأتمتة الذكية.'
      },
      color: 'from-blue-500 to-blue-600',
      link: 'https://www.linkedin.com/company/bytewave500/?viewAsMember=true'
    },
    {
      name: 'Kamn',
      logo: '/images/kamn_new copy.jpg',
      description: {
        en: 'Revolutionizing fitness and wellness through their innovative sports app, empowering users to discover their inner hero and achieve their health goals.',
        ar: 'تطبيق رياضي مبتكر يساعد المستخدمين على اكتشاف البطل بداخلهم وتحقيق أهدافهم الصحية من خلال تجربة فريدة.'
      },
      color: 'from-green-500 to-green-600',
      link: 'https://www.facebook.com/KamnSports'
    },
    {
      name: 'Fassla',
      logo: '/images/fassla.jpg',
      description: {
        en: 'Established in 2019, delivering cutting-edge software solutions and smart technical innovations that drive digital transformation.',
        ar: 'تأسست في 2019، تقدم حلول برمجية متطورة وابتكارات تقنية ذكية تقود التحول الرقمي.'
      },
      color: 'from-purple-500 to-purple-600',
      link: 'https://www.facebook.com/FasslaSoftware'
    },
    {
      name: 'علي الايد',
      logo: '/images/IMG_3536.jpg',
      description: {
        en: 'A leading delivery service company providing fast, reliable, and efficient delivery solutions across the region, connecting businesses with their customers through seamless logistics.',
        ar: 'شركة رائدة في خدمات التوصيل تقدم حلول توصيل سريعة وموثوقة وفعالة في جميع أنحاء المنطقة، تربط الشركات بعملائها من خلال الخدمات اللوجستية السلسة.'
      },
      color: 'from-orange-500 to-orange-600',
      link: '#'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          <span className="lang-en">Our Trusted Partners</span>
          <span className="lang-ar hidden">شركاؤنا الموثوق بهم</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center text-lg mb-16 max-w-2xl mx-auto">
          <span className="lang-en">We collaborate with industry leaders to provide the best learning experience</span>
          <span className="lang-ar hidden">نحن نتعاون مع رواد الصناعة لتقديم أفضل تجربة تعليمية</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First 3 partners - always visible */}
          {partners.slice(0, 3).map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                   data-gradient={partner.color}></div>
              <div className="relative h-48 w-full mb-6">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                {partner.name}
              </h3>
              <div className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                <p className="lang-en text-left">{partner.description.en}</p>
                <p className="lang-ar hidden text-right">{partner.description.ar}</p>
              </div>
              <div className="mt-6 flex justify-center">
                <div className={`h-1 w-20 bg-gradient-to-r ${partner.color} rounded-full transform group-hover:w-32 transition-all duration-300`}></div>
              </div>
            </motion.a>
          ))}

          {/* Additional partners - shown when expanded */}
          <AnimatePresence>
            {showAll && partners.slice(3).map((partner, index) => (
              <motion.a
                key={index + 3}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                     data-gradient={partner.color}></div>
                <div className="relative h-48 w-full mb-6">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                  {partner.name}
                </h3>
                <div className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  <p className="lang-en text-left">{partner.description.en}</p>
                  <p className="lang-ar hidden text-right">{partner.description.ar}</p>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className={`h-1 w-20 bg-gradient-to-r ${partner.color} rounded-full transform group-hover:w-32 transition-all duration-300`}></div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {partners.length > 3 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="lang-en">
                {showAll ? 'View Less' : 'View More Partners'}
              </span>
              <span className="lang-ar hidden">
                {showAll ? 'عرض أقل' : 'عرض المزيد من الشركاء'}
              </span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 