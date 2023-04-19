import React, { useState } from 'react'

interface TagsType {
  tags: Array<string>
}

const Tags: React.FC<TagsType> = ({ tags }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  return (
    <div className='blog-tags'>
      {tags.map((el, index) => (
        <button
          type='button'
          className='reset-button btn-tags'
          style={{
            background: `${currentIndex === index ? '#eef2ff' : '#fff'}`
          }}
          onClick={() => setCurrentIndex(index)}
        >
          {el}
        </button>
      ))}
    </div>
  )
}

export default Tags
