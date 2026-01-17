import React from 'react';

export const ProcessConnector: React.FC = () => {
  return (
    <div className="hidden flex-1 items-center px-4 md:flex">
      <div className="relative h-[2px] w-full bg-primary">
        <div className="absolute -right-1 -top-1.5 h-3 w-3 rotate-45 border-r-4 border-t-4 border-primary" />
      </div>
    </div>
  );
};