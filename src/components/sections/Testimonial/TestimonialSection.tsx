import React, { useState } from 'react';
import { MOCK_TESTIMONIALS } from '../../../services/mockData';
import { NavigationArrow } from './NavigationArrow';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? MOCK_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const currentTestimonial = MOCK_TESTIMONIALS[currentIndex];

  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center md:mb-20">
          <span className="mb-3 block  uppercase tracking-widest text-black">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Customer is Our Top <br/>Priority
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-black md:text-base">
            We survey all of our clients, the results of which go directly to our CEO.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="relative mx-auto max-w-6xl">
          
          {/* Card Component */}
          <div className="transition-opacity duration-300">
             <TestimonialCard data={currentTestimonial} />
          </div>

          {/* Desktop Navigation (Floating Sides) */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-between xl:flex">
             {/* Left Arrow - Outside Container */}
            <div className="pointer-events-auto -ml-16">
              <NavigationArrow direction="left" onClick={handlePrev} />
            </div>
            {/* Right Arrow - Outside Container */}
            <div className="pointer-events-auto -mr-16">
              <NavigationArrow direction="right" onClick={handleNext} />
            </div>
          </div>

          {/* Mobile Navigation (Bottom Center) */}
          <div className="mt-8 flex justify-center gap-6 xl:hidden">
            <NavigationArrow direction="left" onClick={handlePrev} />
            <NavigationArrow direction="right" onClick={handleNext} />
          </div>

        </div>

      </div>
    </section>
  );
};