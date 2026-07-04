'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-royal-blue to-royal-blue-dark">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-bright-orange/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-400/20 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-bright-orange/20 text-bright-orange rounded-full text-sm font-bold tracking-wider uppercase mb-4">
              Premium Digital Showroom
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight font-outfit">
              Your Trusted Store for <span className="text-bright-orange">Latest</span> Smartphones
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-xl"
          >
            Explore the newest smartphones, exciting offers, accessories, and instant support—all in one place. OmJi Mobiles brings you the future of mobile technology today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/phones" className="btn-primary">
              <ShoppingBag size={20} />
              Explore Phones
            </Link>
            <button className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white font-bold transition-all transform hover:scale-105 active:scale-95 group">
              <MessageSquare size={20} className="text-bright-orange" />
              WhatsApp Support
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8 flex gap-8 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-black text-white">10K+</p>
              <p className="text-blue-100/60 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">500+</p>
              <p className="text-blue-100/60 text-sm">New Products</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">15+</p>
              <p className="text-blue-100/60 text-sm">Top Brands</p>
            </div>
          </motion.div>
        </div>

        {/* Visual Content (Smartphone Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Glowing ring */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full scale-125" />
          
          {/* Placeholder for hero image */}
          <div className="relative z-10 flex justify-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800" 
                alt="iPhone 16 Pro" 
                className="w-full h-full object-cover"
              />
              {/* Screen Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* secondary floating element */}
            <motion.div
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute -right-12 top-1/4 w-[200px] h-[400px] bg-black rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden rotate-12 hidden xl:block"
            >
               <img 
                src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800" 
                alt="Samsung Galaxy" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
