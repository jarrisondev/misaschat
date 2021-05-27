import React, { useState } from 'react'

export const userContext = React.createContext(null)

export const UserContext = ({ children }) => {
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
			{children}
		</userContext.Provider>
	)
}
