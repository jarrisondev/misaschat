import { useContext } from 'react'
import {
  getContactController,
  getUserController
} from 'controllers/dashboardController'
import { ModalContext } from 'context/modalContext'
import { DashboardContext } from 'context/dashboardContext'

export const useUser = () => {
  const { setModal } = useContext(ModalContext)
  const { store, setStore, router, socket } = useContext(DashboardContext)

  const getUser = async () => {
    const user = await getUserController(router, setModal)

    setStore((store) => ({
      ...store,
      user
    }))
  }

  const getContact = async (contactId, setContact) => {
    const contact = await getContactController(contactId, router, setModal)

    if (!contact) setContact(contact?.name)
  }

  const signOut = () => {
    window.localStorage.removeItem(process.env.JWT_TOKEN_NAME)
    router.push('/')
  }

  return {
    user: store.user,
    socket,
    getContact,
    getUser,
    signOut
  }
}
