'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek 24-Hour Care',
  subtitle: 'Round-the-clock care with continuous awake supervision',
  description:
    'Our Jybek 24-Hour Care service provides continuous, around-the-clock caregiving with rotating shifts of alert caregivers. Unlike live-in care, 24-hour care ensures someone is always awake and ready to assist at any moment, day or night.',
  heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Continuous Awake Care',
      description: 'Caregivers work in shifts (typically 8 or 12 hours) ensuring someone is always alert and ready to help.',
    },
    {
      title: 'Night-Time Assistance',
      description: 'Awake overnight caregivers for those who need frequent assistance, repositioning, or monitoring during sleep hours.',
    },
    {
      title: 'Comprehensive Personal Care',
      description: 'Full assistance with bathing, dressing, toileting, feeding, and all activities of daily living.',
    },
    {
      title: 'Medication Management',
      description: 'Round-the-clock medication administration and monitoring at precise intervals.',
    },
    {
      title: 'Safety Monitoring',
      description: 'Constant supervision for fall prevention, wandering prevention, and immediate response to any needs.',
    },
    {
      title: 'Health Monitoring',
      description: 'Regular vital signs checks, symptom monitoring, and detailed health documentation.',
    },
  ],
  benefits: [
    {
      icon: Clock,
      title: 'Always Alert',
      description: 'Caregivers are awake and attentive every minute of every shift.',
    },
    {
      icon: Shield,
      title: 'Maximum Safety',
      description: 'Immediate response to falls, emergencies, or any care needs.',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Families rest easy knowing professional care never sleeps.',
    },
    {
      icon: Users,
      title: 'Care Continuity',
      description: 'Detailed shift handoffs ensure seamless, consistent care.',
    },
  ],
  whatToExpect: [
    'Comprehensive assessment of care needs and overnight requirements',
    'Team of 2-3 dedicated caregivers assigned to your case',
    'Structured shift schedules (typically 8 or 12-hour shifts)',
    'Detailed care logs and shift-to-shift communication',
    'Regular supervisor visits to ensure quality',
    'Emergency protocols and backup caregiver coverage',
  ],
  whoIsItFor: [
    'Individuals who need assistance multiple times throughout the night',
    'Those with high fall risk requiring constant supervision',
    'People with advanced dementia who may wander',
    'Clients with complex medical needs requiring round-the-clock monitoring',
    'Post-surgical patients needing intensive recovery support',
    'Anyone whose safety requires continuous awake supervision',
  ],
  faqs: [
    {
      question: 'What is the difference between 24-hour care and live-in care?',
      answer: 'With 24-hour care, caregivers work in shifts and are always awake. With live-in care, one caregiver stays for an extended period and sleeps at night. 24-hour care is ideal when nighttime assistance is frequently needed.',
    },
    {
      question: 'How many caregivers will I have?',
      answer: 'Typically 2-3 caregivers rotate in shifts to provide 24-hour coverage. This ensures each caregiver is well-rested and alert while also allowing you to build familiarity with a small, consistent team.',
    },
    {
      question: 'Is 24-hour care more expensive than live-in care?',
      answer: 'Yes, 24-hour care is typically more expensive because you\'re paying for multiple shift workers rather than one live-in caregiver. However, it provides a higher level of supervision and is necessary for certain care needs.',
    },
    {
      question: 'Can 24-hour care be temporary?',
      answer: 'Absolutely. Many families use 24-hour care during post-hospital recovery, health crises, or transition periods. We can help you step down to live-in or hourly care as the situation improves.',
    },
  ],
  relatedServices: [
    { title: 'Live-in Care', href: '/services/live-in-care' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: 'Hospice Care Support', href: '/services/hospice-care' },
  ],
};

export default function TwentyFourHourCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

