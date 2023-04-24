import React from 'react'
import Avatar from 'boring-avatars'
import { RichText } from 'components'
import { PostTypes } from 'lib/types'
import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  Share2,
  Edit2,
  Trash2
} from 'react-feather'
import { userCurrentUser } from 'lib'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface CardViewTypes {
  item: PostTypes
}

type commentType = {
  comment: string
}

const CardView: React.FC<CardViewTypes> = ({ item }): JSX.Element => {
  const currentUser = userCurrentUser()

  const { username, tag, title, body, id, user_id } = item

  const { watch, setValue, handleSubmit } = useForm<commentType>()

  const editorContent = watch('comment')

  const handleRichText = (editorState: string) => {
    setValue('comment', editorState)
  }

  const onSubmit = (data: commentType) => {
    console.log(data)
  }

  return (
    <main className='card-one-wrapper'>
      <header className='card-one-header'>
        <Avatar size={40} name={username} variant='beam' colors={['#EF746F']} />
        <h3 className='card-one-author'>{username}</h3>
      </header>
      {tag.map((el) => (
        <span className='card-tag' key={el}>
          {el}
        </span>
      ))}

      <aside className='card-one-content'>
        <h1>{title}</h1>
        <div
          className='card-description'
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <img className='card-one-img' src='/images/react.jpg' />
      </aside>

      <section className='card-view-events'>
        <aside className='card-event-wrapper'>
          <div className='card-icon-wrapper'>
            <ArrowUp className='svg-color' />
            <h4>1.1k</h4>
            <ArrowDown className='svg-color' />
          </div>

          <div className='card-icon-wrapper'>
            <MessageCircle className='svg-color' />
            <h4 className='wrapper-title'>24 Comments</h4>
          </div>

          <div className='card-icon-wrapper'>
            <Share2 className='svg-color' />
            <h4 className='wrapper-title'>Share</h4>
          </div>
        </aside>

        {currentUser?.user?.id === user_id && (
          <aside className='card-event-wrapper'>
            <Link href={`/admin/${id}`} className='card-icon-wrapper'>
              <Edit2 className='svg-color' />
              <h4 className='wrapper-title'>Edit</h4>
            </Link>

            <div className='card-icon-wrapper'>
              <Trash2 className='svg-color' />
              <h4 className='wrapper-title'>Delete</h4>
            </div>
          </aside>
        )}
      </section>

      <form className='view-comment' onSubmit={handleSubmit(onSubmit)}>
        <RichText
          placeholder='Write a Comment'
          editorContent={editorContent}
          handleRichText={handleRichText}
        />

        <div className='btn-view-comment'>
          <button type='submit' className='reset-button btn-primary-default'>
            Comment
          </button>
        </div>
      </form>
    </main>
  )
}

export default CardView
