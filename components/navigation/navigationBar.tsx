import React, { KeyboardEvent, useState } from 'react'
import { User, LogOut } from 'react-feather'
import { publicNavbar } from 'data'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

//components
import { InputFiled, MG_LOGO, Dropdown } from 'components'

//lib
import { userCurrentUser, useAccount } from 'lib'
import { publicNavbarTypes, recentPostsDataTypes } from 'lib/types'

//avatar
import Avatar from 'boring-avatars'

//icons
import { Plus, ChevronDown, ChevronUp } from 'react-feather'

//context
import { usePosts } from 'context/SearchProvider'

const NavigationBar: React.FC<{
  navlink?: publicNavbarTypes[] | undefined
  data: recentPostsDataTypes[] | undefined
}> = ({ navlink = publicNavbar, data }) => {
  const [toggle, isToggle] = useState<boolean>(false)
  const userData = userCurrentUser()
  const { logout } = useAccount()

  const { watch, register } = useForm()
  const { handleSearch } = usePosts()
  const search = watch('search')

  const toggleDropdown = (): void => {
    isToggle((prevState) => !prevState)
  }

  const searchPosts = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      data && handleSearch(search, data)
    }
  }

  const menuItems = [
    {
      icon: <User size='20' />,
      title: 'My Profile',
      action: () => {
        alert('working')
      }
    },
    {
      icon: <LogOut size='20' />,
      title: 'Logout',
      action: () => logout()
    }
  ]

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

          {userData ? (
            <header className='navbar-admin-content'>
              <Link href='/createPost' className='reset-button btn-add-blog'>
                <Plus size='20' />
              </Link>
              <div className='vertical-divider' />
              <div className='navbar-avatar' onClick={() => toggleDropdown()}>
                <Avatar
                  size={35}
                  name={userData.user.username}
                  variant='beam'
                  colors={['#EF746F']}
                />
                <h4 className='navbar-name'>{userData.user.username}</h4>
                {toggle ? (
                  <ChevronUp size='24' className='svg' />
                ) : (
                  <ChevronDown size='24' className='svg' />
                )}
                <Dropdown isOpen={toggle} menuItems={menuItems} />
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
                      : ' reset-button btn-primary-default btn-signup btn-link'
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
