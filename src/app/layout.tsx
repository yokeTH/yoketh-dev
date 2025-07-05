import type { Metadata } from 'next'
import { Jersey_10 } from 'next/font/google'

import DinoSay from '@/components/dino-say'
import InProgress from '@/components/inprogress'
import Logo from '@/components/logo'
import Menu from '@/components/menu'

import './globals.css'

const jercy10 = Jersey_10({
  weight: '400',
  variable: '--font-jercy-10',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Thanapon | Yoke-TH',
  description:
    'Welcome to Thanapon, the portfolio website of Yoke-TH, showcasing projects, skills, and experiences in software development.',
  keywords: [
    'Thanapon',
    'Yoke-TH',
    'portfolio',
    'developer',
    'software engineering',
    'projects',
  ],
  authors: [{ name: 'Thanapon', url: 'https://yoketh.dev' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Thanapon | Yoke-TH Portfolio',
    description:
      'Explore the portfolio of Yoke-TH, featuring projects and experiences in software development.',
    url: 'https://yoketh.dev',
    siteName: 'Thanapon | Yoke-TH Portfolio',
    images: [
      {
        url: 'https://yoketh.dev/me.webp',
        width: 2048,
        height: 1365,
        alt: 'Thanapon Portfolio Preview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://yoketh.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='no-scrollbar'
    >
      <body className={`${jercy10.variable} antialiased`}>
        <InProgress />
        {children}
        <Logo />
        <Menu />
        <DinoSay />
      </body>
    </html>
  )
}
