import {
  publicNavbarTypes,
  trendingDataType,
  recentPostsDataTypes
} from 'lib/types'

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

const recentPostsData: recentPostsDataTypes[] = [
  {
    id: 1,
    votes: 100,
    comments: 100,
    author: 'Kirby Borromeo',
    tags: ['@reactjs', '@rails'],
    title: 'First UI/UX Session in MG Bootcamp 2023',
    image: '/images/ruby-vs-rails-banner.jpg',
    created_date: '2023-04-19T02:58:36.435Z'
  },
  {
    id: 2,
    votes: 100,
    comments: 100,
    author: 'Ian Drilon',
    tags: ['@reactjs', '@ruby'],
    title: 'hello First UI/UX Session in MG Bootcamp 2023',
    image: '/images/react.jpg',
    created_date: '2023-04-19T02:58:36.435Z'
  }
]

export { publicNavbar, trendingData, recentPostsData }
