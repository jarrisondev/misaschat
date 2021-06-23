import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { getContactsController } from 'controllers/dashboardController'
import { MainStyled } from './styles'
import { UtilContext } from 'context/utilsContext'

export const Dashboard = () => {
  const {
    initialUtilValue: { JWT_TOKEN_NAME }
  } = useContext(UtilContext)
  const router = useRouter()
  const [contacts, setContacts] = useState([])

  const SignOut = () => {
    window.localStorage.removeItem(JWT_TOKEN_NAME)
    router.push('/')
  }

  useEffect(async () => {
    const token = JSON.parse(window.localStorage.getItem(JWT_TOKEN_NAME))
    const contacts = await getContactsController(token, router, JWT_TOKEN_NAME)
    setContacts(contacts)
  }, [])

  return (
    <>
      <MainStyled>
        <h1>Dashboard</h1>
        {contacts && contacts.map((contact, i) => {
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
          cupiditate qui, beatae reiciendis libero sit doloremque modi veritatis
          delectus repudiandae!
        </p>
        <h2> Cerrar sesión</h2>
        <button type='button' onClick={SignOut}>
          Cerrar sesión
        </button>
      </MainStyled>
    </>
  )
}
