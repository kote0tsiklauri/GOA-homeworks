import { createContext } from "react";

export const fontSizeContext = createContext()

export const FontSizeProvider = ({children})=>{
    const fontSize = "20px"
    return <fontSizeContext.Provider value={fontSize}>
        {children}
    </fontSizeContext.Provider>
}