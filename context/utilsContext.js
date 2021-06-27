import { createContext } from 'react'

export const UtilsContext = createContext({})

export const UtilsContextProvider = ({ children }) => {
  const utils = {
    JWT_TOKEN_NAME: 'misaschats-login'
  }

  return (
    <UtilsContext.Provider value={utils}>
      {children}
    </UtilsContext.Provider>
  )
}
