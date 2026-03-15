'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trash2, Plus, Minus, ArrowLeft, MessageCircle, ShoppingBag, User, Phone } from 'lucide-react';

function CartContent() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleFinalize = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      alert('Por favor, preencha seu nome e telefone para continuar.');
      return;
    }

    const phoneNumber = '556182493289';
    let message = `*NOVO PEDIDO - MAJESTOSA ARTE*\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Telefone:* ${phone}\n\n`;
    message += `--- *ITENS DO PEDIDO* ---\n\n`;
    
    cart.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
      message += `✅ *${item.name}*\n`;
      message += `   Quantidade: ${item.quantity} un.\n`;
      message += `   Subtotal: R$ ${itemTotal}\n\n`;
    });
    
    message += `---------------------------\n`;
    message += `*VALOR TOTAL: R$ ${totalPrice.toFixed(2).replace('.', ',')}*\n\n`;
    message += `Aguardo seu retorno para combinarmos a entrega e o pagamento!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="bg-white rounded-[3rem] p-12 warm-shadow border border-[#5D4037]/5">
          <div className="bg-[#f5f5f0] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-10 h-10 text-[#5D4037]/30" />
          </div>
          <h2 className="text-3xl font-serif text-[#5D4037] mb-4">Seu carrinho está vazio</h2>
          <p className="text-[#3E2723]/70 mb-10">
            Que tal explorar nossas criações e encontrar algo especial para você ou para presentear?
          </p>
          <Link 
            href="/artesanato" 
            className="inline-flex items-center space-x-2 wood-bg text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para a Loja</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-[#5D4037] mb-12">Meu Carrinho</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 warm-shadow border border-[#5D4037]/5 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-xl font-serif text-[#3E2723] mb-1">{item.name}</h3>
                <p className="text-sm text-[#3E2723]/50 uppercase tracking-wider mb-2">{item.category}</p>
                <p className="text-[#C5A059] font-medium">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
              
              <div className="flex items-center bg-[#f5f5f0] rounded-full p-1 border border-[#5D4037]/10">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 hover:bg-white rounded-full transition-colors text-[#5D4037]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-medium text-[#5D4037]">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-white rounded-full transition-colors text-[#5D4037]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-[#ff4444] hover:bg-[#ff4444]/5 rounded-full transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          
          <button 
            onClick={() => clearCart()}
            className="text-[#3E2723]/50 hover:text-[#ff4444] text-sm font-medium transition-colors flex items-center ml-auto"
          >
            Limpar Carrinho
          </button>

          {/* Mobile Checkout Shortcut */}
          <button 
            onClick={() => document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full wood-bg text-white py-4 rounded-full font-bold flex items-center justify-center space-x-2 shadow-md"
          >
            <span>Ir para Finalização</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>

        {/* Summary & Checkout Form */}
        <div className="lg:col-span-1" id="checkout-form">
          <div className="bg-white rounded-[2.5rem] p-8 warm-shadow border border-[#5D4037]/5 sticky top-32">
            <h2 className="text-2xl font-serif text-[#5D4037] mb-8">Finalizar Pedido</h2>
            
            <form onSubmit={handleFinalize} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5D4037] mb-2 ml-1">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5D4037]/40" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full bg-[#f5f5f0] border border-[#5D4037]/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5D4037] mb-2 ml-1">
                    WhatsApp / Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5D4037]/40" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-[#f5f5f0] border border-[#5D4037]/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-[#5D4037]/10 pt-6 space-y-4">
                <div className="flex justify-between text-[#3E2723]/70">
                  <span>Subtotal ({totalItems} itens)</span>
                  <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-serif text-[#5D4037]">Total</span>
                  <span className="text-3xl font-serif text-[#5D4037] font-bold">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-5 rounded-full font-bold text-lg flex items-center justify-center space-x-3 hover:opacity-90 transition-all shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Finalizar no WhatsApp</span>
              </button>
            </form>
            
            <p className="mt-6 text-center text-xs text-[#3E2723]/50 leading-relaxed">
              Ao clicar em finalizar, você será redirecionado para o WhatsApp com a sua lista de produtos. 
              Lá combinaremos a forma de pagamento e entrega.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-grow bg-[#f5f5f0]">
          <CartContent />
        </main>
        <Footer />
    </div>
  );
}
