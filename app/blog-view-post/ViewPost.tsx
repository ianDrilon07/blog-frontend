import { CardView } from 'components'
import { PostTypes } from 'lib/types'
import React from 'react'

const ViewPost: React.FC<{ data: PostTypes }> = ({ data }) => {
  return (
    <main className='view-container'>
      <CardView item={data} />
    </main>
  )
}

export { ViewPost }
