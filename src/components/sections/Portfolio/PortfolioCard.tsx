import React from 'react';
import type { PortfolioItem } from '../../../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-background-secondary">
      {/* Image with Hover Effect */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Optional: Hover Overlay (Design mein nahi hai par acha lagta hai) */}
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
    </div>
  );
};