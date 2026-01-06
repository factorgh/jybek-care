'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, Input } from '@/components/ui';
import { Phone, ArrowRight, CheckCircle, Sparkles, Heart } from 'lucide-react';

// CTA benefits
const benefits = [
  'Free Jybek care consultation',
  'No obligation to proceed',
  'Match within 48 hours',
  'Background-checked Jybek caregivers',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

/**
 * Call-to-action section with lead capture and engaging animations
 */
export function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0">
        {/* Large floating orb */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Second orb */}
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-teal/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Floating sparkles */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-6 h-6 text-white/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Heart className="w-8 h-8 text-white/20" />
        </motion.div>

        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Header with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-white/80 font-medium text-sm uppercase tracking-wider mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4" />
              </motion.div>
              Start Your Care Journey
            </motion.span>

            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to Find the Right Jybek Care{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-accent-teal inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                for Your Family?
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Connect with caring professionals who will treat your loved ones like family. 
              Get started with a free consultation today.
            </motion.p>
          </motion.div>

          {/* Lead capture form with floating effect */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-soft-xl p-8 lg:p-10"
          >
            <motion.form 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Input
                  label="Your Name"
                  placeholder="John Smith"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  label="ZIP Code"
                  placeholder="94105"
                />
              </motion.div>
              <motion.div 
                className="md:col-span-2"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    rightIcon={
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    }
                  >
                    Get Free Jybek Care Options
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>

            {/* Benefits with staggered animation */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  whileHover={{ scale: 1.05, x: 3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent-emerald shrink-0" />
                  </motion.div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone CTA with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <motion.p 
              className="text-white/80 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Prefer to talk to someone?
            </motion.p>
            <Link href="tel:+1 888-717-5009">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  leftIcon={
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Phone className="h-5 w-5" />
                    </motion.div>
                  }
                >
                  Call +1 888-717-5009
                </Button>
              </motion.div>
            </Link>
            <motion.p 
              className="text-sm text-white/60 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Available 24 hours a day, 7 days a week
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
