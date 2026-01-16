import React from 'react';
import { Button } from '../../common/Button';
import { DecorativeStar } from '../../ui/DecorativeStar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />

      {/* Decorative Stars */}
      <DecorativeStar className="absolute top-1/4 right-[15%] w-[15vw] h-[15vh]  opacity-80" />
      <DecorativeStar className="absolute bottom-22 left-[20%] w-[3vw] h-[3vh] opacity-80" />
      <DecorativeStar className="absolute bottom-22 right-[20%] w-[5vw] h-[5vh] opacity-80" />

      <div className="container relative mx-auto flex flex-col items-center px-4 text-center md:px-8">
        
        {/* Main Headline */}
        <h1 className="max-w-4xl text-6xl font-extrabold tracking-tight text-text sm:text-6xl md:text-8xl lg:leading-[1.1]">
          Bringing Your <br/> Dream Into 
          <span className="text-primary font-[700] italic">&nbsp;Reality</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl  text-lg text-text-muted sm:text-xl">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button size="lg" className="px-8 py-4 text-base">
            Book A Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};