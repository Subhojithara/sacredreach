"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import UiButton from "../ui/Button";
gsap.registerPlugin(ScrollTrigger);

export default function MarketingComparison() {
  useEffect(() => {
    // Text reveal animation
    gsap.utils.toArray(".reveal-text").forEach((section) => {
      gsap.fromTo(
        section as Element,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section as Element,
            start: "top 100%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    });

    // SVG animation with bounce effect
    gsap.fromTo(
      ".marketing-svg",
      { opacity: 0, scale: 0.8, rotation: 10, y: 20 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".marketing-svg",
          start: "top 100%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="main-h-screen pb-10 overflow-hidden bg-white">
      <div className="container mx-auto lg:flex lg:flex-wrap space-y-12">
        {/* Traditional Marketing Section */}
        <div className="flex flex-wrap w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-extrabold text-left bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 inline-block text-transparent bg-clip-text p-2">
              Traditional Marketing
            </h1>
            <div className="mt-8 w-full text-left reveal-text text-neutral-800 font-['Poppins']">
              <h2 className="text-3xl font-bold">Pros of Traditional</h2>
              <ul className="text-xl font-light space-y-2">
                <li>💸 More cost-effective (if done right)</li>
                <li>🎯 Able to target the entire market + the 61% untapped</li>
                <li>📢 Greater awareness and impact</li>
                <li>⚡ Quicker to implement and gain traction</li>
              </ul>
              <h2 className="text-3xl font-bold mt-6">Cons of Traditional</h2>
              <ul className="text-xl font-light space-y-2">
                <li>🔍 Doesn&apos;t work for very specific audiences</li>
                <li>⛔ Doesn&apos;t work based on intent triggers</li>
                <li>📉 Difficult to build trackable KPIs</li>
                <li>💪 Requires a lot of physical effort and money to scale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className="flex flex-wrap w-full lg:w-1/2 lg:flex-row-reverse">
          <div className="flex flex-col items-end">
            <h1 className="text-5xl font-extrabold text-right bg-gradient-to-r from-lime-300 via-teal-400 to-cyan-500 inline-block text-transparent bg-clip-text p-2">
              Digital Marketing
            </h1>
            <div className="mt-8 w-full lg:pl-44 pl-0 reveal-text text-neutral-800 font-['Poppins']">
              <h2 className="text-3xl font-semibold">Pros of Digital</h2>
              <ul className="text-xl font-light space-y-2">
                <li>🎯 Extremely targeted</li>
                <li>🎯 Based on intent</li>
                <li>💰 Healthy ROI (if done right)</li>
                <li>📈 Scalable once good results are obtained</li>
              </ul>
              <h2 className="text-3xl font-semibold mt-6">Cons of Digital</h2>
              <ul className="text-xl font-light space-y-2">
                <li>💸 Insanely expensive (if not done right)</li>
                <li>🚫 Can&apos;t target the 61% of the market</li>
                <li>💤 Low awareness due to too many distractions</li>
                <li>⏳ Requires time and money to scale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="flex justify-center items-center mt-24 lg:mt-32 text-center px-4">
        <div className="space-y-8">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-neutral-900 uppercase">
            So the best solution? Answer is <span className="text-blue-600">BOTH.</span> Here’s why:
          </h1>
          <p className="lg:text-xl font-medium text-neutral-700">
            Both have their own importance, and you simply can’t miss either—<span className="font-bold uppercase">or else you’ll miss <span className="text-pink-600">50%</span> of the opportunity instantly.</span>
          </p>
          <p className="lg:text-xl font-semibold text-neutral-800">
            Don’t choose between them. Merge both methods and watch your brand soar 📈.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="justify-center items-center flex pt-12">
      <UiButton text={'contact us'} />
      </div>
    </div>
  );
}
