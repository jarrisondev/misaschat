import { ButtonStyled } from './styles'

export const Button = ({ text, handler = null }) => {
  return (
    <ButtonStyled onClick={(event) => handler ? handler(event) : ' '} type='submit'>
      {text}
    </ButtonStyled>
  )
}
