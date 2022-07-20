import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import * as icon from '../../assets/icons'
import style from './navigation.module.css'

let cleanup = true
const Appearance: React.FC = () => {
  const isThemeDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (cleanup) setMounted(true)
    return () => {
      cleanup = false
    }
  }, [])

  const checkIfIsDark = () => {
    return isThemeDark && theme === 'system'
      ? true
      : theme === 'dark' ? true : false
  }
  const handleTheme = () => {
    checkIfIsDark() ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className={style.appearance}>
      {mounted && (
        <button onClick={handleTheme}>
          {checkIfIsDark() ? icon.sun : icon.moon}
        </button>
      )}
    </div>
  )
}

export default Appearance