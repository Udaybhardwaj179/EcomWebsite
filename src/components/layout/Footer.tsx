import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-royal-blue font-bold text-xl">OM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none">OmJi</span>
                <span className="text-bright-orange font-bold text-xs tracking-widest uppercase">Mobiles</span>
              </div>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Your trusted partner for the latest smartphones and premium accessories. Experience technology like never before with OmJi Mobiles.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bright-orange transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bright-orange transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bright-orange transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bright-orange transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-bright-orange">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-blue-100/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/phones" className="text-blue-100/70 hover:text-white transition-colors">Smartphones</Link></li>
              <li><Link href="/accessories" className="text-blue-100/70 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/offers" className="text-blue-100/70 hover:text-white transition-colors">Latest Offers</Link></li>
              <li><Link href="/about" className="text-blue-100/70 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-bright-orange">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-blue-100/70">
                <MapPin size={22} className="text-bright-orange shrink-0" />
                <span className="text-sm">Main Market, Opp. Bus Stand, City Road, Muzaffarnagar (UP)</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Phone size={18} className="text-bright-orange" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Mail size={18} className="text-bright-orange" />
                <span className="text-sm">hello@omjimobiles.com</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Clock size={18} className="text-bright-orange" />
                <span className="text-sm">10:00 AM - 09:00 PM (Daily)</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-bright-orange">Newsletter</h4>
            <p className="text-blue-100/70 text-sm mb-4">Subscribe to get notifications about latest launches and offers.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-bright-orange text-sm"
              />
              <button className="bg-bright-orange hover:bg-bright-orange-dark text-white font-bold py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/50">
          <p>© 2024 OmJi Mobiles. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
