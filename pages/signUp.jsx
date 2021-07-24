import { FormStyled } from 'styles'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { form } from 'styles/variants/variants'
import { Layout } from 'components/Layout/Layout'
import { ModalContext } from 'context/modalContext'
import { useContext, useEffect, useState } from 'react'
import { signUpController } from 'controllers/loginController'
import { Input } from 'components/globals-components/Input/Input'
import { Anchor } from 'components/globals-components/Anchor/Anchor'
import { Button } from 'components/globals-components/Button/Button'

export default function signUp () {
  const router = useRouter()
  const JWT_TOKEN_NAME = process.env.JWT_TOKEN_NAME
  const { setModal } = useContext(ModalContext)
  const [requestInProgress, setRequestInProgress] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const signUpUser = (data) => {
    // this is a controller
    !requestInProgress &&
      signUpController(data, setRequestInProgress, setModal, router)
  }
  // Check if exists jwt
  useEffect(() => {
    window.localStorage.getItem(JWT_TOKEN_NAME) && router.push('/dashboard')
  }, [])

  return (
    <Layout>
      <FormStyled
        initial='initial'
        animate='animate'
        exit='exit'
        variants={form}
        onSubmit={handleSubmit(signUpUser)}
      >
        <div className='firstSection'>
          <Anchor
            imgURL='/icons/Login/back.svg'
            handler={() => router.push('/')}
          />
          <h1>Empecemos...</h1>
          <p>Rellena los campos con datos válidos.</p>
          <div className='inputsContainer'>
            <Input
              register={register}
              errors={errors}
              placeholder='su Nombre'
              name='name'
              pattern={/^[a-zA-ZÀ-ÿ\s]{1,50}$/}
              patternText='Solo debe contener letras.'
            />
            <Input
              register={register}
              errors={errors}
              type='email'
              placeholder='un Correo'
              name='email'
              pattern={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
              patternText='Debe contener un @ y un dominio(.com, .es, etc).'
            />
            <Input
              register={register}
              errors={errors}
              type='password'
              placeholder='una Contraseña'
              name='password'
              maxLength={15}
              pattern={
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
              }
              patternText='Debe tener un tamaño mínimo de 8 caracteres y un máximo de 15, además debe contener como mínimo una mayúscula, minúscula, número y un carácter especial.'
            />
          </div>
        </div>
        <div className='secondSection'>
          <span className='anchor'>
            <p>¿Tienes cuenta?</p>
            <Anchor
              text='Inicia Sesión'
              handler={() => router.push('signIn')}
            />
          </span>
          <Button text='Regístrarse' />
        </div>
      </FormStyled>
    </Layout>
  )
}
