import { signIn } from "next-auth/react";
import { createContext, useContext, useState } from "react";

const ApplicationState = createContext(null)

export const StateContext = ({children}) => {
    const [navOpen, setNavOpen] = useState(false)
    
    const handleNavOpen = () => setNavOpen((current) => !current)

    const handleLogin = async() => {

        try {
            const response = await signIn('google')

            console.log('response', response)
            
        } catch (error) {
            console.log('error', error)
        }

    }
    
    return <ApplicationState.Provider value={{
        navOpen, handleNavOpen,
        handleLogin
    }}>
        {children}
    </ApplicationState.Provider>
}

export const useStateContext = () => useContext(ApplicationState)