import { createContext, useState } from 'react'
import { Modal } from 'components/globals-components/Modal/Modal'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const initialModalData = {
    token: false,
    principalText: ''
  }

  const [modal, setModal] = useState(initialModalData)

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
      <Modal
        token={modal.token}
        principalText={modal.principalText}
        setVisibility={setModal}
      />
    </ModalContext.Provider>
  )
}
