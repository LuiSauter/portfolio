import { useEffect, useState } from "react"
import { DarkState } from "../interfaces/interfaces"
import { DarkContext } from "./DarkContext"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const DarkStateProvider = ({children}: Props): JSX.Element => {
  const initialState: DarkState = {
    isDark: true
  }
  const [isDarkMode, setIsDarkMode] = useState(initialState)
  const {isDark} = isDarkMode

  const setClassesForDarkMode = () => {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    setIsDarkMode({isDark: true})
  }

  const setClassesForLightMode = () => {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
    setIsDarkMode({isDark: false})
  }

  useEffect(() => {
    const data = localStorage.getItem('isDarkMode')
    isDarkMode.isDark && data === 'true' ? setClassesForDarkMode() : setClassesForLightMode()
  }, [isDarkMode.isDark])

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDark))
    setIsDarkMode({isDark: !isDark})
  }

  return (
    <DarkContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkContext.Provider>
  )
}