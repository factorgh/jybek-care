"use client";

import { articles } from "./articles-data";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  BookOpen,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui";

// Default article for unknown slugs
const defaultArticle = {
  id: 0,
  title: "Article Not Found",
  excerpt: "The requested article could not be found.",
  content: [
    "We couldn't find the article you're looking for. Please check the URL or browse our other articles.",
  ],
  image:
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop",
  category: "Jybek Articles",
  author: "Jybek Team",
  authorBio:
    "The Jybek Home Care team is dedicated to providing valuable resources for families.",
  authorImage:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  date: "January 1, 2026",
  readTime: "1 min read",
  tags: [],
};

// Related articles
const relatedArticles = [
  {
    title: "The Importance of Companion Care for Emotional Wellbeing",
    slug: "companion-care-emotional-wellbeing",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=250&fit=crop",
    category: "Jybek Wellness",
  },
  {
    title: "Respite Care: Taking Care of the Caregiver",
    slug: "respite-care-caregiver-support",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=250&fit=crop",
    category: "Jybek Care Tips",
  },
  {
    title: "Fall Prevention Strategies for Seniors at Home",
    slug: "fall-prevention-strategies",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
    category: "Jybek Health",
  },
];

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug] || defaultArticle;

  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => {
      // Check if it's a heading
      if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/resources/articles"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>

            {/* Category */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="font-medium">{article.author}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">Share:</span>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {renderContent(article.content)}
            </article>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-4">
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Box */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Written by {article.author}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.authorBio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/resources/articles/${relatedArticle.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-brand-600 text-white text-xs font-medium rounded-full">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help with Home Care?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our care experts are ready to help you find the perfect care
              solution for your loved one. Get a free consultation today.
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
                  +1 888-717-5009
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
