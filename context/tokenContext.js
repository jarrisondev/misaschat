import { createContext, useState } from 'react'

export const tokenContext = createContext({})

export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  const utils = {
    JWT_TOKEN_NAME: 'misaschats-login',
    token,
    setToken
  }

  return <tokenContext.Provider value={utils}>{children}</tokenContext.Provider>
}
