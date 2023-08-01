import { signIn, useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";


const ApplicationState = createContext(null)

export const StateContext = ({children}) => {
    const [navOpen, setNavOpen] = useState(false)
    const [user, setUser] = useState()
    
    const {data} = useSession()

    const handleNavOpen = () => setNavOpen((current) => !current)

    const handleLogin = async () => {
        try {
            await signIn('google')
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => setUser(data?.user), [data])

    return <ApplicationState.Provider value={{
        navOpen, handleNavOpen,
        handleLogin,
        user
    }}>
        {children}
    </ApplicationState.Provider>
}

export const useStateContext = () => useContext(ApplicationState)