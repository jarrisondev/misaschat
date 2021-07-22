import { Button } from 'components/globals-components/Button/Button'
import { Input } from 'components/globals-components/Input/Input'
import { Layout } from 'components/Layout/Layout'
import { useForm } from 'react-hook-form'
import { ChatStyled } from './styles'

export const Chat = ({ chat, setChat }) => {
  const goBack = () => {
    setChat(null)
  }
  const {
    register,
    formState: { errors }
  } = useForm()
  console.log(chat)
  return (
    <Layout>
      <ChatStyled>
        <header className='header-content'>
          <Button handler={goBack} imgURL='/icons/chat/back.svg' />
          <h2>{chat.contactName}</h2>
        </header>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          delectus.
        </p> */}
        <div className='chat-content'>
          {chat.messages.map((message) => {
            if (message.me) {
              return <p /> // render the p in rigth
            } else {
              return <p /> // render the p in left
            }
          })}
        </div>
        <div className='input-content'>
          <Input
            register={register}
            errors={errors}
            placeholder='Enviar un Mensaje'
            name='message'
            maxLength={500}
            required={false}
          />
          <Button imgURL='/icons/chat/send-icon.svg' />
        </div>
      </ChatStyled>
    </Layout>
  )
}
