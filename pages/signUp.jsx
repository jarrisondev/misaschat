import { FormStyled } from 'styles'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { Layout } from 'components/Layout/Layout'
import { ModalContext } from 'context/modalContext'
import { signUpController } from 'controllers/loginController'
import { Input } from 'components/globals-components/Input/Input'
import { Anchor } from 'components/globals-components/Anchor/Anchor'
import { Button } from 'components/globals-components/Button/Button'

export default function signUp () {
  const router = useRouter()
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
      signUpController(
        data,
        setRequestInProgress,
        setModal
      )
  }

  return (
    <Layout>
      <FormStyled onSubmit={handleSubmit(signUpUser)}>
        <div className='firstSection'>
          <Anchor text='Volver' handler={() => router.push('/')} />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <div className='inputsContainer'>
            <Input
              icon='user'
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
          <p>Register now</p>
          <Button text='Registrarse' />
        </div>
      </FormStyled>
    </Layout>
  )
}