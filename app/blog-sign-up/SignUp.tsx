import React from 'react'
import Link from 'next/link'

interface SignInProps {
  type: 'ADMIN' | 'USER'
}

export const SignUp: React.FC<SignInProps> = ({ type }) => {
  return (
    <form className='form-content'>
      <div className='input-label-container'>
        <label className='label-style'>Email</label>
        <input type='email' className='reset-input input-style' />
      </div>
      <div className='input-label-container'>
        <label className='label-style'>Username</label>
        <input type='username' className='reset-input input-style' />
      </div>
      <div className='input-label-container'>
        <label className='label-style'>Password</label>
        <input type='password' className='reset-input input-style' />
      </div>

      <p className='form-policy'>
        By continuing, you are setting up a Mashup Garage blog account and agree
        to our{' '}
        <Link href='#' className='form-link'>
          User Agreement
        </Link>{' '}
        and{' '}
        <Link href='#' className='form-link'>
          Privacy Policy
        </Link>
      </p>

      <div className='btn-content'>
        <button type='submit' className='reset-button button-primary'>
          Sign up
        </button>
      </div>
    </form>
  )
}
