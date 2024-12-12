import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import * as icon from '../../assets/icons'
import style from './navigation.module.css'
import useThemes from '../../hooks/useThemes'
import useSound from '../../hooks/useSound'

let cleanup = true
const Appearance: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { checkIfIsDark, setTheme } = useThemes()

  const {playSound} = useSound()

  useEffect(() => {
    if (cleanup) setMounted(true)
    return () => {
      cleanup = false
    }
  }, [])

  const handleTheme = () => {
    checkIfIsDark() ? setTheme('light') : setTheme('dark')
    playSound({audioSrc:'/sounds/button-3.mp3', volume: 1, time: 0.4})
  }

  const titleTheme = mounted ? (checkIfIsDark() ? 'theme Light' : 'theme Dark') : ''

  return (
    <div className={style.appearance}>
      <button
        onClick={handleTheme}
        aria-label='toggle dark mode'
        title={titleTheme}
      >
        {mounted && (checkIfIsDark() ? icon.sun : icon.moon) || ''}
      </button>
    </div>
  )
}

export default Appearance