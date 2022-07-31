/* eslint-disable @next/next/inline-script-id */
import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Layout } from '../components/Layout/Layout'
import { ThemeProvider } from '../context/ThemeProvider'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps | any) {
  return (
    <Fragment>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname,});`}
      </Script>
      <ThemeProvider forcedTheme={Component.theme || undefined}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
