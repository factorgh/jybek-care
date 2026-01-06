import type { Metadata } from 'next';
import { Suspense } from 'react';
import { FindCareForm } from './components/FindCareForm';

export const metadata: Metadata = {
  title: 'Find Care | Jybek Home Care',
  description:
    'Find trusted home care services near you. Get matched with verified caregivers in your area. Free, no-obligation care matching.',
};

// Loading fallback for the form
function FormLoading() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-10 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="h-12 bg-gray-200 rounded-xl" />
                <div className="h-12 bg-gray-200 rounded-xl" />
              </div>
              <div className="h-12 bg-gray-200 rounded-xl" />
              <div className="h-12 bg-gray-200 rounded-xl" />
              <div className="h-12 bg-gray-200 rounded-xl" />
              <div className="h-14 bg-gray-200 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Find Care page - Simple lead capture form
 */
export default function FindCarePage() {
  return (
    <Suspense fallback={<FormLoading />}>
      <FindCareForm />
    </Suspense>
  );
}
