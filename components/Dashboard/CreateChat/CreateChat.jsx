import { useEffect } from 'react'
import { useListUsers } from 'hooks/useListUsers'
import { CreateChatCard } from './CreateChatCard/CreateChatCard'

export const CreateChat = () => {
  const {
    getUsers,
    handlerUsersList,
    renderUsersList,
    usersList,
    socket,
    createChat
  } = useListUsers()

  useEffect(() => {
    getUsers()
    socket.on('new-user-created', getUsers)
  }, [])

  return (
    !renderUsersList || (
      <div>
        <button onClick={() => handlerUsersList(false)}>Go back</button>
        <div>Selecciona el usuario</div>
        {usersList?.map((contact, i) => {
          return (
            <CreateChatCard
              key={i}
              contact={contact}
              handler={() => createChat(contact)}
            />
          )
        })}
      </div>
    )
  )
}
