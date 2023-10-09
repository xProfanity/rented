import { Footer, MobileMenu, Navbar } from '@/components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'react-loading-skeleton/dist/skeleton.css'

import { StateContext } from '@/context/StateContext'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  nProgress.configure({
    showSpinner: true,
  })

  Router.events.on('routeChangeStart', () => {
    nProgress.start()
  })
  Router.events.on('routeChangeComplete', () => {
    nProgress.done()
  })
  return (
    <>
      <SessionProvider session={session}>
        <StateContext>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <MobileMenu />
        </StateContext>
      </SessionProvider>
    </>
  )
}
