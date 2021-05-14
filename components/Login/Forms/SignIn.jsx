import { FormStyled } from './styles'

export const SignIn = (props) => {
	return (
		<FormStyled>
			<label>
				<img src='/icons/Login/email.svg' alt='' />
				<input type='email' placeholder='email@example.com' />
			</label>
			<label>
				<img src='/icons/Login/password.svg' alt='' />
				<input type='password' placeholder='Contraseña' />
			</label>
			<button type='button'>Ingresar</button>
			<p>Registrarse</p>
		</FormStyled>
	)
}
