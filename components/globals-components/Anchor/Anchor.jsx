import { AnchorStyled } from './styles'

export const Anchor = ({ text, imgURL, handler }) => {
  return (
    <AnchorStyled onClick={() => handler ? handler() : ' '}>
      <p>{text}</p>
      {
      imgURL && <img src={imgURL} alt='icon' />
    }
    </AnchorStyled>
  )
}
