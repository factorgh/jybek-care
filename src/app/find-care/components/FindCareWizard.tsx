'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, Card } from '@/components/ui';
import {
  Home,
  Building2,
  Brain,
  Heart,
  Clock,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  User,
  Users,
  UserCircle,
  MapPin,
} from 'lucide-react';
import type { CareType } from '@/types';

// Care type options
const careTypes = [
  {
    id: 'in-home' as CareType,
    icon: Home,
    title: 'In-Home Care',
    description: 'Care in the comfort of your own home',
  },
  {
    id: 'assisted-living' as CareType,
    icon: Building2,
    title: 'Assisted Living',
    description: 'Residential community with daily support',
  },
  {
    id: 'memory-care' as CareType,
    icon: Brain,
    title: 'Memory Care',
    description: 'Specialized dementia and Alzheimer\'s care',
  },
  {
    id: 'nursing-home' as CareType,
    icon: Stethoscope,
    title: 'Skilled Nursing',
    description: 'Medical care and rehabilitation',
  },
  {
    id: 'respite' as CareType,
    icon: Clock,
    title: 'Respite Care',
    description: 'Short-term relief for family caregivers',
  },
  {
    id: 'hospice' as CareType,
    icon: Heart,
    title: 'Hospice Care',
    description: 'Comfort-focused end-of-life care',
  },
];

// Relationship options
const relationships = [
  { id: 'parent', icon: Users, label: 'Parent' },
  { id: 'spouse', icon: Heart, label: 'Spouse' },
  { id: 'self', icon: User, label: 'Myself' },
  { id: 'other', icon: UserCircle, label: 'Someone Else' },
];

// Wizard steps
type Step = 'care-type' | 'relationship' | 'location' | 'contact' | 'success';

interface FormData {
  careType: CareType | null;
  relationship: string | null;
  zipCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

/**
 * Multi-step care finder wizard for lead capture
 */
export function FindCareWizard() {
  const [currentStep, setCurrentStep] = useState<Step>('care-type');
  const [formData, setFormData] = useState<FormData>({
    careType: null,
    relationship: null,
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps: Step[] = ['care-type', 'relationship', 'location', 'contact', 'success'];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex) / (steps.length - 1)) * 100;

  const nextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const prevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setCurrentStep('success');
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="relative container-custom pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find the Right Care for Your Loved One
            </h1>
            <p className="text-lg text-white/80">
              Answer a few questions and we&apos;ll match you with trusted care providers in your area.
            </p>
          </motion.div>

          {/* Progress bar */}
          {currentStep !== 'success' && (
            <div className="mb-8">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-white/60 text-sm mt-2 text-center">
                Step {currentStepIndex + 1} of {steps.length - 1}
              </p>
            </div>
          )}

          {/* Wizard card */}
          <Card variant="elevated" padding="none" className="overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Step 1: Care Type */}
              {currentStep === 'care-type' && (
                <motion.div
                  key="care-type"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    What type of care are you looking for?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Select the option that best fits your needs.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {careTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setFormData({ ...formData, careType: type.id });
                          nextStep();
                        }}
                        className={`p-5 rounded-xl border-2 text-left transition-all duration-200 group hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 ${
                          formData.careType === type.id
                            ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-200 dark:group-hover:bg-brand-800/50 transition-colors">
                            <type.icon className="w-6 h-6 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {type.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Relationship */}
              {currentStep === 'relationship' && (
                <motion.div
                  key="relationship"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Who are you looking for care for?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    This helps us personalize your care recommendations.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {relationships.map((rel) => (
                      <button
                        key={rel.id}
                        onClick={() => {
                          setFormData({ ...formData, relationship: rel.id });
                        }}
                        className={`p-6 rounded-xl border-2 text-center transition-all duration-200 ${
                          formData.relationship === rel.id
                            ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-brand-300'
                        }`}
                      >
                        <rel.icon
                          className={`w-8 h-8 mx-auto mb-3 ${
                            formData.relationship === rel.id
                              ? 'text-brand-600'
                              : 'text-gray-400'
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            formData.relationship === rel.id
                              ? 'text-brand-600'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {rel.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                      Back
                    </Button>
                    <Button
                      fullWidth
                      onClick={nextStep}
                      disabled={!formData.relationship}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Location */}
              {currentStep === 'location' && (
                <motion.div
                  key="location"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Where do you need care?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Enter your ZIP code to find caregivers near you.
                  </p>

                  <div className="max-w-sm mx-auto mb-8">
                    <Input
                      label="ZIP Code"
                      placeholder="Enter ZIP code"
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({ ...formData, zipCode: e.target.value })
                      }
                      leftIcon={<MapPin className="w-5 h-5" />}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                      Back
                    </Button>
                    <Button
                      fullWidth
                      onClick={nextStep}
                      disabled={formData.zipCode.length < 5}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Almost there! How can we reach you?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    We&apos;ll send your personalized care matches to this contact info.
                  </p>

                  <div className="space-y-5 mb-8">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="First Name"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                      />
                      <Input
                        label="Last Name"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-brand-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to receive calls and texts about care options.
                  </p>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                      Back
                    </Button>
                    <Button
                      fullWidth
                      onClick={handleSubmit}
                      isLoading={isSubmitting}
                      disabled={!formData.firstName || !formData.email || !formData.phone}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Get My Care Matches
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Success */}
              {currentStep === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 lg:p-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent-emerald" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    We&apos;re Finding Your Perfect Matches!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    A care advisor will contact you within 24 hours with personalized 
                    care options based on your needs.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Want to speak with someone now?
                    </p>
                    <a
                      href="tel:+1 888-717-5009"
                      className="inline-flex items-center gap-2 text-xl font-bold text-brand-600"
                    >
                      <Phone className="w-6 h-6" />
                      +1 888-717-5009
                    </a>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-accent-emerald" />
                      Background-checked caregivers
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-accent-emerald" />
                      No obligation
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-accent-emerald" />
                      100% free service
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 text-sm">
              Trusted by over 50,000 families • 4.9/5 average rating • Available 24/7
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

