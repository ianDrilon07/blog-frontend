import React from 'react'
import { NavigationBar } from 'components'
import { recentPostsDataTypes } from 'lib/types'
import { userCurrentUser } from 'lib'

interface LayoutType {
  children: React.ReactNode
  data?: recentPostsDataTypes[]
}

export const DefaultLayout: React.FC<LayoutType> = ({
  children,
  data
}): JSX.Element => {
  const currentUser = userCurrentUser()

  console.log(currentUser)

  return (
    <main>
      <NavigationBar data={data} />

      <div className='home-container'>{children}</div>
    </main>
  )
}

export default DefaultLayout
