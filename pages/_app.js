import 'styles/globals.scss'
import 'styles/normalize.css'
import { AnimatePresence } from 'framer-motion'
import { UtilsContextProvider } from 'context/utilsContext'
import { ModalContextProvider } from 'context/modalContext'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <UtilsContextProvider>
        <ModalContextProvider>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </ModalContextProvider>
      </UtilsContextProvider>
    </>
  )
}

export default MyApp
