import React from "react"
import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-noto' });

const SITE_URL = 'https://www.milkidea.com'
const SITE_NAME = '牛奶創意 Milkidea'
const DEFAULT_TITLE = '牛奶創意 Milkidea｜客製化軟體開發．工廠 AIoT．AI 數位轉型顧問'
const DEFAULT_DESCRIPTION =
  '牛奶創意成立於 2011 年，專精客製化軟體開發、工廠 AIoT 設備故障預知（IFDCS）、電商 ERP／CRM 整合與 AI 數位轉型顧問，已交付 100+ 應用服務、服務逾 15 萬名使用者，歡迎企業與政府單位洽詢。'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s｜牛奶創意 Milkidea',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    '軟體開發公司',
    '客製化系統開發',
    '工廠 AIoT',
    'IFDCS 設備故障預知',
    'AI 數位轉型',
    '都更 AI 協審',
    'LINE Bot 開發',
    '電商 ERP 系統',
    '台北軟體外包',
  ],
  generator: 'v0.app',
  applicationName: SITE_NAME,
  authors: [{ name: '牛奶股份有限公司', url: SITE_URL }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/images/logo-milkidea.png',
        width: 1007,
        height: 393,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/images/logo-milkidea.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
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
    <html lang="zh-TW">
      <body className={`${inter.variable} ${notoSansTC.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
