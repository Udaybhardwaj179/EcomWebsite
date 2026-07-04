'use client';

import React from 'react';
import { brands } from '@/data';

const BrandScroller = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-royal-blue font-bold tracking-widest uppercase text-sm mb-2">Our Premium Brand Partners</h3>
        <div className="w-12 h-1 bg-bright-orange rounded-full" />
      </div>

      <div className="relative flex">
        <div className="flex animate-scroll-slow whitespace-nowrap gap-16 items-center">
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
            >
              <div className="bg-gray-50 px-8 py-4 rounded-xl border border-transparent hover:border-gray-200">
                <span className="text-2xl font-black text-royal-blue/40">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
