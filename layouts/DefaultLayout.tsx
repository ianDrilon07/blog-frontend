import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { publicNavbar } from 'data'

interface LayoutType {
  children: React.ReactNode
  title: string
}

export const DefaultLayout: React.FC<LayoutType> = ({
  children,
  title
}): JSX.Element => {
  const router = useRouter()

  const currentRoute = publicNavbar.filter((el) => el.path !== router.asPath)

  return (
    <main className='login-container'>
      <div className='public-layout-content'>
        <header className='layout-header'>
          <nav className='layout-navbar'>
            <img className='img-logo-navbar' src='/MG_BLOGS_LOGO.svg' />
            <span className='layout-text' key={currentRoute[0].redirectPage}>
              {currentRoute[0].text}{' '}
              <Link href={currentRoute[0].path} className='form-link'>
                {currentRoute[0].redirectPage}
              </Link>
            </span>
          </nav>
        </header>

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
