import { LoginStyled } from './styles'
import { useState } from 'react'
import { SignIn } from './Forms/SignIn'
import { SignUp } from './Forms/SignUp'

export const Login = () => {
	const [formToken, setFormToken] = useState(true)

	return (
		<>
			<LoginStyled method='POST'>
				<div>
					<h1>Bienvenido a misasChats</h1>
					<p>
						Aplicación web de mensajería a nivel mundial, registrate y descubre
						todo su potencial.
					</p>
				</div>
				<div>
					{formToken ? (
						<SignIn formToken={formToken} setFormToken={setFormToken} />
					) : (
						<SignUp formToken={formToken} setFormToken={setFormToken} />
					)}
				</div>
			</LoginStyled>
		</>
	)
}
