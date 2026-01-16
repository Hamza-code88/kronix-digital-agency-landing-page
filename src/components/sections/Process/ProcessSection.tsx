import React from 'react';
import { useProcessSteps } from '../../../hooks/useProcessSteps';
import { Button } from '../../common/Button';
import { ProcessStepCard } from './ProcessStepCard';
import { ProcessConnector } from './ProcessConnector';

export const ProcessSection: React.FC = () => {
  const { steps, isLoading } = useProcessSteps();

  if (isLoading) return null; // Or a skeleton loader

  return (
    <section id="process" className="bg-[#111204] py-20 md:py-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section: Grid Layout for Title vs Desc */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 block text-[13px] font uppercase tracking-widest text-primary">
              How we work
            </span>
            <h2 className="text-4xl font-bold leading-tight text-text md:text-5xl">
              Get a dedicated design team at fraction of the cost.
            </h2>
          </div>
          
          <div className="flex flex-col items-start justify-end px-14 lg:pl-8 pt-12">
            <p className="mb-8 text-[22px] text-text-muted">
              Grow your brand with high-quality design for a flat monthly fee. 
              Work with senior designers. Subscribe and make as many requests 
              as you need - no limits.
            </p>
            <Button className="bg-primary text-black cursor-pointer hover:bg-primary-hover ">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Steps Visualization */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <ProcessStepCard step={step} 
              showArrow={index < steps.length - 1}
              />
             
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};