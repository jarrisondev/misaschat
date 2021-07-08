import 'styles/globals.scss'
import 'styles/normalize.css'
import { AnimatePresence } from 'framer-motion'
import { TokenContextProvider } from 'context/tokenContext'
import { ModalContextProvider } from 'context/modalContext'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <TokenContextProvider>
        <ModalContextProvider>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </ModalContextProvider>
      </TokenContextProvider>
    </>
  )
}

export default MyApp
