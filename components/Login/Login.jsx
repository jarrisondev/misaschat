import { LoginStyled } from './styles'
import { useContext, useEffect, useState } from 'react'
import { SignIn } from './Forms/SignIn'
import { SignUp } from './Forms/SignUp'
import { useRouter } from 'next/router'
import { userContext } from '../../context/userContext'

export const Login = () => {
	const { user } = useContext(userContext)
	const [formToken, setFormToken] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const userToken = localStorage.getItem('login')

		if (userToken) {
			user.setUserData(JSON.parse(userToken))
			router.push('/dashboard')
		}
	}, [])
	return (
		<>
			<LoginStyled>
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
