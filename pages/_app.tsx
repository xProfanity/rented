import { Footer, MobileMenu, Navbar } from '@/components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
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
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
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
