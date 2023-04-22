import React, { useEffect } from 'react'
import { DefaultLayout } from 'layouts'
import { Home } from 'app/blog-home/home'
import { GetServerSideProps } from 'next'
// import { recentPostsData } from 'data'
import { recentPostsDataTypes } from 'lib/types'
import { postService } from 'services'
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
      <Home data={state?.posts} />
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs: recentPostsDataTypes[] = await postService.getBlogs()

  const transform = Object.keys(blogs).map(
    (key) => blogs[key as keyof typeof blogs]
  )

  // ...
  return {
    props: {
      data: transform
    }
  }
}

export default App
