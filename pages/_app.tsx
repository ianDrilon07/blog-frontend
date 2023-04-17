import type { AppProps } from "next/app"
import type { NextPage } from "next"
import "styles/index.scss"

export type userType = "ADMIN" | "USER"

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
  authType?: userType
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
