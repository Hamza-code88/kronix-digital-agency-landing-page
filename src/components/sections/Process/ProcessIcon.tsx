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
    // CHANGE: h-24 w-24 (Mobile) -> md:h-32 md:w-32 (Desktop - Original Size)
    <div className={cn("flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-primary text-background", className)}>
      {/* Icon size bhi responsive kiya */}
      <IconComponent className="h-10 w-10 md:h-[60px] md:w-[60px]" strokeWidth={2} />
    </div>
  );
};