import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { LayoutStyle } from './LayoutStyle'
import Head from 'next/head'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/sauterdev.jpg' />
        <meta
          name='description'
          content='Portfolio frontend developer Reactjs, Nextjs, typescript, Javascript '
        />
      </Head>
      <Nav />
      <LayoutStyle>{children}</LayoutStyle>
      {/* footer */}
    </>
  )
}
