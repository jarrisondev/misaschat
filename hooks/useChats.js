import { ModalContext } from 'context/modalContext'
import { getChatsController } from 'controllers/dashboardController'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

export const useChats = () => {
  const router = useRouter()
  const { setModal } = useContext(ModalContext)

  const [chats, setChats] = useState(null)

  useEffect(async () => {
    const res = await getChatsController(router, setModal)
    setChats(res)
  }, [])

  return {
    chats
  }
}
