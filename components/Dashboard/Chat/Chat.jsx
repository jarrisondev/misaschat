import { useContext } from 'react'
import { ChatStyled } from './styles'
import { useForm } from 'react-hook-form'
import { Layout } from 'components/Layout/Layout'
import { ActiveChatContext } from 'context/activeChatContext'
import { Input } from 'components/globals-components/Input/Input'
import { Button } from 'components/globals-components/Button/Button'

export const Chat = ({ userName, socket, updateMessage }) => {
  const { activeChat, setActiveChat } = useContext(ActiveChatContext)
  const messages = activeChat?.messages
  const { register, handleSubmit, setValue } = useForm()
  const name = activeChat?.names.find((name) => name !== userName)

  const goBack = () => {
    setActiveChat(null)
  }

  const onSubmit = (message) => {
    setValue('message')
    updateMessage(activeChat, message.message)
    socket.emit(activeChat?._id, message)
  }

  return (
    !activeChat || (
      <Layout>
        <ChatStyled>
          <header className='header-content'>
            <Button handler={goBack} imgURL='/icons/chat/back.svg' />
            <h2>{name}</h2>
          </header>
          <div className='chat-content'>
            {messages.map((message, i) => (
              <p key={i}>{message}</p>
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
              name='message'
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
