'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Adults Under 65 Care',
  subtitle: 'Specialized support for younger adults with care needs',
  description:
    'Our Jybek Adults Under 65 Care service recognizes that home care isn\'t just for seniors. We provide specialized support for younger adults living with disabilities, recovering from injuries, or managing chronic conditions. Our approach focuses on independence, life goals, and maintaining an active lifestyle.',
  heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Independence-Focused',
      description: 'Care designed to maximize autonomy and support personal goals, not create dependence.',
    },
    {
      title: 'Personal Care',
      description: 'Assistance with daily activities adapted to your specific condition and capabilities.',
    },
    {
      title: 'Life Skills Support',
      description: 'Help with meal prep, household management, budgeting, and independent living skills.',
    },
    {
      title: 'Community Access',
      description: 'Support for work, school, social activities, and community participation.',
    },
    {
      title: 'Health Management',
      description: 'Assistance with medication, medical equipment, and health condition management.',
    },
    {
      title: 'Transportation',
      description: 'Help getting to work, appointments, classes, and social activities.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Life-Stage Appropriate',
      description: 'Care designed for active adults, not retired seniors.',
    },
    {
      icon: Users,
      title: 'Peer-Matched Caregivers',
      description: 'Younger caregivers who relate to your lifestyle and interests.',
    },
    {
      icon: Shield,
      title: 'Condition Expertise',
      description: 'Caregivers trained in specific disabilities and conditions.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Care that fits around work, school, and social life.',
    },
  ],
  whatToExpect: [
    'Assessment focused on capabilities and goals, not just limitations',
    'Care plan emphasizing independence and life participation',
    'Caregiver matching based on age-appropriateness and interests',
    'Support for work, education, and social activities',
    'Flexibility to adjust care around life events',
    'Focus on skill-building and maximizing potential',
  ],
  whoIsItFor: [
    'Adults with physical disabilities from birth or injury',
    'Those living with multiple sclerosis, cerebral palsy, or muscular dystrophy',
    'Individuals recovering from traumatic brain injury or spinal cord injury',
    'Young adults with developmental disabilities seeking independent living',
    'People with chronic fatigue, fibromyalgia, or autoimmune conditions',
    'Anyone under 65 who needs regular assistance but wants to maintain active life',
  ],
  faqs: [
    {
      question: 'How is care for younger adults different from senior care?',
      answer: 'Younger adults often have different goals—working, dating, socializing, and building careers. Our approach focuses on these life-stage needs rather than traditional retirement-focused care.',
    },
    {
      question: 'Can you help me maintain employment?',
      answer: 'Yes, we can provide support that enables you to work, including help preparing for work, transportation, and care scheduled around work hours.',
    },
    {
      question: 'Do you work with disability programs and funding?',
      answer: 'We\'re experienced with various funding sources including state disability programs, SSDI waiver programs, workers\' compensation, and private insurance.',
    },
    {
      question: 'Will I have a caregiver close to my age?',
      answer: 'We try to match based on compatibility, which often includes age considerations. Many younger adults prefer caregivers closer to their own age for relatability.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Transportation', href: '/services/transportation' },
    { title: 'Chronic Conditions', href: '/services/chronic-conditions' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
  ],
};

export default function AdultsUnder65Page() {
  return <ServiceDetailLayout {...serviceData} />;
}

