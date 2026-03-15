import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/hooks/use-cart';
import ClientLayout from '@/components/ClientLayout';
import RegisterSW from '@/components/RegisterSW';

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
  icons: {
    icon: 'https://i.postimg.cc/mD3m9q8p/heart-icon.png',
    apple: 'https://i.postimg.cc/mD3m9q8p/heart-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Majestosa Arte',
  },
};

export const viewport = {
  themeColor: '#5D4037',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="bg-[#f5f5f0] text-[#3E2723] font-sans">
        <RegisterSW />
        <CartProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
