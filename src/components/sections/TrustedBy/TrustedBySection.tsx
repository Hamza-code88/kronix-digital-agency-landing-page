import React from 'react';
import { useTrustedBrands } from '../../../hooks/useTrustedBrands';
import { BrandItem } from './BrandItem';

export const TrustedBySection: React.FC = () => {
  const { brands, isLoading, error } = useTrustedBrands();

  if (error) return null;

  return (
    <section className="bg-transparent py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-6 flex items-center justify-center gap-3 md:mb-8 md:gap-4">
          <div className="h-[1px] w-8 bg-[#B9FD50] md:h-[1.4px] md:w-16" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 md:text-sm">
            Trusted by amazing brands
          </h2>
          <div className="h-[1px] w-8 bg-[#B9FD50] md:h-[1.4px] md:w-16" />
        </div>

        <div className="rounded-xl bg-[#222222] px-4 py-8 md:rounded-2xl md:px-12 md:py-12">
          {isLoading ? (
            <div className="flex flex-wrap justify-center gap-8 md:justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-20 animate-pulse rounded bg-white/5 md:w-24" />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:justify-between md:gap-12">
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