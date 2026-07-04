'use client';

import React, { useState } from 'react';
import { products, brands } from '@/data';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PhonesPage = () => {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  const filteredProducts = products.filter(p => 
    (selectedBrand === 'All' || p.brand === selectedBrand) &&
    (p.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-soft-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit mb-4">Smartphones</h1>
           <p className="text-gray-500 font-medium max-w-2xl">Discover the latest flagship models and budget-friendly smartphones from global brands.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <div className="relative w-full lg:w-1/3">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search model, brand or specs..."
                    className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-bright-orange/30 transition-all text-sm font-medium"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <Filter size={18} className="text-royal-blue" />
                    <span className="text-sm font-bold text-royal-blue">Filter</span>
                </div>
                
                <div className="relative group">
                    <div className="flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="text-sm font-bold text-royal-blue">Brand: {selectedBrand}</span>
                        <ChevronDown size={16} className="text-gray-400 group-hover:rotate-180 transition-transform" />
                    </div>
                    {/* Simple Dropdown Overlay */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 overflow-hidden">
                        {['All', ...brands.map(b => b.name)].map((brand) => (
                            <button 
                                key={brand}
                                onClick={() => setSelectedBrand(brand)}
                                className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-bright-orange text-sm font-bold rounded-lg transition-colors"
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <ArrowUpDown size={18} className="text-royal-blue" />
                    <span className="text-sm font-bold text-royal-blue">Price Low to High</span>
                </div>
            </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="premium-card group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-royal-blue text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">{p.badge}</span>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-lg text-royal-blue mb-1">{p.name}</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase mb-4 tracking-widest">{p.brand}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                            <span className="text-xs text-gray-400 block font-bold">Starts at</span>
                            <span className="text-lg font-black text-royal-blue">{p.price}</span>
                        </div>
                        <Link href={`/phones/${p.id}`} className="bg-bright-orange text-white p-2 rounded-xl hover:shadow-lg hover:shadow-bright-orange/30 transition-all">
                            <SlidersHorizontal size={18} />
                        </Link>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
             <div className="text-6xl mb-4">🔍</div>
             <h3 className="text-2xl font-bold text-royal-blue mb-2">No smartphones found</h3>
             <p className="text-gray-400">Try adjusting your filters or search terms.</p>
             <button onClick={() => { setSearch(''); setSelectedBrand('All'); }} className="mt-6 text-bright-orange font-bold underline">Clear All Filters</button>
          </div>
        )}

        {/* Pagination Placeholder */}
        <div className="mt-16 flex items-center justify-center gap-2">
            {[1,2,3].map(n => (
                <button key={n} className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${n === 1 ? 'bg-royal-blue text-white shadow-lg shadow-royal-blue/30' : 'bg-white text-royal-blue hover:bg-gray-100'}`}>
                    {n}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PhonesPage;
