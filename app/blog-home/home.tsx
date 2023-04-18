import React from 'react'
import { trendingData } from 'data'

export const Home = (): JSX.Element => {
  return (
    <main>
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

      <h2>Recent Posts</h2>
    </main>
  )
}
