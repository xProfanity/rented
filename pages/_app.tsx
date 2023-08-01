import { MobileMenu, Navbar } from '@/components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { StateContext } from '@/context/StateContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Navbar />
      <MobileMenu />
      <Component {...pageProps} />
      <p>Footer</p>
    </StateContext>
  )
}
