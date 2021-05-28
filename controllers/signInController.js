export const signInController = async (user, event, router) => {
	const res = await fetch('/api/sign_in', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		res.json().then((token) => {
			sessionStorage.setItem('login', JSON.stringify(token))
			user.setUserData(token)
		})
		event.target.parentNode.reset()
		router.push('/dashboard')
	} else {
		res.json().then((res) => alert(res.message))
	}
}
