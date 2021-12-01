import { ChatStyled } from './styles'
import { useUser } from 'hooks/useUser'
import { useForm } from 'react-hook-form'
import { useChats } from 'hooks/useChats'
import { Layout } from 'components/Layout/Layout'
import { Input } from 'components/globals-components/Input/Input'
import { Button } from 'components/globals-components/Button/Button'

export const Chat = () => {
  const { socket } = useUser()
  const { register, handleSubmit, setValue } = useForm()
  const { activeChat, renderMessage, setActiveChat } = useChats()
  const messages = activeChat?.messages

  const onSubmit = (message) => {
    setValue('textContent')
    renderMessage(message)
    socket.emit(activeChat?._id, message)
  }

  return (
    !activeChat || (
      <Layout>
        <ChatStyled>
          <header className='header-content'>
            <Button
              handler={() => setActiveChat(false)}
              imgURL='/icons/chat/back.svg'
            />
            <h2>{activeChat.contactName}</h2>
          </header>
          <div className='chat-content'>
            {messages.map((message, i) => (
              <p key={i}>{message.textContent}</p>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='input-content'
            autoComplete='off'
          >
            <Input
              register={register}
              placeholder='Enviar un Mensaje'
              name='textContent'
              maxLength={500}
              warnnings={false}
            />
            <Button imgURL='/icons/chat/send-icon.svg' />
          </form>
        </ChatStyled>
      </Layout>
    )
  )
}
