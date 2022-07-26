import Link from 'next/link'
import React from 'react'
import { hrefs } from '../../constants/hrefs'
import useSound from '../../hooks/useSound'
import style from './navigation.module.css'

type Props = {
  viewport: 'desktop' | 'mobile'
  handleToggle?: () => void
}
const NavLink: React.FC<Props> = ({ viewport, handleToggle }): JSX.Element => {
  const { playSound } = useSound()
  const mouseEnter = () => {
    playSound({ audioSrc: '/sounds/nav-hover-2.mp3', volume: 0.7, time: 0.9 })
  }

  const handleClick = () => {
    playSound({ audioSrc: '/sounds/click.mp3', volume: 0.3, time: 0.8 })
    handleToggle && handleToggle()
  }

  return (
    <ul className={viewport ==='mobile' ? style.navMenuContent : style.navMenuDesktop}>
      {hrefs.map((link, index) => (
        <Link href={link.href} key={index}>
          <a onMouseEnter={mouseEnter} onClick={handleClick} className={style.link}>{link.name}</a>
        </Link>
      ))}
    </ul>
  )
}

export default NavLink