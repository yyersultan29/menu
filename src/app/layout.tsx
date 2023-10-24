import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components /Navbar/Navbar'
import { Header } from '@/components /Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My app',
  description: 'Test app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <NavigationBar />
    </html>
  )
}
