import React from 'react';
import { Button } from '../../common/Button';
import { DecorativeStar } from '../../ui/DecorativeStar';

export const HeroSection: React.FC = () => {
  return (
    // 'min-h-screen' use kiya taaki mobile par poora view cover ho
    // 'pt-32' diya taaki content navbar ke peeche na chupe mobile par
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-16 md:pt-20 md:pb-0">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />

      {/* Decorative Stars - Responsive Sizes & Positions */}
      {/* Star 1: Top Right */}
      <DecorativeStar className="absolute top-[15%] right-[5%] w-12 h-12 opacity-60 md:top-1/4 md:right-[15%] md:w-24 md:h-24 md:opacity-80" />
      
      {/* Star 2: Bottom Left (Mobile par thoda chota) */}
      <DecorativeStar className="absolute bottom-10 left-[5%] w-8 h-8 opacity-50 md:bottom-22 md:left-[20%] md:w-12 md:h-12 md:opacity-80" />
      
      {/* Star 3: Bottom Right */}
      <DecorativeStar className="absolute bottom-20 right-[10%] w-10 h-10 opacity-50 md:bottom-22 md:right-[20%] md:w-16 md:h-16 md:opacity-80" />

      <div className="container relative mx-auto flex flex-col items-center px-4 text-center md:px-8">
        
        {/* Main Headline */}
        {/* Mobile: text-4xl | Tablet: text-6xl | Desktop: text-8xl */}
        <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.1]">
          Bringing Your <br className="hidden md:block" /> {/* Mobile par line break hata diya */}
          Dream Into 
          <span className="text-primary font-[700] italic">&nbsp;Reality</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-lg text-base text-text-muted sm:text-lg md:max-w-2xl md:text-xl">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <Button size="lg" className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base">
            Book A Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};