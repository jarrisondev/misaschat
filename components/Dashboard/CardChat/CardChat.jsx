import { CardChatStyled } from './styles'
import { useChats } from 'hooks/useChats'
import { cardChat } from 'styles/variants/variants'

export const CardChat = ({ chat = null }) => {
  const { setActiveChat } = useChats()
  const lastMessage = chat?.messages[chat.messages.length - 1]

  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={() => setActiveChat(chat)}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{chat.contactName}</h4>
        <p>{lastMessage?.textContent}</p>
      </CardChatStyled>
    </>
  )
}
