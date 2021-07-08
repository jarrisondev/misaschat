import { createContext } from 'react'

export const tokenContext = createContext({})

export const TokenContextProvider = ({ children }) => {
  const utils = {
    JWT_TOKEN_NAME: 'misaschats-login'
  }

  return <tokenContext.Provider value={utils}>{children}</tokenContext.Provider>
}
