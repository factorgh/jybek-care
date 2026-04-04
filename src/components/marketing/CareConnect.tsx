'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { Share2, ArrowRight, UserPlus, ShieldCheck, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Match with Caregivers',
    description: 'Find the perfect match based on your specific needs and preferences.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Verified',
    description: 'All connections are managed through our secure CareConnect platform.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Care',
    description: 'Your thriving journey starts with a personalized care assessment.',
  },
];

/**
 * Jybek Care Connect section
 * Connects users to the CareSmartz360 portal
 */
export function CareConnect() {
  const CARE_CONNECT_URL = 'https://jybekhomecares.caresmartz360.com/admin/Client/ProspectiveClientApplicantForm.aspx#';

  return (
    <section id="care-connect" className="section relative bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/50 dark:bg-brand-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full text-sm font-semibold mb-6">
              <Share2 className="w-4 h-4" />
              <span>Jybek Care Connect</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Start Your Journey with <br />
              <span className="text-brand-600">CareConnect Portal</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Take the first step towards exceptional home care. Use our CareConnect portal 
              to submit your information and begin the matching process with our 
              professional Jybek caregivers.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-soft-md flex items-center justify-center text-brand-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href={CARE_CONNECT_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="shadow-brand/20 shadow-lg"
                  rightIcon={<ArrowRight className="w-5 h-5 ml-1" />}
                >
                  Access CareConnect Now
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-soft-2xl border border-gray-100 dark:border-gray-700">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex flex-col items-center justify-center text-white p-10 text-center overflow-hidden relative">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-6 relative z-10"
                >
                   <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                     <Share2 className="w-12 h-12" />
                   </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">CareConnect Portal</h3>
                <p className="text-white/80 mb-8 relative z-10">
                  Join our community of families and caregivers 
                  connected through compassion and technology.
                </p>
                <div className="w-full h-2 bg-white/20 rounded-full mb-2 overflow-hidden relative z-10">
                  <motion.div 
                    className="h-full bg-white"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <p className="text-xs text-brand-100 relative z-10">Matching Potential Caregivers...</p>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent-teal p-4 rounded-2xl shadow-lg text-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                 <ShieldCheck className="w-6 h-6" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-brand-600 p-4 rounded-2xl shadow-lg text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                 <HeartPulse className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-brand-200 dark:bg-brand-900/20 blur-2xl -z-10 scale-95 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
