'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Transitional Care',
  subtitle: 'Smooth, safe transitions from hospital to home',
  description:
    'Our Jybek Transitional Care service provides essential support during the critical period after hospitalization, surgery, or rehabilitation. We help prevent readmissions by ensuring follow-up care, medication compliance, and proper recovery support as you transition back to independent living.',
  heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Discharge Support',
      description: 'Assistance understanding discharge instructions, medications, and follow-up requirements.',
    },
    {
      title: 'Medication Management',
      description: 'Organizing new medications, ensuring proper timing, and watching for adverse reactions.',
    },
    {
      title: 'Recovery Assistance',
      description: 'Help with mobility, exercises, wound care reminders, and activity restrictions.',
    },
    {
      title: 'Appointment Coordination',
      description: 'Transportation to follow-up appointments and help communicating with healthcare providers.',
    },
    {
      title: 'Personal Care',
      description: 'Bathing, dressing, and grooming assistance during recovery when mobility is limited.',
    },
    {
      title: 'Household Support',
      description: 'Meal preparation, light housekeeping, and errands while you focus on recovery.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Prevent Readmissions',
      description: 'Proper follow-through reduces risk of returning to hospital.',
    },
    {
      icon: Heart,
      title: 'Faster Recovery',
      description: 'Dedicated support helps you heal better and more quickly.',
    },
    {
      icon: Users,
      title: 'Peace of Mind',
      description: 'Family can relax knowing professional care is in place.',
    },
    {
      icon: Clock,
      title: 'Temporary Support',
      description: 'Care that steps down as you regain independence.',
    },
  ],
  whatToExpect: [
    'Pre-discharge planning call to prepare for homecoming',
    'Caregiver present when you arrive home from hospital',
    'Review of all discharge instructions and medication schedules',
    'Daily support during initial critical recovery period',
    'Coordination with home health and therapy services',
    'Gradual reduction of care as independence returns',
  ],
  whoIsItFor: [
    'Patients being discharged from hospital stays',
    'Those recovering from major surgery (hip replacement, cardiac, etc.)',
    'Individuals leaving skilled nursing or rehabilitation facilities',
    'People at high risk for hospital readmission',
    'Those whose family cannot provide intensive initial support',
    'Anyone who needs extra help during recovery period',
  ],
  faqs: [
    {
      question: 'How soon after discharge should care begin?',
      answer: 'Ideally, a caregiver should be present when you arrive home. The first 48-72 hours after discharge are critical. We recommend planning transitional care before the discharge date.',
    },
    {
      question: 'How long does transitional care typically last?',
      answer: 'Duration depends on the procedure and individual recovery. Common timeframes range from 1-2 weeks after minor procedures to 4-8 weeks after major surgeries. We adjust based on progress.',
    },
    {
      question: 'Can you coordinate with home health nurses?',
      answer: 'Absolutely. We work alongside home health nurses, physical therapists, and other healthcare professionals. Our care complements clinical services with personal care and daily support.',
    },
    {
      question: 'What if I need ongoing care after transitional period?',
      answer: 'Many clients discover they benefit from continued support. We can seamlessly transition from intensive transitional care to regular ongoing care based on your evolving needs.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
    { title: 'Fall Prevention', href: '/services/fall-prevention' },
    { title: 'Chronic Conditions', href: '/services/chronic-conditions' },
  ],
};

export default function TransitionalCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

