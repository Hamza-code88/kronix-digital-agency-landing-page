import React from 'react';
import type { PortfolioItem } from '../../../types';
import { PortfolioCard } from './PortfolioCard';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  return (
    // CHANGE: 'grid' ki jagah 'columns-2 md:columns-3' use kiya hai.
    // 'gap-4' columns ke beech space dega.
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4 lg:gap-6 space-y-4">
      {items.map((item) => (
        // 'break-inside-avoid' bohot zaroori hai taaki image beech se na kate columns mein
        // 'mb-4' vertical spacing ke liye hai
        <div key={item.id} className="break-inside-avoid mb-4 lg:mb-6">
            <PortfolioCard item={item} />
        </div>
      ))}
    </div>
  );
};