import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ number, title, description, Icon }) => {
  return (
    // 'bg-[#111204]' zaroori hai taaki grid gap ke through border color dikhe
    <div className="flex h-full flex-col items-start border-l border-white/5 bg-[#111204] p-8 transition-colors hover:bg-[#1c2c03]">
      {/* Icon with Green Color */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center text-primary">
        <Icon size={32} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-bold text-text">
        {number}. {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-text-muted">
        {description}
      </p>
    </div>
  );
};