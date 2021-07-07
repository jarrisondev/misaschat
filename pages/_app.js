import 'styles/globals.scss'
import 'styles/normalize.css'
import { AnimatePresence } from 'framer-motion'
import { tokenContextProvider } from 'context/tokenContext'
import { ModalContextProvider } from 'context/modalContext'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <tokenContextProvider>
        <ModalContextProvider>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </ModalContextProvider>
      </tokenContextProvider>
    </>
  )
}

export default MyApp
