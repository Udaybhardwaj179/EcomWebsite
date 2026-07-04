'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data';
import { MessageSquare, Phone, ShieldCheck, Truck, RotateCcw, ArrowLeft, Star, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.id === slug) || products[0];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs / Back */}
        <Link href="/phones" className="inline-flex items-center gap-2 text-royal-blue font-bold mb-8 hover:text-bright-orange transition-colors group">
           <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
           Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Placeholder */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 flex items-center justify-center p-12">
               <img src={product.image} alt={product.name} className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`aspect-square rounded-2xl border-2 overflow-hidden cursor-pointer hover:border-bright-orange transition-all ${i === 1 ? 'border-bright-orange' : 'border-gray-100 bg-gray-50'}`}>
                    <img src={product.image} alt="preview" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                 <span className="bg-orange-100 text-bright-orange px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">{product.brand} Official</span>
                 <div className="flex text-bright-orange">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold ml-1 text-royal-blue">4.9 (120 Reviews)</span>
                 </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit mb-2">{product.name}</h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{product.storage}</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
               <div className="flex items-baseline gap-4 mb-2">
                 <span className="text-4xl font-black text-royal-blue">{product.price}</span>
                 <span className="text-gray-400 line-through font-bold">₹{(parseInt(product.price.replace(/[^\d]/g, '')) * 1.1).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}</span>
                 <span className="text-bright-orange font-bold text-sm">10% OFF</span>
               </div>
               <p className="text-gray-500 text-sm font-medium mb-6">*Price may vary depending on storage variant and offers.</p>
               
               <div className="flex flex-wrap gap-4">
                  <button className="flex-1 btn-secondary py-4">
                    <MessageSquare size={20} />
                    WhatsApp Enquiry
                  </button>
                  <button className="flex-1 btn-outline py-4">
                    <Phone size={20} />
                    Call Store
                  </button>
               </div>
            </div>

            {/* Features/Specs */}
            <div className="space-y-4">
               <h4 className="font-black text-royal-blue uppercase tracking-widest text-sm">Quick Specifications</h4>
               <div className="grid grid-cols-2 gap-4">
                  {product.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
                       <div className="w-2 h-2 bg-bright-orange rounded-full" />
                       <span className="text-sm font-bold text-royal-blue">{spec}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
               <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="text-royal-blue" size={24} />
                  <span className="text-[10px] font-black uppercase text-gray-500">1 Year Brand Warranty</span>
               </div>
               <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="text-royal-blue" size={24} />
                  <span className="text-[10px] font-black uppercase text-gray-500">Free Home Delivery</span>
               </div>
               <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="text-royal-blue" size={24} />
                  <span className="text-[10px] font-black uppercase text-gray-500">7 Days Return Policy</span>
               </div>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-gray-400">
                <button className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-royal-blue transition-colors">
                    <Heart size={16} /> Wishlist
                </button>
                <button className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-royal-blue transition-colors">
                    <Share2 size={16} /> Share Product
                </button>
            </div>
          </div>
        </div>

        {/* Detailed Sections (Placeholders) */}
        <div className="mt-24 space-y-24">
            <div className="bg-royal-blue text-white p-12 md:p-20 rounded-[3rem] text-center">
                <h2 className="text-3xl md:text-5xl font-black mb-8 font-outfit">Detailed Specifications</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                   <div className="space-y-6">
                      <div className="border-b border-white/10 pb-2">
                        <h5 className="text-bright-orange font-bold text-sm uppercase mb-2">Display</h5>
                        <p className="font-medium">LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision</p>
                      </div>
                      <div className="border-b border-white/10 pb-2">
                        <h5 className="text-bright-orange font-bold text-sm uppercase mb-2">Processor</h5>
                        <p className="font-medium">Apple A18 Pro (3 nm) Hexa-core</p>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div className="border-b border-white/10 pb-2">
                        <h5 className="text-bright-orange font-bold text-sm uppercase mb-2">Battery</h5>
                        <p className="font-medium">4500 mAh, 15W MagSafe, 25W Faster Charging</p>
                      </div>
                      <div className="border-b border-white/10 pb-2">
                        <h5 className="text-bright-orange font-bold text-sm uppercase mb-2">Camera</h5>
                        <p className="font-medium">48MP Main + 48MP Ultrawide + 12MP Telephoto</p>
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
