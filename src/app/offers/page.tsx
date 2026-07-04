'use client';

import React from 'react';
import { offers } from '@/data';
import { Tag, BadgePercent, Gift, CreditCard, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const offerIcons = [Tag, Gift, BadgePercent, CreditCard, Users];

const OffersPage = () => {
  return (
    <div className="bg-soft-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit mb-4">Latest Store Offers</h1>
           <p className="text-gray-500 font-medium max-w-2xl">Don&apos;t miss out on these exclusive deals available only at OmJi Mobiles.</p>
        </div>

        <div className="space-y-6">
          {[...offers, ...offers].map((offer, i) => {
            const Icon = offerIcons[i % offerIcons.length];
            return (
              <motion.div
                key={`${offer.title}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:border-bright-orange/30 transition-all"
              >
                <div className="w-20 h-20 bg-bright-orange/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-bright-orange group-hover:rotate-12 transition-all">
                  <Icon className="text-bright-orange group-hover:text-white" size={36} />
                </div>
                <div className="flex-1 text-center md:text-left">
                   <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                      <span className="px-3 py-1 bg-royal-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full">Active</span>
                      <span className="px-3 py-1 bg-orange-100 text-bright-orange text-[10px] font-black uppercase tracking-widest rounded-full">Limited Time</span>
                   </div>
                   <h3 className="text-2xl font-black text-royal-blue mb-2">{offer.title}</h3>
                   <p className="text-gray-500 font-medium">{offer.description}</p>
                </div>
                <div className="shrink-0 flex flex-col items-center md:items-end gap-4">
                   <div className="px-6 py-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                      <span className="text-xs text-gray-400 font-bold block uppercase tracking-widest mb-1">Coupon Code</span>
                      <span className="text-royal-blue font-black tracking-widest">{offer.code}</span>
                   </div>
                   <button className="flex items-center gap-2 text-bright-orange font-bold group/btn">
                      Redeem in Store <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
