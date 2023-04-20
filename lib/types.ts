export type publicNavbarTypes = {
  id: number
  redirectPage: string
  text: string
  path: string
}

export type trendingDataType = {
  id: number
  img: string
  title: string
}

export type recentPostsDataTypes = {
  id: number
  votes: number
  comments: number
  author: string
  tags: Array<string>
  title: string
  image: string
  created_date: string
}

export type UserType = {
  id: number
  username: string
  email: string
  created_at: string
  updated_at: string
  token: string
}
