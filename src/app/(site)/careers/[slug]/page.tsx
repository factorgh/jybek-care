import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Shield,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";

// Mock data - in production, this would come from your API/database
const mockJobs = [
  {
    _id: "1",
    title: "Senior Caregiver",
    slug: "senior-caregiver",
    department: "Caregiving",
    location: "Boston, MA",
    type: "Full-time",
    description:
      "We are seeking compassionate and experienced Senior Caregivers to provide exceptional care to our elderly clients. You will be responsible for assisting with daily living activities, medication management, and providing companionship.",
    requirements: [
      "Minimum 2 years of caregiving experience",
      "CPR and First Aid certification",
      "Valid driver's license and reliable transportation",
      "Ability to lift 50+ pounds",
      "Excellent communication skills",
      "Background check clearance",
    ],
    responsibilities: [
      "Assist clients with personal care and hygiene",
      "Prepare meals and assist with feeding",
      "Administer medications as prescribed",
      "Provide companionship and emotional support",
      "Transport clients to appointments",
      "Maintain accurate daily logs",
      "Communicate with family members",
    ],
    benefits: [
      "Competitive salary ($18-$22/hour)",
      "Health, dental, and vision insurance",
      "401(k) retirement plan",
      "Paid time off and holidays",
      "Ongoing training and development",
      "Flexible scheduling options",
      "Supportive team environment",
    ],
    salary: "$18-$22/hour",
    featured: true,
    published: true,
    applicationDeadline: new Date("2024-02-15"),
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    _id: "2",
    title: "Registered Nurse (RN)",
    slug: "registered-nurse-rn",
    department: "Nursing",
    location: "Providence, RI",
    type: "Full-time",
    description:
      "Join our team of dedicated Registered Nurses providing high-quality medical care to clients in their homes. This role offers the opportunity to make a meaningful difference in patients' lives while enjoying excellent benefits.",
    requirements: [
      "Valid RN license in state of practice",
      "Minimum 1 year of clinical experience",
      "BLS certification",
      "Strong assessment and critical thinking skills",
      "Excellent documentation abilities",
      "Reliable transportation",
    ],
    responsibilities: [
      "Provide skilled nursing care to clients",
      "Develop and implement care plans",
      "Administer medications and treatments",
      "Monitor patient vital signs",
      "Coordinate with physicians and families",
      "Maintain accurate medical records",
      "Educate clients and families",
    ],
    benefits: [
      "Excellent salary ($30-$38/hour)",
      "Comprehensive health benefits",
      "Malpractice insurance coverage",
      "Continuing education reimbursement",
      "Sign-on bonus available",
      "Career advancement opportunities",
      "Flexible scheduling",
    ],
    salary: "$30-$38/hour",
    featured: true,
    published: true,
    applicationDeadline: new Date("2024-02-20"),
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
  },
];

interface JobDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: JobDetailsPageProps): Promise<Metadata> {
  const job = mockJobs.find((j) => j.slug === params.slug);

  if (!job) {
    return {
      title: "Job Not Found | Jybek Home Care Careers",
      description: "The job you are looking for could not be found.",
    };
  }

  return {
    title: `${job.title} | Careers | Jybek Home Care`,
    description: `Apply for ${job.title} position at Jybek Home Care. ${job.type} position in ${job.location}.`,
    keywords: [
      job.title,
      job.department,
      job.location,
      "caregiver jobs",
      "home care careers",
    ],
    openGraph: {
      title: `${job.title} - Jybek Home Care Careers`,
      description: job.description,
      type: "website",
      locale: "en_US",
      url: `https://jybekhomecares.com/careers/${job.slug}`,
      siteName: "Jybek Home Care",
    },
  };
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  const job = mockJobs.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  const isDeadlinePassed = job.applicationDeadline
    ? new Date() > job.applicationDeadline
    : false;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                    <Users className="w-4 h-4" />
                    {job.department}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {job.salary && (
                  <div className="text-center lg:text-right">
                    <p className="text-sm text-white/80">Salary Range</p>
                    <p className="text-2xl font-bold flex items-center justify-center lg:justify-end gap-1">
                      <DollarSign className="w-5 h-5" />
                      {job.salary}
                    </p>
                  </div>
                )}

                <Button
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-gray-100 font-semibold"
                  disabled={isDeadlinePassed}
                >
                  {isDeadlinePassed ? "Application Closed" : "Apply Now"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About the Position
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {job.description}
              </p>
            </section>

            {/* Responsibilities */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Requirements & Qualifications
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex gap-3">
                    <Shield className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Application Information
              </h3>

              <div className="space-y-4">
                {job.applicationDeadline && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Application Deadline
                    </p>
                    <p
                      className={`font-medium ${
                        isDeadlinePassed
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {job.applicationDeadline.toLocaleDateString()}
                    </p>
                    {isDeadlinePassed && (
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                        This position has closed for applications
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Employment Type
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {job.type}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Department
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {job.department}
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Benefits & Perks
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <Heart className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/80 mb-4">
                Join our team of compassionate caregivers and healthcare
                professionals.
              </p>
              <Button
                size="lg"
                className="w-full bg-white text-brand-600 hover:bg-gray-100 font-semibold"
                disabled={isDeadlinePassed}
              >
                {isDeadlinePassed
                  ? "Application Closed"
                  : "Apply for This Position"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
