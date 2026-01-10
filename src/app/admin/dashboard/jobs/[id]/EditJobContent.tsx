"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Plus,
  X,
  Loader2,
  AlertCircle,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const departments = [
  "Caregiving",
  "Nursing",
  "Administration",
  "Management",
  "Support Services",
  "Marketing",
  "Human Resources",
];

const jobTypes = ["Full-time", "Part-time", "Contract", "Per Diem"];

export default function EditJobPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    department: departments[0],
    location: "",
    type: jobTypes[0],
    description: "",
    requirements: [""],
    responsibilities: [""],
    benefits: [""],
    salary: "",
    featured: false,
    published: false,
  });

  const fetchJob = useCallback(async () => {
    try {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Job not found");
      }

      const job = data.job;
      setFormData({
        title: job.title || "",
        slug: job.slug || "",
        department: job.department || departments[0],
        location: job.location || "",
        type: job.type || jobTypes[0],
        description: job.description || "",
        requirements: job.requirements?.length ? job.requirements : [""],
        responsibilities: job.responsibilities?.length
          ? job.responsibilities
          : [""],
        benefits: job.benefits?.length ? job.benefits : [""],
        salary: job.salary || "",
        featured: job.featured || false,
        published: job.published || false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load job");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  const handleArrayChange = (
    field: "requirements" | "responsibilities" | "benefits",
    index: number,
    value: string
  ) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addArrayItem = (
    field: "requirements" | "responsibilities" | "benefits"
  ) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayItem = (
    field: "requirements" | "responsibilities" | "benefits",
    index: number
  ) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated.length ? updated : [""] });
  };

  const handleSubmit = async (e: React.FormEvent, publish?: boolean) => {
    e.preventDefault();
    setError("");
    setIsSaving(true);

    try {
      const cleanData = {
        ...formData,
        ...(publish !== undefined ? { published: publish } : {}),
        requirements: formData.requirements.filter(Boolean),
        responsibilities: formData.responsibilities.filter(Boolean),
        benefits: formData.benefits.filter(Boolean),
      };

      const res = await fetch(`/api/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update job");
      }

      router.push("/admin/dashboard/jobs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update job");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this job? This action cannot be undone."
      )
    ) {
      return;
    }

    setIsDeleting(true);

    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });

      if (!res.ok) {
        throw new Error("Failed to delete job");
      }

      router.push("/admin/dashboard/jobs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete job");
      setIsDeleting(false);
    }
  };

  const ArrayField = ({
    label,
    field,
    placeholder,
  }: {
    label: string;
    field: "requirements" | "responsibilities" | "benefits";
    placeholder: string;
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="space-y-3">
        {formData[field].map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => handleArrayChange(field, index, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
            <button
              type="button"
              onClick={() => removeArrayItem(field, index)}
              className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem(field)}
          className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
        >
          <Plus className="w-4 h-4" />
          Add {label.slice(0, -1)}
        </button>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-brand-600 mx-auto" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Loading job...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard/jobs"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Edit Job
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Update job details
            </p>
          </div>
        </div>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          {isDeleting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Trash2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g., Home Care Aide"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              required
            />
          </div>

          {/* Department, Type & Location */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                required
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                required
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="e.g., Remote, Chicago, IL"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                required
              />
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Salary Range (optional)
            </label>
            <input
              type="text"
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
              placeholder="e.g., $15-$20/hour or $40,000-$50,000/year"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Describe the role and what the ideal candidate looks like..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 resize-none"
              required
            />
          </div>

          {/* Requirements */}
          <ArrayField
            label="Requirements"
            field="requirements"
            placeholder="e.g., 2+ years of caregiving experience"
          />

          {/* Responsibilities */}
          <ArrayField
            label="Responsibilities"
            field="responsibilities"
            placeholder="e.g., Assist with daily living activities"
          />

          {/* Benefits */}
          <ArrayField
            label="Benefits"
            field="benefits"
            placeholder="e.g., Health insurance, Paid time off"
          />

          {/* Featured */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-5 h-5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
            />
            <label
              htmlFor="featured"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Featured job
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            type="submit"
            disabled={isSaving}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
          >
            {isSaving ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            Save Changes
          </button>
          {formData.published ? (
            <button
              type="button"
              onClick={(e) => handleSubmit(e, false)}
              disabled={isSaving}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
            >
              <EyeOff className="w-5 h-5" />
              Deactivate
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              disabled={isSaving}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
            >
              <Eye className="w-5 h-5" />
              Activate
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
