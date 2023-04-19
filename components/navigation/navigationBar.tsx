import React from 'react'
import { InputFiled } from 'components'
import { MG_LOGO } from 'components'
import { publicNavbarTypes } from 'lib/types'
import { publicNavbar } from 'data'
import Link from 'next/link'

const NavigationBar: React.FC<{ navlink?: publicNavbarTypes[] }> = ({
  navlink = publicNavbar
}) => {
  return (
    <main className='navbar'>
      <nav className='nav-container'>
        <div className='nav-content'>
          <Link href='/' className='nav-logo'>
            <MG_LOGO color='#17181c' style='img-logo-navbar' />
          </Link>

          <div className='nav-search'>
            <InputFiled
              type='text'
              placeholder='Search Post'
              style='search-input'
              isIcon={true}
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
