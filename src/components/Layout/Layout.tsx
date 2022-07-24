import Link from 'next/link'
import React from 'react'
import { GithubIcon } from '../../assets/icons/GithubIcon'
import { InstagramIcon } from '../../assets/icons/InstagramIcon'
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
      <footer className={style.footer}>
        <div className={style.meSocial}>
          <a
            href='https://www.instagram.com/sauterdev/'
            target='_blank'
            rel='noreferrer'
            className={style.linkIcon}
          >
            <InstagramIcon />
          </a>
          <a
            href='https://github.com/LuiSauter'
            target='_blank'
            rel='noreferrer'
            className={style.linkIcon}
          >
            <GithubIcon />
          </a>
          <img src='https://gpvc.arturio.dev/LuiSauter' />
        </div>
        <div className={style.created}>
          <span>
            Copyright © 2021-2022 Develop by{' '}
            <Link href='https://github.com/LuiSauter'>
              <a target='_blank'>Luis Gabriel Janco</a>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
