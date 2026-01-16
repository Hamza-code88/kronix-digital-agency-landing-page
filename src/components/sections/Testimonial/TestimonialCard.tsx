import React from 'react';
import type { Testimonial } from '../../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  data: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    // Card Wrapper:
    // Mobile: Padding kam (p-6), Text Center.
    // Desktop: Padding zyada (p-12), Text Left.
    // Color: Light Gray (#F9FAFB) match karne ke liye.
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#F9FAFB] p-6 text-black shadow-xl md:p-12 lg:p-16">
      
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12 lg:gap-20">
        
        {/* Left Content (Text) */}
        <div className="flex-1 text-center md:text-left">
          
          {/* Company Logo Area */}
          <div className="mb-6 flex items-center justify-center gap-2 text-gray-900 md:justify-start">
             {/* Gymstory style logo mockup */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Quote size={14} fill="currentColor" />
            </div>
            <span className="text-lg font-bold tracking-tight">{data.companyName}</span>
          </div>

          {/* Headline - Bold & Readable */}
          <h3 className="mb-4 text-xl font-extrabold leading-snug text-gray-900 md:text-2xl lg:text-3xl">
            {data.headline}
          </h3>

            <p className="mb-4 text-[12px]  leading-snug text-gray-900 md:text-[16px] lg:text-lg">
            {data.description}
          </p>

          {/* Body Text - Readable Gray */}
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            {data.text}
          </p>

          {/* Author Details */}
          <div>
            <p className="font-bold text-black">{data.authorName}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {data.authorRole}
            </p>
          </div>
        </div>

        {/* Right Content (Image) */}
        {/* Mobile: Image choti aur circle. Desktop: Badi image. */}
        <div className="flex shrink-0 justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-56 md:w-56 lg:h-64 lg:w-64">
            <img
              src={data.authorImage}
              alt={data.authorName}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
};