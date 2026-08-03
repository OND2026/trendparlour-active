import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://trendparlour.com'),
  applicationName: 'TrendParlour',
  title: {
    default: 'TrendParlour',
    template: '%s | TrendParlour',
  },
  description:
    'TrendParlour is a playful digital space for surprising moments, mini games, quick laughs, and curious discoveries. Stay Curious. Stay Playful.',
  keywords: [
    'TrendParlour',
    'curiosity',
    'playful web experiences',
    'mini games',
    'fun facts',
    'reaction challenge',
    'surprise me',
  ],
  authors: [{ name: 'TrendParlour' }],
  creator: 'TrendParlour',
  publisher: 'TrendParlour',
  openGraph: {
    title: 'TrendParlour',
    description:
      'Stay Curious. Stay Playful. Discover surprising experiences, mini games, and delightfully weird facts.',
    url: 'https://trendparlour.com',
    siteName: 'TrendParlour',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'TrendParlour home page preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrendParlour',
    description:
      'Stay Curious. Stay Playful. Explore playful web experiences designed to spark delight.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#F8F7F2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-RW7WDX2P2E`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RW7WDX2P2E');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
