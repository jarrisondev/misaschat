export const getUsersController = async () => {
	const res = await fetch('/api/get_users', {
		method: 'GET',
		headers: new Headers([['Content-type', 'application/json']]),
	})

	return res.json().then((data) => data)
}
