import { DashboardContext } from 'context/dashboardContext'
import { getUserController } from 'controllers/dashboardController'
import { useContext } from 'react'

export const useUser = () => {
  const { store, setStore } = useContext(DashboardContext)
  const user = store.user

  const getUser = async () => {
    const user = await getUserController()

    setStore({
      ...store,
      user
    })
  }

  return {
    user,
    getUser
  }
}
