import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'

export const CardChat = ({
  chat = null,
  user = null,
  handler,
  userName = null
}) => {
  let name
  if (chat) {
    name = chat.names[0] === userName ? chat.names[1] : chat.names[0]
  } else {
    name = user.name
  }

  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={handler}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{name}</h4>
        <p>{chat?.messages[chat.messages.length - 1]}</p>
      </CardChatStyled>
    </>
  )
}
