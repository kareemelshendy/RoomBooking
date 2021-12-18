import "bootstrap/dist/css/bootstrap.min.css"

import "swiper/css/bundle";
import "../styles/main.scss"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
