import Layout from '../components/Layout'
import ThemeSelector from '../components/ThemeSelector'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeSelector/>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
