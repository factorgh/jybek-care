'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Thrivelife',
  subtitle: 'Our flagship wellness and thriving program',
  description:
    'Jybek Thrivelife is our transformative program designed to help seniors not just survive, but truly thrive. Going beyond basic care, this program focuses on purpose, engagement, connection, and joy—helping older adults live their best lives with meaning and fulfillment.',
  heroImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Purpose & Meaning',
      description: 'Helping identify and pursue activities that bring purpose, whether hobbies, volunteering, or legacy projects.',
    },
    {
      title: 'Social Connection',
      description: 'Facilitating relationships, community involvement, and reducing isolation through meaningful engagement.',
    },
    {
      title: 'Cognitive Vitality',
      description: 'Activities and exercises designed to keep minds sharp, curious, and engaged.',
    },
    {
      title: 'Physical Wellness',
      description: 'Support for mobility, exercise, nutrition, and overall physical health optimization.',
    },
    {
      title: 'Emotional Wellbeing',
      description: 'Addressing loneliness, depression, and anxiety with compassion and proven strategies.',
    },
    {
      title: 'Life Enrichment',
      description: 'Exploring new interests, revisiting old passions, and creating joy in daily life.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Quality of Life',
      description: 'Focus on thriving, not just maintaining basic health.',
    },
    {
      icon: Users,
      title: 'Meaningful Connection',
      description: 'Combating isolation with genuine relationship and community.',
    },
    {
      icon: Shield,
      title: 'Holistic Approach',
      description: 'Addressing mind, body, spirit, and social needs together.',
    },
    {
      icon: Clock,
      title: 'Ongoing Growth',
      description: 'It\'s never too late to learn, grow, and experience joy.',
    },
  ],
  whatToExpect: [
    'Life story interview to understand history, interests, and values',
    'Assessment of current engagement, connection, and satisfaction',
    'Development of personalized thriving plan with meaningful goals',
    'Caregiver matched for personality and shared interests',
    'Regular activities focused on growth, connection, and joy',
    'Ongoing evaluation and evolution of the thriving plan',
  ],
  whoIsItFor: [
    'Seniors who are healthy but lonely or isolated',
    'Those who have lost sense of purpose after retirement or loss',
    'Individuals recovering from depression who need engagement',
    'Active seniors who want support pursuing interests',
    'Anyone who believes aging should include joy, not just care',
    'Families who want more than maintenance for their loved ones',
  ],
  faqs: [
    {
      question: 'How is Thrivelife different from companion care?',
      answer: 'While companion care provides friendship and light assistance, Thrivelife is a structured program with intentional focus on purpose, growth, and life satisfaction—with specific goals and activities designed to enhance thriving.',
    },
    {
      question: 'Is this program only for healthy seniors?',
      answer: 'No, Thrivelife can be combined with any level of care. Even those with health challenges can find meaning, connection, and joy. We adapt the program to individual capabilities.',
    },
    {
      question: 'What kinds of activities are included?',
      answer: 'Activities are personalized—they might include life review/memoir work, connecting with community groups, learning new skills, creative projects, meaningful volunteering, or revisiting past passions.',
    },
    {
      question: 'Can this help with depression?',
      answer: 'Purpose, connection, and engagement are powerful antidotes to depression. While we\'re not therapists, Thrivelife addresses many factors that contribute to improved mental health in seniors.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Jybek Stability Pathways', href: '/services/stability-pathways' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
    { title: 'Respite Care', href: '/services/respite-care' },
  ],
};

export default function ThrivelifePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

