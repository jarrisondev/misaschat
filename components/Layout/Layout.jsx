import {LayoutStyled} from './styles'
import {UtilContext} from 'context/utilsContext'
import {useState} from 'react'
import {Modal} from 'components/globals-components/Modal/Modal'

export const Layout = ({children}) => {
	const initialModalData = {
		token: false,
		principalText: '',
	}
	const initialUtilValue = {
		JWT_TOKEN_NAME: 'misaschats-login',
	}

	const [modalData, handlerModalData] = useState(initialModalData)

	return (
		<UtilContext.Provider value={{initialUtilValue, handlerModalData}}>
			<LayoutStyled>
				{children}
				<Modal
					token={modalData.token}
					principalText={modalData.principalText}
					setVisibility={handlerModalData}
				/>
			</LayoutStyled>
		</UtilContext.Provider>
	)
}
