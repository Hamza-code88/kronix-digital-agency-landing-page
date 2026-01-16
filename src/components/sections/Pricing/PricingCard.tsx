import React from 'react';
import type { PricingPlan } from '../../../types';
import {  Star, X } from 'lucide-react';
import { Button } from '../../common/Button';
import { cn } from '../../../lib/utils';

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  // Destructure new props
  const { badge, isHighlighted } = plan;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-lg bg-[#1A1A1A] p-8 transition-transform duration-300 hover:-translate-y-2",
        // Logic: Agar Highlighted hai (Standard), to Green Border + Glow dikhao
        // Agar highlighted nahi hai par Badge hai (Pro), to White Border dikhao (optional)
        isHighlighted 
          ? "border-2 border-primary shadow-[0_0_30px_rgba(185,253,80,0.1)]" 
          : "border border-white/5"
      )}
    >
      {/* Badge Logic: Agar badge text maujood hai to dikhao */}
      {badge && (
        <div 
          className={cn(
            "absolute -top-4 left-62 -translate-x-1/2 rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wide",
            // Styles:
            // Highlighted (Standard): Green BG, Black Text
            // Not Highlighted (Pro): White BG, Black Text (for distinction)
            isHighlighted 
              ? "bg-primary text-black" 
              : "bg-white text-black"
          )}
        >
          {badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold tracking-wide text-white">{plan.name}</h3>
        <p className="mt-2 text-sm text-text-muted">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-8 ">
        <span className="text-4xl font-bold text-primary">{plan.price}</span>
        {plan.price.startsWith('$') && <span className="text-text-muted">/mo</span>}
        <p className='text-[12px] text-gray-400 py-3'>{plan.Pline}</p>
      </div>
<div className='bg-primary/30 mb-2 w-80 h-[0.8px]'></div>
      {/* Features List */}
      <ul className="mb-8 flex-1 space-y-4">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            {feature.included ? (
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-primary">
                <Star size={12} strokeWidth={3} />
                
              </div>
            ) : (
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-text-muted">
                <X size={12} />
              </div>
            )}
            <span className={cn("leading-tight", feature.included ? "text-gray-300" : "text-gray-600 line-through")}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
       <Button className='bg-transparent border border-primary text-white mb-2 hover:text-black'>
        Book A Call
      </Button>
      <Button className=' hover:bg-black  hover:text-primary'>
       Click to buy
      </Button>
    </div>
  );
};