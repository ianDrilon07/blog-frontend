import Cookies from 'js-cookie'

export const getAuthorizationHeader = () => {
  const currentUser = Cookies.get('currentUser')

  return {
    Authorization:
      currentUser && `Bearer ${JSON.parse(currentUser || '')?.token || ''}`
  }
}
