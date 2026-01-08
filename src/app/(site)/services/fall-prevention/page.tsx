'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Fall Prevention Care',
  subtitle: 'Keeping your loved ones safe and confident on their feet',
  description:
    'Our Jybek Fall Prevention Care service focuses on reducing fall risk—the leading cause of injury among older adults. Through careful supervision, mobility assistance, home safety improvements, and strength-building support, we help seniors maintain independence while staying safe.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Mobility Assistance',
      description: 'Safe walking support, transfer assistance, and help with stairs and uneven surfaces.',
    },
    {
      title: 'Home Safety Assessment',
      description: 'Identifying and addressing fall hazards in the home environment.',
    },
    {
      title: 'Exercise Support',
      description: 'Assistance with prescribed exercises to improve strength, balance, and coordination.',
    },
    {
      title: 'Supervision During Activities',
      description: 'Watchful presence during high-risk activities like bathing, dressing, and nighttime trips.',
    },
    {
      title: 'Medication Monitoring',
      description: 'Awareness of medications that may cause dizziness or affect balance.',
    },
    {
      title: 'Assistive Device Support',
      description: 'Ensuring proper use of walkers, canes, wheelchairs, and other mobility aids.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Reduced Fall Risk',
      description: 'Proactive measures significantly decrease likelihood of dangerous falls.',
    },
    {
      icon: Heart,
      title: 'Confidence Building',
      description: 'Support that empowers movement rather than restricting it.',
    },
    {
      icon: Users,
      title: 'Trained Caregivers',
      description: 'Expertise in safe transfer techniques and fall prevention strategies.',
    },
    {
      icon: Clock,
      title: 'Available When Needed',
      description: 'Support during highest-risk times like morning routines and nighttime.',
    },
  ],
  whatToExpect: [
    'Comprehensive assessment of fall risk factors',
    'Home safety evaluation with improvement recommendations',
    'Development of personalized fall prevention strategies',
    'Caregiver assistance during high-risk activities and times',
    'Support for strength and balance exercises',
    'Regular reassessment as needs change',
  ],
  whoIsItFor: [
    'Seniors who have experienced previous falls',
    'Those with balance problems, weakness, or unsteady gait',
    'Individuals taking medications that cause dizziness',
    'People recovering from hip replacement or other surgeries',
    'Those with vision problems affecting mobility',
    'Anyone identified as high fall risk by their doctor',
  ],
  faqs: [
    {
      question: 'What are the most common causes of falls in seniors?',
      answer: 'Common causes include muscle weakness, balance problems, vision issues, medication side effects, home hazards, and rushing. Our care addresses multiple risk factors comprehensively.',
    },
    {
      question: 'Can you help with exercises to prevent falls?',
      answer: 'Yes, our caregivers can assist with prescribed physical therapy exercises and encourage movement that builds strength and balance. We work with your healthcare team\'s recommendations.',
    },
    {
      question: 'What home modifications do you recommend?',
      answer: 'Common recommendations include removing loose rugs, improving lighting, installing grab bars, securing cords, and ensuring clear pathways. We can help identify specific hazards in your home.',
    },
    {
      question: 'What happens if a fall does occur?',
      answer: 'Our caregivers are trained to assess the situation, provide appropriate first aid, and determine if emergency services are needed. We also document the incident and review prevention strategies.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
    { title: 'Transitional Care', href: '/services/transitional-care' },
  ],
};

export default function FallPreventionPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

