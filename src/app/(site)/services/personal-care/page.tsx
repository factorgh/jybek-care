'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Personal Care',
  subtitle: 'Dignified assistance with daily living activities',
  description:
    'Our Jybek Personal Care service provides compassionate, hands-on assistance with activities of daily living (ADLs). Our trained caregivers help with bathing, dressing, grooming, mobility, and other personal needs while preserving dignity and independence.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Bathing & Hygiene',
      description: 'Assistance with bathing, showering, sponge baths, and maintaining personal hygiene with respect for modesty and preferences.',
    },
    {
      title: 'Dressing Assistance',
      description: 'Help selecting appropriate clothing and getting dressed, accommodating any physical limitations or special needs.',
    },
    {
      title: 'Grooming Support',
      description: 'Assistance with hair care, shaving, oral hygiene, nail care, and maintaining a well-groomed appearance.',
    },
    {
      title: 'Mobility Assistance',
      description: 'Safe transfers, walking support, wheelchair assistance, and help with positioning and repositioning.',
    },
    {
      title: 'Toileting & Incontinence',
      description: 'Dignified assistance with toileting needs, incontinence care, and maintaining skin health.',
    },
    {
      title: 'Medication Reminders',
      description: 'Timely reminders to take prescribed medications and monitoring for any adverse reactions.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Dignity Preserved',
      description: 'Care delivered with respect, compassion, and attention to personal preferences.',
    },
    {
      icon: Shield,
      title: 'Trained Caregivers',
      description: 'All caregivers certified in proper personal care techniques and safety.',
    },
    {
      icon: Users,
      title: 'Consistent Care',
      description: 'Same caregiver whenever possible to build trust and familiarity.',
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'Personal care services available any time of day or night.',
    },
  ],
  whatToExpect: [
    'Comprehensive assessment of care needs and personal preferences',
    'Development of a personalized care plan with family input',
    'Introduction to your assigned caregiver before services begin',
    'Respectful, unhurried assistance that preserves independence',
    'Regular communication and care plan updates',
    'Ongoing supervision by care coordinators',
  ],
  whoIsItFor: [
    'Seniors who need assistance with bathing, dressing, or grooming',
    'Individuals recovering from surgery or hospitalization',
    'People with physical disabilities affecting mobility or dexterity',
    'Those with chronic conditions requiring daily care support',
    'Individuals who can no longer safely perform personal care alone',
    'Anyone needing more support than companion care provides',
  ],
  faqs: [
    {
      question: 'Will I have the same caregiver each visit?',
      answer: 'We prioritize consistency and try to assign the same caregiver whenever possible. Having a familiar caregiver builds trust and makes personal care more comfortable.',
    },
    {
      question: 'Are your caregivers trained in proper lifting techniques?',
      answer: 'Yes, all our personal care aides receive extensive training in safe transfer techniques, body mechanics, and fall prevention to protect both clients and themselves.',
    },
    {
      question: 'Can personal care be combined with other services?',
      answer: 'Absolutely. Many clients receive personal care along with companion care, meal preparation, housekeeping, or other services as part of a comprehensive care plan.',
    },
    {
      question: 'How do you handle clients with dementia who resist care?',
      answer: 'Our caregivers are trained in specialized techniques for working with memory care clients, including gentle approaches, redirection, and maintaining calm, reassuring routines.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: '24-Hour Care', href: '/services/24-hour-care' },
    { title: 'Live-in Care', href: '/services/live-in-care' },
  ],
};

export default function PersonalCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

