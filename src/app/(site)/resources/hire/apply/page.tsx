"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Input } from "@/components/ui";
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

// Mock job data - in production, this would come from your API/database
const mockJobs = [
  {
    _id: "1",
    title: "Senior Caregiver",
    slug: "senior-caregiver",
    department: "Caregiving",
    location: "Boston, MA",
    type: "Full-time",
    description:
      "We are seeking compassionate and experienced Senior Caregivers to provide exceptional care to our elderly clients.",
    requirements: [
      "Minimum 2 years of caregiving experience",
      "CPR and First Aid certification",
      "Valid driver's license and reliable transportation",
    ],
    responsibilities: [
      "Assist clients with personal care and hygiene",
      "Prepare meals and assist with feeding",
      "Provide companionship and emotional support",
    ],
    benefits: [
      "Competitive salary ($18-$22/hour)",
      "Health, dental, and vision insurance",
      "401(k) retirement plan",
    ],
    salary: "$18-$22/hour",
    featured: true,
    published: true,
    applicationDeadline: new Date("2024-02-15"),
    createdAt: new Date("2024-01-10"),
  },
  {
    _id: "2",
    title: "Registered Nurse (RN)",
    slug: "registered-nurse-rn",
    department: "Nursing",
    location: "Providence, RI",
    type: "Full-time",
    description:
      "Join our team of dedicated Registered Nurses providing high-quality medical care to clients in their homes.",
    requirements: [
      "Valid RN license in state of practice",
      "Minimum 1 year of clinical experience",
      "BLS certification",
    ],
    responsibilities: [
      "Provide skilled nursing care to clients",
      "Develop and implement care plans",
      "Administer medications and treatments",
    ],
    benefits: [
      "Excellent salary ($30-$38/hour)",
      "Comprehensive health benefits",
      "Malpractice insurance coverage",
    ],
    salary: "$30-$38/hour",
    featured: true,
    published: true,
    applicationDeadline: new Date("2024-02-20"),
    createdAt: new Date("2024-01-08"),
  },
  {
    _id: "3",
    title: "Personal Care Assistant",
    slug: "personal-care-assistant",
    department: "Caregiving",
    location: "Cambridge, MA",
    type: "Part-time",
    description:
      "Looking for caring individuals to assist clients with daily living activities and provide companionship.",
    requirements: [
      "High school diploma or equivalent",
      "Experience in caregiving preferred",
      "Compassionate and patient demeanor",
    ],
    responsibilities: [
      "Help with personal hygiene",
      "Assist with meal preparation",
      "Provide companionship",
    ],
    benefits: [
      "Flexible scheduling",
      "Training opportunities",
      "Supportive work environment",
    ],
    salary: "$15-$18/hour",
    featured: false,
    published: true,
    applicationDeadline: new Date("2024-02-10"),
    createdAt: new Date("2024-01-12"),
  },
  {
    _id: "4",
    title: "Home Health Aide",
    slug: "home-health-aide",
    department: "Caregiving",
    location: "Quincy, MA",
    type: "Full-time",
    description:
      "Seeking reliable Home Health Aides to provide essential care services to clients in their homes.",
    requirements: [
      "HHA certification required",
      "Valid driver's license",
      "Ability to work independently",
    ],
    responsibilities: [
      "Assist with personal care",
      "Monitor vital signs",
      "Maintain clean environment",
    ],
    benefits: ["Competitive pay", "Health benefits", "Paid time off"],
    salary: "$16-$20/hour",
    featured: false,
    published: true,
    applicationDeadline: new Date("2024-02-25"),
    createdAt: new Date("2024-01-15"),
  },
];

function JobApplicationPageWrapper() {
  const searchParams = useSearchParams();
  const positionId = searchParams.get("position");

  return <JobApplicationPage positionId={positionId} />;
}

function JobApplicationPage({ positionId }: { positionId: string | null }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    coverLetter: "",
    resume: null as File | null,
    availability: "",
    salaryExpectation: "",
    startDate: "",
    howDidYouHear: "",
    workAuthorization: "",
    linkedin: "",
    website: "",
    additionalInfo: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      if (positionId) {
        try {
          const response = await fetch(`/api/jobs/${positionId}`);
          if (response.ok) {
            const data = await response.json();
            setSelectedJob(data.job);
          } else {
            setSubmitError("Job not found");
          }
        } catch (error) {
          setSubmitError("Failed to load job information");
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [positionId]);

  const handleInputChange =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
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
      // Create form data for file upload
      const submissionData = new FormData();

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "resume" && value) {
          submissionData.append(key, value);
        }
      });

      // Add file if present
      if (formData.resume) {
        submissionData.append("resume", formData.resume);
      }

      // Add job information
      submissionData.append("jobId", selectedJob._id);
      submissionData.append("jobTitle", selectedJob.title);
      submissionData.append("jobDepartment", selectedJob.department);

      // In production, send to your API endpoint
      console.log("Submitting application:", {
        job: selectedJob.title,
        formData: Object.fromEntries(submissionData),
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Application submission error:", error);
      setSubmitError("Failed to submit your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </motion.div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Thank you for applying for the {selectedJob.title} position at
              Jybek Home Care. Our hiring team will review your application and
              contact you within 3-5 business days.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                What happens next?
              </p>
              <div className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>✓ Application review by HR team</p>
                <p>✓ Initial screening call (if qualified)</p>
                <p>✓ Interview with hiring manager</p>
                <p>✓ Reference checks and background verification</p>
                <p>✓ Job offer and onboarding</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources/hire">
                <Button variant="outline" size="lg">
                  View More Positions
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg">Back to Home</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white p-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="mb-6">
            <Link
              href="/resources/hire"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              {isLoading
                ? "Loading Position..."
                : `Apply for ${selectedJob?.title || "Position"}`}
            </h1>
            <p className="text-white/90">
              Join our team and make a difference in people&apos;s lives
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
            <p className="ml-4 text-gray-600 dark:text-gray-400">
              Loading job information...
            </p>
          </div>
        )}

        {/* Error State */}
        {!isLoading && !selectedJob && submitError && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
            <p className="text-red-600 dark:text-red-400">{submitError}</p>
            <Link href="/resources/hire" className="mt-4 inline-block">
              <Button variant="outline">Back to Job Listings</Button>
            </Link>
          </div>
        )}

        {/* Job Summary */}
        {!isLoading && selectedJob && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Position Summary
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedJob.type}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedJob.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedJob.department}
                </span>
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {selectedJob.salary}
              </div>
            </div>
          </div>
        )}

        {/* Application Form */}
        {!isLoading && selectedJob && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  required
                />
                <Input
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          countryCode: e.target.value,
                        }))
                      }
                      className="px-3 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+233">🇬🇭 +233</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      className="flex-1 px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Address */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Address Information
              </h2>

              <div className="space-y-6">
                <Input
                  label="Street Address"
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={handleInputChange("address")}
                  required
                />
                <div className="grid md:grid-cols-3 gap-6">
                  <Input
                    label="City"
                    placeholder="Boston"
                    value={formData.city}
                    onChange={handleInputChange("city")}
                    required
                  />
                  <Input
                    label="State"
                    placeholder="MA"
                    value={formData.state}
                    onChange={handleInputChange("state")}
                    required
                  />
                  <Input
                    label="ZIP Code"
                    placeholder="02120"
                    value={formData.zipCode}
                    onChange={handleInputChange("zipCode")}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Professional Information */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Resume/CV
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {formData.resume
                        ? formData.resume.name
                        : "Upload your resume (PDF, DOC, DOCX)"}
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
                        document.getElementById("resume-upload")?.click()
                      }
                    >
                      Choose File
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    placeholder="Tell us why you're interested in this position..."
                    value={formData.coverLetter}
                    onChange={handleInputChange("coverLetter")}
                    rows={4}
                    className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Availability
                    </label>
                    <select
                      value={formData.availability}
                      onChange={handleInputChange("availability")}
                      className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">2 weeks notice</option>
                      <option value="1-month">1 month notice</option>
                      <option value="specific-date">Specific date</option>
                    </select>
                  </div>
                  <Input
                    label="Salary Expectation"
                    placeholder="$20/hour"
                    value={formData.salaryExpectation}
                    onChange={handleInputChange("salaryExpectation")}
                  />
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Additional Information
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.howDidYouHear}
                      onChange={handleInputChange("howDidYouHear")}
                      className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="indeed">Indeed</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="company-website">Company Website</option>
                      <option value="referral">Employee Referral</option>
                      <option value="social-media">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Work Authorization
                    </label>
                    <select
                      value={formData.workAuthorization}
                      onChange={handleInputChange("workAuthorization")}
                      className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                      required
                    >
                      <option value="">Select authorization</option>
                      <option value="citizen">US Citizen</option>
                      <option value="permanent-resident">
                        Permanent Resident
                      </option>
                      <option value="work-visa">Work Visa</option>
                      <option value="student">Student Visa</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="LinkedIn Profile (Optional)"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={handleInputChange("linkedin")}
                  />
                  <Input
                    label="Website/Portfolio (Optional)"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={handleInputChange("website")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    placeholder="Any additional information you'd like to share..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange("additionalInfo")}
                    rows={3}
                    className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Error Display */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">{submitError}</p>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="xl"
                disabled={isSubmitting}
                className="px-12 py-4 text-lg font-semibold"
                rightIcon={
                  isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )
                }
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function JobApplicationPageWithSuspense() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
        </div>
      }
    >
      <JobApplicationPageWrapper />
    </Suspense>
  );
}
