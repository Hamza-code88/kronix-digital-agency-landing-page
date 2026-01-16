import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../common/Button";

export const CTACard: React.FC = () => {
  return (
    // 'relative z-20' zaroori hai taaki ye doosre elements ke upar aaye
    <div className="relative z-20 mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#1E2008] px-6 py-16 text-center shadow-2xl md:px-12 md:py-24">
      {/* Background Content */}
      <div className="relative z-10">
        <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold tracking-[-5px] text-white md:text-5xl lg:text-6xl">
          Become part of the <br /> design revolution
        </h2>

        <p className="mb-10 text-lg text-gray-400">
          Jump on a membership and start <br className="hidden md:block" />
          requesting designs right away!
        </p>

        <Button className="rounded-full bg-primary px-8 py-4 text-[#1E2008] font-bold text-black hover:bg-primary-hover transition-transform hover:scale-105">
          See Pricing
          {/* Arrow Icon inside button */}
          <div className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            <ArrowRight size={18} />
          </div>
        </Button>
      </div>
    </div>
  );
};
