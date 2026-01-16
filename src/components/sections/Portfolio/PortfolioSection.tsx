import React from 'react';
import { usePortfolioItems } from '../../../hooks/usePortfolioItems';
import { PortfolioGrid } from './PortfolioGrid';
import { LoadMoreButton } from './LoadMoreButton';

export const PortfolioSection: React.FC = () => {
  const { items, isLoading } = usePortfolioItems();

  if (isLoading) return null; // Or a skeleton loader

  return (
    <section id="portfolio" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Our Beautiful Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[18px] text-black tracking-wide ">
            We help our clients grow their bottom-line with clear and
            professional websites.
          </p>
        </div>

        {/* Image Grid */}
        <PortfolioGrid items={items} />

        {/* Load More Button */}
        <LoadMoreButton />

      </div>
    </section>
  );
};