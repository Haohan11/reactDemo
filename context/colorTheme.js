import { createContext, useContext } from "react"

const ColorTheme = createContext()

const { color, setColor } = useColor()
 

export default ColorTheme
