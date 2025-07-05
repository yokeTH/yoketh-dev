import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'

import Logo from '@/components/logo'
import Menu from '@/components/menu'

import './globals.css'

const pressStart2P = Press_Start_2P({
  weight: '400',
  variable: '--font-press-start-2p',
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
  authors: [{ name: 'Thanapon', url: 'https://yoke-th.me' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Thanapon | Yoke-TH Portfolio',
    description:
      'Explore the portfolio of Yoke-TH, featuring projects and experiences in software development.',
    url: 'https://yoke-th.me',
    siteName: 'Thanapon | Yoke-TH Portfolio',
    images: [
      {
        url: 'https://yoke-th.me/me.jpg',
        width: 2048,
        height: 1365,
        alt: 'Thanapon Portfolio Preview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://yoke-th.me',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${pressStart2P.variable} antialiased`}>
        <Logo />
        <Menu />
        {children}
      </body>
    </html>
  )
}
