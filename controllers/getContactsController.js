export const getContactsController = async (token, router) => {
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
				sessionStorage.removeItem('login')
			} else {
				alert(res.message)
			}
			router.push('/')
			return []
		})
	}
}
