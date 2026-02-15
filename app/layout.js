import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Travellers of Bangladesh | Inspiration, Information, Escapism',
  description: 'Your ultimate companion for exploring the hidden gems and vibrant landscapes of Bangladesh. Discover travel guides, destination spotlights, and community-driven inspiration.',
  keywords: 'Bangladesh travel, travel guide Bangladesh, Sajek Valley, Sundarbans, Sylhet, Cox\'s Bazar, Bangladesh tourism, solo travel Bangladesh, group travel Bangladesh, budget travel Bangladesh, luxury travel Bangladesh',
  authors: [{ name: 'Travellers of Bangladesh' }],
  openGraph: {
    title: 'Travellers of Bangladesh',
    description: 'Explore Bangladesh like never before with comprehensive travel guides and community insights',
    url: 'https://travellers-bangladesh.com',
    siteName: 'Travellers of Bangladesh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travellers of Bangladesh',
    description: 'Explore Bangladesh like never before',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
