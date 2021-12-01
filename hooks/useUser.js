import { useContext } from 'react'
import { ModalContext } from 'context/modalContext'
import { DashboardContext } from 'context/dashboardContext'
import { getUserController } from 'controllers/dashboardController'

export const useUser = () => {
  const { setModal } = useContext(ModalContext)
  const { store, setStore, router, socket } = useContext(DashboardContext)

  const getUser = async () => {
    const user = await getUserController(setModal)

    setStore((store) => ({
      ...store,
      user
    }))
  }

  const signOut = () => {
    window.localStorage.removeItem(process.env.JWT_TOKEN_NAME)
    router.push('/')
  }

  return {
    socket,
    user: store.user,
    getUser,
    signOut
  }
}
