import React, { useEffect } from 'react'
import Link from 'next/link'
import style from './navigation.module.css'
import Burger from './Burger'
import NavLink from './NavLink'
import Appearance from './Appearance'
import useToggle from '../../hooks/useToggle'
import useSound from '../../hooks/useSound'

const Navigation: React.FC = () => {
  const [toggle, handleToggle] = useToggle()
  const { playSound } = useSound()

  let cleanup = true
  useEffect(() => {
    if (cleanup) {
      if (toggle) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'auto'
      }
    }
    return () => {
      cleanup = false
    }
  }, [toggle])

  const handleClick = () => {
    playSound({ audioSrc: '/sounds/click.mp3', volume: 0.3, time: 0.8 })
  }

  return (
    <header className={style.header}>
      <div className={style.navbar}>
        <h1 className={style.title}>
          <Link href='/'>
            <a onClick={handleClick}>Luis Gabriel Janco</a>
          </Link>
        </h1>
        <nav className={style.nav}>
          <NavLink viewport='desktop' />
          <Appearance />
          <button
            onClick={handleToggle}
            aria-label='mobile-navigation'
            aria-expanded={toggle}
            className={style.burgerBtn}
          >
            <Burger />
          </button>
          {toggle && <NavLink viewport='mobile' handleToggle={handleToggle} />}
        </nav>
      </div>
    </header>
  )
}
export default Navigation
