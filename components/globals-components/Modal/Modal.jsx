import { ModalStyled } from './styles'
export const Modal = ({ token, principalText, setVisibility }) => {
  return (
    <ModalStyled token={token}>
      {token && (
        <div>
          <p>{principalText}</p>
          <button
            onClick={() => setVisibility((d) => { return { ...d, token: false } })}
          >
            Aceptar
          </button>
        </div>
      )}
    </ModalStyled>
  )
}
