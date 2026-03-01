'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider, Product } from '@/hooks/use-cart';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';

const ARTESANATO_PRODUCTS: Product[] = [
  // Artigos Religiosos
  { id: 'rel-1', name: 'Imagem Sacra Artesanal', price: 120.00, category: 'Religioso', image: 'https://i.postimg.cc/NMnncdfY/IMG-20260301-WA0192.jpg' },
  { id: 'rel-2', name: 'Terço Feito à Mão', price: 45.00, category: 'Religioso', image: 'https://i.postimg.cc/zvK4F4Tq/996660853844339.jpg' },
  { id: 'rel-3', name: 'Escapulário de Porta', price: 65.00, category: 'Religioso', image: 'https://i.postimg.cc/gk0vR3dp/images-2026-03-01T201505-773.jpg' },
  { id: 'rel-4', name: 'Coração 3D Personalizado', price: 85.00, category: 'Religioso', image: 'https://i.postimg.cc/TYZpwb3n/IMG-20260301-WA0222.jpg' },
  
  // Crochê
  { id: 'cro-1', name: 'Tapete de Crochê', price: 150.00, category: 'Crochê', image: 'https://picsum.photos/seed/rug/600/600' },
  { id: 'cro-2', name: 'Colcha de Retalhos', price: 450.00, category: 'Crochê', image: 'https://picsum.photos/seed/quilt/600/600' },
  { id: 'cro-3', name: 'Forro de Mesa Crochê', price: 180.00, category: 'Crochê', image: 'https://picsum.photos/seed/tablecloth/600/600' },
  { id: 'cro-4', name: 'Sousplat de Crochê (Un)', price: 35.00, category: 'Crochê', image: 'https://picsum.photos/seed/sousplat/600/600' },
  { id: 'cro-5', name: 'Centro de Mesa Crochê', price: 95.00, category: 'Crochê', image: 'https://picsum.photos/seed/centerpiece/600/600' },
  
  // Decorativas
  { id: 'dec-1', name: 'Castiçal de Gesso', price: 55.00, category: 'Decorativo', image: 'https://picsum.photos/seed/candle/600/600' },
  { id: 'dec-2', name: 'Porta Anel de Gesso', price: 25.00, category: 'Decorativo', image: 'https://picsum.photos/seed/ring/600/600' },
  { id: 'dec-3', name: 'Porta Joias de Gesso', price: 40.00, category: 'Decorativo', image: 'https://picsum.photos/seed/jewelry/600/600' },
  { id: 'dec-4', name: 'Caixa em Madeira MDF', price: 75.00, category: 'Decorativo', image: 'https://picsum.photos/seed/box/600/600' },
];

function ArtesanatoContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat');
  
  const [filter, setFilter] = useState<string>(
    initialCat === 'cristao' ? 'Religioso' : 
    initialCat === 'croche' ? 'Crochê' : 
    initialCat === 'decor' ? 'Decorativo' : 'Todos'
  );

  const filteredProducts = filter === 'Todos' 
    ? ARTESANATO_PRODUCTS 
    : ARTESANATO_PRODUCTS.filter(p => p.category === filter);

  const categories = ['Todos', 'Religioso', 'Crochê', 'Decorativo'];

  return (
    <main className="flex-grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#5A5A40] mb-4">Artesanato & Decoração</h1>
            <p className="text-[#4a4a40]/70 max-w-xl">
              Peças exclusivas feitas à mão com materiais nobres e muito carinho. 
              Cada item é único e carrega a essência do nosso ateliê.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="col-span-2 flex items-center space-x-2 mb-1 sm:mb-0 sm:mr-2">
              <Filter className="w-4 h-4 text-[#5A5A40] shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]">Filtrar por Categoria</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all text-center ${
                  filter === cat 
                    ? 'olive-bg text-white shadow-md' 
                    : 'bg-white text-[#4a4a40] hover:bg-[#5A5A40]/5 border border-[#5A5A40]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-[2rem] border border-dashed border-[#5A5A40]/30 text-center">
          <p className="text-[#5A5A40] font-serif text-xl italic">
            &quot;Novas peças estão sendo criadas com amor neste exato momento. 
            Em breve, mais novidades em nosso catálogo.&quot;
          </p>
        </div>
      </div>
    </main>
  );
}

export default function ArtesanatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <Suspense fallback={<div className="flex-grow flex items-center justify-center">Carregando...</div>}>
          <ArtesanatoContent />
        </Suspense>
        <Footer />
        <WhatsAppButton />
    </div>
  );
}
