import React from 'react'
import { NavigationBar } from 'components'

interface LayoutType {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<LayoutType> = ({
  children
}): JSX.Element => {
  return (
    <main>
      <NavigationBar />

      <div className='home-container'>{children}</div>
    </main>
  )
}

export default DefaultLayout
