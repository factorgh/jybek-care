'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Companion Care',
  subtitle: 'Meaningful companionship and social engagement for your loved ones',
  description:
    'Our Jybek Companion Care service provides warm, friendly companionship for seniors and individuals who may feel isolated or lonely. Our trained companions offer social interaction, emotional support, and assistance with light daily activities to enhance quality of life.',
  heroImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Engaging Conversation',
      description: 'Meaningful discussions about life experiences, current events, hobbies, and shared interests to keep minds active and spirits high.',
    },
    {
      title: 'Recreational Activities',
      description: 'Playing cards, board games, puzzles, reading together, or enjoying favorite TV shows and movies.',
    },
    {
      title: 'Social Outing Assistance',
      description: 'Accompanying clients to social events, religious services, community activities, or visits with friends and family.',
    },
    {
      title: 'Light Housekeeping',
      description: 'Help with tidying up, organizing, laundry, and maintaining a clean, comfortable living environment.',
    },
    {
      title: 'Meal Preparation',
      description: 'Planning and preparing nutritious meals, sharing mealtimes together, and ensuring proper nutrition.',
    },
    {
      title: 'Errand Assistance',
      description: 'Help with grocery shopping, picking up prescriptions, and running other essential errands.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Emotional Wellbeing',
      description: 'Regular social interaction reduces feelings of loneliness and depression.',
    },
    {
      icon: Users,
      title: 'Matched Companions',
      description: 'We carefully match companions based on personality and shared interests.',
    },
    {
      icon: Shield,
      title: 'Background Checked',
      description: 'All companions undergo thorough background checks and training.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Service available on your schedule, from a few hours to full days.',
    },
  ],
  whatToExpect: [
    'Initial consultation to understand preferences, interests, and needs',
    'Careful matching with a compatible companion based on personality',
    'Regular visits on a consistent schedule for relationship building',
    'Engaging activities tailored to client interests and abilities',
    'Communication with family about wellbeing and any concerns',
    'Flexibility to adjust services as needs change',
  ],
  whoIsItFor: [
    'Seniors living alone who want regular social interaction',
    'Individuals recovering from illness who need company',
    'Those experiencing mild memory issues who benefit from mental stimulation',
    'People whose family members work and cannot visit frequently',
    'Anyone feeling isolated or lonely and wanting companionship',
    'Individuals who need light assistance but not full personal care',
  ],
  faqs: [
    {
      question: 'What is the difference between companion care and personal care?',
      answer: 'Companion care focuses on social interaction, emotional support, and light assistance with daily activities. Personal care includes hands-on assistance with bathing, dressing, toileting, and other physical care needs.',
    },
    {
      question: 'How do you match companions with clients?',
      answer: 'We conduct thorough assessments of both client preferences and companion personalities. We consider shared interests, communication styles, and specific needs to ensure a compatible match.',
    },
    {
      question: 'Can companion care help with dementia patients?',
      answer: 'Yes, our trained companions can provide valuable support for those with early to moderate dementia, offering mental stimulation, routine, and emotional support. For more advanced cases, we recommend our Memory Care services.',
    },
    {
      question: 'What are the minimum hours required?',
      answer: 'We typically require a minimum of 3-4 hours per visit to allow meaningful interaction and relationship building, but we can discuss flexible arrangements based on your specific needs.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Respite Care', href: '/services/respite-care' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
    { title: "Alzheimer's & Dementia", href: '/services/alzheimers-dementia' },
  ],
};

export default function CompanionCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

