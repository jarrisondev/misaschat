import { useRouter } from 'next/router'
import { MainStyled } from 'styles/dashboard'
import { Layout } from 'components/Layout/Layout'
import { tokenContext } from 'context/tokenContext'
import { ModalContext } from 'context/modalContext'
import { useContext, useEffect, useState } from 'react'
import { getContactsController } from 'controllers/dashboardController'

export default function dashboard () {
  const { JWT_TOKEN_NAME } = useContext(tokenContext)
  const { setModal } = useContext(ModalContext)
  const router = useRouter()
  const [contacts, setContacts] = useState([])

  const SignOut = () => {
    window.localStorage.removeItem(JWT_TOKEN_NAME)
    router.push('/')
  }

  useEffect(async () => {
    const token = JSON.parse(window.localStorage.getItem(JWT_TOKEN_NAME))
    const contacts = await getContactsController(token, router, JWT_TOKEN_NAME, setModal)
    setContacts(contacts)
  }, [])

  return (
    <>
      <Layout>
        <MainStyled>
          <h1>Dashboard</h1>
          {contacts &&
            contacts.map((contact, i) => {
              return (
                <div key={i}>
                  {contact.name} - {contact.email}
                </div>
              )
            })}
          <br />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            cupiditate qui, beatae reiciendis libero sit doloremque modi
            veritatis delectus repudiandae!
          </p>
          <h2> Cerrar sesión</h2>
          <button type='button' onClick={SignOut}>
            Cerrar sesión
          </button>
        </MainStyled>
      </Layout>
    </>
  )
}
