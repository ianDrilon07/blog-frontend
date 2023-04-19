import { useForm } from 'react-hook-form'
import { InputFiled } from 'components'
import { useAccount } from 'lib'
import Link from 'next/link'

interface signUpTypes {
  username: string
  email: string
  password: string
}

export const SignUp = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<signUpTypes>()

  const { validateStrongPassword } = useAccount()

  const onSubmit = (data: signUpTypes) => {
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
          label='Email'
          type='email'
          errorMessage={errors?.email?.message}
          rest={{
            ...register('email', {
              required: 'email is required',
              maxLength: {
                message: 'Your name must be between 1 to 50 characters long',
                value: 50
              },
              pattern: {
                value: /^[\w-.+]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Your email is incorrect. Please try again.'
              }
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
              required: 'Password is required',
              maxLength: {
                message: 'Your name must be between 1 to 50 characters long',
                value: 50
              },
              validate: (value) => validateStrongPassword(value)
            })
          }}
        />
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
