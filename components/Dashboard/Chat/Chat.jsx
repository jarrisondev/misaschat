import { ChatStyled } from './styles'
import { io } from 'socket.io-client'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Layout } from 'components/Layout/Layout'
import { Input } from 'components/globals-components/Input/Input'
import { Button } from 'components/globals-components/Button/Button'

export const Chat = ({ chat, setChat, userName }) => {
  const [socket, setSocket] = useState()
  const [messages, setMessages] = useState(chat.messages)
  const { register, handleSubmit, setValue } = useForm()
  const name = chat.names[0] === userName ? chat.names[1] : chat.names[0]

  const goBack = () => {
    setChat(null)
  }

  const onSubmit = (message) => {
    setValue('message')
    setMessages((m) => [...m, message.message])
    socket.emit(chat._id, message)
  }

  useEffect(() => {
    setSocket(io(process.env.SOCKET_IO_URL))
  }, [])

  useEffect(() => {
    socket?.on(chat._id, (values) => {
      setMessages((m) => [...m, values.message])
    })
  }, [socket])

  return (
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
        <form onSubmit={handleSubmit(onSubmit)} className='input-content'>
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
}
