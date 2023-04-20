import React, { KeyboardEvent } from 'react'
import { publicNavbar } from 'data'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

//components
import { InputFiled, MG_LOGO } from 'components'

//lib
import { userCurrentUser } from 'lib'
import { publicNavbarTypes, recentPostsDataTypes } from 'lib/types'

//avatar
import Avatar from 'boring-avatars'

//icons
import { Plus, ChevronDown } from 'react-feather'

//context
import { usePosts } from 'context/SearchProvider'

const NavigationBar: React.FC<{
  navlink?: publicNavbarTypes[] | undefined
  data: recentPostsDataTypes[] | undefined
}> = ({ navlink = publicNavbar, data }) => {
  const user = userCurrentUser()

  const { watch, register } = useForm()
  const { handleSearch } = usePosts()
  const search = watch('search')

  const searchPosts = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      data && handleSearch(search, data)
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

          {user ? (
            <header className='navbar-admin-content'>
              <Link href='#' className='reset-button btn-add-blog'>
                <Plus />
              </Link>
              <div className='vertical-divider' />
              <div className='navbar-avatar'>
                <Avatar
                  size={40}
                  name={user.username}
                  variant='beam'
                  colors={['#EF746F']}
                />
                <h3 className='navbar-name'>{user.username}</h3>
                <ChevronDown size='24' className='svg' />
              </div>
            </header>
          ) : (
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
          )}
        </div>
      </nav>
    </main>
  )
}

export default NavigationBar
