import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import { ModalContext } from './modalContext'
import { getChatsController } from 'controllers/dashboardController'
import { createContext, useContext, useEffect, useState } from 'react'

export const DashboardContext = createContext()

const socket = io(process.env.SOCKET_IO_URL)

export const DashboardContextProvider = ({ children }) => {
  const router = useRouter()
  const { setModal } = useContext(ModalContext)
  const [listChats, setListChats] = useState(null)
  const [activeChat, setActiveChat] = useState(null)

  const renderNewMessage = (chatSeleted, message, chats = listChats) => {
    const newListChats = chats?.chats.map((chat) => {
      chat._id === chatSeleted._id && chat.messages.push(message)
      return chat
    })

    setListChats({
      userName: chats?.userName,
      chats: newListChats
    })
  }

  const getChats = async () => {
    const chats = await getChatsController(router, setModal)

    // Listener newsMessages
    chats?.chats.forEach((chat) => {
      socket.on(chat._id, (message) => {
        renderNewMessage(chat, message, chats)
      })
    })

    setListChats(chats)
    return chats
  }

  useEffect(async () => {
    const chats = await getChats()
    const userId = chats?.userId

    // when is created a chat
    socket.on(userId, getChats)
  }, [])

  return (
    <DashboardContext.Provider
      value={{
        activeChat,
        setActiveChat,
        listChats,
        socket,
        router,
        getChats,
        setListChats,
        renderNewMessage,
        userName: listChats?.userName
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
