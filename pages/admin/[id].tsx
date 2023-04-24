import React from 'react'
import { DefaultLayout } from 'layouts'
import { EditPost } from 'app/blog-edit-post/EditPost'
import { GetServerSideProps } from 'next'
import { postService } from 'services'
import { ParsedUrlQuery } from 'querystring'
import { PostTypes } from 'lib/types'

interface IParams extends ParsedUrlQuery {
  id: string
}

interface EditPostTypes {
  data: PostTypes
}

const EditPosts: React.FC<EditPostTypes> = ({ data }) => {
  return (
    <DefaultLayout>
      <EditPost item={data} />
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams
  const response = await postService.getOne(id)

  return {
    props: {
      data: response
    }
  }
}

export default EditPosts
