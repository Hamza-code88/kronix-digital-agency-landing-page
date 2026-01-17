import React from 'react';
import { useProcessSteps } from '../../../hooks/useProcessSteps';
import { Button } from '../../common/Button';
import { ProcessStepCard } from './ProcessStepCard';
// ProcessConnector yahan import hai par use StepCard ke andar ho raha hai, jo sahi hai.

export const ProcessSection: React.FC = () => {
  const { steps, isLoading } = useProcessSteps();

  if (isLoading) return null;

  return (
    <section id="process" className="bg-[#111204] py-20 md:py-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 block text-[13px] font uppercase tracking-widest text-primary">
              How we work
            </span>
            <h2 className="text-4xl font-bold leading-tight text-text md:text-5xl">
              Get a dedicated design team at fraction of the cost.
            </h2>
          </div>
          
          {/* CHANGE: Removed 'px-14' from mobile, kept it for Desktop (lg:pl-8) */}
          <div className="flex flex-col items-start justify-end pt-4 lg:pl-8 lg:pt-12">
            <p className="mb-8 text-[18px] md:text-[22px] text-text-muted">
              Grow your brand with high-quality design for a flat monthly fee. 
              Work with senior designers. Subscribe and make as many requests 
              as you need - no limits.
            </p>
            <Button className="bg-primary text-black cursor-pointer hover:bg-primary-hover">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Steps Visualization */}
        <div className="flex flex-col gap-16 md:gap-10 md:flex-row md:items-start md:justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <ProcessStepCard 
                step={step} 
                showArrow={index < steps.length - 1}
              />
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};