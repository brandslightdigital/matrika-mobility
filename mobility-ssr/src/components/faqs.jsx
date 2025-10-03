import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I book a car on Tribe?',
    answer: 'You can book a car by selecting your preferred vehicle, choosing the dates, and completing the online payment process. You’ll receive a confirmation instantly.',
  },
  {
    question: 'What documents are required for car rental?',
    answer: 'You’ll need a valid driving license, government-issued ID, and sometimes a credit card for security deposit depending on the vehicle.',
  },
  {
    question: 'Is there a limit on kilometers?',
    answer: 'Most rentals come with a daily kilometer limit. Extra charges may apply beyond that. You’ll see the limit mentioned during booking.',
  },
  {
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can cancel or modify your booking from your dashboard. Cancellation charges may apply based on the timing.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Frequently Asked
            </span>{' '}
            <span>Questions</span>
          </h2>
          <p className="text-gray-400 mt-4">Everything you need to know before booking your ride.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-left justify-between px-6 py-5 text-left font-semibold text-white bg-white/5 hover:bg-white/10 transition-all"
              >
                {item.question}
                <span className="text-amber-400 ml-2">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-400 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[300px]' : 'max-h-0 overflow-hidden'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
