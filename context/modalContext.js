import { createContext, useState } from 'react'

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
    </ModalContext.Provider>
  )
}
