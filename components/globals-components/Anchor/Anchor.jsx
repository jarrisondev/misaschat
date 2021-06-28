import { AnchorStyled } from './styles'

export const Anchor = ({ text, imgURL, handler }) => {
  return (
    <AnchorStyled onClick={() => (handler ? handler() : ' ')}>
      {imgURL && <img src={imgURL} alt='icon' />}
      {text && <p>{text}</p>}
    </AnchorStyled>
  )
}
