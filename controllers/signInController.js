export const signInController = async (user, event, router) => {
	const res = await fetch('/api/sign_in', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		res.json().then((data) => {
			user.setUserData(data)
			localStorage.getItem('login')
				? console.log('entra')
				: localStorage.setItem('login', JSON.stringify(data))
		})
		event.target.parentNode.reset()
		router.push('/dashboard')
	} else {
		alert('Datos invalidos')
	}
}
