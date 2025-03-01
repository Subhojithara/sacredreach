import React from 'react';

const Conclusion = () => {
  return (
    <div className="p-6 lg:p-16 text-gray-800">
      <div className="relative text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Conclusion
        </h1>
        <p className="max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl mt-4 leading-relaxed">
          Ready to connect your brand to your customer’s core emotions? Let’s chat and explore how we can elevate your brand.
        </p>
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
        </div>
      </div>

      <div className="space-y-8 lg:space-y-10 mt-10 lg:mt-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">
          We’ll help you understand:
        </h1>
        <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-700">
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <span className="flex-grow">How we work</span>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <span className="flex-grow">Some best recommendations for your brand</span>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <span className="flex-grow">A basic level free strategy</span>
          </li>
        </ul>
      </div>

      <div className="text-center lg:text-left mt-10 lg:mt-16">
        <a
          href="https://tidycal.com/joyjitghosh/sacredreach"
          className="inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-transform duration-500"
        >
          Contact Us
        </a>
      </div>

      <div className="mt-12">
      </div>
    </div>
  );
};

export default Conclusion;