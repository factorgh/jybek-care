import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const cardVariants = {
  default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
  elevated: 'bg-white dark:bg-gray-800 shadow-soft-lg',
  outline: 'bg-transparent border-2 border-gray-200 dark:border-gray-700',
  glass:
    'bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/20 dark:border-gray-700/50',
};

const cardPaddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Versatile card component with multiple variants
 * Used for content containers throughout the application
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = 'default', padding = 'md', hover = false, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-2xl transition-all duration-300',
          // Variant
          cardVariants[variant],
          // Padding
          cardPaddings[padding],
          // Hover effect
          hover && 'hover:shadow-soft-xl hover:-translate-y-1 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header subcomponent
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

// Card Title subcomponent
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-xl font-semibold leading-tight text-gray-900 dark:text-white',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

// Card Description subcomponent
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-gray-600 dark:text-gray-400', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

// Card Content subcomponent
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

// Card Footer subcomponent
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

