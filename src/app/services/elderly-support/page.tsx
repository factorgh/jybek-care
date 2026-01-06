'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Elderly Support',
  subtitle: 'Comprehensive care for aging with dignity',
  description:
    'Our Jybek Elderly Support service provides holistic home care specifically designed for seniors. We understand the unique physical, emotional, and social needs of aging adults and provide compassionate support that promotes independence, dignity, and quality of life.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Personal Care',
      description: 'Gentle, dignified assistance with bathing, dressing, grooming, and personal hygiene.',
    },
    {
      title: 'Mobility Support',
      description: 'Safe assistance with walking, transfers, and fall prevention strategies.',
    },
    {
      title: 'Nutrition & Meals',
      description: 'Healthy meal planning and preparation that accounts for dietary needs and preferences.',
    },
    {
      title: 'Medication Management',
      description: 'Reminders and assistance with proper medication administration schedules.',
    },
    {
      title: 'Companionship',
      description: 'Meaningful social interaction, conversation, and engagement in enjoyable activities.',
    },
    {
      title: 'Household Help',
      description: 'Light housekeeping, laundry, and maintaining a safe, comfortable home environment.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Age in Place',
      description: 'Support that enables seniors to remain safely in their own homes.',
    },
    {
      icon: Shield,
      title: 'Senior Expertise',
      description: 'Caregivers trained in the specific needs of aging adults.',
    },
    {
      icon: Users,
      title: 'Family Partnership',
      description: 'Working with families to provide comprehensive support.',
    },
    {
      icon: Clock,
      title: 'Flexible Options',
      description: 'From a few hours weekly to around-the-clock care.',
    },
  ],
  whatToExpect: [
    'Comprehensive assessment of needs, preferences, and goals',
    'Personalized care plan developed with family input',
    'Carefully matched caregiver who connects well with your loved one',
    'Regular communication about wellbeing and any changes',
    'Ongoing assessment and care plan adjustments',
    'Support for the whole family, not just the senior',
  ],
  whoIsItFor: [
    'Seniors who want to age in place safely',
    'Older adults who need help with daily activities',
    'Elderly individuals who are lonely or isolated',
    'Seniors at risk for falls or other safety concerns',
    'Those whose adult children cannot provide daily care',
    'Aging adults who want to maintain active, engaged lives',
  ],
  faqs: [
    {
      question: 'What age qualifies as elderly for your services?',
      answer: 'We don\'t have strict age requirements. Our elderly support services are designed for older adults experiencing age-related needs, typically 65+, but we focus on care needs rather than specific ages.',
    },
    {
      question: 'How do you match caregivers with seniors?',
      answer: 'We consider personality, interests, communication style, and specific care needs. We believe the right match creates better outcomes and more enjoyable experiences for everyone.',
    },
    {
      question: 'Can care help my parent stay out of a nursing home?',
      answer: 'Often, yes. Many seniors can remain safely at home with appropriate support. We assess each situation individually and honestly advise families about what\'s possible and safe.',
    },
    {
      question: 'How do you keep families informed?',
      answer: 'We provide regular updates, care notes, and are always available for family questions. We consider family members partners in care and communicate openly about all aspects.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Fall Prevention', href: '/services/fall-prevention' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
  ],
};

export default function ElderlySupportPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

