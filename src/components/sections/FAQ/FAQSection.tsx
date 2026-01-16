import React from 'react';
import { MOCK_FAQS } from '../../../services/mockData';
import { FAQAccordionItem } from './FAQAccordionItem';
import { FAQForm } from './FAQForm';

export const FAQSection: React.FC = () => {
  return (
    // Background is WHITE here
    <section id="faq" className="bg-white py-20 md:py-52">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            FAQ's
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Providing answers to your questions
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {MOCK_FAQS.map((faq) => (
            <FAQAccordionItem key={faq.id} item={faq} />
          ))}
        </div>

        {/* Contact Form */}
        <FAQForm />

      </div>
    </section>
  );
};