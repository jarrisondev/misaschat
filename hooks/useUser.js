import { useContext } from 'react'
import { DashboardContext } from 'context/dashboardContext'
import { getUserController } from 'controllers/dashboardController'

export const useUser = () => {
  const { store, setStore, router, socket } = useContext(DashboardContext)

  const getUser = async () => {
    const user = await getUserController()

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
    user: store.user,
    socket,
    getUser,
    signOut
  }
}
