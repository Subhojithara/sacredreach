import React from 'react';

const Conclusion = () => {
    return (
        <div className="p-6 lg:p-16 space-y-16  text-gray-800">
            {/* Conclusion Section */}
            <div className="relative text-center lg:text-left">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    Conclusion
                </h1>
                <p className="max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 text-lg lg:text-xl mt-4 leading-relaxed">
                    Ready to connect your brand to your customer’s core emotions? Let’s chat and explore how we can elevate your brand.
                </p>
                {/* Decorative Element */}
                <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
                </div>
            </div>

            {/* Understanding Section */}
            <div className="space-y-8 lg:space-y-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left">
                    We’ll help you understand:
                </h1>
                <ul className="space-y-6 text-base sm:text-lg lg:text-xl text-gray-700">
                    <li className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            1
                        </div>
                        <span className="flex-grow">How we work</span>
                    </li>
                    <li className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            2
                        </div>
                        <span className="flex-grow">Some best recommendations for your brand</span>
                    </li>
                    <li className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            3
                        </div>
                        <span className="flex-grow">A basic level free strategy</span>
                    </li>
                </ul>
            </div>

            {/* Contact Button */}
            <div className="text-center lg:text-left">
                <a href="/contact" className="inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-10 py-4 text-lg text-white font-bold uppercase tracking-wide shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-transform duration-500">
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default Conclusion;
