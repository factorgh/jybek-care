'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, Users, MapPin, Star, TrendingUp } from 'lucide-react';

// Company stats
const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'Families Served',
    description: 'Trusted by families across the nation',
    color: 'brand',
  },
  {
    icon: Award,
    value: 10000,
    suffix: '+',
    label: 'Verified Caregivers',
    description: 'Background-checked and trained professionals',
    color: 'teal',
  },
  {
    icon: MapPin,
    value: 500,
    suffix: '+',
    label: 'Cities Covered',
    description: 'Care available in all 50 states',
    color: 'purple',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    description: 'Based on 25,000+ reviews',
    color: 'amber',
    decimals: 1,
  },
];

const iconColors = {
  brand: 'bg-brand-100 dark:bg-brand-900/30 text-brand-600',
  teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600',
};

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

// Animated counter component
function AnimatedCounter({ 
  value, 
  suffix = '', 
  decimals = 0,
  inView 
}: { 
  value: number; 
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(decimals > 0 ? Number(latest.toFixed(decimals)) : Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [value, inView, decimals]);

  return (
    <span>
      {decimals > 0 ? displayValue.toFixed(decimals) : displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

/**
 * Stats section with animated counters and engaging hover effects
 */
export function Stats() {
  const [inView, setInView] = useState(false);

  return (
    <section className="section bg-white dark:bg-gray-950 overflow-hidden relative">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/50 rounded-full blur-3xl" />
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
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <TrendingUp className="w-4 h-4" />
            </motion.div>
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted Care,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-teal">
              Proven Results
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Join thousands of families who have found compassionate, reliable care 
            through Jybek Home Care.
          </motion.p>
        </motion.div>

        {/* Stats grid with staggered animations */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          onViewportEnter={() => setInView(true)}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className="text-center group relative"
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle at center, ${
                    stat.color === 'brand' ? 'rgba(37, 99, 235, 0.15)' :
                    stat.color === 'teal' ? 'rgba(20, 184, 166, 0.15)' :
                    stat.color === 'purple' ? 'rgba(147, 51, 234, 0.15)' :
                    'rgba(245, 158, 11, 0.15)'
                  } 0%, transparent 70%)`,
                }}
              />

              {/* Icon with animation */}
              <motion.div 
                className={`w-16 h-16 ${iconColors[stat.color as keyof typeof iconColors]} rounded-2xl flex items-center justify-center mx-auto mb-5 relative`}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, type: 'spring', stiffness: 200 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                
                {/* Pulse effect */}
                <motion.div
                  className={`absolute inset-0 ${iconColors[stat.color as keyof typeof iconColors]} rounded-2xl -z-10`}
                  initial={{ scale: 1, opacity: 0.3 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.div>

              {/* Animated counter value */}
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
              >
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                  inView={inView}
                />
              </motion.div>

              {/* Label */}
              <motion.div 
                className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.15 }}
              >
                {stat.label}
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-sm text-gray-500 dark:text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
