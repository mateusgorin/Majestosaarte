'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Star, ShoppingBag, Coffee } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useCart } from '@/hooks/use-cart';

export default function Home() {
  const categories = [
    {
      title: 'Artesanato Cristão',
      description: 'Peças que expressam fé e devoção.',
      icon: <Star className="w-6 h-6" />,
      image: 'https://i.postimg.cc/NMnncdfY/IMG-20260301-WA0192.jpg',
      href: '/artesanato?cat=cristao',
    },
    {
      title: 'Artesanato em Crochê',
      description: 'O aconchego do feito à mão em cada ponto.',
      icon: <Heart className="w-6 h-6" />,
      image: 'https://i.postimg.cc/bJV7vzg5/IMG-20260301-WA0194.jpg',
      href: '/artesanato?cat=croche',
    },
    {
      title: 'Peças Decorativas',
      description: 'Elegância e rusticidade para seu lar.',
      icon: <ShoppingBag className="w-6 h-6" />,
      image: 'https://i.postimg.cc/28ZszNWm/IMG-20260301-WA0196.jpg',
      href: '/artesanato?cat=decor',
    },
    {
      title: 'Delícias Artesanais',
      description: 'Sabor caseiro com ingredientes selecionados.',
      icon: <Coffee className="w-6 h-6" />,
      image: 'https://i.postimg.cc/BvHbDVkz/IMG-20260301-WA0190.jpg',
      href: '/delicias',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[85vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://i.postimg.cc/QtPjyg2x/Picsart-26-03-01-19-33-07-866.png"
                alt="Ateliê Majestosa Arte"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Efeito Vidro (Glassmorphism Overlay) */}
              <div className="absolute inset-0 bg-[#5D4037]/20 backdrop-blur-[3px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-[#C5A059] text-sm font-semibold tracking-widest uppercase mb-6">
                  Ateliê Artesanal
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                  Unindo Fé, Arte e Amor em cada detalhe.
                </h1>
                <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
                  Cada peça da Majestosa Arte é feita totalmente à mão, carregando significado, 
                  cuidado e um propósito espiritual para o seu lar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="/artesanato" 
                      className="bg-white text-[#5D4037] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
                    >
                      <span>Ver Artesanato</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="/delicias" 
                      className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#5D4037] transition-all flex items-center justify-center w-full sm:w-auto"
                    >
                      Delícias Artesanais
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Institutional Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif text-[#5D4037] mb-8">
                    Nossa Essência
                  </h2>
                  <p className="text-lg text-[#3E2723] leading-relaxed mb-6">
                    A Majestosa Arte é um ateliê artesanal dedicado à criação de peças feitas à mão, 
                    unindo fé cristã, arte e amor em cada detalhe.
                  </p>
                  <p className="text-lg text-[#3E2723] leading-relaxed mb-8">
                    Nascemos do desejo de transformar materiais simples em objetos que tocam a alma. 
                    Seja através de uma imagem sacra, um tapete de crochê ou um biscoito caseiro, 
                    nosso objetivo é levar um pedaço de carinho e espiritualidade para a sua vida.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <span className="text-3xl font-serif text-[#C5A059] mb-1">100%</span>
                      <span className="text-sm uppercase tracking-wider text-[#3E2723]/60 font-semibold">Feito à Mão</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-serif text-[#C5A059] mb-1">Fé</span>
                      <span className="text-sm uppercase tracking-wider text-[#3E2723]/60 font-semibold">Em cada detalhe</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-3xl overflow-hidden warm-shadow"
                >
                  <Image
                    src="https://i.postimg.cc/RCQPGCKY/IMG-20260301-WA0199.jpg"
                    alt="Processo Criativo"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none"></div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-24 bg-[#f5f5f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-[#5D4037] mb-4">Explore Nossas Criações</h2>
                <p className="text-[#3E2723]/70 max-w-2xl mx-auto">
                  Dividimos nosso ateliê em categorias para que você encontre exatamente o que sua alma e seu lar precisam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((cat, idx) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Link href={cat.href} className="group block">
                      <div className="bg-white rounded-3xl overflow-hidden warm-shadow transition-all duration-300 border border-[#5D4037]/5">
                        <div className="relative h-64">
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#5D4037]/80 to-transparent opacity-60"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg inline-block">
                              <h3 className="text-sm font-serif font-semibold leading-tight">{cat.title}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-[#3E2723]/70 text-sm mb-4">{cat.description}</p>
                          <span className="text-[#5D4037] font-semibold text-sm flex items-center group-hover:underline">
                            Ver Coleção <ArrowRight className="w-4 h-4 ml-2" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#5D4037] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#C5A059]/20 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full translate-x-32 translate-y-32"></div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h2 className="text-4xl md:text-5xl font-serif mb-8">Dúvidas ou Pedidos Especiais?</h2>
                  <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Estamos prontos para te atender de forma humanizada e personalizada via WhatsApp. 
                    Clique abaixo e fale com a gente!
                  </p>
                  <motion.a 
                    href="https://wa.me/556182493289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl"
                  >
                    <Coffee className="w-6 h-6" />
                    <span>Chamar no WhatsApp</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
    </div>
  );
}
