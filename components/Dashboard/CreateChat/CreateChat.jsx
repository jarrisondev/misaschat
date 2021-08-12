import { CardChat } from '../CardChat/CardChat'
import { ModalContext } from 'context/modalContext'
import { useContext, useEffect, useState } from 'react'
import { DashboardContext } from 'context/dashboardContext'
import {
  createChatController,
  getUsersController
} from 'controllers/dashboardController'

export const CreateChat = ({ createChatModal, setCreateChatModal }) => {
  const { setModal } = useContext(ModalContext)
  const [listUsers, setListUsers] = useState(null)
  const { setActiveChat, listChats, socket, router, getChats } =
    useContext(DashboardContext)

  const goBack = () => {
    setCreateChatModal(false)
  }

  const getUsers = async () => {
    const users = await getUsersController(router, setModal)
    setListUsers(users)
  }

  const createChat = async (user) => {
    const [chat] = listChats?.chats.filter((chat) =>
      chat.users.includes(user.id)
    )

    if (chat) setActiveChat(chat)
    else {
      const chat = await createChatController(router, setModal, user)
      const chats = await getChats()

      // this is for update the chatList of the other chat-member
      const [id] = chat.users.filter((id) => id !== chats.userId)
      socket.emit(id)
    }
    setCreateChatModal(false)
  }

  useEffect(() => {
    getUsers()
    socket.on('new-user-created', getUsers)
  }, [])

  return (
    !createChatModal || (
      <div>
        <button onClick={goBack}>Go back</button>
        <div>Selecciona el usuario</div>
        {listUsers?.map((user, i) => {
          return (
            <CardChat key={i} user={user} handler={() => createChat(user)} />
          )
        })}
      </div>
    )
  )
}
