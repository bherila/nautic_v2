import '../styles/normalize.css'
import '../styles/components.css'
import '../styles/nearshorenetworks.css'
import type { AppProps } from 'next/app'
import Layout from './components/layout'


function MyApp({ Component, pageProps }: AppProps) {
   return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
