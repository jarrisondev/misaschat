export const signInController = async (user, event) => {
	const res = await fetch('/api/sign_in', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		res.json().then((data) => user.setUserData(data))
		event.target.parentNode.reset()
	} else {
		alert('Datos invalidos')
	}
}
