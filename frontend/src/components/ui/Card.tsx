import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'glass';
}

/**
 * A reusable Card component following the project's "GX" design language.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-[#1f2833]/80 border-[#66fcf1]/10',
      accent: 'bg-[#1f2833]/90 border-[#66fcf1]/30 shadow-[0_0_15px_rgba(102,252,241,0.1)]',
      glass: 'bg-white/5 backdrop-blur-md border-white/10'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border p-4 transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
