import React from 'react'
import { ArrowUp, ArrowDown, MessageCircle, Share2 } from 'react-feather'
import { recentPostsDataTypes } from 'lib/types'
import Link from 'next/link'
import Avatar from 'boring-avatars'

const Card: React.FC<recentPostsDataTypes> = (props) => {
  const { id, votes, comments, author, tags, title, image } = props

  return (
    <Link href='#' className='blog-card' key={id}>
      <aside className='left-card'>
        <div className='blog-votes'>
          <ArrowUp />
          <span className='vote-count'>{votes}</span>
          <ArrowDown />
        </div>

        <div className='blog-comment-share'>
          <div className='blog-comment'>
            <MessageCircle />
            <span className='comment-count'>{comments}</span>
          </div>
          <div className='blog-share'>
            <Share2 />
          </div>
        </div>
      </aside>
      <section className='right-card'>
        <header className='author-avatar'>
          {author && (
            <Avatar
              size={40}
              name='Maria Mitchell'
              variant='beam'
              colors={['#EF746F']}
            />
          )}
          <span className='author-name'>{author}</span>
        </header>
        {tags?.map((el) => (
          <span key={el} className='card-tag'>
            {el}
          </span>
        ))}
        <div className='card-body'>
          <h1>{title}</h1>
          <img className='card-img' src={image} alt='blog img' />
        </div>
      </section>
    </Link>
  )
}

export default Card
