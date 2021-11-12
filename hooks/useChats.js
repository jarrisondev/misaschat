import { useContext } from 'react'
import { ModalContext } from 'context/modalContext'
import { DashboardContext } from 'context/dashboardContext'
import { getChatsController } from 'controllers/dashboardController'

export const useChats = () => {
  const { setModal } = useContext(ModalContext)
  const { store, setStore, router } = useContext(DashboardContext)

  const chats = store.chats
  const activeChat = store.activeChat

  const renderMessage = (message) => {
    const newChats = chats.map((chat) => {
      chat._id === activeChat._id && chat.messages.push(message)
      return chat
    })

    setStore({
      ...store,
      chats: newChats
    })
  }

  const getChats = async () => {
    const { chats } = await getChatsController(router, setModal)
    setStore({
      ...store,
      chats: chats
    })

    return chats
  }

  const setActiveChat = (newState) => {
    setStore({
      ...store,
      activeChat: newState
    })
  }

  return {
    router,
    chats,
    activeChat,
    getChats,
    renderMessage,
    setActiveChat
  }
}
