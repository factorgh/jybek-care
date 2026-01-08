'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Respite Care',
  subtitle: 'Relief for family caregivers when you need a break',
  description:
    'Our Jybek Respite Care service provides temporary relief for family caregivers, giving you time to rest, attend to personal needs, or simply take a well-deserved break. Your loved one receives attentive, compassionate care while you recharge, knowing they\'re in good hands.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Temporary Care Coverage',
      description: 'Professional caregiving for hours, days, or weeks while family caregivers take needed breaks.',
    },
    {
      title: 'Full Personal Care',
      description: 'Complete assistance with bathing, dressing, grooming, meals, and medications.',
    },
    {
      title: 'Activity Engagement',
      description: 'Meaningful activities and companionship to keep your loved one engaged and happy.',
    },
    {
      title: 'Familiar Routine',
      description: 'Following established routines and preferences for continuity of care.',
    },
    {
      title: 'Detailed Updates',
      description: 'Complete reporting on how your loved one is doing while you\'re away.',
    },
    {
      title: 'Emergency Ready',
      description: 'Trained to handle any situation that may arise during your absence.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Prevent Burnout',
      description: 'Regular breaks help you be a better caregiver long-term.',
    },
    {
      icon: Shield,
      title: 'Professional Care',
      description: 'Your loved one receives trained, attentive care in your absence.',
    },
    {
      icon: Users,
      title: 'Guilt-Free Time',
      description: 'Know that excellent care continues while you\'re away.',
    },
    {
      icon: Clock,
      title: 'Flexible Options',
      description: 'From a few hours to several weeks, whatever you need.',
    },
  ],
  whatToExpect: [
    'Consultation to understand your loved one\'s needs and routines',
    'Introduction to the respite caregiver before your break',
    'Detailed care instructions and emergency protocols',
    'Regular updates during extended respite periods',
    'Smooth handoffs at beginning and end of respite',
    'Same quality of care you would provide yourself',
  ],
  whoIsItFor: [
    'Family caregivers who are exhausted and need rest',
    'Those who need to travel for work or family obligations',
    'Caregivers who have their own medical appointments or procedures',
    'Families wanting regular scheduled breaks to prevent burnout',
    'Those who want to take a vacation but worry about leaving',
    'Anyone who recognizes that self-care makes them a better caregiver',
  ],
  faqs: [
    {
      question: 'How far in advance should I book respite care?',
      answer: 'For planned respite like vacations, we recommend booking 2-4 weeks ahead to ensure caregiver matching and proper preparation. For unexpected needs, we often can accommodate shorter notice.',
    },
    {
      question: 'Can the respite caregiver follow our exact routine?',
      answer: 'Yes, we encourage detailed information about routines, preferences, and habits. The more we know, the more seamless the care will be for your loved one.',
    },
    {
      question: 'What if my loved one doesn\'t like new people?',
      answer: 'We can arrange introduction visits before your respite begins so your loved one becomes familiar with the caregiver. This is especially important for those with dementia.',
    },
    {
      question: 'Can respite care become regular ongoing care?',
      answer: 'Absolutely. Many families start with respite care and realize the value of regular professional support. We can easily transition to ongoing scheduled care.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
    { title: "Alzheimer's & Dementia", href: '/services/alzheimers-dementia' },
  ],
};

export default function RespiteCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

