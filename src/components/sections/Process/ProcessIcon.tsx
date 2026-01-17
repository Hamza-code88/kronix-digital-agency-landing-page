import React from 'react';
import { Rocket, PenTool, RefreshCcw } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ProcessIconProps {
  icon: 'rocket' | 'pen' | 'refresh';
  className?: string;
}

export const ProcessIcon: React.FC<ProcessIconProps> = ({ icon, className }) => {
  const IconMap = {
    rocket: Rocket,
    pen: PenTool,
    refresh: RefreshCcw,
  };

  const IconComponent = IconMap[icon];

  return (
    <div className={cn("flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-background md:h-28 md:w-28 lg:h-32 lg:w-32", className)}>
      <IconComponent className="h-8 w-8 md:h-12 md:w-12 lg:h-[60px] lg:w-[60px]" strokeWidth={2} />
    </div>
  );
};