import type { Metadata } from 'next';
import './globals.css';
import ScrollProgress from '@/components/layout/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import FloatingMobileBar from '@/components/layout/FloatingMobileBar';

export const metadata: Metadata = {
  title: 'Gold Bridge Capital Solution | Trade Finance, BG, PBG & SBLC Consultancy',
  description:
    'Your Trust, Our Strength. Helping Contractors, Bidders, Importers, Exporters, and Traders obtain BG (Bank Guarantee), PBG (Performance BG), EMD (Earnest Money Deposit), SBLC, and SLOC through trusted banking channels.',
  keywords: [
    'Trade Finance',
    'Bank Guarantee',
    'BG Facilitation',
    'PBG Consultancy',
    'Performance Bank Guarantee',
    'EMD Guarantee',
    'Earnest Money Deposit',
    'SBLC Facilitation',
    'SLOC Assistance',
    'Standby Letter of Credit',
    'Letter of Credit',
    'Banking Consultancy',
    'Gold Bridge Capital Solution',
    'Mitesh Mehta',
    'International Trade Advisory',
  ],
  icons: {
    icon: [
      { url: '/images/gold-lotus-icon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/images/gold-lotus-icon.png',
    apple: '/images/gold-lotus-icon.png',
  },
  openGraph: {
    title: 'Gold Bridge Capital Solution | Trade Finance & Banking Consultancy',
    description:
      'Helping Importers, Exporters, Manufacturers and International Traders obtain SBLC, SLOC and Banking Facilitation through trusted banking channels.',
    url: 'https://goldbridge.in',
    siteName: 'Gold Bridge Capital Solution',
    images: [{ url: '/images/gold-lotus-icon.png' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/gold-lotus-icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/gold-lotus-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/gold-lotus-icon.png" />
      </head>
      <body className="bg-white text-[#1A1A1A] antialiased selection:bg-[#0B5D4B] selection:text-[#C9A227] min-h-screen flex flex-col">
        <ScrollProgress />
        {children}
        <FloatingMobileBar />
        <BackToTop />
      </body>
    </html>
  );
}
