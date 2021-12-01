import { ChatStyled } from './styles'
import { useUser } from 'hooks/useUser'
import { useForm } from 'react-hook-form'
import { useChats } from 'hooks/useChats'
import { useEffect, useState } from 'react'
import { Layout } from 'components/Layout/Layout'
import { Input } from 'components/globals-components/Input/Input'
import { Button } from 'components/globals-components/Button/Button'

export const Chat = () => {
  const { user, socket, getContact } = useUser()
  const { register, handleSubmit, setValue } = useForm()
  const [contactName, setContactName] = useState('Cargando...')
  const { activeChat, renderMessage, setActiveChat } = useChats()
  const [contactId] = activeChat?.users?.filter((id) => id !== user.id) || []
  const messages = activeChat?.messages

  const onSubmit = (message) => {
    setValue('textContent')
    renderMessage(message)
    socket.emit(activeChat?._id, message)
  }

  useEffect(() => {
    getContact(contactId, setContactName)
  }, [activeChat])

  return (
    !activeChat || (
      <Layout>
        <ChatStyled>
          <header className='header-content'>
            <Button
              handler={() => setActiveChat(false)}
              imgURL='/icons/chat/back.svg'
            />
            <h2>{contactName}</h2>
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
