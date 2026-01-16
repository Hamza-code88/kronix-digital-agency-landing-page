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
    <div className={cn("flex h-32 w-32 items-center justify-center rounded-full bg-primary text-background", className)}>
      <IconComponent size={60} strokeWidth={2} />
    </div>
  );
};