'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, MessageSquare, ArrowRight } from 'lucide-react';
import { Badge, Modal } from '@/components/ui';
import { PrivacyPolicyContent } from './PrivacyPolicyContent';

/**
 * Reusable Closable SMS Disclosure Banner
 * Appears as a hero-style banner section at the top of pages or forms,
 * and tracks dismissal status in localStorage.
 */
export function SMSDisclosureBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    try {
      // Check if user has already dismissed the banner
      const dismissed = localStorage.getItem('jybek-sms-banner-dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch (e) {
      console.warn('Unable to access localStorage for SMS banner dismissal:', e);
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    try {
      localStorage.setItem('jybek-sms-banner-dismissed', 'true');
    } catch (e) {
      console.warn('Unable to save SMS banner dismissal to localStorage:', e);
    }
    setIsVisible(false);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    if (checked) {
      // Slower animation transition to allow check indicator visual feedback
      setTimeout(() => {
        handleClose();
      }, 400);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 text-white p-6 sm:p-8 shadow-xl border border-brand-500/30">
            {/* Background patterns for visual premium feel */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div className="flex-1 space-y-4 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="success" size="sm" className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold tracking-wide uppercase px-3 py-1">
                    Legal &amp; Compliance
                  </Badge>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-200">
                    <MessageSquare className="h-4 w-4" />
                    SMS &amp; Mobile Messaging Disclosure
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight font-display">
                  SMS &amp; Mobile Communications Disclosure
                </h3>
                
                <p className="text-sm sm:text-base text-brand-100 leading-relaxed max-w-3xl">
                  By providing your phone number on our website forms, you consent to receive SMS communications from{' '}
                  <span className="font-semibold text-white">Jybek HomeCare Services</span> related to care scheduling, caregiver coordination, and service updates.{' '}
                  Messaging frequency may vary. Message and data rates may apply. Reply <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded font-bold text-white text-xs">STOP</span> to opt out of SMS messages at any time. Reply <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded font-bold text-white text-xs">HELP</span> for assistance.{' '}
                  <span className="underline decoration-emerald-400 decoration-2 font-medium">No mobile opt-in data will be shared with third parties for marketing or any other purpose.</span>
                </p>
                
                <div className="flex flex-wrap gap-4 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsPrivacyOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-teal hover:underline transition-all duration-200 group"
                  >
                    View Full Privacy Policy
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 self-stretch lg:self-center justify-between sm:justify-start lg:justify-end border-t border-white/10 lg:border-none pt-4 lg:pt-0 shrink-0">
                <label className="flex items-center gap-3 cursor-pointer select-none text-white hover:text-brand-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                    className="w-5 h-5 rounded border-white/30 bg-white/10 text-brand-600 focus:ring-brand-500 focus:ring-offset-brand-700 transition-all cursor-pointer"
                  />
                  <span className="text-sm font-bold">
                    I acknowledge these terms
                  </span>
                </label>
                
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2.5 hover:bg-white/10 active:bg-white/20 rounded-full transition-colors hidden sm:block text-white/80 hover:text-white"
                  aria-label="Close banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Policy Modal */}
          <Modal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
            size="xl"
            title={
              <span className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                Privacy Policy | Jybek Home Care
              </span>
            }
          >
            <PrivacyPolicyContent />
          </Modal>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
