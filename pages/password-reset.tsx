import { ForgotPassword } from 'app/blog-forgot-password/ForgotPassword'
import { LoginLayout } from 'layouts'
import type { NextApplicationPage } from './_app'

const UserLogin: NextApplicationPage = () => (
  <LoginLayout title='Forgot Password'>
    <ForgotPassword />
  </LoginLayout>
)

export default UserLogin

UserLogin.requireAuth = false
UserLogin.authType = 'USER'
