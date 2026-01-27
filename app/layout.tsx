import React from "react"
import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-noto' });

export const metadata: Metadata = {
  title: '牛奶公司 Milkidea | 數位解決方案專家',
  description: '專注於行動應用開發的數位解決方案公司，成立於2011年，已協助客戶發表超過60款應用服務。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansTC.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
