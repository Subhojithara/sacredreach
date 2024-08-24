"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BackgroundBeams } from '../ui/background-beams';
import { Montserrat, Poppins } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

const HeroSection = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const eyeballSize = 100;
  const eyeSize = 200;
  const eyeballRadius = eyeballSize / 2;
  const eyeRadius = eyeSize / 2;
  const maxMove = eyeRadius - eyeballRadius;

  useEffect(() => {
    const eyes = [leftEyeRef.current, rightEyeRef.current];
    
    const updateEyes = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      eyes.forEach((eye) => {
        if (eye) {
          const eyeball = eye.querySelector('.eyeball') as HTMLDivElement;
          const eyedot = eyeball?.querySelector('.eyedot') as HTMLDivElement;

          if (!eyeball || !eyedot) return;

          const { left, top } = eye.getBoundingClientRect();
          const eyeCenterX = left + eyeRadius;
          const eyeCenterY = top + eyeRadius;

          const deltaX = clientX - eyeCenterX;
          const deltaY = clientY - eyeCenterY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const maxDistance = Math.min(maxMove, distance);

          const angle = Math.atan2(deltaY, deltaX);
          const moveX = Math.cos(angle) * maxDistance;
          const moveY = Math.sin(angle) * maxDistance;

          // Animate the eyeball
          gsap.to(eyeball, {
            x: moveX,
            y: moveY,
            ease: "elastic.out(1, 0.3)",
            duration: 0.5,
            overwrite: true,
          });

          // Animate the dot within the eyeball
          const eyedotX = Math.cos(angle) * (eyeballRadius - 5); // Adjust the offset as needed
          const eyedotY = Math.sin(angle) * (eyeballRadius - 5);
          gsap.to(eyedot, {
            x: eyedotX,
            y: eyedotY,
            ease: "elastic.out(1, 0.3)",
            duration: 0.5,
            overwrite: true,
          });
        }
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => updateEyes(event));
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [eyeRadius, maxMove]);

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
          <div className="face w-60 h-60 lg:w-[40rem] lg:h-[40rem] bg-gradient-to-br rounded-s-full from-cyan-400 via-cyan-300 to-cyan-100 flex justify-center items-center">
            <div className="face absolute w-80 h-40 lg:w-[56rem] lg:h-[22.5rem] bg-green-200 rounded-full flex justify-center items-center space-x-10 shadow-xl">
              <div ref={leftEyeRef} className="eye h-24 w-24 lg:h-64 lg:w-64 bg-white rounded-full flex justify-center items-center relative" aria-hidden="true">
                <div className="eyeball h-12 w-12 lg:h-32 lg:w-32 bg-black rounded-full flex justify-center items-center relative">
                  <div className="eyedot h-2 w-2 lg:h-5 lg:w-5 bg-white rounded-full absolute"></div>
                </div>
              </div>
              <div ref={rightEyeRef} className="eye h-24 w-24 lg:h-64 lg:w-64 bg-white rounded-full flex justify-center items-center relative" aria-hidden="true">
                <div className="eyeball h-12 w-12 lg:h-32 lg:w-32 bg-black rounded-full flex justify-center items-center relative">
                  <div className="eyedot h-2 w-2 lg:h-5 lg:w-5 bg-white rounded-full absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
