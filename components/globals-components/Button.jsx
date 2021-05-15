import { connection } from 'mongoose'

export const Button = ({ token, userData, setUserData, initialData }) => {
	let text = token ? 'Ingresar' : 'Registrarse'

	const SignUp = async (e) => {
		let flag = true
		e.preventDefault()

		for (let user in userData) {
			if (userData[user] === '') flag = false
		}

		if (flag) {
			const req = await fetch('/api/sign_up', {
				method: 'POST',
				headers: new Headers([['Content-type', 'application/json']]),
				body: JSON.stringify(userData),
			})

			console.log(req)

			if (req.ok) {
				e.target.parentNode.reset()
				setUserData(initialData)
			}
		} else {
			alert('Rellene los campos')
		}
		//
	}
	const SignIn = (e) => {
		e.preventDefault()
		console.log(userData)
	}

	let handler = token ? SignIn : SignUp

	return (
		<button onClick={handler} type='submit'>
			{text}
		</button>
	)
}
