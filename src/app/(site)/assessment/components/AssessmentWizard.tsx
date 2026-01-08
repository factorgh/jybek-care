'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, Card } from '@/components/ui';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  User,
  Users,
  Heart,
  UserCircle,
  Activity,
  Droplets,
  Pill,
  AlertTriangle,
  Brain,
  UsersRound,
  ClipboardCheck,
} from 'lucide-react';
import type { 
  AssessmentData, 
  MobilityLevel, 
  HygieneLevel, 
  MedicationLevel, 
  MemoryLevel, 
  SocialLevel,
  AssessmentResult,
} from '@/types';

// Assessment questions configuration
const questions = {
  relationship: {
    title: 'Who are you caring for?',
    subtitle: 'This helps us personalize your assessment results.',
    options: [
      { id: 'parent', icon: Users, label: 'Parent' },
      { id: 'spouse', icon: Heart, label: 'Spouse' },
      { id: 'self', icon: User, label: 'Myself' },
      { id: 'other', icon: UserCircle, label: 'Someone Else' },
    ],
  },
  mobility: {
    title: 'How would you describe their mobility?',
    subtitle: 'Select the option that best describes their current mobility level.',
    icon: Activity,
    options: [
      {
        id: 'independent' as MobilityLevel,
        label: 'Independent',
        description: 'No difficulty moving around',
      },
      {
        id: 'occasional-assistance' as MobilityLevel,
        label: 'Occasional Assistance',
        description: 'Needs help occasionally but manages most tasks alone',
      },
      {
        id: 'constant-assistance' as MobilityLevel,
        label: 'Constant Assistance',
        description: 'Needs regular help from another person',
      },
      {
        id: 'bedbound' as MobilityLevel,
        label: 'Bedbound/Limited',
        description: 'Significant mobility limitations',
      },
    ],
  },
  hygiene: {
    title: 'How well are they maintaining their hygiene?',
    subtitle: 'Personal care includes bathing, grooming, and dressing.',
    icon: Droplets,
    options: [
      {
        id: 'independent' as HygieneLevel,
        label: 'Independent',
        description: 'No difficulty staying clean and groomed',
      },
      {
        id: 'occasional-reminders' as HygieneLevel,
        label: 'Needs Reminders',
        description: 'Occasional reminders or assistance needed',
      },
      {
        id: 'significant-help' as HygieneLevel,
        label: 'Significant Help',
        description: 'Requires regular help or supervision',
      },
      {
        id: 'unable-without-help' as HygieneLevel,
        label: 'Unable Without Help',
        description: 'Cannot maintain hygiene without full assistance',
      },
    ],
  },
  medication: {
    title: 'How are they managing their medications?',
    subtitle: 'Consider prescription and over-the-counter medications.',
    icon: Pill,
    options: [
      {
        id: 'no-support' as MedicationLevel,
        label: 'No Support Needed',
        description: 'Manages medications independently',
      },
      {
        id: 'occasional-reminders' as MedicationLevel,
        label: 'Occasional Reminders',
        description: 'Sometimes forgets without reminders',
      },
      {
        id: 'daily-reminders' as MedicationLevel,
        label: 'Daily Reminders',
        description: 'Needs daily help to take medications correctly',
      },
      {
        id: 'unable-without-support' as MedicationLevel,
        label: 'Unable Without Support',
        description: 'Cannot manage medications without full assistance',
      },
    ],
  },
  safety: {
    title: 'Does their living environment pose any safety concerns?',
    subtitle: 'Consider fall risks, spoiled food, clutter, or other hazards.',
    icon: AlertTriangle,
    options: [
      { id: 'no', label: 'No', description: 'Living environment is safe' },
      { id: 'yes', label: 'Yes', description: 'There are safety concerns' },
    ],
  },
  memory: {
    title: 'Are they experiencing any memory loss?',
    subtitle: 'Consider forgetting recent events, repeating questions, or getting lost.',
    icon: Brain,
    options: [
      {
        id: 'none' as MemoryLevel,
        label: 'Not at All',
        description: 'No noticeable memory issues',
      },
      {
        id: 'sometimes' as MemoryLevel,
        label: 'Sometimes',
        description: 'Occasional forgetfulness',
      },
      {
        id: 'often' as MemoryLevel,
        label: 'Often',
        description: 'Frequent memory issues affecting daily life',
      },
    ],
  },
  social: {
    title: 'How would you describe their social life?',
    subtitle: 'Social engagement is important for overall well-being.',
    icon: UsersRound,
    options: [
      {
        id: 'regular' as SocialLevel,
        label: 'Regularly Engaged',
        description: 'Frequently interacts with friends or family',
      },
      {
        id: 'occasional' as SocialLevel,
        label: 'Occasionally Engaged',
        description: 'Some interaction, but would benefit from more',
      },
      {
        id: 'isolated' as SocialLevel,
        label: 'Very Isolated',
        description: 'Almost no social interaction',
      },
    ],
  },
};

type QuestionKey = keyof typeof questions;
const questionOrder: QuestionKey[] = [
  'relationship',
  'mobility',
  'hygiene',
  'medication',
  'safety',
  'memory',
  'social',
];

// Calculate assessment result
function calculateResult(data: AssessmentData): AssessmentResult {
  let score = 0;

  // Mobility scoring
  const mobilityScores = { independent: 0, 'occasional-assistance': 1, 'constant-assistance': 2, bedbound: 3 };
  score += mobilityScores[data.mobility] || 0;

  // Hygiene scoring
  const hygieneScores = { independent: 0, 'occasional-reminders': 1, 'significant-help': 2, 'unable-without-help': 3 };
  score += hygieneScores[data.hygiene] || 0;

  // Medication scoring
  const medicationScores = { 'no-support': 0, 'occasional-reminders': 1, 'daily-reminders': 2, 'unable-without-support': 3 };
  score += medicationScores[data.medication] || 0;

  // Safety concerns
  if (data.safetyConcerns) score += 2;

  // Memory scoring
  const memoryScores = { none: 0, sometimes: 1, often: 3 };
  score += memoryScores[data.memoryLoss] || 0;

  // Social scoring
  const socialScores = { regular: 0, occasional: 1, isolated: 2 };
  score += socialScores[data.socialLife] || 0;

  // Determine recommendation
  let recommendation: AssessmentResult['recommendation'];
  let suggestedServices: AssessmentResult['suggestedServices'];
  let description: string;

  if (score <= 3) {
    recommendation = 'independent';
    suggestedServices = ['respite'];
    description = 'Your loved one appears to be mostly independent. Consider occasional check-ins or companion care for social engagement.';
  } else if (score <= 7) {
    recommendation = 'light-care';
    suggestedServices = ['in-home', 'respite'];
    description = 'Some assistance may be beneficial. Part-time in-home care can help with daily tasks while maintaining independence.';
  } else if (score <= 12) {
    recommendation = 'moderate-care';
    suggestedServices = ['in-home', 'assisted-living'];
    description = 'Regular care assistance is recommended. Consider full-time in-home care or an assisted living community.';
  } else {
    recommendation = 'full-care';
    suggestedServices = ['assisted-living', 'memory-care', 'nursing-home'];
    description = 'Comprehensive care is recommended. A structured care environment with 24/7 support would be most beneficial.';
  }

  return { score, recommendation, suggestedServices, description };
}

/**
 * Multi-step care assessment wizard
 */
export function AssessmentWizard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [assessmentData, setAssessmentData] = useState<Partial<AssessmentData>>({});
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = questionOrder.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const currentKey = questionOrder[currentQuestion];
  const question = questions[currentKey];

  const handleAnswer = (value: string) => {
    const newData = { ...assessmentData };

    switch (currentKey) {
      case 'relationship':
        newData.relationship = value as AssessmentData['relationship'];
        break;
      case 'mobility':
        newData.mobility = value as MobilityLevel;
        break;
      case 'hygiene':
        newData.hygiene = value as HygieneLevel;
        break;
      case 'medication':
        newData.medication = value as MedicationLevel;
        break;
      case 'safety':
        newData.safetyConcerns = value === 'yes';
        break;
      case 'memory':
        newData.memoryLoss = value as MemoryLevel;
        break;
      case 'social':
        newData.socialLife = value as SocialLevel;
        break;
    }

    setAssessmentData(newData);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleContactSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const result = showResult ? calculateResult(assessmentData as AssessmentData) : null;

  const recommendationLabels = {
    independent: 'Mostly Independent',
    'light-care': 'Light Care Needed',
    'moderate-care': 'Moderate Care Needed',
    'full-care': 'Full Care Recommended',
  };

  const recommendationColors = {
    independent: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    'light-care': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'moderate-care': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    'full-care': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="relative container-custom pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Care Needs Assessment
            </h1>
            <p className="text-lg text-white/80">
              Answer a few questions to get personalized care recommendations.
            </p>
          </motion.div>

          {/* Progress bar */}
          {!showResult && !isComplete && (
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
                Question {currentQuestion + 1} of {totalQuestions}
              </p>
            </div>
          )}

          {/* Assessment card */}
          <Card variant="elevated" padding="none" className="overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Questions */}
              {!showResult && !isComplete && (
                <motion.div
                  key={currentKey}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {question.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {question.subtitle}
                  </p>

                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-left transition-all duration-200 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 group"
                      >
                        <div className="flex items-center gap-4">
                          {'icon' in option && option.icon && (
                            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors">
                              <option.icon className="w-5 h-5 text-gray-500 group-hover:text-brand-600 transition-colors" />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 transition-colors">
                              {option.label}
                            </p>
                            {'description' in option && option.description && (
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {option.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>

                  {currentQuestion > 0 && (
                    <div className="mt-6">
                      <Button
                        variant="ghost"
                        onClick={handleBack}
                        leftIcon={<ArrowLeft className="w-4 h-4" />}
                      >
                        Back
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Results */}
              {showResult && !showContact && !isComplete && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 lg:p-10"
                >
                  <div className="text-center mb-8">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        recommendationColors[result.recommendation]
                      }`}
                    >
                      {recommendationLabels[result.recommendation]}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Your Assessment Results
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {result.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Recommended Care Options:
                    </h3>
                    <ul className="space-y-2">
                      {result.suggestedServices.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-5 h-5 text-accent-emerald" />
                          <span className="capitalize">{service.replace('-', ' ')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
                    This assessment is for informational purposes only and is not a substitute 
                    for professional medical advice.
                  </p>

                  <Button
                    fullWidth
                    size="lg"
                    onClick={() => setShowContact(true)}
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Matched with Care Providers
                  </Button>
                </motion.div>
              )}

              {/* Contact form */}
              {showContact && !isComplete && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Get Your Personalized Matches
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Share your contact details to receive care provider recommendations.
                  </p>

                  <div className="space-y-5 mb-8">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="First Name"
                        value={contactData.firstName}
                        onChange={(e) =>
                          setContactData({ ...contactData, firstName: e.target.value })
                        }
                      />
                      <Input
                        label="Last Name"
                        value={contactData.lastName}
                        onChange={(e) =>
                          setContactData({ ...contactData, lastName: e.target.value })
                        }
                      />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData({ ...contactData, email: e.target.value })
                      }
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) =>
                        setContactData({ ...contactData, phone: e.target.value })
                      }
                    />
                    <Input
                      label="ZIP Code"
                      value={contactData.zipCode}
                      onChange={(e) =>
                        setContactData({ ...contactData, zipCode: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowContact(false)}
                      leftIcon={<ArrowLeft className="w-4 h-4" />}
                    >
                      Back
                    </Button>
                    <Button
                      fullWidth
                      isLoading={isSubmitting}
                      onClick={handleContactSubmit}
                      disabled={
                        !contactData.firstName ||
                        !contactData.email ||
                        !contactData.phone ||
                        !contactData.zipCode
                      }
                    >
                      Get My Matches
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Success */}
              {isComplete && (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 lg:p-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent-emerald" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Your Matches Are On The Way!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    A care advisor will contact you within 24 hours with personalized 
                    care options based on your assessment.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                    <p className="text-sm text-gray-500 mb-2">Need immediate assistance?</p>
                    <a
                      href="tel:+1 888-717-5009"
                      className="inline-flex items-center gap-2 text-xl font-bold text-brand-600"
                    >
                      <Phone className="w-6 h-6" />
                      +1 888-717-5009
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
}

