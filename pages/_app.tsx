import "styles/globals.scss"
import type { AppProps } from 'next/app'

interface PageWithLayout {
  getLayout: (page: JSX.Element) => JSX.Element
}

type AppPageProps = AppProps & {
  Component: PageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPageProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}