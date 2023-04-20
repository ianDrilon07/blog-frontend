import { useState, useEffect } from 'react'
import { UserType } from 'lib/types'
import Cookies from 'js-cookie'

const userCurrentUser = () => {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const currentUser = Cookies.get('currentUser')

    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  return user
}

export { userCurrentUser }
