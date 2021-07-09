import { ButtonStyled } from './styles'

export const Button = ({ text, imgURL, handler = null, className }) => {
  return (
    <ButtonStyled onClick={(event) => handler ? handler(event) : ' '} type='submit'>
      {imgURL && <img src={imgURL} alt='generate image' className={className} />}
      {text && <p>{text}</p>}
    </ButtonStyled>
  )
}
