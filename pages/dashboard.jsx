import { useRouter } from 'next/router'
import { MainStyled } from 'styles/dashboard'
import { dash } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { tokenContext } from 'context/tokenContext'
import { ModalContext } from 'context/modalContext'
import { Chat } from 'components/Dashboard/Chat/Chat'
import { useContext, useEffect, useState } from 'react'
import { CardChat } from 'components/Dashboard/CardChat/CardChat'
import { Button } from 'components/globals-components/Button/Button'
import { getContactsController } from 'controllers/dashboardController'

export default function dashboard () {
  const { JWT_TOKEN_NAME } = useContext(tokenContext)
  const { setModal } = useContext(ModalContext)
  const [contacts, setContacts] = useState([])
  const [chat, setChat] = useState(null)
  const router = useRouter()

  const SignOut = () => {
    window.localStorage.removeItem(JWT_TOKEN_NAME)
    router.push('/')
  }

  const getToken = () => {
    return JSON.parse(window.localStorage.getItem(JWT_TOKEN_NAME))
  }

  useEffect(() => {
    // this controller need to be in the section: add chat
    // the new controller return the contact and the last message from chats collection
    getContactsController(getToken(), router, JWT_TOKEN_NAME, setModal, setContacts)
  }, [])

  return (
    <>
      <Layout>
        {chat
          ? <Chat chat={chat} setChat={setChat} />
          : (
            <MainStyled initial='initial' animate='animate' variants={dash}>
              <header>
                <h2>Buenos Días, <br /> {contacts.user}</h2>
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
                {contacts &&
                contacts?.contacts?.map((contact, i) => {
                  return (
                    <CardChat
                      key={i}
                      contact={contact}
                      userToken={getToken}
                      setChat={setChat}
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
                <Button imgURL='/icons/dashboard/plus.svg' />
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
