'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Briefcase,
  Eye,
  TrendingUp,
  Plus,
  ArrowRight,
  Calendar,
} from 'lucide-react';

interface Stats {
  totalArticles: number;
  publishedArticles: number;
  totalJobs: number;
  activeJobs: number;
}

interface RecentItem {
  _id: string;
  title: string;
  createdAt: string;
  published: boolean;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalArticles: 0,
    publishedArticles: 0,
    totalJobs: 0,
    activeJobs: 0,
  });
  const [recentArticles, setRecentArticles] = useState<RecentItem[]>([]);
  const [recentJobs, setRecentJobs] = useState<RecentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [articlesRes, jobsRes] = await Promise.all([
        fetch('/api/articles?all=true&limit=5'),
        fetch('/api/jobs?all=true&limit=5'),
      ]);

      const articlesData = await articlesRes.json();
      const jobsData = await jobsRes.json();

      setStats({
        totalArticles: articlesData.pagination?.total || 0,
        publishedArticles: articlesData.articles?.filter((a: RecentItem) => a.published).length || 0,
        totalJobs: jobsData.pagination?.total || 0,
        activeJobs: jobsData.jobs?.filter((j: RecentItem) => j.published).length || 0,
      });

      setRecentArticles(articlesData.articles || []);
      setRecentJobs(jobsData.jobs || []);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      label: 'Total Articles',
      value: stats.totalArticles,
      icon: FileText,
      color: 'bg-blue-500',
      href: '/admin/dashboard/articles',
    },
    {
      label: 'Published Articles',
      value: stats.publishedArticles,
      icon: Eye,
      color: 'bg-emerald-500',
      href: '/admin/dashboard/articles',
    },
    {
      label: 'Total Jobs',
      value: stats.totalJobs,
      icon: Briefcase,
      color: 'bg-purple-500',
      href: '/admin/dashboard/jobs',
    },
    {
      label: 'Active Jobs',
      value: stats.activeJobs,
      icon: TrendingUp,
      color: 'bg-amber-500',
      href: '/admin/dashboard/jobs',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here&apos;s an overview of your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={stat.href}
              className="block bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                    {isLoading ? '-' : stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-2">Create New Article</h3>
          <p className="text-white/80 text-sm mb-4">
            Share valuable content with your audience
          </p>
          <Link
            href="/admin/dashboard/articles/new"
            className="inline-flex items-center gap-2 bg-white text-brand-600 px-4 py-2 rounded-xl font-medium hover:bg-white/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Article
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-2">Post a Job</h3>
          <p className="text-white/80 text-sm mb-4">
            Attract qualified caregivers to your team
          </p>
          <Link
            href="/admin/dashboard/jobs/new"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-xl font-medium hover:bg-white/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Job
          </Link>
        </motion.div>
      </div>

      {/* Recent Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white">Recent Articles</h3>
            <Link
              href="/admin/dashboard/articles"
              className="text-sm text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {isLoading ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                Loading...
              </div>
            ) : recentArticles.length === 0 ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                No articles yet. Create your first article!
              </div>
            ) : (
              recentArticles.map((article) => (
                <Link
                  key={article._id}
                  href={`/admin/dashboard/articles/${article._id}`}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white line-clamp-1">
                      {article.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      article.published
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                    }`}
                  >
                    {article.published ? 'Published' : 'Draft'}
                  </span>
                </Link>
              ))
            )}
          </div>
        </motion.div>

        {/* Recent Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white">Recent Jobs</h3>
            <Link
              href="/admin/dashboard/jobs"
              className="text-sm text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {isLoading ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                Loading...
              </div>
            ) : recentJobs.length === 0 ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                No jobs posted yet. Create your first job!
              </div>
            ) : (
              recentJobs.map((job) => (
                <Link
                  key={job._id}
                  href={`/admin/dashboard/jobs/${job._id}`}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white line-clamp-1">
                      {job.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(job.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.published
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                    }`}
                  >
                    {job.published ? 'Active' : 'Draft'}
                  </span>
                </Link>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

