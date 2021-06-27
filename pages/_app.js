import 'styles/globals.scss'
import 'styles/normalize.css'
import { UtilsContextProvider } from 'context/utilsContext'
import { ModalContextProvider } from 'context/modalContext'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <UtilsContextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </UtilsContextProvider>
    </>
  )
}

export default MyApp
