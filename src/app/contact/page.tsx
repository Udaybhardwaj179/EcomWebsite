import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-soft-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-royal-blue font-outfit mb-6">Get in Touch</h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            Have questions about a model or an exchange offer? We&apos;re here to help. Reach out to us via any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex items-start gap-4 shadow-sm">
               <div className="w-12 h-12 bg-royal-blue/5 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-royal-blue" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-royal-blue mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm font-medium">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm font-medium">+91 0123 456789</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex items-start gap-4 shadow-sm">
               <div className="w-12 h-12 bg-royal-blue/5 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="text-bright-orange" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-royal-blue mb-1">WhatsApp</h4>
                  <p className="text-gray-500 text-sm font-medium">Click to chat with us</p>
                  <button className="mt-2 text-bright-orange font-bold text-sm">Start Chat</button>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex items-start gap-4 shadow-sm">
               <div className="w-12 h-12 bg-royal-blue/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-royal-blue" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-royal-blue mb-1">Store Address</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    Main Market, Opp. City Bus Stand, Ghanta Ghar Road, Muzaffarnagar (UP)
                  </p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue opacity-[0.02] rounded-full translate-x-1/2 -translate-y-1/2" />
             
             <h3 className="text-3xl font-bold text-royal-blue mb-8">Send us a Message</h3>
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-1">Name</label>
                   <input type="text" placeholder="Your Full Name" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-bright-orange/30 transition-all font-bold text-royal-blue" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-1">Phone</label>
                   <input type="tel" placeholder="Mobile Number" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-bright-orange/30 transition-all font-bold text-royal-blue" />
                </div>
                <div className="space-y-2 md:col-span-2">
                   <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-1">Interested In</label>
                   <select className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-bright-orange/30 transition-all font-bold text-royal-blue">
                      <option>iPhone 16 Series</option>
                      <option>Samsung Galaxy S Series</option>
                      <option>OnePlus Latest Models</option>
                      <option>Accessories</option>
                      <option>Exchange Offer</option>
                   </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                   <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-1">Message</label>
                   <textarea rows={4} placeholder="Tell us what you're looking for..." className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-bright-orange/30 transition-all font-bold text-royal-blue"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                   <button className="btn-primary w-full md:w-fit py-4 px-12">
                      <Send size={18} />
                      Send Message
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
