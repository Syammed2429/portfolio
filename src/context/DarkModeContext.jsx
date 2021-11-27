import React from "react";
import { Styles } from "./Styles"



export const DarkModeContext = React.createContext();

export const DarkModeContextProvider = ({ children }) => {

    const [modeState, setModeState] = React.useState(Styles.dark)

    const handleThemeChange = (value) => {
        setModeState(value)
    }

    return <DarkModeContext.Provider
        value={{
            Styles,
            modeState,
            handleThemeChange
        }}
    >
        {children}
    </DarkModeContext.Provider>
}


