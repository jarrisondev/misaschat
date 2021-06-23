import React from 'react'
import { InputStyled } from './styles'

export const Input = ({
  register,
  errors,
  type = 'text',
  placeholder,
  name,
  icon = name,
  pattern,
  patternText = '',
  maxLength = 50,
  required = true
}) => {
  return (
    <InputStyled>
      <div className='inputContainer'>
        <img src={`/icons/Login/${icon}.svg`} alt='user icon' />
        <input
          type={type}
          placeholder={`Ingrese ${placeholder}`}
          maxLength={maxLength}
          {...register(name, { required, pattern, maxLength })}
        />
      </div>
      <div className='errorsContainer'>
        {
          errors[name]?.type === 'required' && <span>¡El campo no puede estar vacío!</span>
        }
        {
          errors[name]?.type === 'pattern' && <span>{patternText}</span>
        }
      </div>
    </InputStyled>
  )
}
