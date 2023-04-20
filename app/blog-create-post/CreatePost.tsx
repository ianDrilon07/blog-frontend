import React from 'react'
import { InputFiled } from 'components'

const CreatePost = () => {
  return (
    <div className='post-container'>
      <h1>Create Post</h1>
      <form className='post-content'>
        <div className='input-label-container'>
          <InputFiled label='Title' type='text' />
        </div>
      </form>
    </div>
  )
}

export { CreatePost }
