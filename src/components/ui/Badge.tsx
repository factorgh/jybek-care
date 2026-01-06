import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  primary: 'bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-300',
  success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
  warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  info: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
  size?: keyof typeof badgeSizes;
}

/**
 * Badge component for status indicators, tags, and labels
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full',
          badgeVariants[variant],
          badgeSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

