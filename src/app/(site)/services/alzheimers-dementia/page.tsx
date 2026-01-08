'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: "Jybek Alzheimer's & Dementia Care",
  subtitle: 'Compassionate, specialized memory care at home',
  description:
    "Our Jybek Alzheimer's & Dementia Care service provides specialized support for individuals living with Alzheimer's disease and other forms of dementia. Our trained caregivers use proven techniques to maintain dignity, reduce anxiety, and create meaningful moments throughout each day.",
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Memory Care Techniques',
      description: 'Specialized approaches including validation therapy, redirection, and positive communication strategies.',
    },
    {
      title: 'Safety Supervision',
      description: 'Constant supervision to prevent wandering, accidents, and unsafe behaviors while preserving dignity.',
    },
    {
      title: 'Routine & Structure',
      description: 'Consistent daily routines that reduce confusion and anxiety, promoting a sense of security.',
    },
    {
      title: 'Meaningful Activities',
      description: 'Cognitive stimulation, reminiscence therapy, music, and activities tailored to abilities and interests.',
    },
    {
      title: 'Personal Care',
      description: 'Patient, gentle assistance with bathing, dressing, and grooming using memory care approaches.',
    },
    {
      title: 'Behavioral Support',
      description: 'Understanding and appropriate responses to challenging behaviors with compassion.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Specialized Training',
      description: 'Caregivers certified in dementia care and Alzheimer\'s-specific techniques.',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Supervision and modifications to prevent wandering and accidents.',
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Education and respite for families navigating this journey.',
    },
    {
      icon: Clock,
      title: 'Consistent Care',
      description: 'Same caregivers to maintain familiarity and reduce confusion.',
    },
  ],
  whatToExpect: [
    'Comprehensive assessment of cognitive abilities and care needs',
    'Development of person-centered care plan honoring life history',
    'Caregivers specifically trained in dementia care assigned',
    'Consistent routines and familiar faces to reduce anxiety',
    'Regular communication about changes and adjustments',
    'Family education about the disease progression and care techniques',
  ],
  whoIsItFor: [
    "Individuals diagnosed with Alzheimer's disease at any stage",
    'Those with vascular dementia, Lewy body dementia, or frontotemporal dementia',
    'People with mild cognitive impairment who may progress',
    'Families who want to keep their loved one at home safely',
    'Those whose memory care needs exceed what family can provide',
    'Anyone needing specialized cognitive support and supervision',
  ],
  faqs: [
    {
      question: 'What training do your dementia caregivers have?',
      answer: 'All our memory care caregivers complete specialized dementia training covering communication techniques, behavior management, safety, activities, and understanding the disease process.',
    },
    {
      question: 'Can someone with dementia stay at home safely?',
      answer: 'Many people with dementia can remain safely at home with appropriate supervision and home modifications. We assess each situation individually and recommend the right level of care.',
    },
    {
      question: 'How do you handle difficult behaviors?',
      answer: 'Our caregivers are trained to identify triggers, use redirection, maintain calm environments, and respond with patience and compassion. We never argue or try to orient someone to reality forcefully.',
    },
    {
      question: 'What if my loved one doesn\'t recognize the caregiver?',
      answer: 'This is common as dementia progresses. Our caregivers are trained to reintroduce themselves warmly each visit, use photos and cues, and focus on emotional connection rather than memory.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: '24-Hour Care', href: '/services/24-hour-care' },
    { title: 'Respite Care', href: '/services/respite-care' },
  ],
};

export default function AlzheimersDementiaPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

