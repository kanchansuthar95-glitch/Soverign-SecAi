import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

/**
 * Professional-grade Button component with multiple variants and loading states.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest';
    
    const variants = {
      primary: 'bg-[#66fcf1] text-[#0b0c10] hover:shadow-[0_0_15px_#66fcf1] hover:scale-[1.02]',
      outline: 'border border-[#66fcf1] text-[#66fcf1] hover:bg-[#66fcf1]/10',
      ghost: 'text-[#c5c6c7] hover:text-[#66fcf1] hover:bg-[#66fcf1]/5',
      danger: 'bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-[10px]',
      md: 'px-6 py-2.5 text-xs',
      lg: 'px-8 py-3.5 text-sm'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
