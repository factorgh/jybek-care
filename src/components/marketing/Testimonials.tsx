'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui';

// Testimonials data with real images
const testimonials = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'San Francisco, CA',
    quote:
      "Finding care for my mother was overwhelming until I discovered Jybek. Within 48 hours, we had a wonderful caregiver who my mom absolutely adores. The peace of mind is priceless.",
    rating: 5,
    careType: 'In-Home Care',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Robert Chen',
    location: 'Austin, TX',
    quote:
      "The care assessment tool helped us understand exactly what level of care my father needed. The team was patient, thorough, and matched us with the perfect caregiver.",
    rating: 5,
    careType: 'Memory Care',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Maria Garcia',
    location: 'Miami, FL',
    quote:
      "After my surgery, I needed temporary help at home. Jybek's respite care service was a lifesaver. Professional, compassionate, and exactly what I needed to recover.",
    rating: 5,
    careType: 'Respite Care',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'James Thompson',
    location: 'Chicago, IL',
    quote:
      "We tried several home care agencies before finding Jybek. The difference in quality and communication is night and day. Finally, a company that truly cares.",
    rating: 5,
    careType: 'Companion Care',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

/**
 * Testimonials section with engaging card animations
 */
export function Testimonials() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/50 overflow-hidden relative">
      {/* Background decorations */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Floating quote marks */}
        <motion.div
          className="absolute top-20 left-10 opacity-5 dark:opacity-[0.02]"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Quote className="w-40 h-40 text-brand-600" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-5 dark:opacity-[0.02]"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Quote className="w-32 h-32 text-brand-600" />
        </motion.div>
      </motion.div>

      <div className="container-custom relative z-10">
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
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="w-4 h-4" />
            </motion.div>
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Families{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-rose-500">
              Love
            </span>{' '}
            Jybek Home Care
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Read what families across the country are saying about their experience with our 
            care services.
          </motion.p>
        </motion.div>

        {/* Testimonials grid with staggered animations */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ perspective: '1000px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className="group"
            >
              <Card variant="default" padding="lg" className="h-full relative overflow-hidden">
                {/* Hover gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent dark:from-brand-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Quote icon with animation */}
                <motion.div 
                  className="mb-4 relative z-10"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Quote className="w-10 h-10 text-brand-200 dark:text-brand-800" />
                  </motion.div>
                </motion.div>

                {/* Animated rating stars */}
                <div className="flex items-center gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.3 + index * 0.1 + i * 0.05, 
                        type: 'spring',
                        stiffness: 200 
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 20 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <motion.blockquote 
                  className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </motion.blockquote>

                {/* Author with animated avatar */}
                <motion.div 
                  className="flex items-center gap-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {/* Avatar with hover effect */}
                  <motion.div 
                    className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-brand-100 dark:ring-brand-800"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%', y: '-100%' }}
                      whileHover={{ x: '100%', y: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.location} • {testimonial.careType}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
          className="text-center mt-12"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-soft"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="flex -space-x-3">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.id}
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-800"
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-sm">
              <motion.span 
                className="font-semibold text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                4.9/5
              </motion.span>
              <span className="text-gray-500 dark:text-gray-400"> from 25,000+ reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
