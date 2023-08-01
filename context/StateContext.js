import { createContext, useContext, useState } from "react";

const ApplicationState = createContext(null)

export const StateContext = ({children}) => {
    const [navOpen, setNavOpen] = useState(false)
    
    const handleNavOpen = () => setNavOpen((current) => !current)
    
    return <ApplicationState.Provider value={{
        navOpen, handleNavOpen
    }}>
        {children}
    </ApplicationState.Provider>
}

export const useStateContext = () => useContext(ApplicationState)