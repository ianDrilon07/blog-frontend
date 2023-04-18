import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { InputFiled } from 'components'

interface SignInProps {
  type: 'ADMIN' | 'USER'
}

interface SignInFormTypes {
  username: string
  password: string
}

export const SignIn: React.FC<SignInProps> = ({ type }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignInFormTypes>()

  const onSubmit = async (data: SignInFormTypes) => {
    console.log(data)
  }

  return (
    <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
      <div className='input-label-container'>
        <InputFiled
          label='Username'
          type='text'
          errorMessage={errors?.username?.message}
          rest={{
            ...register('username', {
              required: 'Username is required'
            })
          }}
        />
      </div>
      <div className='input-label-container'>
        <InputFiled
          label='Password'
          type='password'
          errorMessage={errors?.password?.message}
          rest={{
            ...register('password', {
              required: 'Password is required'
            })
          }}
        />
      </div>

      <Link href='#' className='form-forgot-link'>
        Forgot your password?
      </Link>

      <div className='btn-content'>
        <button
          type='submit'
          name='submit'
          className='reset-button button-primary'
        >
          Login
        </button>
      </div>
    </form>
  )
}
