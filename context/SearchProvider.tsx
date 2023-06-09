import React, { createContext, useReducer, useContext } from 'react'
import { recentPostsDataTypes } from 'lib/types'

// Define the shape of the state
interface State {
  searchQuery: string
  posts: recentPostsDataTypes[]
  filteredTags?: recentPostsDataTypes[] | undefined
}

interface PostsContextType {
  state: State
  dispatch: React.Dispatch<Action>
  handleSearch: (query: string, posts: recentPostsDataTypes[]) => void
  handleTags: (tags: string, posts: recentPostsDataTypes[]) => void
}

// Define the available actions
type Action =
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_POSTS'; payload: recentPostsDataTypes[] }
  | { type: 'SET_TAGS'; payload: recentPostsDataTypes[] }

// Define the initial state
const initialState: State = {
  searchQuery: '',
  posts: [],
  filteredTags: []
}

// Define the reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'SET_POSTS':
      return { ...state, posts: action.payload }
    case 'SET_TAGS':
      return { ...state, filteredTags: action.payload }
    default:
      throw new Error()
  }
}

// Create the context
export const PostsContext = createContext({} as PostsContextType)

// Create the provider component
export const PostsProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Define the search function
  const handleSearch = (query: string, posts: recentPostsDataTypes[]) => {
    if (query.trim() === '') {
      dispatch({ type: 'SET_POSTS', payload: posts })
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query })
    } else {
      const filteredPosts = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query?.toLowerCase()) ||
          post.username.toLowerCase().includes(query?.toLowerCase())
      )

      dispatch({ type: 'SET_POSTS', payload: filteredPosts })
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query })
    }
  }

  const handleTags = (tags: string, posts: recentPostsDataTypes[]) => {
    if (tags.trim() === '') {
      dispatch({ type: 'SET_POSTS', payload: posts })
      dispatch({ type: 'SET_SEARCH_QUERY', payload: tags })
    } else {
      const filteredPosts = state.posts.filter((post) =>
        post.tag.includes(tags?.toLowerCase())
      )

      dispatch({ type: 'SET_TAGS', payload: filteredPosts })
      dispatch({ type: 'SET_SEARCH_QUERY', payload: tags })
    }
  }

  return (
    <PostsContext.Provider
      value={{ state, dispatch, handleSearch, handleTags }}
    >
      {children}
    </PostsContext.Provider>
  )
}

// Create a hook to access the context
export const usePosts = () => useContext<PostsContextType>(PostsContext)
