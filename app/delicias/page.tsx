'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider, Product } from '@/hooks/use-cart';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

const DELICIAS_PRODUCTS: Product[] = [
  { id: 'del-1', name: 'Biscoitinhos Recheados', price: 22.00, category: 'Biscoitos', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'del-2', name: 'Casadinhos', price: 18.00, category: 'Biscoitos', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'del-3', name: 'Biscoitinho de Ninho', price: 20.00, category: 'Biscoitos', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'del-4', name: 'Brigadeiro Gourmet (6 un)', price: 24.00, category: 'Doces', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'del-5', name: 'Brigadeiro Gourmet (12 un)', price: 42.00, category: 'Doces', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
];

export default function DeliciasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        
        <main className="flex-grow py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-[#C5A059]/10 rounded-full mb-6">
                <Cookie className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#5D4037] mb-4">Delícias Artesanais</h1>
              <p className="text-[#3E2723]/70 max-w-2xl mx-auto">
                Sabores que abraçam. Nossos produtos alimentícios são produzidos de forma totalmente artesanal, 
                com ingredientes selecionados e sem conservantes.
              </p>
              <div className="mt-6 inline-block bg-[#5D4037]/5 px-4 py-2 rounded-lg border border-[#5D4037]/10">
                <p className="text-sm text-[#5D4037] font-medium">
                  ⚠️ Produção limitada para garantir o frescor e a qualidade.
                </p>
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {DELICIAS_PRODUCTS.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-[3rem] p-8 md:p-12 warm-shadow border border-[#5D4037]/5">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://i.postimg.cc/RF7pyKbV/em-breve-1.png"
                  alt="Produção Artesanal"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-[#5D4037] mb-6">Cuidado em cada fornada</h2>
                <p className="text-[#3E2723] leading-relaxed mb-6">
                  Nossas delícias são feitas sob encomenda para garantir que cheguem fresquinhas até você. 
                  Utilizamos receitas tradicionais de família com um toque gourmet moderno.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#3E2723]">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059] mr-3"></div>
                    Ingredientes de primeira qualidade
                  </li>
                  <li className="flex items-center text-[#3E2723]">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059] mr-3"></div>
                    Sem conservantes artificiais
                  </li>
                  <li className="flex items-center text-[#3E2723]">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059] mr-3"></div>
                    Embalagens ideais para presente
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-[#3E2723]/60 italic">
                &quot;Estamos sempre testando novos sabores. Fique de olho para as próximas delícias do nosso cardápio!&quot;
              </p>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
    </div>
  );
}
