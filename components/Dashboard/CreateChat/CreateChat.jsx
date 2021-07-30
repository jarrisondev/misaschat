import { useContext } from 'react'
import { useRouter } from 'next/router'
import { CardChat } from '../CardChat/CardChat'
import { ModalContext } from 'context/modalContext'
import {
  createChatController,
  getChatsController
} from 'controllers/dashboardController'

export const CreateChat = ({
  listUsers,
  listChats,
  setCreateUserModal,
  setActiveChat,
  setListChats
}) => {
  const router = useRouter()
  const { setModal } = useContext(ModalContext)

  const goBack = () => {
    setCreateUserModal(false)
  }

  const createChat = (user) => {
    const chatExists = listChats.filter((chat) => chat.users.includes(user.id))
    if (chatExists.length === 1) {
      setActiveChat(chatExists[0])
      setCreateUserModal(false)
    } else {
      createChatController(router, setModal, user) //
        .then((chat) => {
          setActiveChat(chat)
          setCreateUserModal(false)

          getChatsController(router, setModal) //
            .then((chats) => setListChats(chats))
        })
    }
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
