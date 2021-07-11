import { useRouter } from 'next/router'
import { MainStyled } from 'styles/dashboard'
import { dash } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { tokenContext } from 'context/tokenContext'
import { ModalContext } from 'context/modalContext'
import { Chat } from 'components/Dashboard/Chat/Chat'
import { useContext, useEffect, useState } from 'react'
import { Button } from 'components/globals-components/Button/Button'
import { getContactsController } from 'controllers/dashboardController'
import { CardChat } from 'components/Dashboard/CardChat/CardChat'

export default function dashboard () {
  const { JWT_TOKEN_NAME, token, setToken } = useContext(tokenContext)
  const { setModal } = useContext(ModalContext)
  const [contacts, setContacts] = useState([])
  const [renderChat, setRenderChat] = useState(false)
  const [contact, setContact] = useState(null)
  const router = useRouter()

  const SignOut = () => {
    window.localStorage.removeItem(JWT_TOKEN_NAME)
    router.push('/')
  }

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem(JWT_TOKEN_NAME))
    getContactsController(token, router, JWT_TOKEN_NAME, setModal).then((contacts) => {
      setContacts(contacts)
      setToken(token)
    })
  }, [])

  return (
    <>
      <Layout>
        {renderChat
          ? <Chat contact={contact} user={token} setRenderChat={setRenderChat} />
          : (
            <MainStyled initial='initial' animate='animate' variants={dash}>
              <header>
                <h2>Buenos Días...</h2>
                <Button handler={SignOut} imgURL='/icons/dashboard/sign-out.svg' />
              </header>
              <div className='button-container'>
                <Button text='Personal' />
                <Button text='Global' />
              </div>
              <div className='chats-container'>
                {contacts &&
            contacts.map((contact, i) => {
              return (
                <CardChat key={i} contact={contact} user={token} setContact={setContact} setRenderChat={setRenderChat} />
              )
            })}
              </div>
              <aside className='aside'>
                <Button className='chats-icon' text='chats' imgURL='/icons/dashboard/chat.svg' />
                <Button imgURL='/icons/dashboard/plus.svg' />
                <Button className='profile-icon' text='profile' imgURL='/icons/dashboard/user.svg' />
              </aside>
            </MainStyled>
            )}
      </Layout>
    </>
  )
}
