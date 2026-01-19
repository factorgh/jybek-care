import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import { MapPin, Clock, Users, ArrowRight, Heart, Shield } from "lucide-react";

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

export const metadata: Metadata = {
  title: "Careers | Jybek Home Care",
  description:
    "Join our team of compassionate caregivers and healthcare professionals. Explore rewarding career opportunities at Jybek Home Care.",
  keywords: [
    "caregiver jobs",
    "home care careers",
    "nursing jobs",
    "healthcare careers",
    "senior care jobs",
    "home health aide jobs",
  ],
};

export default function CareersPage() {
  const featuredJobs = mockJobs.filter((job) => job.featured);
  const otherJobs = mockJobs.filter((job) => !job.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Team of Compassionate Caregivers
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Make a meaningful difference in people&apos;s lives every day. At
              Jybek Home Care, we&apos;re looking for dedicated professionals
              who share our commitment to exceptional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-gray-100 font-semibold"
              >
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-600 font-semibold"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Join Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work at Jybek Home Care?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We believe in supporting our team members as much as we support
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Make a Difference",
                description:
                  "Provide essential care that improves quality of life for seniors and their families.",
              },
              {
                icon: Shield,
                title: "Growth Opportunities",
                description:
                  "Access ongoing training, career advancement, and professional development.",
              },
              {
                icon: Users,
                title: "Supportive Team",
                description:
                  "Join a caring community that values collaboration and mutual respect.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded-full">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 px-2 py-1 rounded-lg text-sm font-medium">
                      Featured
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex items-center justify-between">
                    {job.salary && (
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.salary}
                      </span>
                    )}
                    <Link href={`/careers/${job.slug}`}>
                      <Button variant="outline" size="sm">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Jobs */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            All Open Positions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      <Users className="w-3 h-3" />
                      {job.department}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex items-center justify-between">
                  {job.salary && (
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {job.salary}
                    </span>
                  )}
                  <Link href={`/careers/${job.slug}`}>
                    <Button variant="outline" size="sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See the Right Fit?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our team.
            Send us your resume and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-gray-100 font-semibold"
            >
              Submit Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-600 font-semibold"
            >
              Contact HR
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
