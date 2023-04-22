import { useEffect } from 'react'
import { DefaultLayout } from 'layouts'
import { GetServerSideProps } from 'next'
import { MyAccount } from 'app/blig-my-account/MyAccount'
import { recentPostsDataTypes } from 'lib/types'
import { usePosts } from 'context/SearchProvider'
import { postService } from 'services'
import React from 'react'

interface ProfileTypes {
  data: recentPostsDataTypes[]
}

const myAccount: React.FC<ProfileTypes> = (props) => {
  const { state, dispatch } = usePosts()

  useEffect(() => {
    dispatch({ type: 'SET_POSTS', payload: props.data })
  }, [])

  return (
    <DefaultLayout data={props.data}>
      <MyAccount />
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

export default myAccount
