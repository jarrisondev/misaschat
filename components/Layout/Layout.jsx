import { userContext } from '../../context/userContext'
import { LayoutStyled } from './styles'
import { useState } from 'react'

export const Layout = ({ children }) => {
	const initialUserData = {
		email: '',
		name: '',
		password: '',
	}
	const [userData, setUserData] = useState(initialUserData)

	const providerValue = {
		user: {
			userData,
			setUserData,
			initialUserData,
		},
	}

	return (
		<userContext.Provider value={providerValue}>
			<LayoutStyled>{children}</LayoutStyled>
		</userContext.Provider>
	)
}
