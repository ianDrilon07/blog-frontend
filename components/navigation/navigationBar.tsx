import React, { KeyboardEvent } from 'react'
import { InputFiled, MG_LOGO } from 'components'
import { publicNavbarTypes, recentPostsDataTypes } from 'lib/types'
import { publicNavbar } from 'data'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

//context
import { usePosts } from 'context/SearchProvider'

const NavigationBar: React.FC<{
  navlink?: publicNavbarTypes[]
  data: recentPostsDataTypes[]
}> = ({ navlink = publicNavbar, data }) => {
  const { watch, register } = useForm()
  const { handleSearch } = usePosts()
  const search = watch('search')

  const searchPosts = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch(search, data)
    }
  }

  return (
    <main className='navbar'>
      <nav className='nav-container'>
        <div className='nav-content'>
          <Link href='/' className='nav-logo' aria-label='navbar-logo'>
            <MG_LOGO color='#17181c' style='img-logo-navbar' />
          </Link>

          <div className='nav-search'>
            <InputFiled
              type='text'
              placeholder='Search Post'
              style='search-input'
              isIcon={true}
              rest={{ ...register('search') }}
              onkeyPres={searchPosts}
            />
          </div>

          <div className='nav-link'>
            {navlink.map((el) => (
              <Link
                key={el.path}
                href={el.path}
                className={
                  el.path === '/sign-in'
                    ? 'btn-link'
                    : ' reset-button button-primary btn-signup btn-link'
                }
              >
                {el.path === '/sign-in' ? 'Login' : 'Sign Up'}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </main>
  )
}

export default NavigationBar
