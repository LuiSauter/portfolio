import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout'
import { ThemeProvider } from '../context/ThemeProvider'
import '../styles/global.css'
import 'atropos/css'

function MyApp({ Component, pageProps }: AppProps | any) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
