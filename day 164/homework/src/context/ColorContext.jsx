import { createContext } from "react";

export const colorContext = createContext()


export const ColorProvider = ({children})=>{
    const color = "red"
    return <colorContext.Provider value={color}>
        {children}
    </colorContext.Provider>
}
