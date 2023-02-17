import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={
          "https://fonts.googleapis.com/css2?" +
          "family=Playfair+Display:wght@400;500;600;700;800;900&" +
          "family=Lexend:wght@100;200;300;400;500;600;700;800;900&" +
          "family=Roboto:wght@100;300;400;500;700;900&" +
          // "family=Caveat:wght@400;500;600;700&" +
          "display=swap"
        } rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
