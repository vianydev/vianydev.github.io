import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vianey - Developer',
  description: 'Web developer and problem solver who loves to build meaningful things',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
         {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
