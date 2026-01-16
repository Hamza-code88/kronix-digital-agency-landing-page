import React from 'react';
import { MOCK_CAPABILITIES } from '../../../services/mockData';
import { Loader2 } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="bg-[#111204] py-20 relative">
      <div className="container mx-auto px-4 text-center">
        
        {/* Headings */}
        <div className="mb-12">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Our Capabilities
          </span>
          <h2 className="text-4xl font-bold text-text md:text-5xl">
            We can help you with...
          </h2>
        </div>

        {/* Tags Container */}
        {/* 'max-w-5xl' width ko control karta hai taaki tags zyada phaile nahi */}
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 md:gap-4">
          {MOCK_CAPABILITIES.map((capability, index) => (
            <div
              key={index}
              className="cursor-default rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-1 hover:bg-primary-hover md:text-base"
            >
              {capability}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary">
            {/* Spinning Icon */}
            <Loader2 className="h-5 w-5  text-primary" />
            Load More
          </button>
        </div>

      </div>
    </section>
  );
};