import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components/layout';

// Load Inter font with variable weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Jybek Home Care | Compassionate Care for Your Loved Ones',
    template: '%s | Jybek Home Care',
  },
  description:
    'Find trusted in-home care, assisted living, and caregiver support for your aging loved ones. Jybek Home Care connects families with compassionate, professional caregivers.',
  keywords: [
    'home care',
    'in-home care',
    'elder care',
    'assisted living',
    'memory care',
    'caregiver',
    'senior care',
    'aging care',
    'home health',
    'respite care',
  ],
  authors: [{ name: 'Jybek Home Care' }],
  creator: 'Jybek Home Care',
  publisher: 'Jybek Home Care',
  metadataBase: new URL('https://jybekhomecare.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jybekhomecare.com',
    siteName: 'Jybek Home Care',
    title: 'Jybek Home Care | Compassionate Care for Your Loved Ones',
    description:
      'Find trusted in-home care, assisted living, and caregiver support for your aging loved ones.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jybek Home Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jybek Home Care | Compassionate Care for Your Loved Ones',
    description:
      'Find trusted in-home care, assisted living, and caregiver support for your aging loved ones.',
    images: ['/og-image.jpg'],
    creator: '@jybekhomecare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

