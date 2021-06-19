import {LayoutStyled} from './styles'
import {UtilContext, initialcontextValue} from 'context/utilsContext'

export const Layout = ({children}) => {
	return (
		<UtilContext.Provider value={initialcontextValue}>
			<LayoutStyled>{children}</LayoutStyled>
		</UtilContext.Provider>
	)
}
