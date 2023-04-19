import { SignUp } from 'app/blog-sign-up/SignUp'
import { LoginLayout } from 'layouts'
import type { NextApplicationPage } from './_app'

const UserLogin: NextApplicationPage = () => (
  <LoginLayout title='Sign up'>
    <SignUp />
  </LoginLayout>
)

export default UserLogin

UserLogin.requireAuth = false
UserLogin.authType = 'USER'
