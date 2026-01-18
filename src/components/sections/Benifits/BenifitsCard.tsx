import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
  // CHANGE: Yahan bhi type ko loose karein taaki error na aaye
  Icon: LucideIcon | React.ElementType;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ 
  number, 
  title, 
  description, 
  Icon 
}) => {
  return (
    <div className="group relative border-b border-r border-white/10 p-10 transition-colors hover:bg-white/5">
      {/* Number & Icon Header */}
      <div className="mb-8 flex items-start justify-between">
        <span className="text-xl font-bold text-gray-500 transition-colors group-hover:text-primary">
          {number}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A1A1A] text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-black">
          {/* Icon render karte waqt size pass kar rahe hain */}
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-text-muted">
        {description}
      </p>
    </div>
  );
};