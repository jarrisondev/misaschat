import { useUser } from 'hooks/useUser'
import { CardChatStyled } from './styles'
import { useChats } from 'hooks/useChats'
import { cardChat } from 'styles/variants/variants'

export const CardChat = ({ chat = null, contact = null, handler = null }) => {
  const { user } = useUser()
  const { setActiveChat } = useChats()

  const lastMessage = chat?.messages[chat.messages.length - 1]
  const name = chat
    ? chat.names.find((name) => name !== user.name)
    : contact.name

  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={() => (handler ? handler() : setActiveChat(chat))}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{name}</h4>
        <p>{lastMessage?.textContent}</p>
      </CardChatStyled>
    </>
  )
}
