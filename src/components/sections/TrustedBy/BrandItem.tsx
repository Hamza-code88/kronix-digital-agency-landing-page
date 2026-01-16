import React from 'react';
import type { Brand } from '../../../types';

interface BrandItemProps {
  brand: Brand;
}

export const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
  const { Icon, name } = brand;
  return (
    <div className="flex items-center justify-center gap-3 text-white">
       {/* Using Lucide icons as placeholders for actual brand VGs */}
      <Icon className="h-[40%] w-[40%] " strokeWidth={1.5} />
      <span className="text-3xl font-semibold hidden sm:block">{name}</span>
    </div>
  );
};