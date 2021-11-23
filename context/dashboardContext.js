import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import { ModalContext } from './modalContext'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  getChatsController,
  getUserController
} from 'controllers/dashboardController'

const socket = io(process.env.SOCKET_IO_URL)
export const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {
  const initialState = {
    chats: [],
    user: {},
    activeChat: null,
    usersList: {
      render: false,
      list: null
    }
  }

  const router = useRouter()
  const { setModal } = useContext(ModalContext)
  const [store, setStore] = useState(initialState)

  useEffect(async () => {
    const user = await getUserController()
    const { chats } = await getChatsController(router, setModal)

    setStore((store) => ({
      ...store,
      chats: chats,
      user
    }))
  }, [])

  return (
    <DashboardContext.Provider
      value={{
        store,
        setStore,
        socket,
        router
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
