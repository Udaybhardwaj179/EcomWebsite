import React from 'react';
import { Target, Eye, Award, History } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-royal-blue font-outfit mb-6">Our Story</h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            Founded with a passion for technology, OmJi Mobiles has grown from a small local shop to a trusted digital showroom for premium smartphones and accessories.
          </p>
        </div>

        {/* Vision/Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-royal-blue p-12 rounded-[3rem] text-white space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Eye className="text-bright-orange" size={32} />
            </div>
            <h3 className="text-3xl font-bold font-outfit">Our Vision</h3>
            <p className="text-blue-100/70 leading-relaxed">
              To become the leading destination for mobile technology in the region, known for our commitment to authenticity, customer delight, and innovation.
            </p>
          </div>
          <div className="bg-bright-orange p-12 rounded-[3rem] text-white space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Target className="text-royal-blue" size={32} />
            </div>
            <h3 className="text-3xl font-bold font-outfit">Our Mission</h3>
            <p className="text-orange-50/70 leading-relaxed">
              To empower our customers with the best mobile experiences by providing genuine products at competitive prices, backed by exceptional service.
            </p>
          </div>
        </div>

        {/* Stats / Milestones */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 border-y border-gray-100 py-16">
           <div className="text-center">
              <div className="text-5xl font-black text-royal-blue mb-2 font-outfit">10+</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Years of Experience</div>
           </div>
           <div className="text-center">
              <div className="text-5xl font-black text-royal-blue mb-2 font-outfit">15K+</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Happy Customers</div>
           </div>
           <div className="text-center">
              <div className="text-5xl font-black text-royal-blue mb-2 font-outfit">20+</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Brand Partners</div>
           </div>
           <div className="text-center">
              <div className="text-5xl font-black text-royal-blue mb-2 font-outfit">100%</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Genuine Products</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
