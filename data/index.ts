import { publicNavbarTypes, trendingDataType } from 'lib/types'

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

const trendingData: trendingDataType[] = [
  {
    id: 1,
    img: '/images/1.jpg',
    title: 'Become a unicorn'
  },
  {
    id: 2,
    img: '/images/2.jpg',
    title: 'Userflow Brainstorming'
  },
  {
    id: 3,
    img: '/images/3.jpg',
    title: 'Client Meeting'
  },
  {
    id: 4,
    img: '/images/4.jpg',
    title: 'Play with you friennds'
  }
]

export { publicNavbar, trendingData }
