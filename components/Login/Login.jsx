import { Container } from './styles'
import { SignIn } from './Forms/SignIn'

export const Login = () => {
	return (
		<>
			<Container>
				<div>
					<h1>Bienvenido a misasChats</h1>
					<p>
						Aplicación web de mensajería a nivel mundial, registrate y descubre
						todo su potencial.
					</p>
				</div>
				<SignIn />
			</Container>
		</>
	)
}
