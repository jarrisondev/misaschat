import { useUser } from 'hooks/useUser'
import { CardChatStyled } from './styles'
import { useChats } from 'hooks/useChats'
import { useEffect, useState } from 'react'
import { cardChat } from 'styles/variants/variants'

export const CardChat = ({ chat = null }) => {
  const [contactName, setContactName] = useState('Cargando...')

  const { setActiveChat } = useChats()
  const { user, getContact } = useUser()
  const lastMessage = chat?.messages[chat.messages.length - 1]
  const [contactId] = chat?.users.filter((id) => id !== user.id) || []

  useEffect(() => {
    getContact(contactId, setContactName)
  }, [])

  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={() => setActiveChat(chat)}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{contactName}</h4>
        <p>{lastMessage?.textContent}</p>
      </CardChatStyled>
    </>
  )
}
