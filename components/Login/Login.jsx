import { LoginStyled } from './styles'
import { useContext, useEffect, useState } from 'react'
import { SignIn } from './Forms/SignIn'
import { SignUp } from './Forms/SignUp'
import { useRouter } from 'next/router'
import { UtilContext } from 'context/utilsContext'

export const Login = () => {
  const {
    initialUtilValue: { JWT_TOKEN_NAME }
  } = useContext(UtilContext)

  const [renderForm, setRenderForm] = useState(true)
  const router = useRouter()

  useEffect(() => {
    window.localStorage.getItem(JWT_TOKEN_NAME) && router.push('/dashboard')
  }, [])
  return (
    <>
      <LoginStyled>
        <div className='heroContainer'>
          <h1>Bienvenido a MisasChats</h1>
          <p>
            Aplicación web de mensajería a nivel mundial, registrate y descubre
            todo su potencial.
          </p>
        </div>
        <div className='formContainer'>
          {renderForm
            ? (
              <SignIn
                renderForm={renderForm}
                setRenderForm={setRenderForm}
              />
              )
            : (
              <SignUp
                renderForm={renderForm}
                setRenderForm={setRenderForm}
              />
              )}
        </div>
      </LoginStyled>
    </>
  )
}
