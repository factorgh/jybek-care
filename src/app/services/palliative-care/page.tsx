'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Palliative Care Support',
  subtitle: 'Enhancing quality of life during serious illness',
  description:
    'Our Jybek Palliative Care Support service focuses on improving quality of life for individuals living with serious, chronic, or life-limiting illnesses. Unlike hospice, palliative care can be provided alongside curative treatments, helping manage symptoms and provide comfort at any stage of illness.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Comfort Care',
      description: 'Focus on physical comfort through proper positioning, pain awareness, and attention to symptoms.',
    },
    {
      title: 'Personal Care Assistance',
      description: 'Help with bathing, dressing, grooming, and other daily activities adapted to energy levels.',
    },
    {
      title: 'Symptom Support',
      description: 'Assistance with managing fatigue, nausea, breathing difficulties, and other symptoms.',
    },
    {
      title: 'Emotional Support',
      description: 'Companionship and understanding for the emotional challenges of living with serious illness.',
    },
    {
      title: 'Family Support',
      description: 'Respite for family caregivers and practical assistance with household tasks.',
    },
    {
      title: 'Appointment Accompaniment',
      description: 'Transportation and support for medical appointments, treatments, and therapies.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Quality of Life Focus',
      description: 'Care centered on comfort and wellbeing, not just illness management.',
    },
    {
      icon: Users,
      title: 'Whole-Person Care',
      description: 'Addressing physical, emotional, and practical needs together.',
    },
    {
      icon: Shield,
      title: 'Specialized Training',
      description: 'Caregivers understand the unique needs of serious illness.',
    },
    {
      icon: Clock,
      title: 'Flexible Duration',
      description: 'Support available through any stage of illness and treatment.',
    },
  ],
  whatToExpect: [
    'Assessment of how illness affects daily life and activities',
    'Care plan focused on comfort, dignity, and quality of life',
    'Caregivers who understand energy conservation and pacing',
    'Coordination with your medical team as appropriate',
    'Flexibility to adjust care as condition changes',
    'Support for both good days and difficult days',
  ],
  whoIsItFor: [
    'Individuals living with cancer, heart disease, or other serious conditions',
    'Those undergoing treatments like chemotherapy who need extra support',
    'People with chronic conditions that significantly affect daily life',
    'Anyone who wants to focus on quality of life alongside medical care',
    'Families who need help caring for someone with serious illness',
    'Those who need more support but aren\'t ready for hospice',
  ],
  faqs: [
    {
      question: 'What is the difference between palliative and hospice care?',
      answer: 'Palliative care focuses on comfort and quality of life at any stage of serious illness, alongside curative treatments. Hospice care is specifically for end-of-life when curative treatment has stopped. Our support complements both.',
    },
    {
      question: 'Can I receive palliative support while still receiving treatment?',
      answer: 'Absolutely. Our palliative care support is often most valuable during active treatment, helping manage side effects and maintain quality of life while pursuing medical care.',
    },
    {
      question: 'How do you work with my medical team?',
      answer: 'With your permission, we can communicate with your healthcare providers to ensure our care supports their treatment plan. We document symptoms and changes that may be helpful for your medical team.',
    },
    {
      question: 'Can care levels change as my condition changes?',
      answer: 'Yes, our care is highly flexible. We can increase support during difficult periods and reduce it when you\'re feeling better. We adapt to your changing needs throughout your journey.',
    },
  ],
  relatedServices: [
    { title: 'Hospice Care Support', href: '/services/hospice-care' },
    { title: 'Chronic Conditions', href: '/services/chronic-conditions' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: 'Respite Care', href: '/services/respite-care' },
  ],
};

export default function PalliativeCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

