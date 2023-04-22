import React, { useEffect } from 'react'
import { Tags, Card, BlankState } from 'components'
import { trendingData } from 'data'
import { userCurrentUser } from 'lib'
import { recentPostsDataTypes } from 'lib/types'
import Link from 'next/link'

//context
import { usePosts } from 'context/SearchProvider'
export const Home: React.FC<{ data: recentPostsDataTypes[] }> = ({
  data
}): JSX.Element => {
  const { state, dispatch } = usePosts()
  const user = userCurrentUser()

  useEffect(() => {
    dispatch({ type: 'SET_POSTS', payload: data })
  }, [])

  const filteredPosts: recentPostsDataTypes[] | undefined =
    (state.filteredTags || []).length > 0 ? state.filteredTags : state.posts

  return (
    <main className='trending-container'>
      <h1>Trending today</h1>

      <div className='trending-card'>
        {trendingData.map((el) => (
          <div
            key={el.title}
            className='trending-body'
            style={{
              backgroundImage: `url(${el.img})`
            }}
          >
            <h2 className='trending-title truncate-text'>{el.title}</h2>
          </div>
        ))}
      </div>

      <div className='divider-xl' />

      <div className='recent-post-container'>
        <section className='card-section'>
          <h2 className='recent-posts-title'>Recent Posts</h2>
          {state.posts.length > 0 ? (
            (filteredPosts || []).map((el) => <Card {...el} key={el.id} />)
          ) : (
            <BlankState message="I'm sorry there are no post yet :(" />
          )}
        </section>

        <section className='tags-section'>
          {user && (
            <div>
              <Link href='/createPost'>
                <button className='reset-button btn-primary-default btn-xl'>
                  Create Post
                </button>
              </Link>
            </div>
          )}
          <div className='divider-lg' />
          <h2 className='tags-title'>Popular Tags</h2>
          <Tags posts={data} />
        </section>
      </div>
    </main>
  )
}
