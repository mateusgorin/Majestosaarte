import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/hooks/use-cart';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Majestosa Arte | Ateliê Artesanal Cristão',
  description: 'Peças feitas à mão com fé, arte e amor.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="bg-[#f5f5f0] text-[#4a4a40] font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
