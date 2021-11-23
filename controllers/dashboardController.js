const JWT_TOKEN_NAME = process.env.JWT_TOKEN_NAME

const getToken = () => {
  return JSON.parse(window.localStorage.getItem(JWT_TOKEN_NAME))?.token
}

export const getChatsController = async (router, setModal) => {
  const res = await window.fetch('/api/get_chats', {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    return res
      .json() //
      .then((chats) => chats)
  } else {
    res
      .json() //
      .then((res) => {
        if (res.err) window.localStorage.removeItem(JWT_TOKEN_NAME)

        setModal({
          token: true,
          principalText: res.message
        })

        router.push('/')
        return []
      })
  }
}

export const getUsersController = async (router, setModal) => {
  const res = await window.fetch('/api/get_users', {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    return res
      .json() //
      .then((users) => users)
  } else {
    res
      .json() //
      .then((res) => {
        if (res.err) window.localStorage.removeItem(JWT_TOKEN_NAME)

        setModal({
          token: true,
          principalText: res.message
        })

        router.push('/')
        return []
      })
  }
}

export const createChatController = async (router, setModal, user) => {
  const res = await window.fetch(`/api/create_chat?id=${user.id}`, {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    return res
      .json() //
      .then((chat) => chat)
  } else {
    res
      .json() //
      .then((res) => {
        if (res.err) window.localStorage.removeItem(JWT_TOKEN_NAME)

        setModal({
          token: true,
          principalText: res.message
        })

        router.push('/')
        return []
      })
  }
}

export const getUserController = async (router, setModal) => {
  const res = await window.fetch('/api/get_user', {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    const user = await res.json()
    return user
  } else {
    res
      .json() //
      .then((res) => {
        if (res.err) window.localStorage.removeItem(JWT_TOKEN_NAME)

        setModal({
          token: true,
          principalText: res.message
        })

        router.push('/')
        return {}
      })
  }
}
