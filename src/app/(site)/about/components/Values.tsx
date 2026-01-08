'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Sparkles, Clock, Award } from 'lucide-react';
import { Card } from '@/components/ui';

// Company values
const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description:
      'Every interaction is guided by empathy and genuine care for the well-being of those we serve.',
    color: 'rose',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description:
      'Rigorous background checks, ongoing training, and transparent communication build the foundation of trust.',
    color: 'brand',
  },
  {
    icon: Users,
    title: 'Family-Centered',
    description:
      'We treat every family like our own, understanding that care decisions are deeply personal.',
    color: 'teal',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description:
      'We continuously improve our services, matching families with caregivers who exceed expectations.',
    color: 'amber',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description:
      'Consistent, dependable care you can count on—24/7 support when you need it most.',
    color: 'purple',
  },
  {
    icon: Award,
    title: 'Dignity',
    description:
      'Every person deserves to be treated with respect and to maintain their independence and dignity.',
    color: 'emerald',
  },
];

const iconColors = {
  rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  brand: 'bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400',
  teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
};

/**
 * Company values section
 */
export function Values() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Values
          </span>
          <h2 className="text-gray-900 dark:text-white mb-4">
            What Guides Everything We Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our core values shape how we serve families, support caregivers, and 
            build lasting relationships in every community we serve.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="default" padding="lg" className="h-full">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    iconColors[value.color as keyof typeof iconColors]
                  }`}
                >
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

