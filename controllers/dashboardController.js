export const getContactsController = async (token, router, JWT_TOKEN_NAME) => {
  const res = await window.fetch('/api/get_contacts', {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${token ? token.token : ' '}`]
    ])
  })

  if (res.ok) {
    return res.json().then((res) => res)
  } else {
    res.json().then((res) => {
      if (res.err) {
        window.alert('Unauthorized Token')
        window.localStorage.removeItem(JWT_TOKEN_NAME)
      } else {
        window.alert(res.message)
      }
      router.push('/')
      return []
    })
  }
}
