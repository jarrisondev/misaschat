import { useContext } from 'react'
import { useRouter } from 'next/router'
import { CardChat } from '../CardChat/CardChat'
import { ModalContext } from 'context/modalContext'
import { createChatController } from 'controllers/dashboardController'

export const CreateChat = ({
  listUsers,
  listChats,
  setCreateUserModal,
  setActiveChat,
  getChats,
  socket
}) => {
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
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <div>Selecciona el usuario</div>
      {listUsers?.map((user, i) => {
        return <CardChat key={i} user={user} handler={() => createChat(user)} />
      })}
    </div>
  )
}
