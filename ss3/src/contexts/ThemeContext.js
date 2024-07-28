import { createContext, useContext } from "react";

export const ThemeContext = createContext()

const useTheme = () => {
    return useContext(ThemeContext)
}


export default useTheme