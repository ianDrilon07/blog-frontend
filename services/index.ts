import axios from 'axios'
import { getAuthorizationHeader } from 'helpers/getAuthorizationHeaders'
import { AuthService } from './auth.service'
import { PostService } from './post.service'

const devEnvironment = 'http://localhost:4000'

const instanceConfig = {
  baseURL: devEnvironment,
  timeout: 30000,
  timeoutErrorMessage: 'Time out!'
}

const instance = axios.create({
  ...instanceConfig,
  headers: getAuthorizationHeader()
})

const unAuthorized = axios.create(instanceConfig)

export const authService = new AuthService(instance)
export const postService = new PostService(instance, unAuthorized)
