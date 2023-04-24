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

export type recentPostsDataKey = {
  [key: string]: number | string[] | string | object | undefined
}

export type recentPostsDataTypes = {
  id: number
  comments?: number
  username: string
  user_id: number
  tag: string[]
  title: string
  status: string
  created_date: string
  updated_date: string
}

export type UserType = {
  user: {
    id: number
    username: string
    email: string
    created_at: string
    updated_at: string
  }
  token: string
}

export type formatTypes = {
  className?: string
  options?: Array<string> | undefined
  value?: string
}

export type PostTypes = {
  title: string
  body: string
  tag: string[]
  username?: string
  updated_at?: string
  created_at?: string
  blog?: null
  user_id?: number
  id?: number
  status?: string
}

export interface editTypes extends PostTypes {
  body: string
}
