import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Rented</title>
      <link rel='icon' href='/logo.png' type='image/png'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
