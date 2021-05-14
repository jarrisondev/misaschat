import { FormStyled } from './styles'

export const SignUp = ({ setData }) => {
	let initialUserData = {
		name: null,
		email: null,
		password: null,
	}

	const saveUserData = (e) => {
		let target = e.target

		if (target.type === 'name') {
			console.log(target.value)
		} else if (target.type === 'email') {
			console.log(target.value)
		} else {
			console.log(target.value)
		}
	}

	return (
		<FormStyled>
			<label>
				<img src='/icons/Login/user.svg' alt='user icon' />
				<input
					onBlur={(event) => saveUserData(event)}
					type='text'
					placeholder='Nombre'
					required
				/>
			</label>
			<label>
				<img src='/icons/Login/email.svg' alt='email icon' />
				<input
					onBlur={(event) => saveUserData(event)}
					type='email'
					placeholder='email@example.com'
					required
				/>
			</label>
			<label>
				<img src='/icons/Login/password.svg' alt='password' />
				<input
					onBlur={(event) => saveUserData(event)}
					type='password'
					placeholder='Contraseña'
					required
				/>
			</label>
		</FormStyled>
	)
}
