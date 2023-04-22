import React, { Fragment } from 'react'

interface PostTagsType {
  title: string
  tagsSamples: Array<string>
  rest: object
  errorMessage: string | undefined
}

const PostTags: React.FC<PostTagsType> = ({
  title,
  tagsSamples,
  rest,
  errorMessage
}) => {
  return (
    <Fragment>
      <label htmlFor='label-style'>{title}</label>
      <div className='post-tags'>
        {tagsSamples.map((el) => (
          <label className='tags-input' key={el}>
            <input type='checkbox' className='tag-icon' value={el} {...rest} />
            <span className='tag-name'>{el}</span>
          </label>
        ))}
      </div>
      {errorMessage && <p className='error-style'>{errorMessage}</p>}
    </Fragment>
  )
}

export default PostTags
