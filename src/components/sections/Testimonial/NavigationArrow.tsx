import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, onClick, className }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={cn(
        // White background circle with shadow for visibility on dark theme
        "flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 hover:bg-primary active:scale-95 disabled:opacity-50",
        className
      )}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Icon size={20} strokeWidth={2.5} />
    </button>
  );
};