import { createContext } from "react";
import { DarkState } from "../interfaces/interfaces";

export type IsDarkContextProps = {
  isDarkMode: DarkState
  toggleDarkMode: () => void
}

export const DarkContext = createContext<IsDarkContextProps>({} as IsDarkContextProps)