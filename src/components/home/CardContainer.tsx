"use client";

import React from "react";
import Image from "next/image";

const CardContainer = () => {
    return (
        <div className="min-h-screen w-full bg-neutral-950">
            <div className="flex justify-center items-center px-4 sm:px-8 md:px-16 pb-10">
                <div className="w-full lg:w-[80rem]">
                    <div className="card bg-green-500 h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border text-white border-gray-300 rounded-2xl top-[40px] mt-16 flex flex-col justify-center items-center px-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl lg:text-left font-bold text-center lg:w-[40rem] absolute lg:absolute lg:left-10 top-20 lg:top-20 p-4 lg:p-0">
                            There are thousands of digital marketing and advertising consulting firms and experts in India if you need.
                        </h1>
                        <div className="border border-white w-full mt-8 lg:mt-60"></div>
                        <p className="text-center w-full p-4 sm:p-8 text-lg lg:text-2xl font-light absolute bottom-5">
                            But agencies and experts who understands how to leverage traditional marketing for modern day brands and their audience, is really really rare and hard to find.
                        </p>
                    </div>

                    <div className="card bg-green-500/40 backdrop-blur-md h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border border-gray-300 rounded-2xl top-[20px] mt-16 flex justify-center items-center px-4">
                        <h1 className="text-8xl sm:text-2xl md:text-3xl lg:text-[12rem] font-semibold text-white text-center uppercase">
                            Why?
                        </h1>
                    </div>

                    <div className="card bg-green-500/40 backdrop-blur-md h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border border-gray-300 rounded-2xl top-[20px] mt-16 flex justify-center items-center px-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center">
                            Simply because of the Covid wave everyone thinks Digital is the king. But covid said goodbye, but traditional creatives isn’t.
                        </h1>
                    </div>

                    <div className="card bg-green-500 h-[35rem] lg:h-[30rem] sticky border text-white border-gray-300 rounded-2xl top-[40px] mt-16 flex flex-col justify-center items-center px-4">
                        <div className="border-4 border-white lg:h-full w-96 lg:-rotate-90 rounded-2xl lg:shadow-2xl bg-white/20 backdrop-blur-sm"></div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl lg:text-left font-bold text-center lg:w-[46rem] absolute lg:absolute lg:left-10 top-20 lg:top-14 uppercase">
                            And now is the best time to leverage traditional marketing at it’s best.
                        </h1>
                        <p className="lg:w-[28rem] absolute bottom-8 lg:right-10 lg:text-4xl font-bold">
                            Everyone is focused on digital, making traditional marketing the most cost effective marketing channel specifically for B2C and D2C industry.
                        </p>
                    </div>

                    <div className="card bg-green-500 h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border text-white border-gray-300 rounded-2xl top-[40px] mt-16 flex flex-col justify-center items-center px-4">
                        <h1 className="text-4xl lg:text-right sm:text-2xl md:text-3xl lg:text-8xl font-bold text-center lg:w-[60rem] absolute lg:absolute lg:right-10 top-20 lg:top-14">
                            BUT TRADITIONAL ISN’T SIMPLE ANYMORE.
                        </h1>
                        <div className="border border-white w-full mt-8 lg:mt-60"></div>
                        <p className="text-center w-full p-4 sm:p-8 text-base sm:text-xl font-light absolute bottom-5">
                            With the rise of digital and creative marketing at its best, you can’t just put up a banner on the highways and expect your business to grow. Understanding the market and building a marketing workflow that gets in customers with creativity and the right strategy is the only key to <span className="font-black text-2xl">SUCCESS.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
