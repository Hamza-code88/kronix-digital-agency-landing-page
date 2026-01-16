import React from "react";
import { Button } from "../../common/Button";

export const FAQForm: React.FC = () => {
  return (
    <div className="mt-12 w-full">
      {/* Text Area */}
      <div className="relative mb-6">
        <textarea
          placeholder="Ask us what you want to know..."
          className="h-40 w-full resize-none rounded-2xl border border-gray-300 bg-white p-6 text-black placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Bottom Bar: Note & Button */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-xs text-gray-500 md:text-sm">
          We will answer your questions via email{" "}
          <br className="hidden md:block" />
          within 48 hours.
        </p>

        <Button className="w-full rounded-full bg-primary px-10 py-3 font-bold text-black hover:bg-primary-hover md:w-auto">
          Send
        </Button>
      </div>
    </div>
  );
};
