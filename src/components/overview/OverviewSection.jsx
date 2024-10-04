import Image from 'next/image';
import React from 'react';

const services = [
  { title: 'Web Application', iconSrc: '/stock-images/web-appication.png' },
  { title: 'IOS App', iconSrc: '/stock-images/ios-app.png' },
  { title: 'Android App', iconSrc: '/stock-images/android-app-development.png' },
  { title: 'Modern Web Animation', iconSrc: '/stock-images/web-animation.png' },
]

const OverViewSection = () => {
  return (
    <div className="pb-10">
      {/* Container for the title and description */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg font-medium text-gray-600">We Create World-Class</h2>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl lg:text-4xl">
          Digital Products
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
          Transform your business with our revolutionary software solutions! Explore our suite of exceptional products designed to skyrocket your success! 
        </p>
      </div>

      {/* Container for service cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center border border-gray-800 hover:border-gray-600 p-4 cursor-pointer rounded-3xl shadow-lg overflow-hidden transition-shadow duration-300 bg-[#15161e] bg-opacity-65">
            <div className={`flex items-center justify-center w-full h-32 hover:scale-110 duration-300`}>
              <Image src={service.iconSrc} alt={service.title} width={80} height={80} />
            </div>
            <div className="flex items-center justify-center w-full ">
              <h3 className="text-lg font-semibold text-gray-300">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverViewSection;
