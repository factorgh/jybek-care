'use client';

import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

/**
 * Textarea component with label and error handling
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            {label}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            // Base styles
            'block w-full rounded-xl border bg-white dark:bg-gray-800',
            'text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500',
            'transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
            'px-4 py-3',
            // Border colors
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600',
            // Disabled state
            'disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          {...props}
        />

        {/* Error message */}
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 text-sm text-red-600 dark:text-red-400"
          >
            {error}
          </p>
        )}

        {/* Hint text */}
        {hint && !error && (
          <p
            id={`${textareaId}-hint`}
            className="mt-1.5 text-sm text-gray-500 dark:text-gray-400"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

