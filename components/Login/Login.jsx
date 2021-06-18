import { LoginStyled } from './styles'
import { useContext, useEffect, useState } from 'react'
import { SignIn } from './Forms/SignIn'
import { SignUp } from './Forms/SignUp'
import { useRouter } from 'next/router'
import { userContext } from '../../context/userContext'

export const Login = () => {
  const { user } = useContext(userContext)
  const [renderForm, setRenderForm] = useState(true)
  const router = useRouter()

  useEffect(() => {
    sessionStorage.getItem('login') && router.push('/dashboard')
  }, [])
  return (
    <>
      <LoginStyled>
        <div>
          <h1>Bienvenido a misasChats</h1>
          <p>
            Aplicación web de mensajería a nivel mundial, registrate y descubre
            todo su potencial.
          </p>
        </div>
        <div>
          {renderForm ? (
            <SignIn renderForm={renderForm} setRenderForm={setRenderForm} />
          ) : (
            <SignUp renderForm={renderForm} setRenderForm={setRenderForm} />
          )}
        </div>
      </LoginStyled>
    </>
  )
}
