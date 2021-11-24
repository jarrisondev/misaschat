import { CardChatStyled } from './styles'
import { cardChat } from 'styles/variants/variants'

export const CreateChatCard = ({ contact, handler }) => {
  return (
    <>
      <CardChatStyled
        initial='initial'
        animate='animate'
        variants={cardChat}
        onClick={() => handler()}
      >
        <img src='/icons/dashboard/user.png' alt='' />
        <h4>{contact.name}</h4>
      </CardChatStyled>
    </>
  )
}
