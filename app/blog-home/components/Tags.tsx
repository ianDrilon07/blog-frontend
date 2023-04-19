import React, { useState } from 'react'
import { recentPostsDataTypes } from 'lib/types'
import { usePosts } from 'context/SearchProvider'
import { tagsSamples } from 'utils'

interface TagsType {
  posts: recentPostsDataTypes[]
}

const Tags: React.FC<TagsType> = ({ posts }) => {
  const [currentTags, setCurrentTags] = useState<string>('')
  const { state, handleTags } = usePosts()

  const filterByTags = (currentTags: string) => {
    currentTags && setCurrentTags(currentTags)
    handleTags(currentTags, posts)
  }

  return (
    <div className='blog-tags'>
      {tagsSamples.map((el) => (
        <button
          key={el}
          type='button'
          className='reset-button btn-tags'
          style={{
            background: `${currentTags === el ? '#eef2ff' : '#fff'}`
          }}
          onClick={() => filterByTags(el)}
        >
          {el}
        </button>
      ))}
    </div>
  )
}

export default Tags
