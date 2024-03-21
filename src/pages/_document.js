import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}