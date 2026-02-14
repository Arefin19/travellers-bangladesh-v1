import './globals.css'

export const metadata = {
  title: 'Travellers of Bangladesh | Inspiration, Information, Escapism',
  description: 'Discover the hidden gems of Bangladesh—from lush tea gardens to untouched beaches, ancient forests to vibrant cities. Your complete guide to exploring Bangladesh.',
  keywords: [
    'Bangladesh travel',
    'Bangladesh tourism',
    'Sajek Valley',
    'Sundarbans',
    'Cox\'s Bazar',
    'Sylhet tea gardens',
    'Bangladesh destinations',
    'Bangladesh travel guide',
    'Solo travel Bangladesh',
    'Group travel Bangladesh',
    'Budget travel Bangladesh',
    'Luxury travel Bangladesh'
  ],
  authors: [{ name: 'Travellers of Bangladesh' }],
  openGraph: {
    title: 'Travellers of Bangladesh | Inspiration, Information, Escapism',
    description: 'Discover the hidden gems of Bangladesh—from lush tea gardens to untouched beaches, ancient forests to vibrant cities.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'bn_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travellers of Bangladesh',
    description: 'Discover the hidden gems of Bangladesh',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body>{children}</body>
    </html>
  )
}
