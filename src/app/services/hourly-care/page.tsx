'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Hourly Care',
  subtitle: 'Flexible care support on your schedule',
  description:
    'Our Jybek Hourly Care service provides professional caregiving support for a few hours at a time, giving families the flexibility to get help exactly when they need it. Perfect for part-time assistance, respite breaks, or supplementing family caregiving.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Flexible Scheduling',
      description: 'Choose the hours that work best for your family, from morning routines to evening assistance or anything in between.',
    },
    {
      title: 'Personal Care Support',
      description: 'Assistance with bathing, dressing, grooming, and other personal care needs during scheduled hours.',
    },
    {
      title: 'Medication Management',
      description: 'Reminders and assistance with medication administration during care hours.',
    },
    {
      title: 'Meal Preparation',
      description: 'Nutritious meal planning, preparation, and assistance with eating if needed.',
    },
    {
      title: 'Light Housekeeping',
      description: 'Tidying up, laundry, dishes, and maintaining a clean living environment.',
    },
    {
      title: 'Transportation',
      description: 'Accompaniment to medical appointments, errands, and social activities.',
    },
  ],
  benefits: [
    {
      icon: Clock,
      title: 'Pay Only for Needed Hours',
      description: 'Cost-effective option when full-time care isn\'t necessary.',
    },
    {
      icon: Heart,
      title: 'Maintain Independence',
      description: 'Support that empowers rather than takes over daily life.',
    },
    {
      icon: Users,
      title: 'Family Respite',
      description: 'Give family caregivers needed breaks without guilt.',
    },
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Same high-quality care whether for 4 hours or 40.',
    },
  ],
  whatToExpect: [
    'Initial assessment to understand care needs and preferred schedule',
    'Minimum visit duration typically 3-4 hours for quality care',
    'Consistent caregiver assignments when possible',
    'Detailed care notes after each visit',
    'Easy schedule adjustments with advance notice',
    'Option to increase hours as needs change',
  ],
  whoIsItFor: [
    'Seniors who need help with morning or evening routines',
    'Individuals who are mostly independent but need some assistance',
    'Family caregivers who need regular respite breaks',
    'Those recovering who need temporary part-time support',
    'Clients who want to try home care before committing to more hours',
    'People who need specific help like meal prep or medication management',
  ],
  faqs: [
    {
      question: 'What is the minimum number of hours per visit?',
      answer: 'We typically require a minimum of 3-4 hours per visit to ensure quality care and to make it worthwhile for both clients and caregivers. This allows time for meaningful assistance and relationship building.',
    },
    {
      question: 'Can I change my schedule week to week?',
      answer: 'Yes, we offer flexibility with advance notice. We recommend establishing a consistent schedule when possible, but we understand that needs change and can adjust accordingly.',
    },
    {
      question: 'What if I need more care suddenly?',
      answer: 'We can often accommodate increased hours with short notice and can help transition to 24-hour or live-in care if your needs change significantly.',
    },
    {
      question: 'Is hourly care more expensive per hour than 24-hour care?',
      answer: 'The hourly rate for shorter shifts may be slightly higher, but you\'re only paying for the hours you need, which can make it more cost-effective overall for those who don\'t require continuous care.',
    },
  ],
  relatedServices: [
    { title: '24-Hour Care', href: '/services/24-hour-care' },
    { title: 'Live-in Care', href: '/services/live-in-care' },
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Respite Care', href: '/services/respite-care' },
  ],
};

export default function HourlyCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

