import Header from '@/components/common/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from "next/font/google"
import Footer from '@/components/common/Footer'

const sans = Open_Sans({subsets:['latin']})


export const metadata: Metadata = {
  title: {
    default : 'seokjin의 블로그',
    template: 'seokjin의 블로그 | %s'
  },
  description: '프론트엔드 개발자 seokjin의 블로그',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header/>
        <main className='grow'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
