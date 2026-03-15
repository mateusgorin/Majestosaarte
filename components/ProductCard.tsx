'use client';

import React from 'react';
import Image from 'next/image';
import { useCart, Product } from '@/hooks/use-cart';
import { Plus, Minus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="bg-white rounded-3xl overflow-hidden warm-shadow border border-[#5D4037]/5 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-[#f5f5f0]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-[#5D4037]">
            {product.category}
          </span>
          {quantity > 0 && (
            <span className="bg-[#C5A059] text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1">
              <Check className="w-3 h-3" />
              No Carrinho
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-[#3E2723] mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-[#C5A059] font-medium text-lg mb-4">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="w-full wood-bg text-white py-3 rounded-full flex items-center justify-center space-x-2 hover:opacity-90 transition-all group"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              <span className="text-sm font-medium">Adicionar</span>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-[#f5f5f0] rounded-full p-1 border border-[#5D4037]/10">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="p-2 hover:bg-white rounded-full transition-colors text-[#5D4037]"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-[#5D4037]">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="p-2 hover:bg-white rounded-full transition-colors text-[#5D4037]"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
