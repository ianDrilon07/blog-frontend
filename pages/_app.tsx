import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { PostsProvider } from 'context/SearchProvider'
import 'styles/global.scss'
import 'react-quill/dist/quill.snow.css'

export type userType = 'ADMIN' | 'USER'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
  authType?: userType
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  )
}
