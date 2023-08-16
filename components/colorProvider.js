import React from "react";
import ColorTheme from "@/context/colorTheme";

export const useColor = () => React.useContext(ColorTheme)

const ColorProvider = ({children}) => {
    const [color, setColor] = React.useState()

    return (
        <ColorTheme.Provider value={{color, setColor}}>
            {children}
        </ColorTheme.Provider>
    )
}

export default ColorProvider