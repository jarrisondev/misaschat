import {createContext} from 'react'

export const initialcontextValue = {
	JWT_TOKEN_NAME: 'misaschats-login',
}

export const UtilContext = createContext(initialcontextValue)
