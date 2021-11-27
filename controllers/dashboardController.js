import router from 'next/router'

// Functions utils
const JWT_TOKEN_NAME = process.env.JWT_TOKEN_NAME

const getToken = () => {
  return JSON.parse(window.localStorage.getItem(JWT_TOKEN_NAME))?.token
}

const handlerErrors = async (res, setModal, valueToReturn = null) => {
  const error = await res.json()
  if (error.err) {
    window.localStorage.removeItem(JWT_TOKEN_NAME)
    router.push('/')
  }

  setModal({
    token: true,
    principalText: error.message
  })

  return valueToReturn
}
// ---------------

// Controlllers
export const getChatsController = async (setModal) => {
  const res = await window.fetch('/api/get_chats', {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    const chats = await res.json()
    return chats
  } else handlerErrors(res, setModal, [])
}

export const getUsersController = async (setModal) => {
  const res = await window.fetch('/api/get_users', {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    const users = await res.json()
    return users
  } else handlerErrors(res, setModal, [])
}

export const createChatController = async (setModal, user) => {
  const res = await window.fetch(`/api/create_chat?id=${user.id}`, {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    const chatCreated = await res.json()
    return chatCreated
  } else handlerErrors(res, setModal, {})
}

export const getUserController = async (setModal) => {
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
  } else handlerErrors(res, setModal)
}

export const getContactController = async (contactId, setModal) => {
  if (!contactId) return null

  const res = await window.fetch(`/api/get_contact?id=${contactId}`, {
    method: 'GET',
    headers: new window.Headers([
      ['Content-type', 'application/json'],
      ['Authorization', `Bearer ${getToken()}`]
    ])
  })

  if (res.ok) {
    const contact = await res.json()
    return contact
  } else handlerErrors(res, setModal)
}
