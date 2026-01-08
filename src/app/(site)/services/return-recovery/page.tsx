'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Return & Recovery',
  subtitle: 'Our flagship post-hospital recovery program',
  description:
    'Jybek Return & Recovery is our comprehensive flagship program designed to support safe, successful recovery after hospitalization or surgery. This structured program reduces readmission risk, accelerates healing, and helps patients return to independence faster through coordinated, evidence-based care.',
  heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
  features: [
    {
      title: '72-Hour Critical Support',
      description: 'Intensive monitoring during the first 72 hours post-discharge when readmission risk is highest.',
    },
    {
      title: 'Medication Reconciliation',
      description: 'Thorough review and organization of all medications to prevent dangerous errors and interactions.',
    },
    {
      title: 'Red Flag Monitoring',
      description: 'Trained observation for warning signs that could indicate complications requiring medical attention.',
    },
    {
      title: 'Therapy Reinforcement',
      description: 'Support for completing prescribed physical therapy, occupational therapy, and exercises.',
    },
    {
      title: 'Nutrition Support',
      description: 'Proper nutrition planning to support healing, including special diets and hydration monitoring.',
    },
    {
      title: 'Follow-Up Coordination',
      description: 'Ensuring all follow-up appointments are scheduled, attended, and information is communicated.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Reduce Readmissions',
      description: 'Structured approach proven to prevent common causes of hospital return.',
    },
    {
      icon: Heart,
      title: 'Faster Recovery',
      description: 'Proper support accelerates healing and return to independence.',
    },
    {
      icon: Users,
      title: 'Care Coordination',
      description: 'Seamless communication between all healthcare providers.',
    },
    {
      icon: Clock,
      title: 'Graduated Support',
      description: 'Intensive early care that decreases as you strengthen.',
    },
  ],
  whatToExpect: [
    'Pre-discharge planning call with our care coordinator',
    'Caregiver present at home upon discharge',
    'Comprehensive medication review and organization',
    'Daily health monitoring with documented reports',
    'Coordination with home health, therapy, and medical providers',
    'Weekly assessment and care plan adjustments',
    'Gradual step-down as recovery progresses',
  ],
  whoIsItFor: [
    'Patients being discharged after major surgery',
    'Those recovering from cardiac events, stroke, or serious illness',
    'Individuals identified as high risk for readmission',
    'Patients with complex discharge instructions',
    'Those returning from extended hospital or rehab stays',
    'Anyone who wants the best possible recovery outcomes',
  ],
  faqs: [
    {
      question: 'How long does the Return & Recovery program last?',
      answer: 'The core program typically runs 2-4 weeks, with the most intensive support in the first week. Duration is customized based on the procedure, individual recovery, and ongoing needs.',
    },
    {
      question: 'What makes this different from regular transitional care?',
      answer: 'Return & Recovery is a structured, evidence-based program with specific protocols, monitoring checklists, and coordination procedures designed specifically to prevent readmissions.',
    },
    {
      question: 'Do you communicate with my doctors?',
      answer: 'Yes, care coordination is central to the program. We maintain communication with your surgical team, primary care, and specialists to ensure everyone is informed.',
    },
    {
      question: 'Can the program be covered by insurance?',
      answer: 'While home care isn\'t typically covered by Medicare, some Medicare Advantage plans, long-term care insurance, and hospital readmission prevention programs may help with costs.',
    },
  ],
  relatedServices: [
    { title: 'Transitional Care', href: '/services/transitional-care' },
    { title: 'Jybek Stability Pathways', href: '/services/stability-pathways' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: '24-Hour Care', href: '/services/24-hour-care' },
  ],
};

export default function ReturnRecoveryPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

