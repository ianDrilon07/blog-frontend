import { publicNavbarTypes } from 'lib/types'

const publicNavbar: publicNavbarTypes[] = [
  {
    id: 1,
    redirectPage: 'Sign up',
    text: 'New to Mashup Garage Blogs?',
    path: '/sign-up'
  },
  {
    id: 2,
    redirectPage: 'Sign in',
    text: 'Already a member?',
    path: '/sign-in'
  }
]

export { publicNavbar }