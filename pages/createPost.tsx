import { DefaultLayout } from 'layouts'
import { CreatePost } from 'app/blog-create-post/CreatePost'

const createPost = () => {
  return (
    <DefaultLayout>
      <CreatePost />
    </DefaultLayout>
  )
}

export default createPost
