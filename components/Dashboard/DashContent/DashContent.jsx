import { useContext } from 'react'
import { DashContentStyled } from './styles'
import { DashboardContext } from 'context/dashboardContext'
import { CardChat } from 'components/Dashboard/CardChat/CardChat'
import { Button } from 'components/globals-components/Button/Button'

export const DashContent = ({ createChatModal, renderCreateUser }) => {
  const { activeChat, listChats, router, userName } =
    useContext(DashboardContext)

  const SignOut = () => {
    window.localStorage.removeItem(process.env.JWT_TOKEN_NAME)
    router.push('/')
  }

  return (
    (activeChat && true) ||
    createChatModal || (
      <DashContentStyled>
        <header>
          <h2>
            Buenos Días, <br /> {userName}
          </h2>
          <Button handler={SignOut} imgURL='/icons/dashboard/sign-out.svg' />
        </header>
        <div className='button-container'>
          <Button text='Personal' />
          <Button text='Global' />
        </div>
        <main className='chats-container'>
          {listChats?.chats.length === 0 && <h1>No tienes ningún chat</h1>}

          {listChats &&
            listChats?.chats?.map((chat, i) => {
              return <CardChat key={i} chat={chat} userName={userName} />
            })}
          {!listChats && <h1>Aqui va el skeleton</h1>}
        </main>
        <aside className='aside'>
          <Button
            className='chats-icon'
            text='chats'
            imgURL='/icons/dashboard/chat.svg'
          />
          <Button
            imgURL='/icons/dashboard/plus.svg'
            handler={() => renderCreateUser(true)}
          />
          <Button
            className='profile-icon'
            text='profile'
            imgURL='/icons/dashboard/user.svg'
          />
        </aside>
      </DashContentStyled>
    )
  )
}
