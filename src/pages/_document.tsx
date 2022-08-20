/* eslint-disable @next/next/no-sync-scripts */
import React, { ReactElement } from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='description'
            content='Front-end developer specializing in the javascript language giving value to software products.'
          />
          <meta property='og:title' content='Luis Gabriel Janco' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://sauterdev.vercel.app' />
          <meta
            property='og:image'
            content='https://sauterdev.vercel.app/sauterdev.jpg'
          />
          <meta
            property='og:description'
            content='Front-end developer specializing in the javascript language giving value to software products.'
          />
          <meta
            property='og:sauterdev'
            content='Luis Gabriel Janco, Front-End Developer'
          />
          <meta
            name='twitter:image:alt'
            content='Luis Gabriel Janco - Front-End Developer'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <link rel='icon' href='/sauterdev.jpg' />
          <meta
            name='google-site-verification'
            content='nk6ETUfejHtjHnkXEBzgWhOOX_k-m3iSSVxpoEbVzGM'
          />
          <script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname,});`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='portal-root' />
        </body>
      </Html>
    )
  }
}

export default MyDocument