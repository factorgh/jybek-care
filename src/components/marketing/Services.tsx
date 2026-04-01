'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui';
import {
  Heart,
  Brain,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  Shield,
  Building,
} from 'lucide-react';

// Service offerings with images
const services = [
  {
    icon: Users,
    title: 'Personal Care',
    description: 'Compassionate assistance with daily activities while maintaining independence and dignity.',
    features: ['Bathing & grooming', 'Meal preparation', 'Medication reminders'],
    href: '/services/personal-care',
    color: 'brand',
    image: '/aZii/caregiver-brush-hair-of-senior-woman-in-the-living-2026-01-09-09-16-52-utc.jpg',
  },
  {
    icon: Heart,
    title: 'Companion Care',
    description: 'Meaningful companionship and social engagement to combat isolation and enhance quality of life.',
    features: ['Conversation support', 'Hobby activities', 'Light housekeeping'],
    href: '/services/companion-care',
    color: 'rose',
    image: '/aZii/male-nurse-assisting-elderly-woman-playing-board-g-2026-03-25-04-45-01-utc.jpg',
  },
  {
    icon: Brain,
    title: "Alzheimer's & Dementia Care",
    description: 'Specialized care for those with memory conditions, providing safety and cognitive support.',
    features: ['Cognitive activities', 'Wandering prevention', 'Routine maintenance'],
    href: '/services/alzheimers-dementia',
    color: 'purple',
    image: '/aZii/senior-woman-and-man-solving-puzzle-with-nurse-ass-2026-03-26-23-43-06-utc.jpg',
  },
  {
    icon: Shield,
    title: '24-Hour Care',
    description: 'Round-the-clock care with rotating caregivers ensuring continuous support day and night.',
    features: ['Continuous monitoring', 'Day & night coverage', 'Emergency response'],
    href: '/services/24-hour-care',
    color: 'purple',
    image: '/aZii/doctor-or-nurse-caregiver-with-senior-patient-at-h-2024-10-11-02-38-25-utc.jpg',
  },
  {
    icon: Clock,
    title: 'Respite Care',
    description: 'Short-term relief for family caregivers so you can take the break you deserve.',
    features: ['Flexible scheduling', 'Day or overnight', 'Emergency coverage'],
    href: '/services/respite-care',
    color: 'amber',
    image: '/aZii/nurse-talking-to-senior-woman-during-home-visit-2026-03-24-10-23-09-utc.jpg',
  },
  {
    icon: Building,
    title: 'Transitional Care',
    description: 'Support during transitions from hospital to home or between care settings.',
    features: ['Discharge planning', 'Recovery support', 'Home preparation'],
    href: '/services/transitional-care',
    color: 'teal',
    image: '/aZii/nurse-helping-senior-woman-using-crutches-for-reha-2026-03-26-10-33-10-utc.jpg',
  },
];

// Color variants for icons
const iconColors = {
  brand: 'bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400',
  teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

/**
 * Services showcase section with animated cards and images
 */
export function Services() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container-custom">
        {/* Section header with animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4 bg-brand-50 dark:bg-brand-900/30 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Our Services
          </motion.span>
          <motion.h2 
            className="text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-teal">
              Care Solutions
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            From daily assistance to specialized medical care, we offer a full spectrum of 
            services to meet your family&apos;s unique needs.
          </motion.p>
        </motion.div>

        {/* Services grid with staggered animations */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className="group"
            >
              <Link href={service.href}>
                <Card
                  variant="default"
                  padding="none"
                  hover
                  className="h-full overflow-hidden"
                >
                  {/* Image with enhanced hover effect */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Animated icon overlay */}
                    <motion.div
                      className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                        iconColors[service.color as keyof typeof iconColors]
                      }`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.3 + index * 0.1, 
                        type: 'spring',
                        stiffness: 200 
                      }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                    >
                      <service.icon className="w-6 h-6" />
                    </motion.div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Hover background effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent dark:from-brand-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Title */}
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors relative z-10"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm relative z-10">
                      {service.description}
                    </p>

                    {/* Features with staggered animation */}
                    <ul className="space-y-1.5 mb-4 relative z-10">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-brand-500"
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Animated link */}
                    <motion.div 
                      className="flex items-center text-brand-600 font-medium text-sm relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <motion.div
                        className="ml-1"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Not sure what care you need?
          </p>
          <Link href="/assessment">
            <motion.span 
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Take our free care assessment
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
