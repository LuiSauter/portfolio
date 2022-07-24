// server rendering styeld-components :)
import React, { ReactElement } from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `,
            }}
          /> */}
          <meta charSet='utf-8' />
          <link rel='icon' href='/sauterdev.jpg' />
          <meta
            name='description'
            content='Proffesional Portfolio for Web Developer, Front-End Developer, Back-End Developer, Full-Stack Developer, and more.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Luis Gabriel Janco' />
          <meta
            property='og:description'
            content='Proffesional Portfolio for Web Developer, Front-End Developer, Back-End Developer, Full-Stack Developer, and more.'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument