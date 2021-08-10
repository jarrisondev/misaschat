import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import { MainStyled } from 'styles/dashboard'
import { dash } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { ModalContext } from 'context/modalContext'
import { Chat } from 'components/Dashboard/Chat/Chat'
import { useContext, useEffect, useState } from 'react'
import { getChatsController } from 'controllers/dashboardController'
import { ActiveChatContextProvider } from 'context/activeChatContext'
import { CreateChat } from 'components/Dashboard/CreateChat/CreateChat'
import { DashContent } from 'components/Dashboard/DashContent/DashContent'

export default function dashboard () {
  const router = useRouter()
  const [socket, setSocket] = useState(null)
  const { setModal } = useContext(ModalContext)

  const [listChats, setListChats] = useState(null)
  const [createChatModal, setCreateChatModal] = useState(false)
  const userName = listChats?.userName

  const updateListener = (chats, socket) => {
    chats?.chats.forEach((chat) => {
      socket.on(chat._id, (data) => {
        updateMessage(chat, data.message, chats)
      })
    })
  }

  const updateMessage = (chatSeleted, message, listChat = listChats) => {
    const newListChats = listChat.chats.map((chat) => {
      chat._id === chatSeleted._id && chat.messages.push(message)
      return chat
    })

    setListChats({
      userName: listChat.userName,
      chats: newListChats
    })
  }

  const getChats = async (s = socket) => {
    const chats = await getChatsController(router, setModal)

    updateListener(chats, s)
    setListChats(chats)
    return chats
  }

  useEffect(async () => {
    const socket = io(process.env.SOCKET_IO_URL)
    const chats = await getChats(socket)

    setSocket(socket)
    socket.on(chats?._id, () => getChats(socket))
  }, [])

  return (
    <ActiveChatContextProvider>
      <Layout>
        <MainStyled initial='initial' animate='animate' variants={dash}>
          <Chat
            userName={userName}
            socket={socket}
            updateMessage={updateMessage}
          />
          <DashContent
            userName={userName}
            listChats={listChats}
            createChatModal={createChatModal}
            renderCreateUser={setCreateChatModal}
          />
          <CreateChat
            listChats={listChats?.chats}
            createChatModal={createChatModal}
            getChats={getChats}
            setCreateChatModal={setCreateChatModal}
            socket={socket}
          />
        </MainStyled>
      </Layout>
    </ActiveChatContextProvider>
  )
}
