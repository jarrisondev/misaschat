import { useContext } from 'react'
import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'
import { DashboardContext } from 'context/dashboardContext'

export const CardChat = ({
  chat = null,
  user = null,
  handler = null,
  userName = null
}) => {
  const { setActiveChat } = useContext(DashboardContext)
  const name = chat ? chat.names.find((name) => name !== userName) : user.name
  const lastMessage = chat?.messages[chat.messages.length - 1]

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
