import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InternAdda — Global Internship Platform | Verified Opportunities Worldwide',
  description: 'Access verified internships across 40+ countries. Trusted by 500+ companies and 50,000+ students. Part of Upforge Global — your gateway to professional growth.',
  keywords: [
    'global internships',
    'international internship platform',
    'verified student internships',
    'remote internship opportunities',
    'career development platform',
    'professional internship matching',
    'Upforge Global internships'
  ],
  openGraph: {
    title: 'InternAdda — Trusted Global Internship Platform | Powered by Upforge Global',
    description: 'Connect with verified internship opportunities worldwide. Professional-grade platform trusted by leading companies and ambitious students globally.',
    url: 'https://www.internadda.com',
    siteName: 'InternAdda',
    images: [
      {
        url: 'https://www.internadda.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InternAdda — Global Internship Ecosystem by Upforge Global'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InternAdda — Trusted Global Internship Platform',
    description: 'Verified internships worldwide. Professional matching. Trusted by thousands.',
    images: ['https://www.internadda.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.internadda.com',
    languages: {
      'en-US': 'https://www.internadda.com',
      'en-GB': 'https://www.internadda.com/uk',
    }
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export { default } from './_home'
