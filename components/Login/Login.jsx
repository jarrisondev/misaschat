import { LoginStyled } from './styles'
import { useState } from 'react'
import { Button } from '../globals-components/Button'
import { Anchor } from '../globals-components/Anchor'
import { SignIn } from './Forms/SignIn'
import { SignUp } from './Forms/SignUp'

export const Login = () => {
	let initialData = {
		email: '',
		name: '',
		password: '',
	}
	const [userData, setUserData] = useState(initialData)
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
				<form>
					{formToken ? (
						<SignIn setUserData={setUserData} userData={userData} />
					) : (
						<SignUp setUserData={setUserData} userData={userData} />
					)}
					<br />
					<Anchor handler={setFormToken} token={formToken} />
					<br />
					<Button
						token={formToken}
						userData={userData}
						setUserData={setUserData}
						initialData={initialData}
					/>
				</form>
			</LoginStyled>
		</>
	)
}
