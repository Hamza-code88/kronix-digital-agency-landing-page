import React from 'react';
import type { Brand } from '../../../types';

interface BrandItemProps {
  brand: Brand;
}

export const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
  const { Icon, name } = brand;
  return (
    <div className="group flex items-center justify-center gap-2 text-white transition-opacity duration-300 hover:opacity-80">
      <Icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      <span className="hidden text-lg font-semibold sm:block md:text-xl">{name}</span>
    </div>
  );
};