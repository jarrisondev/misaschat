import { useContext } from 'react'
import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'
import { ActiveChatContext } from 'context/activeChatContext'

export const CardChat = ({
  chat = null,
  user = null,
  handler = null,
  userName = null
}) => {
  const { setActiveChat } = useContext(ActiveChatContext)
  const name = chat ? chat.names.find((name) => name !== userName) : user.name

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
        <p>{chat?.messages[chat.messages.length - 1]}</p>
      </CardChatStyled>
    </>
  )
}
