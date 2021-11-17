import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../components/Home/Home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sauterdev | FrontEnd Developer 🧑‍💻</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
