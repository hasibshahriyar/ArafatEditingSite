import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Arafat Editing — Sports Photography Post-Production',
  description:
    'Premium extractions, composites, and retouching — built for volume sports photographers who demand speed and quality.',
  keywords: 'sports photography, post-production, composites, extractions, retouching, volume photography',
  openGraph: {
    title: 'Arafat Editing — Sports Photography Post-Production',
    description:
      'Premium extractions, composites, and retouching — built for volume sports photographers.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
