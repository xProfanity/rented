import { Footer, MobileMenu, Navbar } from '@/components'
import '@/styles/globals.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import type { AppProps } from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'react-loading-skeleton/dist/skeleton.css'

import { StateContext } from '@/context/StateContext'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  nProgress.configure({
    showSpinner: !1,
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StateContext>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <MobileMenu />
          </StateContext>
        </LocalizationProvider>
      </SessionProvider>
    </>
  )
}
