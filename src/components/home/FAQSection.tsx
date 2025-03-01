"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionData = [
  {
    number: '01',
    title: 'Who are we?',
    content:
      'We’re a team of marketers and advertisers who teamed up to grow brands, majorly the D2C and B2C brands using modern day creative-traditional advertising.',
  },
  {
    number: '02',
    title: 'What we do?',
    content:
      "We build and setup creative traditional advertising campaigns across India’s biggest festivals. Our goal is to lower down the advertising cost and connect the brands to the audience emotionally in a creative way. So that advertising doesn’t feels like one.",
  },
  {
    number: '03',
    title: 'How we’re different?',
    content:
      'We’re the only and first of a kind creative advertising agency in India that aims to help brands being remembered by their customers. We do this by building creative ads across India’s biggest festivals.',
  },
  {
    number: '04',
    title: 'Why us over your marketing team?',
    content:
      'Your current marketing team needs to look and manage into multiple channels to make sure your marketing is on point. We only help you with advertising very well by leveraging India’s biggest festivals. We’re not a competitor to your marketing team, we’re an extended partner to help them.',
  },
  {
    number: '05',
    title: 'How much does we charge?',
    content:
      'We charge a flat 5% fees of the total advertisement budget we’ll manage for you. And our promise is - we’re the most cost affordable for festival advertising.',
  },
  {
    number: '06',
    title: 'How we get started?',
    content:
      'We get started by analyzing your brand and it’s goals. Then we build a strategy on what kind of campaigns will work, their cost, how to diversify them, setting up and managing them, etc.',
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleAccordion = useCallback(
    (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    []
  );

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_25%,#f3f3f3_25%,#f3f3f3_50%,transparent_50%,transparent_75%,#f3f3f3_75%)] bg-[length:24px_24px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a 
            href="/contact"
            className="group relative"
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-[#b9ff66] px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
              FAQ
            </h2>
            <div className="absolute inset-0 bg-black/5 rounded-lg transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <p className="text-lg md:text-xl text-gray-700 max-w-md text-center md:text-left">
            Step-by-Step Guide to Achieving the Business Goals
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  bg-white rounded-xl shadow-sm border border-gray-100
                  transition-all duration-300 ease-in-out
                  ${hoveredIndex === index ? 'transform -translate-y-1 shadow-lg' : ''}
                  ${activeIndex === index ? 'ring-2 ring-[#b9ff66]' : ''}
                `}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4"
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-3xl font-bold text-[#b9ff66]">
                    {item.number}
                  </span>
                  <span className="flex-1 text-lg font-medium text-gray-900">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      className="transform transition-transform duration-300"
                    >
                      <path 
                        d="M12 5L12 19M5 12L19 12" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <div className="w-full h-px bg-gray-100 mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;