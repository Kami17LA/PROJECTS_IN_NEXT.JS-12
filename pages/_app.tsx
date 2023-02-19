import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {/* <header> 📰 The best news in the internet</header> */}
    <Component {...pageProps} />
  </>

}
