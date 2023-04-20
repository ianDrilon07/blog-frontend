import axios, { AxiosInstance } from 'axios'
import swal from 'sweetalert2'

export class AuthService {
  protected readonly instance: AxiosInstance
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!'
    })
  }

  signIn = async (username: string, password: string) => {
    return this.instance
      .post('/login', {
        username,
        password
      })
      .then((res) => {
        return {
          user: {
            username: res.data.user.username,
            email: res.data.user.email,
            created_at: res.data.user.created_at,
            updated_at: res.data.user.updated_at
          },
          token: res.data.token
        }
      })
  }

  signUp = async (username: string, password: string, email: string) => {
    try {
      const response = await this.instance.post('/users', {
        username,
        password,
        email
      })

      return (
        response && {
          user: {
            username: response.data.user.username,
            email: response.data.user.email,
            created_at: response.data.user.created_at,
            updated_at: response.data.user.updated_at
          },
          token: response.data.token
        }
      )
    } catch (error) {
      console.log(error)
    }
  }
}
