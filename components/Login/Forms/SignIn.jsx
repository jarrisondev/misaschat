import {FormStyled} from './styles'
import {useRouter} from 'next/router'
import {Button} from 'components/globals-components/Button/Button'
import {Anchor} from 'components/globals-components/Anchor/Anchor'
import {signInController} from 'controllers/loginController'
import {UtilContext} from 'context/utilsContext'
import {useContext} from 'react'

export const SignIn = ({user, renderForm, setRenderForm}) => {
	const {JWT_TOKEN_NAME} = useContext(UtilContext)
	const router = useRouter()

	const sendUserData = (event) => {
		event.preventDefault()
		signInController(user, event, router, JWT_TOKEN_NAME)
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
