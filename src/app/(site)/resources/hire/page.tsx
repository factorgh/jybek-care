'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, Input, Select, Textarea, Modal } from '@/components/ui';
import {
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  Briefcase,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { PrivacyPolicyContent } from '@/components/marketing/PrivacyPolicyContent';

const positionOptions = [
  { value: 'certified-caregiver', label: 'Jybek Certified Caregiver' },
  { value: 'home-health-aide', label: 'Jybek Home Health Aide' },
  { value: 'companion-care', label: 'Jybek Companion Care Specialist' },
  { value: 'live-in-caregiver', label: 'Jybek Live-in Caregiver' },
  { value: 'memory-care', label: 'Jybek Memory Care Specialist' },
  { value: 'care-coordinator', label: 'Jybek Care Coordinator' },
  { value: 'other', label: 'Other / General Caregiver Application' },
];

const availabilityOptions = [
  { value: 'immediate', label: 'Immediate' },
  { value: '2-weeks', label: '2 Weeks Notice' },
  { value: '1-month', label: '1 Month Notice' },
  { value: 'specific-date', label: 'Specific Date' },
];

const workAuthorizationOptions = [
  { value: 'citizen', label: 'US Citizen' },
  { value: 'permanent-resident', label: 'Permanent Resident' },
  { value: 'work-visa', label: 'Work Visa' },
  { value: 'student', label: 'Student Visa' },
];

const sourceOptions = [
  { value: 'indeed', label: 'Indeed' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'company-website', label: 'Company Website' },
  { value: 'referral', label: 'Employee Referral' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'other', label: 'Other' },
];

export default function JybekHirePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    position: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    coverLetter: '',
    resume: null as File | null,
    availability: '',
    salaryExpectation: '',
    howDidYouHear: '',
    workAuthorization: '',
    linkedin: '',
    website: '',
    additionalInfo: '',
  });

  const handleInputChange =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const submissionData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'resume' && value) {
          submissionData.append(key, value);
        }
      });

      if (formData.resume) {
        submissionData.append('resume', formData.resume);
      }

      console.log('Submitting application:', Object.fromEntries(submissionData));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitError('Failed to submit your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl p-8 sm:p-12 text-center border border-gray-150 dark:border-gray-900"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200 dark:border-emerald-800"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Application Submitted!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Thank you for applying to join the Jybek Home Care team. Our hiring team will review your qualifications and contact you within 3-5 business days.
            </p>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 mb-8 text-left border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                What happens next?
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Initial resume review by our recruitment team</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Short screening call to discuss your experience and availability</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>In-person or virtual interview with our care managers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Reference and background check verification</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
              <Button onClick={() => setIsSubmitted(false)} size="lg">
                Submit Another Application
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900/50 pt-36 pb-20">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-white/95 text-xs font-semibold uppercase tracking-wider mb-6">
              <Briefcase className="h-3.5 w-3.5" />
              Careers at Jybek
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Join Our Care{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-accent-teal">
                Team
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to make a difference? Fill out the application form below to start a rewarding career in compassionate caregiving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Position Choice */}
          <section className="bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-150 dark:border-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Desired Position
            </h2>
            <Select
              label="Select Desired Position"
              options={positionOptions}
              placeholder="Select position you are applying for"
              value={formData.position}
              onChange={handleInputChange('position')}
              required
            />
          </section>

          {/* Personal Information */}
          <section className="bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-150 dark:border-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                required
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
              />
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={handleInputChange('countryCode')}
                    className="px-3 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all cursor-pointer"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+233">🇬🇭 +233</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    className="flex-1 px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                    required
                  />
                </div>
                
                {/* SMS Compliance Disclosure */}
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 mt-2">
                  By providing your phone number, you consent to receive SMS communications from Jybek HomeCare Services related to caregiver coordination, application updates, and scheduling. Messaging frequency may vary. Message and data rates may apply. Reply STOP to opt out at any time. View our{' '}
                  <button
                    type="button"
                    onClick={() => setIsPrivacyOpen(true)}
                    className="text-brand-600 dark:text-brand-400 hover:underline font-semibold align-baseline"
                  >
                    Privacy Policy
                  </button>
                  . No mobile opt-in data will be shared with third parties.
                </p>
              </div>
            </div>
          </section>

          {/* Address Information */}
          <section className="bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-150 dark:border-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Address Information
            </h2>
            <div className="space-y-6">
              <Input
                label="Street Address"
                placeholder="123 Main Street"
                value={formData.address}
                onChange={handleInputChange('address')}
                required
              />
              <div className="grid md:grid-cols-3 gap-6">
                <Input
                  label="City"
                  placeholder="Boston"
                  value={formData.city}
                  onChange={handleInputChange('city')}
                  required
                />
                <Input
                  label="State"
                  placeholder="MA"
                  value={formData.state}
                  onChange={handleInputChange('state')}
                  required
                />
                <Input
                  label="ZIP Code"
                  placeholder="02120"
                  value={formData.zipCode}
                  onChange={handleInputChange('zipCode')}
                  required
                />
              </div>
            </div>
          </section>

          {/* Professional Information */}
          <section className="bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-150 dark:border-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume/CV
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {formData.resume
                      ? formData.resume.name
                      : 'Upload your resume (PDF, DOC, DOCX)'}
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      document.getElementById('resume-upload')?.click()
                    }
                  >
                    Choose File
                  </Button>
                </div>
              </div>

              <Textarea
                label="Cover Letter"
                placeholder="Tell us why you're interested in joining Jybek Home Care..."
                value={formData.coverLetter}
                onChange={handleInputChange('coverLetter')}
                rows={4}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Availability"
                  options={availabilityOptions}
                  placeholder="Select availability"
                  value={formData.availability}
                  onChange={handleInputChange('availability')}
                  required
                />
                <Input
                  label="Salary Expectation (Hourly)"
                  placeholder="$20/hour"
                  value={formData.salaryExpectation}
                  onChange={handleInputChange('salaryExpectation')}
                />
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-150 dark:border-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Information
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="How did you hear about us?"
                  options={sourceOptions}
                  placeholder="Select an option"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange('howDidYouHear')}
                />
                <Select
                  label="Work Authorization Status"
                  options={workAuthorizationOptions}
                  placeholder="Select status"
                  value={formData.workAuthorization}
                  onChange={handleInputChange('workAuthorization')}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="LinkedIn Profile (Optional)"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={handleInputChange('linkedin')}
                />
                <Input
                  label="Website/Portfolio (Optional)"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleInputChange('website')}
                />
              </div>

              <Textarea
                label="Additional Comments"
                placeholder="Any other certifications, experience or comments you'd like to share..."
                value={formData.additionalInfo}
                onChange={handleInputChange('additionalInfo')}
                rows={3}
              />
            </div>
          </section>

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">{submitError}</p>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="px-12 py-4 text-lg font-semibold rounded-2xl"
              rightIcon={
                isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )
              }
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        size="xl"
        title={
          <span className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-brand-600 dark:text-brand-400" />
            Privacy Policy | Jybek Home Care
          </span>
        }
      >
        <PrivacyPolicyContent />
      </Modal>
    </main>
  );
}
