import { Layout } from 'components/Layout/Layout'
import { ChatStyled } from './styles'

export const Chat = ({ chat, setChat }) => {
  const goBack = () => {
    setChat(null)
  }
  console.log(chat)
  return (
    <Layout>
      <ChatStyled>
        <header className='header-content'>
          <button onClick={goBack}>Volver</button>
          <h2>{chat.contactName}</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          delectus.
        </p>
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
          <input type='text' placeholder='Enviar un Mensaje' />
          <button>
            <img
              src='/icons/chat/send-icon.svg'
              alt='img of a arrow for send'
            />
          </button>
        </div>
      </ChatStyled>
    </Layout>
  )
}
