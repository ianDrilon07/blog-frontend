import React from 'react'
import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  Share2,
  Edit2,
  Trash2
} from 'react-feather'
import { recentPostsDataTypes } from 'lib/types'
import { userCurrentUser } from 'lib'
import Link from 'next/link'
import Avatar from 'boring-avatars'

const Card: React.FC<recentPostsDataTypes> = (props) => {
  const currentUser = userCurrentUser()
  const { id, username, tag, title, user_id } = props

  return (
    <Link href={`/admin/view/${id}`} className='blog-card' key={id}>
      <aside className='left-card'>
        <div className='blog-votes'>
          <ArrowUp className='svg-color' />
          <span className='vote-count'>0</span>
          <ArrowDown className='svg-color' />
        </div>

        <div className='blog-comment-share'>
          <div className='blog-comment'>
            <MessageCircle />
            <span className='comment-count'>0</span>
          </div>
          <div className='blog-svg'>
            <Share2 />
          </div>
          {currentUser?.user.id === user_id && (
            <>
              <Link href={`/admin/${id}`} className='blog-svg'>
                <div>
                  <Edit2 />
                </div>
              </Link>
              <button className='reset-button blog-svg'>
                <Trash2 />
              </button>
            </>
          )}
        </div>
      </aside>
      <section className='right-card'>
        <header className='author-avatar'>
          {username && (
            <Avatar
              size={40}
              name={username}
              variant='beam'
              colors={['#EF746F']}
            />
          )}
          <span className='author-name'>{username}</span>
        </header>
        {tag?.map((el) => (
          <span key={el} className='card-tag'>
            {el}
          </span>
        ))}
        <div className='card-body'>
          <h1>{title.toUpperCase()}</h1>
          <img className='card-img' src='/images/react.jpg' alt='blog img' />
        </div>
      </section>
    </Link>
  )
}

export default Card
