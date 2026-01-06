'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// Button variants for different use cases
const buttonVariants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-brand hover:shadow-lg',
  secondary:
    'bg-white text-brand-700 border-2 border-brand-600 hover:bg-brand-50 focus:ring-brand-500',
  outline:
    'bg-transparent text-brand-600 border border-brand-300 hover:bg-brand-50 focus:ring-brand-500',
  ghost: 'bg-transparent text-brand-600 hover:bg-brand-50 focus:ring-brand-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  success: 'bg-accent-emerald text-white hover:bg-emerald-700 focus:ring-emerald-500',
};

// Button sizes
const buttonSizes = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-lg',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Primary button component with multiple variants and sizes
 * Supports loading states, icons, and full-width mode
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 font-semibold rounded-xl',
          'transition-all duration-200 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
          // Variant and size
          buttonVariants[variant],
          buttonSizes[size],
          // Full width
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {/* Loading spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {/* Left icon */}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {/* Button text */}
        {children}
        {/* Right icon */}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

