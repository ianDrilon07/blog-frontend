import swal from 'sweetalert2'
import { postService } from 'services'
import { useRouter } from 'next/router'

interface usePostsTypes {
  savePosts: (
    title: string,
    body: string,
    tag: string[],
    status: string
  ) => void
  updatePost: (
    id: number,
    title: string,
    body: string,
    tag: string[],
    status: string
  ) => void
}

export const usePost = (): usePostsTypes => {
  const router = useRouter()

  const savePosts = async (
    title: string,
    body: string,
    tag: string[],
    status: string
  ) => {
    try {
      const posts =
        tag instanceof Array &&
        (await postService.saveBlog(title, body, tag, status))

      if (posts) {
        swal
          .fire({
            title: 'Success',
            text: 'Successfully added post',
            icon: 'success'
          })
          .then((result) => {
            if (result.isConfirmed) {
              router.push('/')
            }
          })
      }
    } catch (error) {
      swal.fire({
        title: 'Oops!!',
        text: 'Something happened',
        icon: 'warning'
      })
    }
  }

  const updatePost = async (
    id: number,
    title: string,
    body: string,
    tag: string[],
    status: string
  ) => {
    try {
      const posts =
        tag instanceof Array &&
        (await postService.updateBlog(id, title, body, tag, status))

      if (posts) {
        swal.fire({
          title: 'Success',
          text: 'Successfully updated post',
          icon: 'success'
        })
      }
    } catch (error) {
      console.log(error)
      swal.fire({
        title: 'Oops!!',
        text: 'Something happened',
        icon: 'warning'
      })
    }
  }

  return {
    savePosts,
    updatePost
  }
}
