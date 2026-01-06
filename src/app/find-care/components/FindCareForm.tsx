'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Input } from '@/components/ui';
import { 
  ArrowRight, 
  CheckCircle, 
  Phone,
  Shield,
  Clock,
  Heart,
} from 'lucide-react';

/**
 * Simple lead capture form - direct path to getting care matches
 */
export function FindCareForm() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  // Pre-populate ZIP code from URL params
  useEffect(() => {
    const zipFromUrl = searchParams.get('zip');
    if (zipFromUrl) {
      setFormData(prev => ({ ...prev, zipCode: zipFromUrl }));
    }
  }, [searchParams]);

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We&apos;ve received your information. A Jybek care advisor will contact you within 24 hours to discuss your care needs and provide personalized recommendations.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Need immediate assistance?</p>
              <a 
                href="tel:+1 888-717-5009" 
                className="inline-flex items-center gap-2 text-xl font-bold text-brand-600"
              >
                <Phone className="w-5 h-5" />
                +1 888-717-5009
              </a>
            </div>

            <Link href="/">
              <Button variant="outline" size="lg">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Jybek Care Near You
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Answer a few questions to get personalized Jybek care recommendations.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Get Your Personalized Jybek Matches
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Share your contact details to receive Jybek care provider recommendations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  required
                />
                <Input
                  label="Last Name"
                  placeholder="Smith"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  required
                />
              </div>

              {/* Email */}
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
              />

              {/* Phone */}
              <Input
                label="Phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                required
              />

              {/* ZIP Code */}
              <Input
                label="ZIP Code"
                placeholder="Enter your ZIP code"
                value={formData.zipCode}
                onChange={handleInputChange('zipCode')}
                required
              />

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  fullWidth
                  size="xl"
                  className="text-base font-semibold"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Get My Jybek Matches
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center gap-6 pt-4">
                {[
                  { icon: Shield, text: '100% Free' },
                  { icon: Clock, text: 'No Obligation' },
                  { icon: Heart, text: 'Secure' },
                ].map((item) => (
                  <span key={item.text} className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <item.icon className="w-4 h-4 text-emerald-500" />
                    {item.text}
                  </span>
                ))}
              </div>
            </form>
          </div>

          {/* Phone CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-white/70 mb-2">Prefer to speak with someone?</p>
            <a 
              href="tel:+1 888-717-5009" 
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-brand-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 888-717-5009
            </a>
            <p className="text-white/50 text-sm mt-1">Available 24/7</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            className="dark:fill-gray-950"
          />
        </svg>
      </div>
    </section>
  );
}

