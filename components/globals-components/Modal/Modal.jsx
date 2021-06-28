import { Button } from '../Button/Button'
import { ModalStyled } from './styles'
export const Modal = ({ token, principalText, setVisibility }) => {
  return (
    <ModalStyled token={token}>
      {token && (
        <div>
          <p>{principalText}</p>
          <Button
            text='Aceptar'
            handler={() =>
              setVisibility((d) => {
                return { ...d, token: false }
              })}
          />
        </div>
      )}
    </ModalStyled>
  )
}
