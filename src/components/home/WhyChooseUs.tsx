import React from 'react';
import { ShieldCheck, Truck, Headphones, RotateCcw, CreditCard, Users } from 'lucide-react';

const reasons = [
  {
    title: 'Genuine Products',
    desc: '100% original products with brand warranty and authentic invoices.',
    icon: ShieldCheck,
  },
  {
    title: 'Best Prices',
    desc: 'Unbeatable prices in the market with additional store discounts.',
    icon: CreditCard,
  },
  {
    title: 'Instant Support',
    desc: 'Round-the-clock assistance via WhatsApp for all your queries.',
    icon: Headphones,
  },
  {
    title: 'Fast Delivery',
    desc: 'Same day delivery within the city and express shipping nationwide.',
    icon: Truck,
  },
  {
    title: 'Exchange Available',
    desc: 'Get the best resale value for your old smartphone instantly.',
    icon: RotateCcw,
  },
  {
    title: 'Trusted by Thousands',
    desc: 'Join our community of over 10,000+ satisfied customers.',
    icon: Users,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-bright-orange font-black uppercase tracking-widest text-sm mb-4">The OmJi Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-black text-royal-blue font-outfit mb-6">Why Choose OmJi Mobiles?</h3>
          <p className="text-gray-500 font-medium">We don&apos;t just sell phones, we build relationships through trust, quality service, and transparency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-8 rounded-3xl border border-gray-100 hover:border-bright-orange/30 hover:bg-orange-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-royal-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-bright-orange transition-colors">
                <reason.icon className="text-royal-blue group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-royal-blue mb-3">{reason.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
