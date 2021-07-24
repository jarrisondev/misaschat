import 'styles/globals.scss'
import 'styles/normalize.css'
import { AnimatePresence } from 'framer-motion'
import { ModalContextProvider } from 'context/modalContext'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <ModalContextProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ModalContextProvider>
    </>
  )
}

export default MyApp
