'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Facility Support',
  subtitle: 'Enhanced care within facility settings',
  description:
    'Our Jybek Facility Support service provides supplemental private care for individuals residing in assisted living communities, nursing homes, or rehabilitation facilities. When facility staffing doesn\'t meet your loved one\'s needs, our dedicated caregivers provide additional attention and support.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'One-on-One Attention',
      description: 'Dedicated caregiver focused solely on your loved one, not shared among many residents.',
    },
    {
      title: 'Mealtime Assistance',
      description: 'Ensuring adequate nutrition with help eating, encouraging appetite, and monitoring intake.',
    },
    {
      title: 'Mobility & Exercise',
      description: 'Additional walking, repositioning, and range of motion exercises beyond facility routines.',
    },
    {
      title: 'Companionship',
      description: 'Consistent, familiar presence for conversation, activities, and emotional support.',
    },
    {
      title: 'Advocacy',
      description: 'Being present to observe care, communicate concerns, and advocate for your loved one.',
    },
    {
      title: 'Family Liaison',
      description: 'Keeping family informed about daily wellbeing and any concerns observed.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Personal Attention',
      description: 'Care focused entirely on your loved one\'s individual needs.',
    },
    {
      icon: Shield,
      title: 'Quality Oversight',
      description: 'Extra eyes on care quality and immediate response to needs.',
    },
    {
      icon: Users,
      title: 'Familiar Face',
      description: 'Consistent caregiver your loved one knows and trusts.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Coverage during critical times like meals, evenings, or overnight.',
    },
  ],
  whatToExpect: [
    'Assessment of how supplemental care can best help your loved one',
    'Coordination with facility staff to complement their care',
    'Dedicated caregiver who learns your loved one\'s preferences',
    'Regular reports to family about wellbeing and observations',
    'Advocacy when facility care falls short',
    'Flexible scheduling focused on highest-need times',
  ],
  whoIsItFor: [
    'Residents of assisted living who need more attention than staff provides',
    'Nursing home residents whose families want supplemental care',
    'Those in rehabilitation facilities wanting extra support',
    'Individuals with dementia in facilities who need constant supervision',
    'Residents who are lonely or not getting adequate social interaction',
    'Anyone whose family wants someone present during critical times',
  ],
  faqs: [
    {
      question: 'Why would I pay for additional care if my parent is in a facility?',
      answer: 'Facility staff care for many residents with limited time for each. A private caregiver provides dedicated attention, ensures needs are met promptly, and offers the companionship staff can\'t provide.',
    },
    {
      question: 'Will the facility allow outside caregivers?',
      answer: 'Most facilities permit private caregivers. We work with facilities regularly and understand how to coordinate effectively with their staff and policies.',
    },
    {
      question: 'What times are most important for supplemental care?',
      answer: 'Mealtimes (to ensure proper nutrition), evenings (when staffing often decreases), and overnight are common choices. We help identify when your loved one needs attention most.',
    },
    {
      question: 'Can a private caregiver help advocate for better facility care?',
      answer: 'Yes, having someone present who knows your loved one and can observe and report care issues is valuable. Our caregivers communicate concerns to both facility staff and family.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: "Alzheimer's & Dementia", href: '/services/alzheimers-dementia' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
  ],
};

export default function FacilitySupportPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

