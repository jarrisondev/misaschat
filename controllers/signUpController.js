export const signUpController = async (
	event,
	renderForm,
	setRenderForm,
	user
) => {
	const res = await fetch('/api/sign_up', {
		method: 'POST',
		headers: new Headers([['Content-type', 'application/json']]),
		body: JSON.stringify(user.userData),
	})

	if (res.ok) {
		event.target.parentNode.reset()
		user.setUserData(user.initialUserData)
		setRenderForm(!renderForm)
	} else {
		res.json().then((res) => alert(res.message))
	}
}
