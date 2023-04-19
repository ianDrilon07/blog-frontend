import React, { useEffect } from 'react'
import { DefaultLayout } from 'layouts'
import { Home } from 'app/blog-home/home'
import { GetServerSideProps } from 'next'
import { recentPostsData } from 'data'
import { recentPostsDataTypes } from 'lib/types'
import { usePosts } from 'context/SearchProvider'

interface HomeDataTypes {
  data: recentPostsDataTypes[]
}

const App: React.FC<HomeDataTypes> = (props) => {
  const { state, dispatch } = usePosts()

  useEffect(() => {
    dispatch({ type: 'SET_POSTS', payload: props.data })
  }, [])

  return (
    <DefaultLayout data={props.data}>
      <Home data={state.posts} />
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // fetch api here
  // ...
  return {
    props: {
      data: recentPostsData
    }
  }
}

export default App
