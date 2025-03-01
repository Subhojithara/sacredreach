"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FaceComponent: React.FC = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const updateEyes = (clientX: number, clientY: number) => {
    const eyes = [leftEyeRef.current, rightEyeRef.current];

    eyes.forEach((eye) => {
      if (eye) {
        const eyeball = eye.querySelector('.eyeball') as HTMLDivElement;
        const eyedot = eyeball?.querySelector('.eyedot') as HTMLDivElement;

        if (!eyeball || !eyedot) return;

        const { width: eyeWidth, height: eyeHeight, left, top } = eye.getBoundingClientRect();
        const eyeRadius = eyeWidth / 2;
        const eyeballRadius = eyeball.getBoundingClientRect().width / 2;
        const maxMove = eyeRadius - eyeballRadius;

        const eyeCenterX = left + eyeRadius;
        const eyeCenterY = top + eyeRadius;

        const deltaX = clientX - eyeCenterX;
        const deltaY = clientY - eyeCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.min(maxMove, distance);

        const angle = Math.atan2(deltaY, deltaX);
        const moveX = Math.cos(angle) * maxDistance;
        const moveY = Math.sin(angle) * maxDistance;

        gsap.to(eyeball, {
          x: moveX,
          y: moveY,
          ease: "power3.out", // Smoother easing
          duration: 0.8, // Smoother and slower animation
          overwrite: true,
        });

        const eyedotX = Math.cos(angle) * (eyeballRadius - 12); // Adjusted padding
        const eyedotY = Math.sin(angle) * (eyeballRadius - 12); // Adjusted padding
        gsap.to(eyedot, {
          x: eyedotX,
          y: eyedotY,
          ease: "power3.out", // Smoother easing
          duration: 0.8, // Smoother and slower animation
          overwrite: true,
        });
      }
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => updateEyes(event.clientX, event.clientY));
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      requestAnimationFrame(() => updateEyes(touch.clientX, touch.clientY));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="face w-60 h-60 lg:w-[40rem] lg:h-[40rem] bg-gradient-to-br rounded-s-full from-cyan-400 via-cyan-300 to-cyan-100 flex justify-center items-center relative">
      <div className="face absolute w-80 h-40 lg:w-[56rem] lg:h-[22.5rem] bg-green-200 rounded-full flex justify-center items-center space-x-10 shadow-xl">
        <div ref={leftEyeRef} className="eye h-24 w-24 lg:h-64 lg:w-64 bg-white rounded-full flex justify-center items-center relative shadow-inner">
          <div className="eyeball h-12 w-12 lg:h-32 lg:w-32 bg-black rounded-full flex justify-center items-center relative shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3)] transform translate-y-2">
            <div className="eyedot h-2 w-2 lg:h-5 lg:w-5 bg-white rounded-full absolute shadow-lg"></div>
          </div>
        </div>
        <div ref={rightEyeRef} className="eye h-24 w-24 lg:h-64 lg:w-64 bg-white rounded-full flex justify-center items-center relative shadow-inner">
          <div className="eyeball h-12 w-12 lg:h-32 lg:w-32 bg-black rounded-full flex justify-center items-center relative shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3)] transform translate-y-2">
            <div className="eyedot h-2 w-2 lg:h-5 lg:w-5 bg-white rounded-full absolute shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaceComponent;
