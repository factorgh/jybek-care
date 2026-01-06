'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Live-in Care',
  subtitle: 'A dedicated caregiver living in your home',
  description:
    'Our Jybek Live-in Care service provides a dedicated caregiver who resides in your home, offering continuous support, companionship, and assistance throughout the day. This cost-effective alternative to 24-hour care is ideal for those needing constant presence without frequent nighttime assistance.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Continuous Presence',
      description: 'A caregiver available throughout the day for assistance, supervision, and companionship.',
    },
    {
      title: 'Personal Care',
      description: 'Complete assistance with bathing, dressing, grooming, toileting, and mobility throughout the day.',
    },
    {
      title: 'Household Management',
      description: 'Meal preparation, light housekeeping, laundry, and maintaining an organized home environment.',
    },
    {
      title: 'Medication Oversight',
      description: 'Ensuring medications are taken on schedule and monitoring for any adverse reactions.',
    },
    {
      title: 'Safety & Security',
      description: 'Providing supervision for fall prevention and peace of mind that someone is always there.',
    },
    {
      title: 'Companionship',
      description: 'Building a meaningful relationship and providing social interaction and emotional support.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'One-on-One Care',
      description: 'Dedicated caregiver who truly knows your loved one.',
    },
    {
      icon: Clock,
      title: 'Cost-Effective',
      description: 'More affordable than 24-hour shift care for many families.',
    },
    {
      icon: Users,
      title: 'Like Family',
      description: 'Deep relationships form when sharing daily life together.',
    },
    {
      icon: Shield,
      title: 'Consistent Care',
      description: 'Same caregiver provides stability and routine.',
    },
  ],
  whatToExpect: [
    'Thorough assessment and caregiver matching process',
    'Private sleeping quarters provided for the caregiver',
    'Caregivers typically work 4-5 days with scheduled days off',
    'Relief caregivers during scheduled time off',
    'Uninterrupted 8-hour sleep period for caregiver (usually night)',
    'All daytime hours covered with active, alert care',
  ],
  whoIsItFor: [
    'Seniors who need daytime supervision and assistance',
    'Individuals who can sleep through most of the night',
    'Those who want the security of someone always in the home',
    'Families seeking a more affordable alternative to 24-hour care',
    'People who value consistency and one-on-one relationships',
    'Clients who benefit from having consistent routine and familiar faces',
  ],
  faqs: [
    {
      question: 'What accommodations does the caregiver need?',
      answer: 'Live-in caregivers need a private room with a bed and access to bathroom facilities. They also need the ability to take a reasonable break during the day and an uninterrupted 8-hour sleep period.',
    },
    {
      question: 'What happens on the caregiver\'s days off?',
      answer: 'We provide trained relief caregivers during your regular caregiver\'s scheduled time off. We introduce backup caregivers in advance so there\'s familiarity before they fill in.',
    },
    {
      question: 'What if I need help during the night?',
      answer: 'Live-in caregivers can assist with occasional nighttime needs. If frequent night assistance is required (more than 2-3 times), we may recommend transitioning to 24-hour care with shift workers.',
    },
    {
      question: 'Do I need to provide meals for the caregiver?',
      answer: 'Yes, families typically provide food for the caregiver, though arrangements vary. Many caregivers prepare meals for both themselves and their clients.',
    },
  ],
  relatedServices: [
    { title: '24-Hour Care', href: '/services/24-hour-care' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
  ],
};

export default function LiveInCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

