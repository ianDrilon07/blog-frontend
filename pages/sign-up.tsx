import { SignUp } from 'app/blog-sign-up/SignUp'
import { DefaultLayout } from 'layouts'
import type { NextApplicationPage } from './_app'

const UserLogin: NextApplicationPage = () => (
  <DefaultLayout title='Sign up'>
    <SignUp type='USER' />
  </DefaultLayout>
)

export default UserLogin

UserLogin.requireAuth = false
UserLogin.authType = 'USER'
