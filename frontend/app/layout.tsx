import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart code AI',
  description: 'Created with Web Wiz',
  generator: 'Smart code AI-10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}