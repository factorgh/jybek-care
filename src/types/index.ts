/**
 * Type definitions for Jybek Home Care application
 */

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Care service types
export type CareType =
  | 'in-home'
  | 'assisted-living'
  | 'memory-care'
  | 'nursing-home'
  | 'hospice'
  | 'respite';

export interface CareService {
  id: string;
  type: CareType;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Lead generation types
export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  careType: CareType;
  relationship: 'self' | 'parent' | 'spouse' | 'other';
  message?: string;
}

// Assessment types
export type MobilityLevel =
  | 'independent'
  | 'occasional-assistance'
  | 'constant-assistance'
  | 'bedbound';

export type HygieneLevel =
  | 'independent'
  | 'occasional-reminders'
  | 'significant-help'
  | 'unable-without-help';

export type MedicationLevel =
  | 'no-support'
  | 'occasional-reminders'
  | 'daily-reminders'
  | 'unable-without-support';

export type MemoryLevel = 'none' | 'sometimes' | 'often';

export type SocialLevel = 'regular' | 'occasional' | 'isolated';

export interface AssessmentData {
  relationship: 'parent' | 'spouse' | 'self' | 'other';
  mobility: MobilityLevel;
  hygiene: HygieneLevel;
  medication: MedicationLevel;
  safetyConcerns: boolean;
  memoryLoss: MemoryLevel;
  socialLife: SocialLevel;
}

export interface AssessmentResult {
  score: number;
  recommendation: 'independent' | 'light-care' | 'moderate-care' | 'full-care';
  suggestedServices: CareType[];
  description: string;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar?: string;
  careType: CareType;
}

// FAQ type
export interface FAQItem {
  question: string;
  answer: string;
}

// Contact form type
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Stats type
export interface Stat {
  value: string;
  label: string;
  description?: string;
}

// Team member type
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

