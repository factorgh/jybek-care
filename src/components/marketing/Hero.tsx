'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { 
  Phone, 
  CheckCircle,
  ArrowRight,
  Star,
  AlertCircle,
  MapPin,
  Loader2,
} from 'lucide-react';

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-24">
          
          {/* Left Column - Content (7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
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
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Connect with verified, compassionate caregivers in your area. 
              Free matching service with no obligation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link href="/find-care">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="xl"
                    className="bg-white text-brand-700 hover:bg-gray-100 shadow-xl shadow-black/20 text-base font-semibold px-8"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                  >
                    Find Jybek Care Now
                  </Button>
                </motion.div>
              </Link>
              <a href="tel:+1 888-717-5009">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="xl"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 text-base font-semibold"
                    leftIcon={<Phone className="h-5 w-5" />}
                  >
                    +1 888-717-5009
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              {['Background Checked', 'Available 24/7', '100% Free'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Card (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
              {/* Card Header */}
              <div className="text-center mb-6 text-white">
                <h2 className="text-2xl font-bold text-white mb-1 mt-6">
                  Find Jybek Care Near You
                </h2>
                <p className="text-white/30 dark:text-gray-400 text-sm">
                  Free, no-obligation Jybek care matching
                </p>
              </div>

              {/* ZIP Code Input */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-white mb-2">
                  ZIP code where care is needed:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={zipCode}
                    onChange={handleZipChange}
                    onBlur={() => setTouched(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter ZIP code (e.g., 12345)"
                    maxLength={10}
                    className={`w-full px-4 py-3 text-base rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 transition-all ${
                      showError || showApiError
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' 
                        : validationResult?.valid
                          ? 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/10'
                          : 'border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500/10'
                    }`}
                  />
                  {/* Loading indicator */}
                  {validating && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
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

              {/* Submit Button */}
              <motion.div 
                whileHover={isValidZip && !validating ? { scale: 1.02 } : {}} 
                whileTap={isValidZip && !validating ? { scale: 0.98 } : {}}
              >
                <Button
                  fullWidth
                  size="lg"
                  onClick={handleGetCareOptions}
                  disabled={!isValidZip || validating}
                  className={`text-base font-semibold shadow-brand-500/30 ${
                    !isValidZip || validating
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
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
                  {validating ? 'Validating...' : 'Find Jybek Care Now'}
                </Button>
              </motion.div>

              {/* Or Call */}
              <p className="text-center text-sm text-gray-100 dark:text-gray-400 mt-4">
                Or call{' '}
                <a href="tel:+1 888-717-5009" className="font-semibold text-white hover:underline">
                  +1 888-717-5009
                </a>
              </p>

              {/* Bottom Trust */}
              <div className="flex justify-center gap-4 mt-5 pt-5 border-t border-gray-100 dark:border-gray-800">
                {['100% Free', 'No Obligation', 'Secure'].map((item) => (
                  <span key={item} className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating Image Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-4 -right-4 hidden lg:block"
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl p-3 flex items-center gap-3 border border-white/30">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
                  ].map((src, i) => (
                    <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
                      <Image src={src} alt="" width={36} height={36} className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">4.9 from 25k reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -bottom-4 -left-4 hidden lg:block"
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white/30">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">50,000+</p>
                  <p className="text-xs text-gray-500">Families Helped</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
    </section>
  );
}
