import {LoginStyled} from './styles'
import {useEffect, useState} from 'react'
import {SignIn} from './Forms/SignIn'
import {SignUp} from './Forms/SignUp'
import {useRouter} from 'next/router'

export const Login = () => {
	const initialUserData = {
		email: '',
		name: '',
		password: '',
	}
	const [userData, setUserData] = useState(initialUserData)
	const [renderForm, setRenderForm] = useState(true)
	const router = useRouter()

	useEffect(() => {
		localStorage.getItem('misaschats-login') && router.push('/dashboard')
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
					{renderForm ? (
						<SignIn
							user={{userData, setUserData}}
							renderForm={renderForm}
							setRenderForm={setRenderForm}
						/>
					) : (
						<SignUp
							user={{userData, setUserData}}
							renderForm={renderForm}
							setRenderForm={setRenderForm}
						/>
					)}
				</div>
			</LoginStyled>
		</>
	)
}
