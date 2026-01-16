import React from 'react';
import { useTrustedBrands } from '../../../hooks/useTrustedBrands';
import { BrandItem } from './BrandItem';

export const TrustedBySection: React.FC = () => {
  const { brands, isLoading, error } = useTrustedBrands();

  if (error) return null; // Hide section on error, or show a fallback UI

  return (
    <section className="bg-transparent py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header with dividers */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-[1.4px] w-4 bg-[#B9FD50] md:w-18" role="presentation" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-300">
            Trusted by amazing brands
          </h2>
          <div className="h-[1.4px] w-4 bg-[#B9FD50] md:w-18" role="presentation" />
        </div>

        {/* Brand Banner */}
        <div className="rounded-2xl bg-[#222222] px-8 py-10">
          {isLoading ? (
            // Simple loading skeleton
            <div className="flex justify-between ">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-2 w-24 rounded bg-white/10" />
              ))}``
            </div>
          ) : (
            <div className="flex flex-wrap   items-center justify-center gap-x-12 gap-y-8 md:justify-between">
              {brands.map((brand) => (
                <BrandItem key={brand.id} brand={brand} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};