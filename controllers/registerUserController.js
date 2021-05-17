export const registerUserController = async (event, token, setToken, user) => {
	const res = await fetch('/api/sign_up', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		event.target.parentNode.reset()
		user.setUserData(user.initialUserData)
		setToken(!token)
	} else {
		alert('El correo ya se encuentra registrado')
	}
}
