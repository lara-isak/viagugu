import './globals.css'
import { Inter } from 'next/font/google'
import { Bangers } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter', })
const bangers = Bangers({ weight: '400', variable: '--font-bangers', subsets: ['latin'] })

export const metadata = {
  title: 'viagugu.com',
  description: 'Your favorite artists are just a thousand euros... and a kidney away...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <html lang="en" className={`${inter.variable} ${bangers.variable}`}>
      <body>{children}</body>
    </html>
    </html>
  )
}
