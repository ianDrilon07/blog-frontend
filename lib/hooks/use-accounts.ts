import Cookies from 'js-cookie'
import { UserType } from 'lib/types'
import swal from 'sweetalert2'
import { authService } from 'services'
import { useRouter } from 'next/navigation'

interface useAccountsType {
  validateStrongPassword: (password: string) => boolean | string
  signUp: (username: string, password: string, email: string) => void
  login: (username: string, password: string) => UserType | {}
}

export const useAccount = (): useAccountsType => {
  const router = useRouter()

  const login = async (username: string, password: string) => {
    try {
      const { user } = await authService.signIn(username, password)

      if (user) {
        swal
          .fire({
            title: 'Success',
            text: 'successfully logged in',
            icon: 'success'
          })
          .then((result) => {
            if (result.isConfirmed) {
              Cookies.set('currentUser', JSON.stringify(user))
              router.push(`/admin`)
            }
          })
      }

      return user as UserType
    } catch (error) {
      swal.fire({
        title: 'Warning!!',
        text: `${
          error ? 'invalid username and password' : 'something happened'
        }`,
        icon: 'warning'
      })
    }
  }

  const signUp = async (username: string, password: string, email: string) => {
    try {
      const newUser = await authService.signUp(username, password, email)

      if (newUser) {
        swal
          .fire({
            title: 'Success',
            text: 'successfuly registered user',
            icon: 'success',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'go to login'
          })
          .then((result) => {
            if (result.isConfirmed) {
              router.push('/sign-in')
            }
          })
      }
    } catch {
      swal.fire({
        title: 'Warning!!',
        text: 'something happened',
        icon: 'warning'
      })
    }
    // return newUser as UserType
  }

  const validateStrongPassword = (password: string): boolean | string => {
    const formatted = password.trim() // removes whitespace

    // at least 12 characters, 1 number, 1 lowercase letter, and 1 uppercase letter
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\W\w]{8,}$/
    const errorMessage =
      'The password must 8 characters long, include number, upper and lowercase letter'

    return regex.test(formatted) || errorMessage
  }

  return {
    validateStrongPassword,
    signUp,
    login
  }
}
