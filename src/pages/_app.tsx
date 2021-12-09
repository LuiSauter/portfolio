import type { AppProps } from 'next/app'
import { DarkStateProvider } from '../context/DarkStateProvider'
import { Layout } from '../Layout/Layout'
import { GlobalStyle } from '../styles/GlobalStyled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkStateProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkStateProvider>
    </>
  )
}

export default MyApp
