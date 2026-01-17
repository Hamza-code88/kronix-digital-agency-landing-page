import React from 'react';
import type { ProcessStep } from '../../../types';
import { ProcessIcon } from './ProcessIcon';
import { ProcessConnector } from './ProcessConnector';

interface ProcessStepCardProps {
  step: ProcessStep;
  showArrow: boolean;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, showArrow }) => {
  return (
    // CHANGE: Added 'items-center text-center' for Mobile.
    // CHANGE: Added 'md:items-start md:text-left' to RESET it for Desktop (Original).
    <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-64">
      
      {/* Icon Area */}
      {/* Desktop structure remains 100% SAME to keep arrow alignment */}
      <div className="mb-6">
        <ProcessIcon className='relative z-10' icon={step.icon} />
        
        {showArrow && (
          <div className="hidden md:flex flex-1 -my-2 mx-4 z-0 ">
            <ProcessConnector />
          </div>
        )}
      </div>
      
      {/* Content Area */}
      <h3 className="my-4 text-xl font-semibold text-text">
        {step.title}
      </h3>
      <p className="text-[18px] leading-relaxed text-text-muted">
        {step.description}
      </p>
    </div>
  );
};