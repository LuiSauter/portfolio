import { useContext, useEffect } from "react"
import { DarkContext } from "../context/DarkContext"


export const useDarkMode = () => {
  const {isDarkMode, toggleDarkMode} = useContext(DarkContext)

  return {isDarkMode, toggleDarkMode}
}