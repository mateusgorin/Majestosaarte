'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Artesanato', href: '/artesanato' },
    { name: 'Delícias', href: '/delicias' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-[#5D4037]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-[#5D4037]" fill="#5D4037" />
            <span className="text-2xl font-serif font-semibold tracking-tight text-[#5D4037]">
              Majestosa Arte
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={link.href}
                  className="text-[#3E2723] hover:text-[#5D4037] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/carrinho" className="relative p-2 text-[#5D4037] hover:bg-[#5D4037]/5 rounded-full transition-all">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-[#C5A059] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#f5f5f0]">
                    {totalItems}
                  </span>
                )}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/carrinho" className="relative p-2 text-[#5D4037]">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#C5A059] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#f5f5f0]">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#5D4037]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f5f5f0] border-b border-[#5D4037]/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-serif text-[#3E2723] border-b border-[#5D4037]/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
