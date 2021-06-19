export const getContactsController = async (token, router, JWT_TOKEN_NAME) => {
	const res = await fetch('/api/get_contacts', {
		method: 'GET',
		headers: new Headers([
			['Content-type', 'application/json'],
			['Authorization', `Bearer ${token ? token.token : ' '}`],
		]),
	})

	if (res.ok) {
		return res.json().then((res) => res)
	} else {
		res.json().then((res) => {
			if (res.err) {
				alert('Unauthorized Token')
				localStorage.removeItem(JWT_TOKEN_NAME)
			} else {
				alert(res.message)
			}
			router.push('/')
			return []
		})
	}
}
