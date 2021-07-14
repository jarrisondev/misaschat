import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'
import { useRouter } from 'next/router'
import { getChatController } from 'controllers/dashboardController'

export const CardChat = ({ contact, userToken, setChat, lastMessage }) => {
  const router = useRouter()

  const handlerClick = () => {
    getChatController(contact, userToken(), router, setChat)
  }
  // if lastMessage is true: render this in the p

  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={() => handlerClick()}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{contact.name}</h4>
        {/* Here  i'll render the lastMessage */}
      </CardChatStyled>
    </>
  )
}
