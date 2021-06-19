export const signUpController = async (
	event,
	setRenderForm,
	user,
	setRequestInProgress
) => {
	setRequestInProgress(false)
	const res = await fetch('/api/sign_up', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		event.target.parentNode.reset()
		user.setUserData(user.initialUserData)
		setRequestInProgress(true)
		setRenderForm((r) => !r)
	} else {
		setRequestInProgress(true)
		res.json().then((res) => alert(res.message))
	}
}

export const signInController = async (user, event, router, JWT_TOKEN_NAME) => {
	const res = await fetch('/api/sign_in', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		res.json().then((token) => {
			event.target.parentNode.reset()
			localStorage.setItem(JWT_TOKEN_NAME, JSON.stringify(token))
			router.push('/dashboard')
		})
	} else {
		res.json().then((res) => alert(res.message))
	}
}
