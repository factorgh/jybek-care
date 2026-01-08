'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Low Vision Care',
  subtitle: 'Specialized support for those with vision challenges',
  description:
    'Our Jybek Low Vision Care service provides specialized assistance for individuals living with macular degeneration, glaucoma, diabetic retinopathy, and other visual impairments. Our trained caregivers help maintain independence and quality of life despite vision limitations.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Navigation Assistance',
      description: 'Safe guidance around the home and in public, describing surroundings and obstacles.',
    },
    {
      title: 'Reading Support',
      description: 'Reading mail, medications, bills, books, and other important documents aloud.',
    },
    {
      title: 'Medication Management',
      description: 'Ensuring correct medications are taken by reading labels and organizing pills.',
    },
    {
      title: 'Meal Preparation',
      description: 'Preparing and describing meals, cutting food, and ensuring proper nutrition.',
    },
    {
      title: 'Home Organization',
      description: 'Maintaining consistent placement of items and labeling for easy identification.',
    },
    {
      title: 'Technology Assistance',
      description: 'Help with phones, computers, and adaptive technologies for vision impairment.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Maintain Independence',
      description: 'Support that enables continued self-sufficiency despite vision loss.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Prevention of accidents and injuries related to vision impairment.',
    },
    {
      icon: Users,
      title: 'Specialized Training',
      description: 'Caregivers trained in low vision assistance techniques.',
    },
    {
      icon: Clock,
      title: 'Consistent Support',
      description: 'Same caregiver ensures familiarity with personal systems.',
    },
  ],
  whatToExpect: [
    'Assessment of specific vision challenges and daily impacts',
    'Training in sighted guide techniques and communication',
    'Organization systems that maximize remaining vision',
    'Consistent caregiver who learns individual preferences',
    'Patience and respect for independence',
    'Coordination with vision rehabilitation services',
  ],
  whoIsItFor: [
    'Individuals with age-related macular degeneration',
    'Those with glaucoma-related vision loss',
    'People with diabetic retinopathy or cataracts',
    'Anyone experiencing significant vision impairment',
    'Those adjusting to recent vision loss',
    'Legally blind individuals who want to remain at home',
  ],
  faqs: [
    {
      question: 'How do your caregivers assist someone with low vision?',
      answer: 'Our caregivers are trained in sighted guide techniques, clear verbal descriptions, consistent organization, and respecting independence. They describe surroundings, read aloud, and help navigate safely.',
    },
    {
      question: 'Can you help with vision-related appointments?',
      answer: 'Yes, we provide transportation and accompaniment to ophthalmologist appointments, low vision specialists, and vision rehabilitation services. We can also help implement recommendations.',
    },
    {
      question: 'How do you handle medication management for those who can\'t read labels?',
      answer: 'We use large-print labels, tactile systems, pill organizers, and verbal confirmation to ensure correct medications are taken safely. Everything is organized consistently.',
    },
    {
      question: 'Can care help with technology for the visually impaired?',
      answer: 'Yes, our caregivers can assist with screen readers, magnification apps, voice assistants, and other adaptive technologies that help those with low vision stay connected and independent.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Fall Prevention', href: '/services/fall-prevention' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
    { title: 'Transportation', href: '/services/transportation' },
  ],
};

export default function LowVisionPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

