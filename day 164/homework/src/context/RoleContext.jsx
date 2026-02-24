import { createContext } from "react";

export const roleContext = createContext()

export const RoleProvider = ({children})=>{
    const role = "admin"
    return <roleContext.Provider value={role}>
        {children}
    </roleContext.Provider>
}