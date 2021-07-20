import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'
// import { useRouter } from 'next/router'

export const CardChat = ({ chat, setActiveChat }) => {
  // const router = useRouter()

  const handlerClick = () => {
    setActiveChat(chat)
  }
  // if lastMessage is true: render this in the p
  // console.log(chat.messages[chat.messages.length - 1])
  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={() => handlerClick()}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{chat?.contactName}</h4>
        <p>{chat.messages[chat.messages.length - 1]}</p>
      </CardChatStyled>
    </>
  )
}
