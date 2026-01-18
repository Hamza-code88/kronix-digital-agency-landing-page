import React from 'react';
import type { Brand } from '../../../types';

interface BrandItemProps {
  brand: Brand;
}

export const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
  const { Icon, name } = brand;

  // Check agar Icon string (PNG/Image) hai
  if (typeof Icon === 'string') {
    return (
      <div className="group flex items-center justify-center gap-2 text-white transition-opacity duration-300 hover:opacity-80">
        {/* Image Tag for PNGs */}
        <img 
          src={Icon} 
          alt={name} 
          className="h-8 w-auto object-contain md:h-10" 
        />
        <span className="hidden text-lg font-semibold sm:block md:text-xl">{name}</span>
      </div>
    );
  }

  // Agar Icon Component (Lucide/SVG) hai
  const IconComponent = Icon;
  
  return (
    <div className="group flex items-center justify-center gap-2 text-white transition-opacity duration-300 hover:opacity-80">
      <IconComponent className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      <span className="hidden text-lg font-semibold sm:block md:text-xl">{name}</span>
    </div>
  );
};