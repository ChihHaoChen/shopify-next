import { AppProps } from 'next/app'
import { FC } from 'react'
import { UIProvider, useUI } from '@components/ui/context'
import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'


const Noop: FC = ({ children }) => <>{ children }</>

const MyApp = ({ Component, pageProps }: AppProps & {
  Component: { Layout: FC }
}) => {

  const Layout = Component.Layout ?? Noop
  const ui = useUI()

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}


export default MyApp