import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/navbar/navbar.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
