import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-gradient-to-r from-green to-blue-400'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}