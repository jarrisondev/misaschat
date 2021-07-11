import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'
import { useRouter } from 'next/router'

export const CardChat = ({ contact, user, setContact, setRenderChat }) => {
  const router = useRouter()

  const handlerClick = () => {
    console.log(contact.id)
    // here will be controller that check if chat exists
    setContact(contact.id)
    setRenderChat(true)
  }

  return (
    <>
      <CardChatStyled initial='initial' animate='animate' variants={cardChat} onClick={() => handlerClick()}>
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{contact.name}</h4>
      </CardChatStyled>
    </>
  )
}
