import { publicNavbarTypes } from 'lib/types'

const publicNavbar: publicNavbarTypes[] = [
  {
    id: 1,
    redirectPage: 'Sign in',
    text: 'Already a member?',
    path: '/sign-in'
  },
  {
    id: 2,
    redirectPage: 'Sign up',
    text: 'New to Mashup Garage Blogs?',
    path: '/sign-up'
  }
]

export { publicNavbar }
