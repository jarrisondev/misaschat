import { LoginStyled } from 'styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { login } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { Button } from 'components/globals-components/Button/Button'

export default function index () {
  const router = useRouter()

  useEffect(() => {
    window.localStorage.getItem(process.env.JWT_TOKEN_NAME) &&
      router.push('/dashboard')
  }, [])

  return (
    <>
      <Layout>
        <LoginStyled
          initial='initial'
          animate='animate'
          exit='exit'
          variants={login}
        >
          <img src='/icons/Login/hero.svg' alt='Hero icon' />
          <div className='heroContainer'>
            <h1>
              Hola, bienvenido a <span>MisasChats</span>
            </h1>
            <p>
              Aplicación web de mensajería a nivel mundial, regístrate y
              descubre todo su potencial.
            </p>
          </div>
          <div className='buttonContainer'>
            <Button text='Ingresar' handler={() => router.push('/signIn')} />
            <Button text='Regístrarse' handler={() => router.push('/signUp')} />
          </div>
        </LoginStyled>
      </Layout>
    </>
  )
}
