import { SignIn } from 'app/blog-sign-in/SignIn'
import { LoginLayout } from 'layouts'
import type { NextApplicationPage } from './_app'

const UserLogin: NextApplicationPage = () => (
  <LoginLayout title='Login'>
    <SignIn type='USER' />
  </LoginLayout>
)

export default UserLogin

UserLogin.requireAuth = false
UserLogin.authType = 'USER'
