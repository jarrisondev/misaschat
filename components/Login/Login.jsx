import { LoginStyled } from './styles'
import { useContext, useEffect, useState } from 'react'
import { SignIn } from './Forms/SignIn'
import { SignUp } from './Forms/SignUp'
import { useRouter } from 'next/router'
import { UtilContext } from 'context/utilsContext'
import { Button } from 'components/globals-components/Button/Button'

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
        <img src='/icons/Login/hero.svg' alt='Hero icon' />
        <div className='heroContainer'>
          <h1>Hola, bienvenido a <span>MisasChats</span></h1>
          <p>Aplicación web de mensajería a nivel mundial, registrate y descubre
            todo su potencial.
          </p>
        </div>
        <div className='buttonContainer'>
          <Button text='Ingresar' />
          <Button text='Registrarse' />
          {/* {renderForm
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
              )} */}
        </div>
      </LoginStyled>
    </>
  )
}
