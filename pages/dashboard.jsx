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

  const { setModal } = useContext(ModalContext)

  const [listChats, setListChats] = useState({})
  const [listUsers, setListUsers] = useState([])
  const [activeChat, setActiveChat] = useState(null)
  const [createUserModal, setCreateUserModal] = useState(false)

  const userName = listChats?.userName

  const SignOut = () => {
    window.localStorage.removeItem(process.env.JWT_TOKEN_NAME)
    router.push('/')
  }

  useEffect(() => {
    getChatsController(router, setModal) //
      .then((chats) => setListChats(chats))

    getUsersController(router, setModal) //
      .then((users) => setListUsers(users))
  }, [])

  return (
    <>
      <Layout>
        {activeChat && (
          <Chat chat={activeChat} setChat={setActiveChat} userName={userName} />
        )}
        {createUserModal && (
          <CreateChat
            setActiveChat={setActiveChat}
            listUsers={listUsers}
            listChats={listChats.chats}
            setListChats={setListChats}
            setCreateUserModal={setCreateUserModal}
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
