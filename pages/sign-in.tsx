import { SignIn } from 'app/blog-sign-in/SignIn'
import { DefaultLayout } from 'layouts'
import { useRouter } from 'next/router'
import type { NextApplicationPage } from './_app'

const UserLogin: NextApplicationPage = () => (
  <DefaultLayout title='Login'>
    <SignIn type='USER' />
  </DefaultLayout>
)

export default UserLogin

UserLogin.requireAuth = false
UserLogin.authType = 'USER'
