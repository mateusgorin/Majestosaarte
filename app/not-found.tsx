import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f0] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-serif text-[#5A5A40] opacity-20">404</h1>
        <div className="relative -mt-16">
          <h2 className="text-3xl font-serif text-[#5A5A40] mb-4">Página não encontrada</h2>
          <p className="text-[#4a4a40]/70 mb-10">
            A peça que você está procurando parece ter sido movida ou ainda não foi criada. 
            Que tal voltar para o início?
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 olive-bg text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para o Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
