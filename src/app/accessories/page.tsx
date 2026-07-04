'use client';

import React from 'react';
import { Smartphone, Watch, Headphones, Battery, Speaker, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const accessoryCategories = [
  { name: 'Headphones & Earbuds', icon: Headphones, count: 24, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400' },
  { name: 'Smart Watches', icon: Watch, count: 18, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Chargers & Cables', icon: Battery, count: 42, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400' },
  { name: 'Phone Cases', icon: Smartphone, count: 150, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400' },
  { name: 'Speakers', icon: Speaker, count: 12, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400' },
  { name: 'Screen Protectors', icon: Shield, count: 60, image: 'https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=400' },
];

const AccessoriesPage = () => {
  return (
    <div className="bg-soft-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit mb-4">Premium Accessories</h1>
           <p className="text-gray-500 font-medium max-w-2xl">Complete your mobile experience with our curated selection of high-quality accessories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoryCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="premium-card group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img src={cat.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={cat.name} />
                <div className="absolute inset-0 bg-royal-blue/20 group-hover:bg-royal-blue/10 transition-colors" />
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-4 py-1 border border-white/30">
                  <span className="text-white text-xs font-bold">{cat.count} items</span>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-royal-blue/5 rounded-xl flex items-center justify-center text-royal-blue group-hover:bg-bright-orange group-hover:text-white transition-colors">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="font-bold text-royal-blue">{cat.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
