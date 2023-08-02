import { Footer, MobileMenu, Navbar } from '@/components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { StateContext } from '@/context/StateContext'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <StateContext>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <MobileMenu />
      </StateContext>
    </SessionProvider>
  )
}
