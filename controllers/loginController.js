export const signUpController = async (
  data,
  setRequestInProgress,
  handlerModalData
) => {
  setRequestInProgress(true)
  const res = await window.fetch('/api/sign_up', {
    method: 'POST',
    headers: new window.Headers([['Content-type', 'application/json']]),
    body: JSON.stringify(data)
  })

  if (res.ok) {
    setRequestInProgress(false)
  } else {
    setRequestInProgress(false)
    res.json().then((res) =>
      handlerModalData({
        token: true,
        principalText: res.message
      })
    )
  }
}

export const signInController = async (
  data,
  router,
  JWT_TOKEN_NAME,
  handlerModalData
) => {
  const res = await window.fetch('/api/sign_in', {
    method: 'POST',
    headers: new window.Headers([['Content-type', 'application/json']]),
    body: JSON.stringify(data)
  })

  if (res.ok) {
    res.json().then((token) => {
      window.localStorage.setItem(JWT_TOKEN_NAME, JSON.stringify(token))
      router.push('/dashboard')
    })
  } else {
    res.json().then((res) =>
      handlerModalData({
        token: true,
        principalText: res.message
      })
    )
  }
}
