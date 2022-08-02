// server rendering styeld-components :)
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
            content='Proffesional Portfolio for Web Developer, Front-End Developer, Back-End Developer, Full-Stack Developer, and more.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Luis Gabriel Janco' />
          <meta
            property='og:description'
            content='Proffesional Portfolio for Web Developer, Front-End Developer, Back-End Developer, Full-Stack Developer, and more.'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <link rel='icon' href='/sauterdev.jpg' />
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