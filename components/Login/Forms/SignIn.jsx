import {FormStyled} from './styles'
import {useRouter} from 'next/router'
import {Button} from 'components/globals-components/Button'
import {Anchor} from 'components/globals-components/Anchor'
import {signInController} from 'controllers/loginController'

export const SignIn = ({user, renderForm, setRenderForm}) => {
	const router = useRouter()

	const sendUserData = (event) => {
		event.preventDefault()
		signInController(user, event, router)
	}
	const saveData = (event) => {
		const input = event.target

		user.setUserData({...user.userData, [input.name]: input.value})
	}

	return (
		<FormStyled>
			<label>
				<img src='/icons/Login/email.svg' alt='' />
				<input
					name='email'
					type='email'
					onChange={(event) => saveData(event)}
					placeholder='email@example.com'
				/>
			</label>
			<label>
				<img src='/icons/Login/password.svg' alt='' />
				<input
					name='password'
					type='password'
					onChange={(event) => saveData(event)}
					placeholder='Contraseña'
				/>
			</label>
			<Anchor renderForm={renderForm} handler={setRenderForm} />
			<Button renderForm={renderForm} handler={sendUserData} />
		</FormStyled>
	)
}
