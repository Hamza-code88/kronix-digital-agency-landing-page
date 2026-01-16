import React, { useState } from 'react';
import  type { FAQItem } from '../../../types';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface FAQAccordionItemProps {
  item: FAQItem;
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl bg-[#111204] text-white transition-all">
      {/* Header / Clickable Area */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left md:p-8"
      >
        <span className="text-lg font-medium md:text-xl">
          {item.question}
        </span>
        
        {/* Toggle Button (Green Circle) */}
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black transition-transform duration-300",
          isOpen ? "rotate-180" : "rotate-0"
        )}>
          <ChevronDown size={20} strokeWidth={2.5} />
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-8 text-text-muted md:px-8">
            <p className="leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};