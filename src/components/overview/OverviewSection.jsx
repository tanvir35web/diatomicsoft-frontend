import Image from 'next/image';
import React from 'react';

const OverViewSection = () => {
  return (
    <div className="py-20">
      {/* Container for the title and description */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg font-medium text-gray-200">We Create World-Class</h2>
        <h1 className="mt-2 text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl">
          Digital Products
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
          Transform your business with our revolutionary software solutions! Explore our suite of exceptional products designed to skyrocket your success!
        </p>
      </div>
      
      {/* Container for product cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {[
          { title: 'Laundry Flutter', bgColor: 'bg-teal-500', iconSrc: '/laundry-icon.svg' },
          { title: 'Maditam', bgColor: 'bg-blue-500', iconSrc: '/meditation-icon.svg' },
          { title: 'Ready ecommerce', bgColor: 'bg-pink-500', iconSrc: '/ecommerce-icon.svg' },
          { title: 'ReadyPos', bgColor: 'bg-blue-700', iconSrc: '/pos-icon.svg' },
        ].map((product, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className={`flex items-center justify-center ${product.bgColor} w-full h-40`}>
              <Image src={product.iconSrc} alt={product.title} width={80} height={80}/>
            </div>
            <div className="flex items-center justify-center w-full h-16 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Button to view all products */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 text-blue-600 font-medium border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OverViewSection;
