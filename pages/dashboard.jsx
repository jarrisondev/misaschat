import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import { MainStyled } from 'styles/dashboard'
import { dash } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { ModalContext } from 'context/modalContext'
import { Chat } from 'components/Dashboard/Chat/Chat'
import { useContext, useEffect, useState } from 'react'
import { CardChat } from 'components/Dashboard/CardChat/CardChat'
import { Button } from 'components/globals-components/Button/Button'
import { CreateChat } from 'components/Dashboard/CreateChat/CreateChat'
import {
  getChatsController,
  getUsersController
} from 'controllers/dashboardController'

export default function dashboard () {
  const router = useRouter()
  const [socket, setSocket] = useState(null)
  const { setModal } = useContext(ModalContext)
  const [listChats, setListChats] = useState(null)
  const [listUsers, setListUsers] = useState(null)
  const [activeChat, setActiveChat] = useState(null)
  const [createUserModal, setCreateUserModal] = useState(false)

  const userName = listChats?.userName

  const SignOut = () => {
    window.localStorage.removeItem(process.env.JWT_TOKEN_NAME)
    router.push('/')
  }

  const updateListener = (chats, socket) => {
    chats.chats.forEach((chat) => {
      socket.on(chat._id, (data) => {
        updateMessage(chat, data.message, chats)
      })
    })
  }

  const updateMessage = (chatSeleted, message, listChat = listChats) => {
    const newListChats = listChat.chats.map((chat) => {
      if (chat._id === chatSeleted._id) chat.messages.push(message)
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
    const users = await getUsersController(router, setModal)
    const chats = await getChats(socket)

    setSocket(socket)
    setListUsers(users)
    socket.on(chats._id, () => getChats(socket))
  }, [])

  return (
    <>
      <Layout>
        {activeChat && (
          <Chat
            chat={activeChat}
            setChat={setActiveChat}
            userName={userName}
            socket={socket}
            updateMessage={updateMessage}
          />
        )}
        {createUserModal && listChats && (
          <CreateChat
            setActiveChat={setActiveChat}
            listChats={listChats.chats}
            listUsers={listUsers}
            getChats={getChats}
            setCreateUserModal={setCreateUserModal}
            socket={socket}
          />
        )}
        {!activeChat && !createUserModal && (
          <MainStyled initial='initial' animate='animate' variants={dash}>
            <header>
              <h2>
                Buenos Días, <br /> {userName}
              </h2>
              <Button
                handler={SignOut}
                imgURL='/icons/dashboard/sign-out.svg'
              />
            </header>
            <div className='button-container'>
              <Button text='Personal' />
              <Button text='Global' />
            </div>
            <div className='chats-container'>
              {listChats?.chats.length === 0 && <h1>No tienes ningún chat</h1>}

              {listChats &&
                listChats?.chats?.map((chat, i) => {
                  return (
                    <CardChat
                      key={i}
                      chat={chat}
                      userName={userName}
                      handler={() => setActiveChat(chat)}
                    />
                  )
                })}
              {!listChats && <h1>Aqui va el skeleton</h1>}
            </div>
            <aside className='aside'>
              <Button
                className='chats-icon'
                text='chats'
                imgURL='/icons/dashboard/chat.svg'
              />
              <Button
                imgURL='/icons/dashboard/plus.svg'
                handler={() => setCreateUserModal(true)}
              />
              <Button
                className='profile-icon'
                text='profile'
                imgURL='/icons/dashboard/user.svg'
              />
            </aside>
          </MainStyled>
        )}
      </Layout>
    </>
  )
}
