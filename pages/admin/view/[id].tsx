import React from 'react'
import { DefaultLayout } from 'layouts'
import { ViewPost } from 'app/blog-view-post/ViewPost'
import { GetServerSideProps } from 'next'
import { PostTypes } from 'lib/types'
import { postService } from 'services'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  id: string
}

interface ViewPageTypes {
  data: PostTypes
}

const ViewPage: React.FC<ViewPageTypes> = (props) => {
  return (
    <DefaultLayout>
      <ViewPost data={props.data} />
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

export default ViewPage
