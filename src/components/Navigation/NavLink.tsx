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

  const handleClick = () => {
    playSound({ audioSrc: '/sounds/click.mp3', volume: 0.3, time: 0.8 })
    handleToggle && handleToggle()
  }

  return (
    <ul
      className={
        viewport === 'mobile' ? style.navMenuContent : style.navMenuDesktop
      }
    >
      {hrefs.map((link, index) =>
        link.disabled ? (
          <span key={index} className={style.disabled}>{link.name}</span>
        ) : (
          <Link href={link.href} key={index} onClick={handleClick}
            className={style.link}>
            {link.name}
          </Link>
        )
      )}
    </ul>
  )
}

export default NavLink
