import './globals.css'
import { Inter } from 'next/font/google'
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brew & Co - Coffee Shop',
  description: 'Experience the perfect blend of comfort and craftsmanship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        {children}
      </body>
    </html>
  )
}
