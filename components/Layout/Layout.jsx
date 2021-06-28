import { LayoutStyled } from './styles'
import { Modal } from 'components/globals-components/Modal/Modal'
import { useContext } from 'react'
import { ModalContext } from 'context/modalContext'

export const Layout = ({ children }) => {
  const { modal, setModal } = useContext(ModalContext)
  return (
    <LayoutStyled>
      {children}
      <Modal
        token={modal.token}
        principalText={modal.principalText}
        setVisibility={setModal}
      />
    </LayoutStyled>
  )
}
