'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Veterans Care',
  subtitle: 'Honoring those who served with dedicated care',
  description:
    'Our Jybek Veterans Care service provides specialized home care for those who served our country. We understand the unique needs of veterans, including service-related conditions, and work with VA programs to help veterans access the care they\'ve earned while remaining in their homes.',
  heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
  features: [
    {
      title: 'VA-Coordinated Care',
      description: 'Experience working with VA benefits, Aid and Attendance, and veteran-specific programs.',
    },
    {
      title: 'Service-Related Conditions',
      description: 'Understanding of PTSD, TBI, Agent Orange conditions, and other service-connected disabilities.',
    },
    {
      title: 'Personal Care',
      description: 'Respectful assistance with daily living activities from caregivers who understand military culture.',
    },
    {
      title: 'Companionship',
      description: 'Meaningful connection, often with caregivers who have military background or veteran family.',
    },
    {
      title: 'Health Coordination',
      description: 'Assistance coordinating between VA healthcare and community healthcare providers.',
    },
    {
      title: 'Benefits Navigation',
      description: 'Help understanding and accessing VA home care benefits you may be entitled to.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Military Understanding',
      description: 'Caregivers who respect and understand military experience.',
    },
    {
      icon: Heart,
      title: 'Earned Care',
      description: 'Supporting veterans in receiving care they\'ve earned through service.',
    },
    {
      icon: Users,
      title: 'VA Expertise',
      description: 'Knowledge of veteran benefits and programs.',
    },
    {
      icon: Clock,
      title: 'Reliable Support',
      description: 'Dependable care you can count on, like military precision.',
    },
  ],
  whatToExpect: [
    'Assessment that considers service history and service-connected conditions',
    'Assistance exploring VA benefits and eligibility',
    'Caregivers who understand and respect military culture',
    'Coordination with VA healthcare when appropriate',
    'Understanding approach to PTSD and service-related trauma',
    'Honor and dignity in all interactions',
  ],
  whoIsItFor: [
    'Veterans of any era needing home care assistance',
    'Those with service-connected disabilities',
    'Veterans with PTSD, TBI, or other combat-related conditions',
    'Aging veterans who want to remain at home',
    'Veteran spouses who also qualify for certain VA programs',
    'Those who want caregivers who understand military experience',
  ],
  faqs: [
    {
      question: 'How can VA benefits help pay for home care?',
      answer: 'Several VA programs can help, including Aid and Attendance pension, VA Community Care, and the Program of Comprehensive Assistance for Family Caregivers. We can help you understand your options.',
    },
    {
      question: 'Do your caregivers have military background?',
      answer: 'Many do, either through their own service or family members who served. We prioritize matching veterans with caregivers who understand and respect military culture.',
    },
    {
      question: 'Can you work with my VA healthcare team?',
      answer: 'Yes, with your permission, we coordinate with VA providers to ensure our care complements your VA healthcare. We understand the VA system and how to work within it.',
    },
    {
      question: 'What if I have PTSD—are your caregivers trained?',
      answer: 'Our caregivers receive training on trauma-informed care and working with veterans who have PTSD. We focus on creating safe, calm environments and understanding triggers.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Chronic Conditions', href: '/services/chronic-conditions' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
  ],
};

export default function VeteransCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

