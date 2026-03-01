'use client';

import React from 'react';
import Image from 'next/image';
import { useCart, Product } from '@/hooks/use-cart';
import { Plus, Minus, ShoppingBasket, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden warm-shadow border border-[#5A5A40]/5 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-[#f5f5f0]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-[#5A5A40]">
            {product.category}
          </span>
          {quantity > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-[#C5A059] text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1"
            >
              <Check className="w-3 h-3" />
              No Carrinho
            </motion.span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-[#4a4a40] mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-[#C5A059] font-medium text-lg mb-4">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        
        <div className="mt-auto">
          <AnimatePresence mode="wait">
            {quantity === 0 ? (
              <motion.button
                key="add-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => addToCart(product)}
                className="w-full olive-bg text-white py-3 rounded-full flex items-center justify-center space-x-2 hover:opacity-90 transition-all active:scale-95 group"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                <span className="text-sm font-medium">Adicionar</span>
              </motion.button>
            ) : (
              <motion.div
                key="quantity-selector"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between bg-[#f5f5f0] rounded-full p-1 border border-[#5A5A40]/10"
              >
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="p-2 hover:bg-white rounded-full transition-colors text-[#5A5A40]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-[#5A5A40]">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="p-2 hover:bg-white rounded-full transition-colors text-[#5A5A40]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
