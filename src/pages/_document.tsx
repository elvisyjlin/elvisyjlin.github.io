import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-127452157-1"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-127452157-1');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
