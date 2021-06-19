export const signInController = async (user, event, router) => {
	const res = await fetch('/api/sign_in', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		res.json().then((token) => {
			event.target.parentNode.reset()
			localStorage.setItem('misaschats-login', JSON.stringify(token))
			router.push('/dashboard')
		})
	} else {
		res.json().then((res) => alert(res.message))
	}
}
