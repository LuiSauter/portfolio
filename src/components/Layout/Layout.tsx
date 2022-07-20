import React from 'react'
import Head from 'next/head'
import { Footer } from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import style from './layout.module.css'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({children}: Props) => {
  return (
    <div className={style.layout}>
      <Navigation />
      <main className={style.layoutContent}>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
