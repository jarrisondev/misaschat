import { FormStyled } from './styles'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'components/globals-components/Button/Button'
import { Anchor } from 'components/globals-components/Anchor/Anchor'
import { signInController } from 'controllers/loginController'
import { UtilContext } from 'context/utilsContext'
import { Input } from 'components/globals-components/Input/Input'
import { useForm } from 'react-hook-form'

export const SignIn = ({ renderForm, setRenderForm }) => {
  const {
    initialUtilValue: { JWT_TOKEN_NAME },
    handlerModalData
  } = useContext(UtilContext)

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const signInUser = (data) => {
    signInController(data, router, JWT_TOKEN_NAME, handlerModalData)
  }

  return (
    <FormStyled onSubmit={handleSubmit(signInUser)}>
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
      <Anchor renderForm={renderForm} handler={setRenderForm} />
      <Button renderForm={renderForm} />
    </FormStyled>
  )
}
