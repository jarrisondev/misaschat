import { useContext } from 'react'
import { DashboardContext } from 'context/dashboardContext'
import { getUserController } from 'controllers/dashboardController'

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
