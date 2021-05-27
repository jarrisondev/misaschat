import { UserContext } from '../../context/userContext'
import { LayoutStyled } from './styles'

export const Layout = ({ children }) => {
	return (
		<UserContext>
			<LayoutStyled>{children}</LayoutStyled>
		</UserContext>
	)
}
