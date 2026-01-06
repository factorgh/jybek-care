'use client';

import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

/**
 * Select dropdown component with label and error handling
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, options, placeholder, id, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            {label}
          </label>
        )}

        {/* Select wrapper */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              // Base styles
              'block w-full rounded-xl border bg-white dark:bg-gray-800',
              'text-gray-900 dark:text-white',
              'transition-all duration-200 appearance-none',
              'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
              'pl-4 pr-10 py-3',
              // Border colors
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-600',
              // Disabled state
              'disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}

        {/* Hint text */}
        {hint && !error && (
          <p id={`${selectId}-hint`} className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

