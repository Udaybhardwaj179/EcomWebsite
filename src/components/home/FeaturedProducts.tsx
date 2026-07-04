'use client';

import React from 'react';
import { products } from '@/data';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="premium-card group"
    >
      <div className="relative h-72 overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-royal-blue text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
            {product.badge}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Link href={`/phones/${product.id}`} className="bg-white text-royal-blue rounded-full p-3 hover:bg-bright-orange hover:text-white transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300">
             <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-xl text-royal-blue">{product.name}</h3>
            <div className="flex text-bright-orange">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              < Star size={14} fill="currentColor" />
            </div>
          </div>
          <p className="text-gray-500 text-xs font-semibold">{product.storage}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.specs.slice(0, 2).map((spec: string) => (
            <span key={spec} className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">
              {spec}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block font-bold uppercase tracking-wider">Starting at</span>
            <span className="text-xl font-black text-royal-blue">{product.price}</span>
          </div>
          <Link 
            href={`/phones/${product.id}`}
            className="text-bright-orange font-bold text-sm flex items-center gap-1 group/btn"
          >
            View Details
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
             <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-bright-orange rounded-full" />
                <h2 className="text-royal-blue font-black uppercase tracking-widest text-sm">Featured Arrivals</h2>
             </div>
             <h3 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit">Premium Smartphones</h3>
          </div>
          <Link href="/phones" className="text-royal-blue font-bold flex items-center gap-2 hover:text-bright-orange transition-colors group">
            Browse All Collection
            <div className="bg-royal-blue/5 p-2 rounded-full group-hover:bg-bright-orange/10 transition-colors">
              <ArrowRight size={18} className="text-royal-blue group-hover:text-bright-orange" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
