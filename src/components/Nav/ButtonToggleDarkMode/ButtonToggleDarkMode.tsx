import React from 'react'
import { MoonIcon } from '../../../assets/icons/MoonIcon'
import { SunIcon } from '../../../assets/icons/SunIcon'
import { useDarkMode } from '../../../hooks/useDarkMode'

export const ButtonToggleDarkMode = () => {
  const {isDarkMode,toggleDarkMode} = useDarkMode()

  const handleClick = () => {
    toggleDarkMode()
  }
  return (
    <button onClick={handleClick}>
      {
        !isDarkMode.isDark ? <MoonIcon /> : <SunIcon />
      }
    </button>
  )
}
