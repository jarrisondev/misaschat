import { useContext } from 'react'
import { useChats } from './useChats'
import { ModalContext } from 'context/modalContext'
import { DashboardContext } from 'context/dashboardContext'
import {
  createChatController,
  getUsersController
} from 'controllers/dashboardController'

export const useListUsers = () => {
  const { setModal } = useContext(ModalContext)
  const { setActiveChat, getChats } = useChats()
  const { store, setStore, socket } = useContext(DashboardContext)

  const chats = store.chats
  const renderUsersList = store.usersList.render
  const usersList = store.usersList.list

  const createChat = async (user) => {
    const [chat] = chats.filter((chat) => chat.users.includes(user.id))

    if (chat) setActiveChat(chat)
    else {
      const NewChat = await createChatController(setModal, user)
      const chats = await getChats()

      // this is for update the chatList of the other chat-member
      const [id] = NewChat.users.filter((id) => id !== chats.userId)
      socket.emit(id)
    }

    setStore((store) => ({
      ...store,
      usersList: {
        ...store.usersList,
        render: false
      }
    }))
  }

  const getUsers = async () => {
    const users = await getUsersController(setModal)

    setStore((store) => ({
      ...store,
      usersList: {
        ...store.usersList,
        list: users
      }
    }))
  }

  const handlerUsersList = (newState) => {
    setStore((store) => ({
      ...store,
      usersList: {
        ...store.usersList,
        render: newState
      }
    }))
  }

  return {
    socket,
    usersList,
    renderUsersList,
    getUsers,
    createChat,
    handlerUsersList
  }
}
