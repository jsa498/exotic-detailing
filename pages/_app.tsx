import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
} 