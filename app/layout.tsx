import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pulsecraft — Custom Websites That Convert',
  description:
    'Hand-coded, high-performance websites built for small businesses across the US. No page builders. No shortcuts. Just results.',
  keywords: [
    'web development agency',
    'custom websites',
    'small business website',
    'Los Angeles web agency',
    'Next.js developer',
    'hand-coded websites',
    'Pulsecraft',
  ].join(', '),
  authors: [{ name: 'Pulsecraft', url: 'https://www.pulsecraftweb.com' }],
  openGraph: {
    title: 'Pulsecraft — Custom Websites That Convert',
    description:
      'Hand-coded, high-performance websites built for small businesses. No page builders. No shortcuts.',
    url: 'https://www.pulsecraftweb.com',
    siteName: 'Pulsecraft',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraft.png?alt=media&token=3185b202-42f0-4258-b13b-6dc3744ba5e8',
        width: 1080,
        height: 1080,
        alt: 'Pulsecraft — Custom Websites That Convert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#080E1C" />
      </head>
      <body className="font-body antialiased bg-bg text-primary">
        <Navbar />
        {children}
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-26Z1NVG5SL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-26Z1NVG5SL');
          `}
        </Script>
      </body>
    </html>
  );
}
