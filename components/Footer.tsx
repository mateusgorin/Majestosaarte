import React from 'react';
import Link from 'next/link';
import { Heart, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5A5A40] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-[#C5A059]" fill="#C5A059" />
              <span className="text-2xl font-serif font-semibold tracking-tight">
                Majestosa Arte
              </span>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              A Majestosa Arte é um ateliê artesanal dedicado à criação de peças feitas à mão, 
              unindo fé cristã, arte e amor em cada detalhe. Cada produto carrega significado, 
              cuidado e propósito.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#C5A059]">Navegação</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/artesanato" className="hover:text-white transition-colors">Artesanato</Link></li>
              <li><Link href="/delicias" className="hover:text-white transition-colors">Delícias</Link></li>
              <li><Link href="/carrinho" className="hover:text-white transition-colors">Meu Carrinho</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#C5A059]">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-3xl transition-all hover:bg-white/10 group shadow-lg">
            <a 
              href="https://www.gorinsolucoes.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
            >
              <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Desenvolvido por</span>
              <span className="text-[#C5A059] text-lg font-serif font-bold tracking-tight group-hover:text-white transition-colors">
                Gorin Soluções
              </span>
            </a>
          </div>

          <div className="text-center text-white/30 text-xs">
            <p>&copy; {new Date().getFullYear()} Majestosa Arte. Todos os direitos reservados.</p>
            <p className="mt-1 italic opacity-50">Unindo fé, arte e amor em cada detalhe.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
