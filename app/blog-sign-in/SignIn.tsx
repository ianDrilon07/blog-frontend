import React from 'react'
import Link from 'next/link'

interface SignInProps {
  type: 'ADMIN' | 'USER'
}

export const SignIn: React.FC<SignInProps> = ({ type }) => {
  return (
    <form className='form-content'>
      <div className='input-label-container'>
        <label className='label-style'>Username</label>
        <input type='text' className='reset-input input-style' />
      </div>
      <div className='input-label-container'>
        <label className='label-style'>Password</label>
        <input type='text' className='reset-input input-style' />
      </div>

      <Link href='#' className='form-link'>
        Forgot your password?
      </Link>

      <div className='btn-content'>
        <button type='submit' className='reset-button button-primary'>
          Login
        </button>
      </div>
    </form>
  )
}
