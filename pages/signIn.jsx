import { useContext } from 'react'
import { FormStyled } from 'styles'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Layout } from 'components/Layout/Layout'
import { UtilsContext } from 'context/utilsContext'
import { ModalContext } from 'context/modalContext'
import { signInController } from 'controllers/loginController'
import { Input } from 'components/globals-components/Input/Input'
import { Anchor } from 'components/globals-components/Anchor/Anchor'
import { Button } from 'components/globals-components/Button/Button'

export default function signIn () {
  const { JWT_TOKEN_NAME } = useContext(UtilsContext)
  const { setModal } = useContext(ModalContext)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // this is a controller
  const signInUser = (data) => {
    signInController(data, router, JWT_TOKEN_NAME, setModal)
  }
  return (
    <Layout>
      <FormStyled onSubmit={handleSubmit(signInUser)}>
        <div className='firstSection'>
          <Anchor
            imgURL='/icons/Login/back.svg'
            handler={() => router.push('/')}
          />
          <h1>Te habíamos extrañado...</h1>
          <p>¿Qué esperas para iniciar sesión? Vamos.</p>
          <div className='inputsContainer'>
            <Input
              register={register}
              errors={errors}
              type='email'
              placeholder='un Correo'
              name='email'
              pattern={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
              patternText='¡Ingrese un correo valido!'
            />
            <Input
              register={register}
              errors={errors}
              type='password'
              placeholder='una Contraseña'
              name='password'
              maxLength={15}
              pattern={null}
              patternText=''
            />
          </div>
        </div>
        <div className='secondSection'>
          <span className='anchor'>
            <p>¿No tienes cuenta?</p>
            <Anchor
              text='Regístrate'
              handler={() => router.push('signUp')}
            />
          </span>
          <Button text='Ingresar' />
        </div>
      </FormStyled>
    </Layout>
  )
}
