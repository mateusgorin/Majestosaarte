'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Product } from '@/hooks/use-cart';
import { Filter } from 'lucide-react';

const ARTESANATO_PRODUCTS: Product[] = [
  // Artigos Religiosos
  { id: 'rel-1', name: 'Imagem Sacra Artesanal', price: 120.00, category: 'Religioso', image: 'https://i.postimg.cc/NMnncdfY/IMG-20260301-WA0192.jpg' },
  { id: 'rel-2', name: 'Terço Feito à Mão', price: 45.00, category: 'Religioso', image: 'https://i.postimg.cc/zvK4F4Tq/996660853844339.jpg' },
  { id: 'rel-3', name: 'Escapulário de Porta', price: 65.00, category: 'Religioso', image: 'https://i.postimg.cc/gk0vR3dp/images-2026-03-01T201505-773.jpg' },
  { id: 'rel-4', name: 'Coração 3D Personalizado', price: 85.00, category: 'Religioso', image: 'https://i.postimg.cc/TYZpwb3n/IMG-20260301-WA0222.jpg' },
  
  // Crochê
  { id: 'cro-1', name: 'Tapete de Crochê', price: 150.00, category: 'Crochê', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'cro-2', name: 'Colcha de Retalhos', price: 450.00, category: 'Crochê', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'cro-3', name: 'Forro de Mesa Crochê', price: 180.00, category: 'Crochê', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'cro-4', name: 'Sousplat de Crochê (Un)', price: 35.00, category: 'Crochê', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'cro-5', name: 'Centro de Mesa Crochê', price: 95.00, category: 'Crochê', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  
  // Decorativas
  { id: 'dec-1', name: 'Castiçal de Gesso', price: 55.00, category: 'Decorativo', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'dec-2', name: 'Porta Anel de Gesso', price: 25.00, category: 'Decorativo', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'dec-3', name: 'Porta Joias de Gesso', price: 40.00, category: 'Decorativo', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
  { id: 'dec-4', name: 'Caixa em Madeira MDF', price: 75.00, category: 'Decorativo', image: 'https://i.postimg.cc/RF7pyKbV/em-breve-1.png' },
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
            <h1 className="text-4xl md:text-5xl font-serif text-[#5D4037] mb-4">Artesanato & Decoração</h1>
            <p className="text-[#3E2723]/70 max-w-xl">
              Peças exclusivas feitas à mão com materiais nobres e muito carinho. 
              Cada item é único e carrega a essência do nosso ateliê.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="col-span-2 flex items-center space-x-2 mb-1 sm:mb-0 sm:mr-2">
              <Filter className="w-4 h-4 text-[#5D4037] shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D4037]">Filtrar por Categoria</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all text-center ${
                  filter === cat 
                    ? 'wood-bg text-white shadow-md' 
                    : 'bg-white text-[#3E2723] hover:bg-[#5D4037]/5 border border-[#5D4037]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-[2rem] border border-dashed border-[#5D4037]/30 text-center">
          <p className="text-[#5D4037] font-serif text-xl italic">
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
