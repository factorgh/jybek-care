'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Hospice Care Support',
  subtitle: 'Compassionate support during life\'s most difficult journey',
  description:
    'Our Jybek Hospice Care Support service works alongside your hospice team to provide additional comfort and assistance. We offer compassionate personal care, respite for family caregivers, and continuous presence to ensure your loved one is never alone during this sacred time.',
  heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Personal Care Assistance',
      description: 'Gentle, dignified assistance with bathing, positioning, mouth care, and skin care to maintain comfort.',
    },
    {
      title: 'Comfort Measures',
      description: 'Ensuring physical comfort through positioning, temperature management, and attending to immediate needs.',
    },
    {
      title: 'Family Respite',
      description: 'Providing breaks for exhausted family members who need rest while maintaining continuous presence.',
    },
    {
      title: 'Companionship',
      description: 'Being present, holding hands, reading aloud, playing music, or simply sitting quietly together.',
    },
    {
      title: 'Household Support',
      description: 'Light housekeeping, meal preparation for family, and maintaining a peaceful environment.',
    },
    {
      title: 'Vigil Support',
      description: 'Overnight presence during final days so family can rest knowing their loved one is not alone.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Caregivers specially trained in end-of-life comfort and dignity.',
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Emotional support and practical help for the entire family.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Available for as few or as many hours as needed, including overnight.',
    },
    {
      icon: Shield,
      title: 'Hospice Coordination',
      description: 'Works seamlessly with your hospice team\'s plan of care.',
    },
  ],
  whatToExpect: [
    'Coordination with your hospice nurse and care team',
    'Caregivers trained in end-of-life care and comfort measures',
    'Respect for family wishes, religious traditions, and cultural practices',
    'Emotional support that honors this sacred time',
    'Flexible scheduling to meet changing needs',
    'Gentle guidance through the caregiving journey',
  ],
  whoIsItFor: [
    'Families receiving hospice services who need additional support',
    'Those who want continuous presence for their loved one',
    'Family caregivers who are exhausted and need respite',
    'Families who live far away and cannot provide constant care',
    'Those who want professional support during final days',
    'Anyone seeking comfort and companionship during end-of-life',
  ],
  faqs: [
    {
      question: 'How does this differ from hospice services?',
      answer: 'Hospice provides medical care, pain management, and skilled nursing. Our support complements hospice by providing personal care assistance, companionship, and practical help that hospice workers don\'t typically provide.',
    },
    {
      question: 'Can you provide overnight care?',
      answer: 'Yes, we offer overnight vigil care so family members can rest while knowing their loved one has a compassionate presence. This is especially valuable during final days.',
    },
    {
      question: 'Are your caregivers trained in end-of-life care?',
      answer: 'Yes, all caregivers providing hospice support receive specialized training in comfort care, the dying process, emotional support, and working with grieving families.',
    },
    {
      question: 'Can care continue after death occurs?',
      answer: 'We can remain with the family to provide support, help with practical matters, and offer comfort during the immediate aftermath. We understand the transition doesn\'t end at the moment of passing.',
    },
  ],
  relatedServices: [
    { title: 'Palliative Care Support', href: '/services/palliative-care' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: 'Respite Care', href: '/services/respite-care' },
    { title: '24-Hour Care', href: '/services/24-hour-care' },
  ],
};

export default function HospiceCarePagePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

