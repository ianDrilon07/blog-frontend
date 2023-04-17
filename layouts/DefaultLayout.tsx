import React from 'react'

interface LayoutType {
  children: React.ReactNode
  title: string
}

export const DefaultLayout: React.FC<LayoutType> = ({
  children,
  title
}): JSX.Element => {
  return (
    <main className='login-container'>
      <div className='public-layout-content'>
        <div className='left-side'>
          <img className='img-logo' src='/MG_LOGO.svg' />
        </div>
        <div className='right-side'>
          <div className='right-side-content'>
            <h1 className='form-title'>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DefaultLayout
