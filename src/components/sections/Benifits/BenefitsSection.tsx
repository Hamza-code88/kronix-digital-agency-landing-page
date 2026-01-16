import React from 'react';
import { MOCK_BENEFITS } from '../../../services/mockData';
import { Button } from '../../common/Button';
import { BenefitCard } from './BenifitsCard';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="bg-[#111204] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
              Benefits
            </span>
            <h2 className="text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl">
              The design subscription that connects you to your dream team
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:pl-10">
            <p className="mb-8 text-lg text-text-muted">
              A subscription can alleviate the stress of staffing, managing expenses, 
              or make design calls like a Creative Director. We partner with you to 
              ensure that your design elevates your brand to new levels.
            </p>
            <Button className="bg-primary text-black hover:bg-primary-hover font-bold">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Grid with Borders */}
        {/* Trick: Background color border ka kaam karega (white/10), aur gap-px lines banayega */}
        <div className="overflow-hidden  bg-white/10">
          <div className="grid gap-[1px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_BENEFITS.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                number={benefit.number}
                title={benefit.title}
                description={benefit.description}
                Icon={benefit.icon}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};