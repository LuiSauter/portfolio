import Link from 'next/link'
import React from 'react'
import { hrefs } from '../../constants/hrefs'
import style from './navigation.module.css'

type Props = {
  viewport: 'desktop' | 'mobile'
  handleToggle?: () => void
}
const NavLink: React.FC<Props> = ({ viewport, handleToggle }): JSX.Element => {
  return (
    <ul className={viewport ==='mobile' ? style.navMenuContent : style.navMenuDesktop}>
      {hrefs.map((link, index) => (
        <Link href={link.href} key={index}>
          <a onClick={handleToggle} className={style.link}>{link.name}</a>
        </Link>
      ))}
    </ul>
  )
}

export default NavLink