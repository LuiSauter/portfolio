import React from 'react'
import Link from 'next/link'
import { NavBtn } from './NavBtn'
import { useRouter } from 'next/router'
useRouter

interface Props {
  text: string
  url: string
  children: JSX.Element
}

export const NavButton = ({ text, url, children }: Props) => {
  const router = useRouter()
  const markCurrentButton = () => {
    return url === router.pathname ? 'current' : ''
  }
  return (
    <NavBtn>
      <Link href={url}>
        <a className={`text-primary ${markCurrentButton()}`} title={text}>
          <span className='text-secondary'>{text}</span>
          <div className='btn-svg'>{children}</div>
        </a>
      </Link>
    </NavBtn>
  )
}
