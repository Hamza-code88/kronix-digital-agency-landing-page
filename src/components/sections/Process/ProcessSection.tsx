import React from 'react';
import { useProcessSteps } from '../../../hooks/useProcessSteps';
import { Button } from '../../common/Button';
import { ProcessStepCard } from './ProcessStepCard';

export const ProcessSection: React.FC = () => {
  const { steps, isLoading } = useProcessSteps();

  if (isLoading) return null;

  return (
    <section id="process" className="bg-[#111204] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary md:text-[13px]">
              How we work
            </span>
            <h2 className="text-3xl font-bold leading-tight text-text md:text-4xl lg:text-5xl">
              Get a dedicated design team at fraction of the cost.
            </h2>
          </div>
          
          <div className="flex flex-col items-start justify-end pt-4 lg:pl-8 lg:pt-12">
            <p className="mb-8 text-lg text-text-muted md:text-[22px]">
              Grow your brand with high-quality design for a flat monthly fee. 
              Work with senior designers. Subscribe and make as many requests 
              as you need - no limits.
            </p>
            <Button className="bg-primary text-black hover:bg-primary-hover">
              See Pricing
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-0">
          {steps.map((step, index) => (
            <ProcessStepCard 
              key={step.id} 
              step={step} 
              showArrow={index < steps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};