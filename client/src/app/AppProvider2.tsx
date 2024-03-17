'use client'

import { createContext } from "react"

const AppContext = createContext({
    sessionToken: '',
    setSessionToken: (sessionToken: string) => { }
})

export default function AppProvider(
    { children, initialSessionToken = '' }:
        {
            children: React.ReactNode,
            initialSessionToken?: string
        }
) {
    return (
        <AppContext.Provider value={{ sessionToken, setSessionToken }}
    )
}