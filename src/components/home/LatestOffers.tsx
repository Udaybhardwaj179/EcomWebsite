'use client';

import React from 'react';
import { offers } from '@/data';
import { Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestOffers = () => {
  return (
    <section className="py-24 bg-royal-blue overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bright-orange blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-bright-orange font-black uppercase tracking-widest text-sm mb-4">Limited Time Offers</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white font-outfit">Exciting Deals & Rewards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 bg-bright-orange rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Tag className="text-white" size={28} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4">{offer.title}</h4>
                <p className="text-blue-100/60 leading-relaxed mb-8">
                  {offer.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-white/10 rounded-lg">
                  <span className="text-xs text-blue-100/40 font-bold block uppercase mb-1">Promo Code</span>
                  <span className="text-bright-orange font-black text-sm">{offer.code}</span>
                </div>
                <button className="w-12 h-12 bg-white text-royal-blue rounded-full flex items-center justify-center hover:bg-bright-orange hover:text-white transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="btn-primary inline-flex">
                View All Promotional Offers
            </button>
        </div>
      </div>
    </section>
  );
};

export default LatestOffers;
