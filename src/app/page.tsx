import React from 'react';
import Hero from '@/components/home/Hero';
import BrandScroller from '@/components/home/BrandScroller';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import LatestOffers from '@/components/home/LatestOffers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { reviews } from '@/data';
import { Star, Instagram as InstaIcon } from 'lucide-react';

const ReviewCard = ({ review }: { review: any }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 flex flex-col justify-between">
    <div className="mb-6">
      <div className="flex text-bright-orange mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-600 italic leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
    <div className="flex items-center gap-4">
      <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-royal-blue">{review.name}</h4>
        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Verified Buyer</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <BrandScroller />
      <FeaturedProducts />
      <LatestOffers />
      <WhyChooseUs />

      {/* Accessories Preview (Quick version) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h3 className="text-4xl font-black text-royal-blue font-outfit">Premium Accessories</h3>
            <button className="btn-outline">View All Accessories</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {['Earbuds', 'Chargers', 'Smart Watches', 'Cases'].map((cat) => (
              <div key={cat} className="aspect-square bg-white rounded-3xl flex flex-col items-center justify-center p-8 group cursor-pointer hover:shadow-xl transition-all border border-gray-100">
                <div className="w-20 h-20 bg-royal-blue/5 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">📱</span>
                </div>
                <span className="text-royal-blue font-bold text-lg">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-bright-orange font-black uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit">What Our Customers Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery Mock */}
      <section className="py-24 bg-soft-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <InstaIcon size={48} className="text-royal-blue mb-6" />
            <h3 className="text-4xl font-black text-royal-blue font-outfit mb-4">Follow us on Instagram</h3>
            <p className="text-gray-500 font-medium mb-8">Stay updated with latest reels, product launches, and store events.</p>
            <button className="btn-secondary">@omjimobileofficial</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative">
                <img 
                  src={`https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=400&u=${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Insta ${i}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <InstaIcon className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-royal-blue rounded-[3rem] overflow-hidden flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-12 md:p-16 space-y-8 flex flex-col justify-center">
                    <h3 className="text-4xl md:text-5xl font-black text-white font-outfit">Visit Our Store</h3>
                    <div className="space-y-4">
                        <p className="text-blue-100/70 leading-loose">
                            Muzaffarnagar Main Market<br/>
                            Opp. City Bus Stand, Ghanta Ghar Road<br/>
                            Muzaffarnagar, Uttar Pradesh 251001
                        </p>
                        <div className="pt-4 space-y-2">
                           <p className="text-white font-bold flex gap-2"><span>Phone:</span> <span className="text-bright-orange">+91 98765 43210</span></p>
                           <p className="text-white font-bold flex gap-2"><span>Open:</span> <span>10 AM - 9 PM</span></p>
                        </div>
                    </div>
                    <button className="btn-primary w-fit">Get Directions</button>
                </div>
                <div className="flex-1 bg-gray-200 min-h-[400px]">
                    {/* Placeholder for Map */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold uppercase tracking-widest text-sm">
                        Google Maps Integration Placeholder
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
