import { InputFiled } from 'components'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface passwordResetTypes {
  email: string
}

export const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<passwordResetTypes>()

  const onSubmit = (data: passwordResetTypes) => {
    console.log(data)
  }

  return (
    <main>
      <p>
        Enter the email address you used when you joined and we'll send you
        instructions to reset password.
      </p>
      <p>
        For security reasons. we do NOT store your password. So rest assured
        that we will never send your password via email.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='form-content'>
        <div className='input-label-container'>
          <InputFiled
            label='Email'
            type='text'
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

        <div className='btn-content'>
          <button
            type='submit'
            className='reset-button btn-primary-default btn-xl'
          >
            Send Reset Instructions
          </button>

          <div className='form-forgot-password'>
            <Link href='#' className='forgot-password-link'>
              Didn't receive confirmation instructions?
            </Link>
          </div>
        </div>
      </form>
    </main>
  )
}
