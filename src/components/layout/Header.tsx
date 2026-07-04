'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Phone, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Phones', href: '/phones' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'Offers', href: '/offers' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = pathname === '/' && !scrolled;

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4',
        !isTransparent ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">OM</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-black text-xl leading-none transition-colors",
              !isTransparent ? "text-royal-blue" : "text-white"
            )}>
              OmJi
            </span>
            <span className="text-bright-orange font-bold text-xs tracking-widest uppercase">Mobiles</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-semibold transition-colors hover:text-bright-orange',
                pathname === link.href 
                  ? 'text-bright-orange' 
                  : (!isTransparent ? 'text-royal-blue' : 'text-white')
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className={cn(
            "p-2 transition-colors hover:text-bright-orange",
            !isTransparent ? "text-royal-blue" : "text-white"
          )}>
            <Search size={22} />
          </button>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-royal-blue text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-royal-blue-light transition-all transform hover:scale-105"
          >
            <Phone size={16} />
            <span>Enquire</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            !isTransparent ? "text-royal-blue" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-lg font-bold py-2 border-b border-gray-50',
                    pathname === link.href ? 'text-bright-orange' : 'text-royal-blue'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between py-4">
                <div className="flex gap-4">
                  <Instagram className="text-royal-blue" />
                  <span className="text-royal-blue font-bold">Follow Us</span>
                </div>
                <button className="bg-bright-orange text-white px-6 py-2 rounded-full font-bold">
                  WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
