'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Modal } from '@/components/ui';
import { 
  Phone, 
  CheckCircle,
  ArrowRight,
  Star,
  AlertCircle,
  MapPin,
  Loader2,
  Shield,
} from 'lucide-react';
import { PrivacyPolicyContent } from '@/components/marketing/PrivacyPolicyContent';

// YouTube video ID
const YOUTUBE_VIDEO_ID = 'qHaDRNWvVtY';

// ZIP code validation regex (US 5-digit or 5+4 format)
const ZIP_CODE_REGEX = /^\d{5}(-\d{4})?$/;

interface ZipValidationResult {
  valid: boolean;
  city?: string;
  state?: string;
  stateAbbr?: string;
  error?: string;
}

/**
 * Eye-catching, marketable Hero section with YouTube background
 */
export function Hero() {
  const router = useRouter();
  const [zipCode, setZipCode] = useState('');
  const [touched, setTouched] = useState(false);
  const [validating, setValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<ZipValidationResult | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [smsPhoneNumber, setSmsPhoneNumber] = useState('');
  const [smsPhoneError, setSmsPhoneError] = useState('');
  const [toast, setToast] = useState<{ message: string } | null>(null);

  // Auto-dismiss toast notifications
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSmsPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const cleaned = val.replace(/\D/g, '');
    let formatted = cleaned;
    
    if (cleaned.length > 0) {
      if (cleaned.length <= 3) {
        formatted = `(${cleaned}`;
      } else if (cleaned.length <= 6) {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
      } else {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
      }
    }
    setSmsPhoneNumber(formatted);
    if (smsPhoneError) setSmsPhoneError('');
  };

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = smsPhoneNumber.replace(/\D/g, '');
    if (cleaned.length < 10) {
      setSmsPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    setSmsPhoneError('');

    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('jybek-sms-opt-in', 'true');
      localStorage.setItem('jybek-sms-phone', smsPhoneNumber);
    }
    
    // Show toast
    setToast({ message: `SMS Alerts enabled for ${smsPhoneNumber}!` });
    
    // Reset form fields
    setSmsPhoneNumber('');
  };

  // Basic format validation
  const isValidFormat = useMemo(() => ZIP_CODE_REGEX.test(zipCode.trim()), [zipCode]);
  
  // Overall validity (format + API validation if available)
  const isValidZip = isValidFormat && (validationResult === null || validationResult.valid);
  const showError = touched && zipCode.length > 0 && !isValidFormat;
  const showApiError = touched && isValidFormat && validationResult && !validationResult.valid;

  // Debounced API validation
  const validateZipCode = useCallback(async (zip: string) => {
    if (!ZIP_CODE_REGEX.test(zip.trim())) {
      setValidationResult(null);
      return;
    }

    setValidating(true);
    try {
      const response = await fetch(`/api/validate-zip?zip=${encodeURIComponent(zip.trim())}`);
      const data = await response.json();
      setValidationResult(data);
    } catch {
      // On error, allow form submission (format is valid)
      setValidationResult({ valid: true });
    } finally {
      setValidating(false);
    }
  }, []);

  // Validate ZIP code when it changes (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (zipCode.trim().length >= 5) {
        validateZipCode(zipCode);
      } else {
        setValidationResult(null);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [zipCode, validateZipCode]);

  // Handle ZIP code input - only allow numbers and hyphen
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d-]/g, '').slice(0, 10);
    setZipCode(value);
  };

  const handleGetCareOptions = () => {
    if (isValidZip && !validating) {
      router.push(`/find-care?zip=${encodeURIComponent(zipCode.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValidZip && !validating) {
      handleGetCareOptions();
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ border: 'none' }}
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-900/50" />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(45,212,191,0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center lg:items-start min-h-screen py-20 lg:py-24 gap-12">
        
        {/* Hero Headline Content */}
        <div className="w-full max-w-5xl text-center lg:text-left space-y-6 relative z-10 mt-12 lg:mt-20">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Trusted by 50,000+ families</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Quality{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
                Home Care
              </span>
              <motion.span
                className="absolute bottom-2 left-0 w-full h-3 bg-cyan-400/30 -z-0 rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </span>
            <br />
            Where Care Meets Comfort
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0"
          >
            Professional, compassionate home care services tailored to your needs. 
            Our dedicated team is here to help.
          </motion.p>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3"
          >
            {['Background Checked Caregivers', 'Available 24/7', 'Free Consultation'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Central Cards Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl relative z-10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: ZIP Check Onboarding */}
            <div className="relative bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-[32px] shadow-2xl p-6 sm:p-8 text-gray-900 dark:text-white transition-colors duration-200 flex flex-col justify-between h-full">
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-455">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Location — Step 1</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight font-display text-left">
                  Get Started with Jybek Care
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-left font-sans">
                  Enter your ZIP code to verify service availability in your area and find care options.
                </p>

                {/* ZIP Code Input */}
                <div className="mb-6">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      id="zip-code"
                      type="text"
                      value={zipCode}
                      onChange={handleZipChange}
                      onBlur={() => setTouched(true)}
                      onKeyDown={handleKeyDown}
                      placeholder="ZIP code (e.g., 12345)"
                      maxLength={10}
                      className={`w-full pl-12 pr-4 py-4 text-base sm:text-lg rounded-2xl border bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-4 focus:outline-none transition-all ${
                        showError || showApiError
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' 
                          : validationResult?.valid
                            ? 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/10'
                            : 'border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500/10'
                      }`}
                    />
                    {/* Loading indicator */}
                    {validating && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Loader2 className="w-5 h-5 text-brand-500 animate-spin" />
                      </div>
                    )}
                  </div>
                  
                  {/* Format error */}
                  {showError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-2 text-sm text-red-400"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Please enter a valid 5-digit ZIP code
                    </motion.p>
                  )}
                  
                  {/* API error (ZIP not found) */}
                  {showApiError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-2 text-sm text-red-400"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {validationResult?.error || 'ZIP code not found'}
                    </motion.p>
                  )}
                  
                  {/* Location display on success */}
                  {validationResult?.valid && validationResult.city && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-2 text-sm text-emerald-400"
                    >
                      <MapPin className="w-4 h-4" />
                      {validationResult.city}, {validationResult.stateAbbr || validationResult.state}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="mt-auto">
                {/* Submit Button */}
                <Button
                  fullWidth
                  size="lg"
                  onClick={handleGetCareOptions}
                  disabled={!isValidZip || validating}
                  className={`text-base font-bold shadow-brand-500/20 py-4 px-6 rounded-2xl transition-all duration-200 ${
                    !isValidZip || validating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  rightIcon={
                    validating ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <motion.div
                        animate={isValidZip ? { x: [0, 4, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    )
                  }
                >
                  {validating ? 'Validating...' : 'Get Started'}
                </Button>

                {/* Or Call */}
                <p className="text-center text-sm text-gray-550 dark:text-gray-400 mt-4 font-sans">
                  Or call{' '}
                  <a href="tel:+1 888-717-5009" className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                    +1 888-717-5009
                  </a>
                </p>

                {/* Bottom Trust */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-5 pt-5 border-t border-gray-100 dark:border-gray-800/80">
                  {['Free Consultation', 'Quick Response', 'No Obligation'].map((item) => (
                    <span key={item} className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 font-medium font-sans">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: SMS Notification Opt-in Card */}
            <form onSubmit={handleSmsSubmit} className="relative bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-[32px] shadow-2xl p-6 sm:p-8 text-gray-900 dark:text-white transition-colors duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-455">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                  <span>Application — 1 of 11</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight font-display text-left">
                  Confirm your phone number
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-left font-sans">
                  By providing your phone number, you consent to receive text messages from Jybek HomeCare Services at the number provided for informational purposes like providing updates on your application status. Message and data rates may apply.{' '}
                  <a href="#terms" className="underline font-semibold text-gray-750 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    Terms of Use
                  </a>{' '}
                  •{' '}
                  <button
                    type="button"
                    onClick={() => setIsPrivacyOpen(true)}
                    className="underline font-semibold text-gray-750 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    Privacy Policy
                  </button>
                  . By clicking next, Jybek HomeCare Services will send a code to this phone number for verification purposes.
                </p>

                {/* Phone Input */}
                <div className="mb-6">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      id="hero-sms-phone"
                      type="tel"
                      placeholder="Phone number"
                      value={smsPhoneNumber}
                      onChange={handleSmsPhoneChange}
                      required
                      className={`w-full pl-12 pr-4 py-4 text-base sm:text-lg rounded-2xl border bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-4 focus:outline-none transition-all ${
                        smsPhoneError
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10'
                          : 'border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500/10'
                      }`}
                    />
                  </div>
                  {smsPhoneError && (
                    <p className="flex items-center gap-1.5 mt-2 text-xs text-red-500 font-medium">
                      <AlertCircle className="w-4 h-4" />
                      {smsPhoneError}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-6">
                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={!smsPhoneNumber}
                  className={`text-base font-bold shadow-brand-500/20 py-4 px-6 rounded-2xl transition-all duration-200 ${
                    !smsPhoneNumber ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Next
                </Button>
              </div>
            </form>

          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 73.3C672 77 768 83 864 85C960 87 1056 85 1152 80C1248 75 1344 67 1392 63L1440 60V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z"
            fill="white"
            className="dark:fill-gray-950"
          />
        </svg>
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

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-4 rounded-2xl shadow-xl border border-gray-800 dark:border-gray-150 flex items-center gap-3.5 max-w-sm"
          >
            <div className="bg-emerald-500 rounded-full p-1 text-white shrink-0">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
