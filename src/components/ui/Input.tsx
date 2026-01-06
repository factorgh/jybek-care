'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Input component with label, error handling, and icon support
 * Accessible with proper ARIA attributes
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* Input field */}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              // Base styles
              'block w-full rounded-xl border bg-white dark:bg-gray-800',
              'text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
              // Padding adjustments for icons
              leftIcon ? 'pl-10' : 'pl-4',
              rightIcon ? 'pr-10' : 'pr-4',
              'py-3',
              // Border colors
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-600',
              // Disabled state
              'disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}

        {/* Hint text */}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

