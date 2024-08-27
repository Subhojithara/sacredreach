"use client";

import React from 'react';
import { Montserrat, Poppins } from 'next/font/google';
import FaceComponent from '../ui/FaceComponent';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen w-full p-4 md:p-8 relative overflow-hidden">
      {/* OOPS, SORRY! Section */}
      <div className="absolute w-80 lg:top-64 top-96 right-20 p-8 lg:-rotate-90 lg:text-9xl text-8xl font-black text-slate-500 lg:shadow-2xl lg:border-4 lg:rounded-3xl lg:hover:scale-110 lg:duration-700">
        <p>OOPS, SORRY!</p>
      </div>

      {/* Face Component */}
      <div className="lg:mt-0 mt-[44rem] lg:absolute lg:top-0 lg:left-40 flex justify-center lg:justify-start">
        <FaceComponent />
      </div>

      {/* About Us Content */}
      <div className="lg:pt-[48rem] pt-8 lg:p-5 text-center space-y-5 lg:space-y-0">
        <h1 className={`${montserrat.className} lg:text-8xl font-black uppercase`}>
          About Us
        </h1>
        <p className={`${poppins.className} lg:p-5 lg:text-lg p-2 text-slate-800`}>
          While covering everything, we missed the point of introducing ourselves. We’re the first of a kind creative traditional advertising agency in India, and we help brands like yours leverage traditional advertising at its best. We connect brands with their audience through India’s biggest festivals. Our job is to make sure your customers enjoy your advertising, remember your brand while being in the shopping mall, and connect emotionally to your brand value. We build marketing and advertising campaigns for B2C & D2C brands during the biggest festivals. We help brands attach with the positivity and happiness of Indians.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
