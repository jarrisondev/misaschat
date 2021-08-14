import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ModalContext } from 'context/modalContext'
import { DashboardContext } from 'context/dashboardContext'
import { getChatsController } from 'controllers/dashboardController'

export const useChats = () => {
  const router = useRouter()
  const { setModal } = useContext(ModalContext)
  const { store, setStore } = useContext(DashboardContext)

  const chats = store.chats
  const activeChat = store.activeChat

  const renderMessage = (message) => {
    const newChats = chats?.chats.map((chat) => {
      chat._id === activeChat._id && chat.messages.push(message)
      return chat
    })

    setStore({
      ...store,
      chats: newChats
    })
  }

  const getChats = async () => {
    const res = await getChatsController(router, setModal)
    setStore({
      ...store,
      chats: res
    })
  }

  return {
    getChats,
    renderMessage,
    chats,
    activeChat
  }
}
