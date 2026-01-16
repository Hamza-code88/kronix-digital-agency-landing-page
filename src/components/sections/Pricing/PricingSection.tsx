import React from 'react';
import { MOCK_PRICING_PLANS } from '../../../services/mockData';
import { PricingCard } from './PricingCard';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-[#111204] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm  uppercase tracking-widest text-primary">
            Clear & Simple Pricing
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Simple pricing to level up your brand.
          </h2>
          <p className="mx-auto px-22 mt-4 max-w-xl text-lg text-text-muted">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

       

      </div>
    </section>
  );
};