import { ButtonStyled } from './styles'

export const Button = ({ text, imgURL, handler = null }) => {
  return (
    <ButtonStyled onClick={(event) => handler ? handler(event) : ' '} type='submit'>
      {text && text}
      {imgURL && <img src={imgURL} alt='generate image' />}
    </ButtonStyled>
  )
}
