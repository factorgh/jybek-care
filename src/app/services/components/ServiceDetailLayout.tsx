'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Heart,
  Star,
  Users,
  Award,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  whatToExpect: string[];
  whoIsItFor: string[];
  faqs: FAQ[];
  relatedServices: { title: string; href: string }[];
}

export function ServiceDetailLayout({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  whatToExpect,
  whoIsItFor,
  faqs,
  relatedServices,
}: ServiceDetailProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Jybek Home Care Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-xl text-brand-200 font-medium mb-4">{subtitle}</p>
              <p className="text-lg text-white/80 mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/find-care">
                  <Button
                    size="lg"
                    className="bg-white text-brand-600 hover:bg-gray-100"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Started Today
                  </Button>
                </Link>
                <a href="tel:+18887175009">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    leftIcon={<Phone className="w-5 h-5" />}
                  >
                    +1 888-717-5009
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
              </div>
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Rated 4.9/5 by families</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included in {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-brand-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
                  <CheckCircle className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jybek for {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the Jybek difference in quality care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect & Who Is It For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Who Is It For */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Who Is This Service For?
              </h2>
              <ul className="space-y-4">
                {whoIsItFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Jybek Services
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-brand-50 text-gray-700 hover:text-brand-600 rounded-full font-medium transition-colors"
                >
                  {service.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started with {title}?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today for a free consultation and personalized care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-care">
                <Button
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-gray-100"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Find Jybek Care Now
                </Button>
              </Link>
              <a href="tel:+18887175009">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  leftIcon={<Phone className="w-5 h-5" />}
                >
                  Call +1 888-717-5009
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

