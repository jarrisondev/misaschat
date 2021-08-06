import { useRouter } from 'next/router'
import { CardChat } from '../CardChat/CardChat'
import { ModalContext } from 'context/modalContext'
import { useContext, useEffect, useState } from 'react'
import { ActiveChatContext } from 'context/activeChatContext'
import {
  createChatController,
  getUsersController
} from 'controllers/dashboardController'

export const CreateChat = ({
  listChats,
  setCreateUserModal,
  createUserModal,
  getChats,
  socket
}) => {
  const { setActiveChat } = useContext(ActiveChatContext)
  const [listUsers, setListUsers] = useState(null)
  const router = useRouter()
  const { setModal } = useContext(ModalContext)

  const goBack = () => {
    setCreateUserModal(false)
  }

  const createChat = async (user) => {
    const [chat] = listChats.filter((chat) => chat.users.includes(user.id))

    if (chat) setActiveChat(chat)
    else {
      const chat = await createChatController(router, setModal, user)
      const chats = await getChats()

      // this is for update the chatList of the other chat-member
      const [id] = chat.users.filter((id) => id !== chats._id)
      socket.emit(id)
    }
    setCreateUserModal(false)
  }

  useEffect(async () => {
    const users = await getUsersController(router, setModal)
    setListUsers(users)
  }, [])

  return (
    !createUserModal || (
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
