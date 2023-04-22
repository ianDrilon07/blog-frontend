import { AxiosInstance } from 'axios'

export class PostService {
  protected readonly instance: AxiosInstance
  protected readonly unAuthorized: AxiosInstance

  public constructor(instance: AxiosInstance, unAuthorized: AxiosInstance) {
    this.instance = instance
    this.unAuthorized = unAuthorized
  }

  public saveBlog = async (
    title: string,
    body: string,
    tag: string[],
    status: string
  ) => {
    return this.instance
      .post('/blogs', {
        title,
        body,
        tag,
        status
      })
      .then((res) => {
        return {
          title: res.data.title,
          body: res.data.body,
          user_id: res.data.user_id,
          tag: res.data.tag,
          status: res.data.status
        }
      })
  }

  public updateBlog = async (
    id: number,
    title: string,
    body: string,
    tag: string[],
    status: string
  ) => {
    return await this.instance
      .put(`/blogs/${id}`, {
        title,
        body,
        tag,
        status
      })
      .then((res) => {
        return {
          title: res.data.title,
          body: res.data.body,
          user_id: res.data.user_id,
          tag: res.data.tag,
          status: res.data.status
        }
      })
  }

  public getOne = async (id: string) => {
    return this.unAuthorized.get(`/blogs/${id}`).then((res) => {
      return {
        ...res.data
      }
    })
  }

  public getBlogs = async () => {
    return this.unAuthorized.get('/blogs').then((res) => {
      return {
        ...res.data
      }
    })
  }
}
