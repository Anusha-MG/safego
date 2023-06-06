import '@/styles/globals.css'
import { sgProvider } from '../context/sgContext'

export default function App({ Component, pageProps }) {
  return (
    <sgProvider>
      <Component {...pageProps} />
    </sgProvider>
  )
}

//export default MyApp