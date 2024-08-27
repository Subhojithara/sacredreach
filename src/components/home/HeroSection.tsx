"use client";

import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';
import { Montserrat, Poppins } from 'next/font/google';
import FaceComponent from '../ui/FaceComponent';


const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BackgroundBeams />
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:min-h-screen">
        <div className="mt-20 lg:mt-40 px-20 text-center lg:text-left">
          <h1 className={`${montserrat.className} w-full lg:w-[42rem] text-4xl lg:text-6xl font-semibold text-gray-900`}>
            Make Your Brand Remembered, Traditional Marketing Done Right 🚀
          </h1>
          <p className={`${poppins.className} pt-4 w-full lg:w-[40rem] text-gray-700`}>
            We help Brands leverage traditional advertising through the biggest festivals of India, using modern-day creative strategies that impact and drive customer loyalty.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start space-x-6">
            <div className="border py-4 p-10 z-10 text-xl font-semibold text-white rounded-3xl bg-green-500 hover:bg-green-600 duration-1000 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14592c]">
              <a href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-5 flex justify-center lg:absolute lg:top-5 lg:right-0">
          <FaceComponent />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
