import { useUser } from 'hooks/useUser'
import { useChats } from 'hooks/useChats'
import { DashContentStyled } from './styles'
import { CardChat } from 'components/Dashboard/CardChat/CardChat'
import { Button } from 'components/globals-components/Button/Button'
import { useListUsers } from 'hooks/useListUsers'

export const DashContent = () => {
  const { user, signOut } = useUser()
  const { chats, activeChat } = useChats()
  const { renderUsersList, handlerUsersList } = useListUsers()

  return (
    (activeChat && true) ||
    renderUsersList || (
      <DashContentStyled>
        <header>
          <h2>
            Buenos Días, <br /> {user.name}
          </h2>
          <Button handler={signOut} imgURL='/icons/dashboard/sign-out.svg' />
        </header>
        <div className='button-container'>
          <Button text='Personal' />
          <Button text='Global' />
        </div>
        <main className='chats-container'>
          {chats?.length === 0 && <h1>No tienes ningún chat</h1>}

          {chats &&
            chats?.map((chat, i) => {
              return <CardChat key={i} chat={chat} />
            })}
          {!chats && <h1>Aqui va el skeleton</h1>}
        </main>
        <aside className='aside'>
          <Button
            className='chats-icon'
            text='chats'
            imgURL='/icons/dashboard/chat.svg'
          />
          <Button
            imgURL='/icons/dashboard/plus.svg'
            handler={() => handlerUsersList(true)}
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
