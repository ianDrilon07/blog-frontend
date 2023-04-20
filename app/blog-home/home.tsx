import React, { useEffect } from 'react'
import { Tags, Card } from './components'
import { trendingData } from 'data'
import { recentPostsDataTypes } from 'lib/types'

//context
import { usePosts } from 'context/SearchProvider'
export const Home: React.FC<{ data: recentPostsDataTypes[] }> = ({
  data
}): JSX.Element => {
  const { state, dispatch } = usePosts()

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

      <div className='divider' />

      <div className='recent-post-container'>
        <section className='card-section'>
          <h2 className='recent-posts-title'>Recent Posts</h2>
          {(filteredPosts || []).map((el) => (
            <Card {...el} key={el.id} />
          ))}
        </section>

        <section className='tags-section'>
          <h2 className='tags-title'>Popular Tags</h2>
          <Tags posts={data} />
        </section>
      </div>
    </main>
  )
}
