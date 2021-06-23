import { FormStyled } from './styles'
import { Button } from 'components/globals-components/Button/Button'
import { Anchor } from 'components/globals-components/Anchor/Anchor'
import { useContext, useState } from 'react'
import { signUpController } from 'controllers/loginController'
import { UtilContext } from 'context/utilsContext'
import { useForm } from 'react-hook-form'
import { Input } from 'components/globals-components/Input/Input'

export const SignUp = ({ renderForm, setRenderForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { handlerModalData } = useContext(UtilContext)
  const [requestInProgress, setRequestInProgress] = useState(false)

  const signUpUser = (data) => {
    // this is a controller
    !requestInProgress &&
      signUpController(
        setRenderForm,
        data,
        setRequestInProgress,
        handlerModalData
      )
  }

  return (
    <FormStyled onSubmit={handleSubmit(signUpUser)}>
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

      <Anchor renderForm={renderForm} handler={setRenderForm} />
      <Button renderForm={renderForm} />
    </FormStyled>
  )
}
