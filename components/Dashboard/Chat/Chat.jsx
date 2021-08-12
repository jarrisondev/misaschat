import { useContext } from 'react'
import { ChatStyled } from './styles'
import { useForm } from 'react-hook-form'
import { Layout } from 'components/Layout/Layout'
import { DashboardContext } from 'context/dashboardContext'
import { Input } from 'components/globals-components/Input/Input'
import { Button } from 'components/globals-components/Button/Button'

export const Chat = () => {
  const { activeChat, setActiveChat, socket, userName, renderNewMessage } =
    useContext(DashboardContext)

  const { register, handleSubmit, setValue } = useForm()

  const messages = activeChat?.messages
  const name = activeChat?.names.find((name) => name !== userName)

  const goBack = () => {
    setActiveChat(null)
  }

  const onSubmit = (message) => {
    setValue('textContent')
    renderNewMessage(activeChat, message)
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
