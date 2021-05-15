import { FormStyled } from './styles'

export const SignUp = ({ setUserData, userData }) => {
	const saveUserData = (e) => {
		let target = e.target

		setUserData({ ...userData, [target.name]: target.value })
	}

	return (
		<FormStyled>
			<label>
				<img src='/icons/Login/user.svg' alt='user icon' />
				<input
					name='name'
					onChange={(event) => saveUserData(event)}
					type='text'
					placeholder='Nombre'
					required
				/>
			</label>
			<label>
				<img src='/icons/Login/email.svg' alt='email icon' />
				<input
					name='email'
					onChange={(event) => saveUserData(event)}
					type='email'
					placeholder='email@example.com'
					required
				/>
			</label>
			<label>
				<img src='/icons/Login/password.svg' alt='password' />
				<input
					name='password'
					onChange={(event) => saveUserData(event)}
					type='password'
					placeholder='Contraseña'
					required
				/>
			</label>
		</FormStyled>
	)
}
